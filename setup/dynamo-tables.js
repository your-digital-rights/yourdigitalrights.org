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
    TableName: 'Requests',
    KeySchema: [       
      { AttributeName: 'uuid', KeyType: 'HASH' },
      { AttributeName: 'request_created_at', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'uuid', AttributeType: 'S' },
      { AttributeName: 'request_created_at', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
  },
  {
    TableName: 'FollowUps',
    KeySchema: [       
      { AttributeName: 'uuid', KeyType: 'HASH' },
      { AttributeName: 'email_received_at', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'uuid', AttributeType: 'S' },
      { AttributeName: 'email_received_at', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
  },
];

tables.forEach((table) => {
  dynamodb.createTable(table, (err, data) => {
    console.log('Creating Table:', table.TableName);
    if (err) {
      if (err.code === 'ResourceInUseException') {
        console.log('Table already exists.');
      } else {
        console.error('Unable to create table.');
        console.error(JSON.stringify(err, null, 2));
        throw err;
      }
    } else {
      console.log('Created table.');
      console.log(JSON.stringify(data, null, 2));
    }
  });
});
