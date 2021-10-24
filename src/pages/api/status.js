import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

export default async (req, res) => {
  const { status, uuid } = req.query;

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
      res.send();
    } else {
      res.redirect(302, `/r/${uuid}`);
    }
    return;
  });
};
