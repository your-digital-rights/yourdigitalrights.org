import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

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
 * @param {string} req.body.emailTo for the request, used for follow up
 * @param {string} req.body.emailSubject for the request, used for follow up
 * @param {string} req.body.emailBody for the request, used for follow up
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (
      !req.body.uuid ||
      !req.body.requestType ||
      !req.body.regulationType ||
      !req.body.companyName
    ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid, requestType, regulationType, companyName',
      });
      resolve();
      return;
    }

    const requestItems = {
      RequestItems: {
        Requests: [
          {
            PutRequest: {
              Item: {
                id: { S: req.body.uuid },
                requestCreatedAt: { S: new Date().toISOString() },
                requestType: { S: req.body.requestType },
                regulationType: { S: req.body.regulationType },
                companyName: { S: req.body.companyName },
              },
            },
          },
        ],
      },
    };

    if (req.body.name) {
      if (
        !req.body.emailTo ||
        !req.body.emailSubject ||
        !req.body.emailBody ||
        !req.body.lang
      ) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 400;
        res.send({
          error: 'Missing one of name, emailTo, emailSubject, emailBody, lang',
        });
        resolve();
        return;
      }

      requestItems.RequestItems.FollowUps = [
        {
          PutRequest: {
            Item: {
              lang: { S: req.body.lang },
              id: { S: req.body.uuid },
              requestCreatedAt: { S: new Date().toISOString() },
              requestType: { S: req.body.requestType },
              regulationType: { S: req.body.regulationType },
              companyName: { S: req.body.companyName },
              name: { S: req.body.name },
              identifyingInfo: req.body.identifyingInfo ? { S: req.body.identifyingInfo } : null,
              emailTo: { S: req.body.emailTo },
              emailSubject: { S: req.body.emailSubject },
              emailBody: { S: req.body.emailBody },
            },
          },
        },
      ];
    }

    dynamodb.batchWriteItem(requestItems, (err, data) => {
      if (err || Object.keys(data.UnprocessedItems).length) {
        res.statusCode = 500;
        res.send({
          error: 'Could not save request.',
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
