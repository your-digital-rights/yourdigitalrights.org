import aws from "aws-sdk";
import { DateTime } from "luxon";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

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
  return new Promise((resolve, reject) => {
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

    dynamodb.updateItem({
      TableName: 'YDRFollowups',    
      Key: {
        "id": {
          S: uuid,
        },
      },
      UpdateExpression: "SET #S = :s",
      ConditionExpression: 'attribute_exists(id)',
      ExpressionAttributeNames: {
        "#S": "status",
      },
      ExpressionAttributeValues: {
        ":s": {
          S: status,
        },
      },
      ReturnValues: "ALL_NEW",
    }, (err, data) => {
      if (err) {
        if (err.code === 'ConditionalCheckFailedException') {
          res.redirect(301, `/r/${uuid}`);
        } else {
          res.statusCode = 500;
          res.send({
            error: 'Could not update status in YDRFollowups: ' + err,
          });
        }
      } else {  
        dynamodb.updateItem({
          TableName: 'YDRRequests',    
          Key: {
            "id": {
              S: uuid,
            },
          },
          UpdateExpression: "SET statusHistory = list_append(if_not_exists(statusHistory, :empty_list), :s), currentStatus = :cs",
          ExpressionAttributeValues: {
            ":s":{L: [{
              M: { 
                "Date": {
                  S: DateTime.now().toUTC().toISO(),
                },
                "Status": {
                  S: status,
                }
              }  
            }]},
            ":empty_list": {L: [] },
            ":cs": {S: status},
          },
          ReturnValues: "ALL_NEW",
        }, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.send({
              error: 'Could not update status in YDRRequests: ' + err,
            });
          } else { 
            if (url) {
              res.redirect(302, `/r/${uuid}`);
            } else {
              res.statusCode = 200;
              res.send({
                success: 'Saved status.',
              });
            }
          }
        });
      }
      resolve();
      return;
    });
  });
};
