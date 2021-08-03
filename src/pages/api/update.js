import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const dynamodb = new aws.DynamoDB();

/**
 * Update the follow up table with a status set by the user.
 *
 * The API takes in the following:
 *
 * @param {string} req.body.uuid of the request
 * @param {string} req.body.status either "SUCCESS", "PARTIAL", "DECLINED", "NO_REPLY"
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.uuid || !req.body.status) {
      res.statusCode = 400;
      res.send({
        error: 'Missing uuid or status',
      });
      resolve();
      return; 
    }

    if (["SUCCESS", "PARTIAL", "DECLINED", "NO_REPLY"].indexOf(req.body.status) === -1) {
      res.statusCode = 400;
      res.send({
        error: 'Status should be "SUCCESS", "PARTIAL", "DECLINED", or "NO_REPLY"',
      });
      resolve();
      return;
    }

    dynamodb.updateItem({
      ExpressionAttributeNames: {
        "#S": "status",
      },
      ExpressionAttributeValues: {
        ":s": {
          S: req.body.status,
        },
      },
      Key: {
        "id": {
          S: req.body.uuid,
        },
      },
      ReturnValues: "ALL_NEW",
      TableName: 'YDRFollowUps',
      UpdateExpression: "SET #S = :s",
    }, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.send({
          error: 'Could not update status.',
        });
      } else {
        res.statusCode = 200;
        res.send({
          success: 'Saved status.',
        });
      }
      resolve();
    });
  });
};
