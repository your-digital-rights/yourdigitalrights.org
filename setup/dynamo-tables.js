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
    ],
    AttributeDefinitions: [
      { AttributeName: 'uuid', AttributeType: 'S' },
      { AttributeName: 'requestCreatedAt', AttributeType: 'S' },
      { AttributeName: 'requestType', AttributeType: 'S' },
      { AttributeName: 'regulationType', AttributeType: 'S' },
      { AttributeName: 'orgName', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'request_created_at_index',
        KeySchema: [
          {
            AttributeName: 'regulationType',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'requestCreatedAt',
            KeyType: 'RANGE',
          }
        ],
        Projection: {
          ProjectionType: 'ALL'
        },
      },
      {
        IndexName: 'request_type_index',
        KeySchema: [
          {
            AttributeName: 'requestType',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL'
        },
      },
      {
        IndexName: 'regulation_type_index',
        KeySchema: [
          {
            AttributeName: 'regulationType',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL'
        },
      },
      {
        IndexName: 'org_name_index',
        KeySchema: [
          {
            AttributeName: 'orgName',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL'
        },
      },
    ],
  },
  {
    TableName: 'FollowUps',
    KeySchema: [       
      { AttributeName: 'uuid', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'uuid', AttributeType: 'S' },
      { AttributeName: 'emailReceivedAt', AttributeType: 'S' },
      { AttributeName: 'regulationType', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'email_received_at_index',
        KeySchema: [
          {
            AttributeName: 'regulationType',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'emailReceivedAt',
            KeyType: 'RANGE',
          }
        ],
        Projection: {
          ProjectionType: 'ALL'
        },
      }
    ],
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
