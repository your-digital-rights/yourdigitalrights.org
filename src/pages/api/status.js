import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { DateTime } from "luxon";

const client = new DynamoDBClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const dynamodb = DynamoDBDocumentClient.from(client);

/**
 * Update the follow up and requests tables with a status set by the user.
 *
 * The API takes in the following:
 *
 * @param {string} uuid of the request
 * @param {string} status either "SUCCESS", "PARTIAL", "DECLINED", "NO_REPLY"
 * @param {string} url an optional url to redirect to
 */
export default async (req, res) => {
  try {
    const { status, uuid, url } = req.query;

    res.setHeader('Content-Type', 'application/json');
    if (!uuid || !status) {
      res.statusCode = 400;
      res.send({
        error: 'Missing uuid or status',
      });
      return;
    }

    if (["SUCCESS", "PARTIAL", "DECLINED", "NO_REPLY"].indexOf(status) === -1) {
      res.statusCode = 400;
      res.send();
      return;
    }

    try {
      await dynamodb.send(new UpdateCommand({
        TableName: 'YDRFollowups',    
        Key: {
          id: uuid,
        },
        UpdateExpression: "SET #S = :s",
        ConditionExpression: 'attribute_exists(id)',
        ExpressionAttributeNames: {
          "#S": "status",
        },
        ExpressionAttributeValues: {
          ":s": status,
        },
        ReturnValues: "ALL_NEW",
      }));

      await dynamodb.send(new UpdateCommand({
        TableName: 'YDRRequests',    
        Key: {
          id: uuid,
        },
        UpdateExpression: "SET statusHistory = list_append(if_not_exists(statusHistory, :empty_list), :s), currentStatus = :cs",
        ExpressionAttributeValues: {
          ":s": [{
            Date: DateTime.now().toUTC().toISO(),
            Status: status
          }],
          ":empty_list": [],
          ":cs": status,
        },
        ReturnValues: "ALL_NEW",
      }));

      if (url) {
        res.redirect(302, `/r/${uuid}`);
      } else {
        res.statusCode = 200;
        res.send({
          success: 'Saved status.',
        });
      }
    } catch (err) {
      if (err.name === 'ConditionalCheckFailedException') {
        res.redirect(301, `/r/${uuid}`);
      } else {
        res.statusCode = 500;
        res.send({
          error: 'Could not update status: ' + err,
        });
      }
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({
      error: 'Internal server error: ' + err,
    });
  }
};
