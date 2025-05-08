import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
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
 * Call this API endpoint to save a user's data. There are currently two
 * options for this. One is to just save the request type, regulation type,
 * and organizing domain. The other is to also include personal information,
 * including the email address.
 *
 * This data is kept in two tables. This allows anonymous data to be in a
 * separate table, which could be archived. Personal information is purged after
 * following up with the user. An archive on this table should be limited to
 * the maximum length of time before following up (currently 120 days).
 *
 * The API takes in the following:
 *
 * @param {string} req.body.uuid of the request
 * @param {string} req.body.requestType either "ACCESS" or "DELETION"
 * @param {string} req.body.regulationType "GDPR" or "CCPA"
 * @param {string} req.body.companyName of the organization
 * @param {string} req.body.name of the requester, used for follow up
 * @param {string} req.body.identifyingInfo of the requester, used for follow up, optional
 */
export default async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    if (
      !req.body.uuid ||
      !req.body.requestType ||
      !req.body.regulationType ||
      !req.body.companyName ||
      !req.body.companyUrl ||
      !req.body.followUp
    ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid, requestType, regulationType, companyName, companyUrl, followUp',
      });
      return;
    }

    const requestCreatedAt = DateTime.now();
    const TTL = Math.round(requestCreatedAt.plus({ days: 120 }).toSeconds()); // auto delete after 120 days
    const requestItems = {
      RequestItems: {
        YDRRequests: [
          {
            PutRequest: {
              Item: { 
                id: req.body.uuid,
                requestCreatedAt: requestCreatedAt.toUTC().toISO(),
                requestType: req.body.requestType,
                regulationType: req.body.regulationType,
                companyName: req.body.companyName,
                companyUrl: req.body.companyUrl,
                followup: req.body.followUp === "YES",
                statusHistory: [{ 
                  Date: requestCreatedAt.toUTC().toISO(),
                  Status: "NO_REPLY"
                }],
              },
            },
          },
        ],
      },
    };

    if (req.body.followUp === "YES") {
      if (!req.body.lang) {
        res.statusCode = 400;
        res.send({
          error: 'Missing lang',
        });
        return;
      }

      requestItems.RequestItems.YDRFollowups = [
        {
          PutRequest: {
            Item: {
              lang: req.body.lang,
              id: req.body.uuid,
              requestCreatedAt: requestCreatedAt.toUTC().toISO(),
              requestType: req.body.requestType,
              regulationType: req.body.regulationType,
              companyName: req.body.companyName,
              companyUrl: req.body.companyUrl,
              name: req.body.name,
              identifyingInfo: req.body.identifyingInfo || null,
              status: 'NO_REPLY',
              ttl: TTL,
            },
          },
        },
      ];
    }

    try {
      const data = await dynamodb.send(new BatchWriteCommand(requestItems));
      if (Object.keys(data.UnprocessedItems || {}).length) {
        res.statusCode = 500;
        res.send({
          error: 'Could not save request: Some items were not processed',
        });
      } else {
        res.statusCode = 201;
        res.send({
          success: 'Saved request.',
        });
      }
    } catch (err) {
      res.statusCode = 500;
      res.send({
        error: 'Could not save request: ' + err,
      });
    }
  } catch (err) {
    res.statusCode = 500;
    res.send({
      error: 'Internal server error: ' + err,
    });
  }
};
