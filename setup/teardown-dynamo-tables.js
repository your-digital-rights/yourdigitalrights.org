const aws = require('aws-sdk');

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const dynamodb = new aws.DynamoDB();

const tables = [
  {
    TableName : "Requests"
  },
  {
    TableName : "FollowUps"
  },
];

tables.forEach((table) => {
  dynamodb.deleteTable(table, (err, data) => {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
    }
  });
});
