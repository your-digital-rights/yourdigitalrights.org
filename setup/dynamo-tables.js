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
    TableName: 'YDRRequests',
    KeySchema: [       
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'requestType', AttributeType: 'S' },
      { AttributeName: 'regulationType', AttributeType: 'S' },
      { AttributeName: 'companyName', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'RequestTypeIndex',
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
        IndexName: 'RegulationTypeIndex',
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
        IndexName: 'CompanyNameIndex',
        KeySchema: [
          {
            AttributeName: 'companyName',
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
    TableName: 'YDRFollowUps',
    KeySchema: [       
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
      { AttributeName: 'regulationType', AttributeType: 'S' },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'RegulationTypeIndex',
        KeySchema: [
          {
            AttributeName: 'regulationType',
            KeyType: 'HASH',
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
