import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

function batchDeleteRequests(ids, res) {
  const itemsToDelete = {
    RequestItems: {
      YDRFollowups: [],
    },
  };

  function batchDelete(itemsToDelete){
    dynamodb.batchWriteItem(itemsToDelete, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.send({
          error: 'Could not delete data: ' + err,
        });
      } else {
        res.statusCode = 200;
        res.send({
          success: 'Data deleted.',
        });
      }
    });
  }

  let count = 0;
  ids.forEach(function(id) {
    itemsToDelete.RequestItems.YDRFollowups.push({
      DeleteRequest: {
        Key: {
          id: { S: id },
        },
      },
    });
    if (++count == 25) { // batchWriteItem has a limit of 25 items
      batchDelete(itemsToDelete);
      itemsToDelete.RequestItems.YDRFollowups = [];
      count = 0;
    }
  });
  if (count > 0) { 
    batchDelete(itemsToDelete);
    itemsToDelete.RequestItems.YDRFollowups = [];
    count = 0;
  }
};

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
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (
      !req.body.uuid ||
      !req.body.type 
    ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid or an type',
      });
      resolve();
      return;
    }

    const params = {
      Key: {
        "id": {"S": req.body.uuid}
      }, 
      TableName: "YDRFollowups",
    };                

    dynamodb.getItem(params, (err, data) => {
      try {
        if (err) { // erorr while looking for request
          res.statusCode = 500;
          res.send({
            error: 'Error while looking for request: ' + err,
          });
        } else if (!data.Item) { // could not find request
          res.statusCode = 404;
          res.send({
            error: 'Could not find request: ' + req.body.uuid,
          });
        } else { // request found
          if (req.body.type == 'request') {  // delete individual request
            batchDeleteRequests([req.body.uuid], res);
          } else if (req.body.type == 'all') {  // delete all the user's data
            const params = {
              ExpressionAttributeValues: {
                ':e' : {S: data.Item.requestEmailFrom.S},
              },
              KeyConditionExpression: 'requestEmailFrom = :e',
              ProjectionExpression: 'id',
              TableName: 'YDRFollowups',
              IndexName: "UserEmailAddressIndex",
            };
            
            // get all the user's requests by email
            dynamodb.query(params, (err, data) => { 
              if (err) {
                res.statusCode = 500;
                res.send({
                  error: 'Could not get requests by email: ' + error,
                });
              } else { // success 
                let ids = [];
                data.Items.forEach(function(request) {
                  ids.push(request.id.S);
                });
                batchDeleteRequests(ids, res);
              }
            });  
          } else { // invalid delete type
            res.statusCode = 400;
            res.send({
              error: 'Invalid type: ' + req.body.type,
            });
            resolve();
            return;
          }
        }
      } catch (err) { // exceptions
        res.statusCode = 500;
        res.send({
          error: 'Error while processing deletion request: ' + err,
        });
      }
    });  
  });
}
