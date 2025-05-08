import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
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
 * Update the follow up and requests tables with a form based escalation request.
 *
 * The API takes in the following:
 *
 * @param {string} req.body.uuid of the request
 * @param {string} req.body.dpaCountryCode the Country Code of the DPA  
 */
export default async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    if (!req.body.uuid || !req.body.dpaCountryCode) {
      res.statusCode = 400;
      res.send({
        error: 'Missing uuid or DPA Country Code',
      });
      return;
    }

    const now = DateTime.now().toUTC().toISO();

    try {
      await dynamodb.send(new UpdateCommand({
        TableName: 'YDRFollowups',    
        Key: {
          id: req.body.uuid,
        },
        UpdateExpression: "SET escalationDate = :d, dpaCountryCode = :cc",
        ConditionExpression: 'attribute_exists(id)',
        ExpressionAttributeValues: {
          ":d": now,
          ":cc": req.body.dpaCountryCode,
        },
      }));

      await dynamodb.send(new UpdateCommand({
        TableName: 'YDRRequests',    
        Key: {
          id: req.body.uuid,
        },
        UpdateExpression: "SET escalationDate = :d, dpaCountryCode = :cc",
        ExpressionAttributeValues: {
          ":d": now,
          ":cc": req.body.dpaCountryCode,
        },
      }));

      res.statusCode = 200;
      res.send({
        success: 'Saved escalation.',
      });
    } catch (err) {
      res.statusCode = 500;
      res.send({
        error: 'Could not update escalation: ' + err,
      });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({
      error: 'Internal server error: ' + err,
    });
  }
};
