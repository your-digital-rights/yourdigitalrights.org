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
 * @param {string} uuid of the request
 * @param {string} request_type either "request" or "delete"
 * @param {string} regulation_type either "gdpr" or "ccpa"
 * @param {string} org_domain for the organization
 * @param {string} email of the requester, used for follow up
 * @param {string} name of the requester, used for follow up
 * @param {string} additional_information of the requester, used for follow up
 * @param {string} email_to for the request, used for follow up
 * @param {string} email_subject for the request, used for follow up
 * @param {string} email_body for the request, used for follow up
 */
export default async (req, res) => {
  return new Promise((resolve, reject) => {
    res.setHeader('Content-Type', 'application/json');
    if (
      !req.body.uuid ||
      !req.body.request_type ||
      !req.body.regulation_type ||
      !req.body.org_domain
    ) {
      res.statusCode = 400;
      res.send({
        error: 'Missing one of uuid, request_type, regulation_type or org_domain',
      });
    }

    const requestItems = {
      RequestItems: {
        Requests: [
          {
            PutRequest: {
              Item: {
                uuid: { S: req.body.uuid },
                request_created_at: { S: new Date().toISOString() },
                request_type: { S: req.body.request_type },
                regulation_type: { S: req.body.regulation_type },
                org_domain: { S: req.body.org_domain },
              },
            },
          },
        ],
      },
    };

    if (req.body.email) {
      if (
        !req.body.name ||
        !req.body.additional_information ||
        !req.body.email_to ||
        !req.body.email_subject ||
        !req.body.email_body
      ) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 400;
        res.send({
          error: 'Missing one of name, additional_information, email_to, email_subject or email_body',
        });
      }

      requestItems.FollowUps = [
        {
          PutRequest: {
            Item: {
              uuid: { S: req.body.uuid },
              email: { S: req.body.email },
              name: { S: req.body.name },
              additional_information: { S: req.body.additional_information },
              email_to: { S: req.body.email_to },
              email_subject: { S: req.body.email_subject },
              email_body: { S: req.body.email_body },
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
