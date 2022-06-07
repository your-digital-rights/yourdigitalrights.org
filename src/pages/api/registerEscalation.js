import aws from "aws-sdk";
import { DateTime } from "luxon";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

/**
 * Update the follow up and requests tables with a form based escalation request.
 *
 * The API takes in the following:
 *
 * @param {string} uuid of the request
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.uuid ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing uuid',
      });
      return;
    }

    dynamodb.updateItem({
      TableName: 'YDRFollowups',    
      Key: {
        "id": {
          S: req.body.uuid,
        },
      },
      UpdateExpression: "SET escalationFormSubmitedAt = :d",
      ExpressionAttributeValues: {
        ":d": {
          S: DateTime.now().toUTC().toISO(),
        },
      },
    }, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.send({
          error: 'Could not update escalation in YDRFollowups: ' + err,
        });
      } else {  
        dynamodb.updateItem({
          TableName: 'YDRRequests',    
          Key: {
            "id": {
              S: req.body.uuid,
            },
          },
          UpdateExpression: "SET escalationDate = :d",
          ExpressionAttributeValues: {
            ":d": {
              S: DateTime.now().toUTC().toISO(),
            },
          },
        }, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.send({
              error: 'Could not update escalation in YDRRequests: ' + err,
            });
          } else { 
            res.statusCode = 200;
            res.send({
              success: 'Saved escalation.',
            });
          }
        });
      }
      resolve();
      return;
    });
  });
};
