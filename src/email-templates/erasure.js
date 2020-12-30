export default {
  subject({ regulationType }) {
    let subject;

    switch (regulationType) {
      case "CCPA":
        subject = CCPA_SUBJECT;
        break;
      case "GDPR":
        subject = GDPR_SUBJECT;
        break;
    }
    return subject;
  },
  formatBody(data) {
    var body;

    switch (data.regulationType) {
      case "CCPA":
        body = CCPA_TEXT;
        break;
      case "GDPR":
        body = GDPR_TEXT;
        break;
    }

    if (data.identifyingInfo) {
      body = body.concat(
        `Please use the following information to identify me in your systems:
${data.identifyingInfo}

`
      );
    }

    return body.concat(`Kind regards,

${data.name}
`);
  },
};

const CCPA_SUBJECT = "Deletion Request (Section 105 of the CCPA)";
const CCPA_TEXT = `To whom it may concern:

I am writing to request that you delete all my personal information from your records pursuant to Section 1798.105 of The California Consumer Privacy Act (CCPA). 

To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have deleted my personal information from your systems, and that you have directed any service providers with whom my information has been shared to delete their copy of the data.

If you are selling my personal information to third parties, please consider this letter as my direction to you to not sell my personal information to third parties.

If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email. 

If you are not able to comply with my request to delete my personal information, please advise as to the specific reason for which this request cannot be acted on. If you are relying on one of the bases in §1798.105 of the CCPA, please advise which subsections you are relying upon. If you intend to rely upon subsections 7 to 9 of that section, please identify the specific reason for which you are relying on those exceptions, such as which legal obligation, or internal purpose or use.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with these requests, please forward this email to the relevant person in your organization. Please note that you have 45 days to comply with this request as required under subsection 1798.130.

`;

const GDPR_SUBJECT = "Erasure Request (Article 17 of the GDPR)";
const GDPR_TEXT = `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that you have 30 days to comply with this request.

`;
