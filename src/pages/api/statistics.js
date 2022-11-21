import aws from "aws-sdk";
import { DateTime } from "luxon";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const dynamodb = new aws.DynamoDB();

/**
 * Get request statistics report.
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 'stale-while-revalidate=600, max-age=3600, s-maxage=3600');  

    const alltime_bucket = 'alltime';
    const date = DateTime.now()
    const year_bucket = date.toFormat('yyyy'); 
    const month_bucket = year_bucket + "-" + date.toFormat('MMMM').toLowerCase(); 
    const week_bucket = year_bucket + "-" + date.toFormat('WW');
    const results = [];

    dynamodb.query({
        TableName: "YDRAggregateRequests",
        IndexName: "TopOrganizationsIndex",
        KeyConditionExpression: '#k = :a',
        ExpressionAttributeValues: {
            ":a": {
                "S": alltime_bucket
            }
        },
        ExpressionAttributeNames: {
            "#k": "key"
        },
        Limit: 10,
        ScanIndexForward: false
    }, (err, alltime) => {
        if (err) {
            res.statusCode = 500;
            res.send({
                error: 'Could not get statistics: ' + err,
            });
            resolve();
        } else { 
            dynamodb.query({
                TableName: "YDRAggregateRequests",
                IndexName: "TopOrganizationsIndex",
                KeyConditionExpression: '#k = :a',
                ExpressionAttributeValues: {
                    ":a": {
                        "S": year_bucket
                    }
                },
                ExpressionAttributeNames: {
                    "#k": "key"
                },
                Limit: 10,
                ScanIndexForward: false
            }, (err, year) => {
                if (err) {
                    res.statusCode = 500;
                    res.send({
                        error: 'Could not get statistics: ' + err,
                    });
                    resolve();
                } else { 
                    dynamodb.query({
                        TableName: "YDRAggregateRequests",
                        IndexName: "TopOrganizationsIndex",
                        KeyConditionExpression: '#k = :a',
                        ExpressionAttributeValues: {
                            ":a": {
                                "S": month_bucket
                            }
                        },
                        ExpressionAttributeNames: {
                            "#k": "key"
                        },
                        Limit: 10,
                        ScanIndexForward: false
                    }, (err, month) => {
                        if (err) {
                            res.statusCode = 500;
                            res.send({
                                error: 'Could not get statistics: ' + err,
                            });
                            resolve();
                        } else { 
                            dynamodb.query({
                                TableName: "YDRAggregateRequests",
                                IndexName: "TopOrganizationsIndex",
                                KeyConditionExpression: '#k = :a',
                                ExpressionAttributeValues: {
                                    ":a": {
                                        "S": week_bucket
                                    }
                                },
                                ExpressionAttributeNames: {
                                    "#k": "key"
                                },
                                Limit: 10,
                                ScanIndexForward: false
                            }, (err, week) => {
                                if (err) {
                                    res.statusCode = 500;
                                    res.send({
                                        error: 'Could not get statistics: ' + err,
                                    });
                                    resolve();
                                } else { 
                                    res.statusCode = 200;
                                    res.send({
                                        "License": "GNU General Public License v3.0", 
                                        "alltime": alltime['Items'],
                                        "year": year['Items'],
                                        "month": month['Items'],
                                        "week": week['Items'],
                                    });
                                    resolve();
                                }
                            });
                        }
                    });        
                }
            });
        }
    });
    return;
  });
};