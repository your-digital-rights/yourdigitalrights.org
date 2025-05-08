import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { DateTime } from "luxon";

const client = new DynamoDBClient({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const dynamodb = DynamoDBDocumentClient.from(client);

/**
 * Get request statistics report.
 */
export default async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'public, stale-while-revalidate=600,  stale-if-error=600, max-age=86400, s-maxage=86400');  

    const alltime_bucket = 'alltime';
    const date = DateTime.now()
    const year_bucket = date.toFormat('yyyy'); 
    const month_bucket = year_bucket + "-" + date.toFormat('MMMM').toLowerCase(); 
    const week_bucket = year_bucket + "-" + date.toFormat('WW');
    const requestTableName = 'YDRRequests';
    const previousYearsRequests = 40545;

    try {
      const [alltime, year, month, week, describe] = await Promise.all([
        dynamodb.send(new QueryCommand({
          TableName: "YDRAggregateRequests",
          IndexName: "TopOrganizationsIndex",
          KeyConditionExpression: '#k = :a',
          ExpressionAttributeValues: {
            ":a": alltime_bucket
          },
          ExpressionAttributeNames: {
            "#k": "key"
          },
          Limit: 10,
          ScanIndexForward: false
        })),
        dynamodb.send(new QueryCommand({
          TableName: "YDRAggregateRequests",
          IndexName: "TopOrganizationsIndex",
          KeyConditionExpression: '#k = :a',
          ExpressionAttributeValues: {
            ":a": year_bucket
          },
          ExpressionAttributeNames: {
            "#k": "key"
          },
          Limit: 10,
          ScanIndexForward: false
        })),
        dynamodb.send(new QueryCommand({
          TableName: "YDRAggregateRequests",
          IndexName: "TopOrganizationsIndex",
          KeyConditionExpression: '#k = :a',
          ExpressionAttributeValues: {
            ":a": month_bucket
          },
          ExpressionAttributeNames: {
            "#k": "key"
          },
          Limit: 10,
          ScanIndexForward: false
        })),
        dynamodb.send(new QueryCommand({
          TableName: "YDRAggregateRequests",
          IndexName: "TopOrganizationsIndex",
          KeyConditionExpression: '#k = :a',
          ExpressionAttributeValues: {
            ":a": week_bucket
          },
          ExpressionAttributeNames: {
            "#k": "key"
          },
          Limit: 10,
          ScanIndexForward: false
        })),
        dynamodb.send(new DescribeTableCommand({
          TableName: requestTableName
        }))
      ]);

      res.statusCode = 200;
      res.send({
        "License": "GNU General Public License v3.0", 
        "alltime": alltime.Items,
        "year": year.Items,
        "month": month.Items,
        "week": week.Items,
        "total": previousYearsRequests + describe.Table.ItemCount,
      });
    } catch (err) {
      res.statusCode = 500;
      res.send({
        error: 'Could not get statistics: ' + err,
      });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({
      error: 'Internal server error: ' + err,
    });
  }
};
