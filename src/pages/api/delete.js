import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

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
    
    const itemsToDelete = {
      RequestItems: {
        YDRFollowups: [],
      },
    };

    const params = {
      Key: {
        "id": {"S": req.body.uuid}
      }, 
      TableName: "YDRFollowups",
    };                

    dynamodb.getItem(params, (err, data) => {
      try {
        if (err) {

          res.statusCode = 500;
          res.send({
            error: 'Error while looking for request: ' + err,
          });

        } else if (!data.Item) {
    
          res.statusCode = 404;
          res.send({
            error: 'Could not find request: ' + req.body.uuid,
          });
    
        } else {

          if (req.body.type == 'request') {  // delete individual request

            itemsToDelete.RequestItems.YDRFollowups.push({
              DeleteRequest: {
                Key: {
                  id: { S: req.body.uuid },
                },
              },
            });

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
            
          } else if (req.body.type == 'all') {  // delete all the user's data
      
            // get all the user's requests by email
            const params = {
              ExpressionAttributeValues: {
                ':e' : {S: data.Item.requestEmailFrom.S},
              },
              KeyConditionExpression: 'requestEmailFrom = :e',
              ProjectionExpression: 'id',
              TableName: 'YDRFollowups',
              IndexName: "UserEmailAddressIndex",
            };
            
            dynamodb.query(params, (err, data) => {
              if (err) {

                res.statusCode = 500;
                res.send({
                  error: 'Could not get requests by email: ' + error,
                });

              } else {

                data.Items.forEach(function(request) {
                  itemsToDelete.RequestItems.YDRFollowups.push({
                    DeleteRequest: {
                      Key: {
                        id: { S: request.id.S },
                      },
                    },
                  });
                });
                
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
            });  

          } else {

            res.statusCode = 400;
            res.send({
              error: 'Invalid type: ' + req.body.type,
            });
            resolve();
            return;

          }
        }
      } catch (err) {

        res.statusCode = 500;
        res.send({
          error: 'Error while processing deletion request: ' + err,
        });

      }
    });  
  });
}
