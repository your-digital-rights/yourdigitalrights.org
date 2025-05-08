import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, QueryCommand, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const dynamodb = DynamoDBDocumentClient.from(client);

async function batchDeleteRequests(ids, res) {
  const itemsToDelete = {
    RequestItems: {
      YDRFollowups: [],
    },
  };

  async function batchDelete(itemsToDelete) {
    try {
      await dynamodb.send(new BatchWriteCommand(itemsToDelete));
      res.statusCode = 200;
      res.send({
        success: 'Data deleted.',
      });
    } catch (err) {
      res.statusCode = 500;
      res.send({
        error: 'Could not delete data: ' + err,
      });
    }
  }

  let count = 0;
  for (const id of ids) {
    itemsToDelete.RequestItems.YDRFollowups.push({
      DeleteRequest: {
        Key: {
          id: id,
        },
      },
    });
    if (++count === 25) { // batchWriteItem has a limit of 25 items
      await batchDelete(itemsToDelete);
      itemsToDelete.RequestItems.YDRFollowups = [];
      count = 0;
    }
  }
  if (count > 0) {
    await batchDelete(itemsToDelete);
  }
}

/**
 * Call this API endpoint to delete a user's data. There are currently two
 * options for this. One is to delete all the data associated with a specific request. 
 * The other is to delete the data associated with a all of the user's reqeusts.
 *
 * The API takes in the following:
 *
 * @param {string} req.body.uuid of the request
 * @param {string} req.body.type of deletion (either "request" or "all")
 */
export default async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.uuid || !req.body.type) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid or an type',
      });
      return;
    }

    const params = {
      Key: {
        id: req.body.uuid
      },
      TableName: "YDRFollowups",
    };

    try {
      const data = await dynamodb.send(new GetCommand(params));

      if (!data.Item) {
        res.statusCode = 404;
        res.send({
          error: 'Could not find request: ' + req.body.uuid,
        });
        return;
      }

      if (req.body.type === 'request') {
        await batchDeleteRequests([req.body.uuid], res);
      } else if (req.body.type === 'all') {
        const queryParams = {
          ExpressionAttributeValues: {
            ':e': data.Item.requestEmailFrom,
          },
          KeyConditionExpression: 'requestEmailFrom = :e',
          ProjectionExpression: 'id',
          TableName: 'YDRFollowups',
          IndexName: "UserEmailAddressIndex",
        };

        const queryResult = await dynamodb.send(new QueryCommand(queryParams));
        const ids = queryResult.Items.map(request => request.id);
        await batchDeleteRequests(ids, res);
      } else {
        res.statusCode = 400;
        res.send({
          error: 'Invalid type: ' + req.body.type,
        });
      }
    } catch (err) {
      res.statusCode = 500;
      res.send({
        error: 'Error while processing deletion request: ' + err,
      });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({
      error: 'Internal server error: ' + err,
    });
  }
};
