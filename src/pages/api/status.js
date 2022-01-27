import aws from "aws-sdk";
import { resolveHref } from "next/dist/shared/lib/router/router";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

/**
 * Update the follow up table with a status set by the user.
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
    ExpressionAttributeNames: {
      "#S": "status",
    },
    ExpressionAttributeValues: {
      ":s": {
        S: status,
      },
    },
    Key: {
      "id": {
        S: uuid,
      },
    },
    ReturnValues: "ALL_NEW",
    TableName: 'YDRFollowups',
    UpdateExpression: "SET #S = :s",
  }, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.send({
        error: 'Could not update status.',
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
    resolve();
    return;
  });
});
};
