import aws from "aws-sdk";
import { DateTime } from "luxon";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});
/* aws.config.logger = console; */

const dynamodb = new aws.DynamoDB();

/**
 * Call this API endpoint to save a user's data. There are currently two
 * options for this. One is to just save the request type, regulation type,
 * and organizing domain. The other is to also include personal information,
 * including the email address.
 *
 * This data is kept in two tables. This allows anonymous data to be in a
 * separate table, which could be archived. Personal information is purged after
 * following up with the user. An archive on this table should be limited to
 * the maximum length of time before following up (currently 45 days).
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
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (
      !req.body.uuid ||
      !req.body.requestType ||
      !req.body.regulationType ||
      !req.body.companyName ||
      !req.body.companyUrl
    ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid, requestType, regulationType, companyName, companyUrl',
      });
      resolve();
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
                id: { S: req.body.uuid },
                requestCreatedAt: { S: requestCreatedAt.toUTC().toISO() },
                requestType: { S: req.body.requestType },
                regulationType: { S: req.body.regulationType },
                companyName: { S: req.body.companyName },
                companyUrl: { S: req.body.companyUrl },
              },
            },
          },
        ],
      },
    };

    if (req.body.name) {
      if (!req.body.lang) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 400;
        res.send({
          error: 'Missing lang',
        });
        resolve();
        return;
      }

      requestItems.RequestItems.YDRFollowups = [
        {
          PutRequest: {
            Item: {
              lang: { S: req.body.lang },
              id: { S: req.body.uuid },
              requestCreatedAt: { S: requestCreatedAt.toUTC().toISO() },
              requestType: { S: req.body.requestType },
              regulationType: { S: req.body.regulationType },
              companyName: { S: req.body.companyName },
              companyUrl: { S: req.body.companyUrl },
              name: { S: req.body.name },
              identifyingInfo: req.body.identifyingInfo ? { S: req.body.identifyingInfo } : null,
              status: { S: 'NO_REPLY' },
              ttl: { N:  TTL.toString() },
            },
          },
        },
      ];
    }

    dynamodb.batchWriteItem(requestItems, (err, data) => {
      if (err || Object.keys(data.UnprocessedItems).length) {
        res.statusCode = 500;
        res.send({
          error: 'Could not save request: ' + err,
        });
      } else {
        res.statusCode = 201;
        res.send({
          success: 'Saved request.',
        });
      }
      resolve();
    });
  });
};
