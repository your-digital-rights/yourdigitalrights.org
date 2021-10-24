import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

/**
 * Update the follow up table with the date the reminder was sent.
 *
 * The API takes in the following:
 *
 * @param {string} req.body.uuid of the request
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.uuid) {
      res.statusCode = 400;
      res.send({
        error: 'Missing uuid',
      });
      resolve();
      return; 
    }

    dynamodb.updateItem({
      ExpressionAttributeNames: {
        "#R": "reminderCreatedAt",
      },
      ExpressionAttributeValues: {
        ":r": {
          S: new Date().toISOString(),
        },
      },
      Key: {
        "id": {
          S: req.body.uuid,
        },
      },
      ConditionExpression: "attribute_not_exists(#R)",
      ReturnValues: "ALL_NEW",
      TableName: 'YDRFollowups',
      UpdateExpression: "SET #R = :r",
    }, (err, data) => {
      if (err) {
        console.log('err', err)
        res.statusCode = 500;
        res.send({
          error: 'Could not add reminder time.',
        });
      } else {
        res.statusCode = 200;
        res.send({
          success: 'Saved reminder time.',
        });
      }
      resolve();
    });
  });
};
