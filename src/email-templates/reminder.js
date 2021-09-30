export default {
  subject(data) {
    return `Reminder: My Data ${data.requestType} sent ${data.requestDate}`;
  },
  body(data) {
    const bodyParts = [];

    bodyParts.push('To whom it may concern:');

    if (data.regulationType === 'CCPA') {
      //bodyParts.push(`On $REQUEST_DATE$ I have sent you a Data $REQUEST_TYPE$ via email, pursuant to section $ARTICLE$ of the California Consumer Privacy Act (CCPA). `);
    } else {
      //bodyParts.push(`On $REQUEST_DATE$ I have sent you a Data $REQUEST_TYPE$ via email, pursuant to article $ARTICLE$ of the General Data Protection Regulation (GDPR).`);
    }

    // So far you have failed to fully comply with my request. / 
    // So far you have refused to comply with my request. /
    // So far I did not receive a reply to my request.

    if (data.regulationType === 'CCPA') {
      // {IF $NUMBER_OF_DAYS_SINCE_REQUEST$ > $REGULATION_TIME_LIMIT$}
      // Since it has been $NUMBER_OF_DAYS_SINCE_REQUEST$ since the request was sent you are now in violation of section $ARTICLE$ of the CCPA. 
      // {ENDIF}

      // I am sending this email to remind you of my request, and reserve the right to escalate the matter to the Attorney General of Califronai if you do not fully comply with it. 
    } else {
      // {IF $NUMBER_OF_DAYS_SINCE_REQUEST$ > $REGULATION_TIME_LIMIT$}
      // Since it has been $NUMBER_OF_DAYS_SINCE_REQUEST$ since the request was sent you are now in violation of article $ARTICLE$ of the GDPR. 
      // {ENDIF}

      // I am sending this email to remind you of my request, and reserve the right to escalate the matter to my local Data Protection Agency if you do not fully comply with it. 
    }

    bodyParts.push('Kind regards,');
    bodyParts.push(data.name);

    return bodyParts.join('\n\n');
  },
};
