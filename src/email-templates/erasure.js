export default {
  subject({ requestType }) {
    let subject;

    switch(requestType) {
      case 'CCPA':
        subject = CCPA_SUBJECT;
        break;
      case 'GDPR':
        subject = GDPR_SUBJECT;
        break;
    }
    return subject;
  },
  formatBody(data) {
    var body;

    switch(data.requestType) {
      case 'CCPA':
        body = CCPA_TEXT;
        break;
      case 'GDPR':
        body = GDPR_TEXT;
        break;
    }

if (data.identifyingInfo) {
	body = body.concat(
`Please use the following information to identify me in your systems:
${data.identifyingInfo}

`);
}

return body.concat(`Kind regards,

${data.name}
`);
  }
};

const CCPA_SUBJECT = 'Deletion Request (Section 105 of The CCPA)';
const CCPA_TEXT = `To whom it may concern:

I am writing to request that you delete all my personal information from your records pursuant to Section 105 of The California Consumer Privacy Act of 2018 (CCPA). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have deleted my personal information from your systems, and that you have followed up with any service providers with whom my information has been shared to ensure that they delete their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with these requests, please forward this email to the relevant person in your organization. Please note that you have 45 days to comply with this request.

`;

const GDPR_SUBJECT = 'Erasure Request (Article 17 of the GDPR)';
const GDPR_TEXT = `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with these requests, please forward this email to your Data Protection Officer. Please note that you have 30 days to comply with this request.

`;
