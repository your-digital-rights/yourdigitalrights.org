import capitalize from "../utils/capitalize";
import dateFormatter from "../utils/date-formatter";
import daysSince from "../utils/days-since";

export default {
  subject(data) {
    return `Reminder: My Data ${capitalize(data.requestType)} sent ${dateFormatter(new Date(data.requestDate))}`;
  },
  body(data) {
    const bodyParts = [];

    bodyParts.push('To whom it may concern:');

    if (data.regulationType === 'CCPA') {
      const article = data.requestType === 'DELETION' ? '1798.105' : '1798.110';
      bodyParts.push(`On ${dateFormatter(new Date(data.requestDate))} I have sent you a Data ${capitalize(data.requestType)} via email, pursuant to section ${article} of the California Consumer Privacy Act (CCPA).`);
    } else {
      const article = data.requestType === 'DELETION' ? '17' : '15';
      bodyParts.push(`On ${dateFormatter(new Date(data.requestDate))} I have sent you a Data ${capitalize(data.requestType)} via email, pursuant to article ${article} of the General Data Protection Regulation (GDPR).`);
    }

    if (data.status === 'PARTIAL') {
      bodyParts.push('So far you have failed to fully comply with my request.');
    } else if (data.status === 'DECLINED') {
      bodyParts.push('So far you have refused to comply with my request.');
    } else if (data.status === 'NO_REPLY') {
      bodyParts.push('So far I did not receive a reply to my request.');
    }

    const daysSinceRequest = daysSince(new Date(data.requestDate));
    if (data.regulationType === 'CCPA') {
      if (daysSinceRequest > 45) {
        bodyParts.push(`Since it has been ${daysSinceRequest} since the request was sent you are now in violation of section $ARTICLE$ of the CCPA.`);
      }

      bodyParts.push(`I am sending this email to remind you of my request, and reserve the right to escalate the matter to the Attorney General of Califronai if you do not fully comply with it.`);
    } else {
      if (daysSinceRequest > 30) {
        bodyParts.push(`Since it has been ${daysSinceRequest} since the request was sent you are now in violation of article $ARTICLE$ of the GDPR.`);
      }

      bodyParts.push(`I am sending this email to remind you of my request, and reserve the right to escalate the matter to my local Data Protection Agency if you do not fully comply with it.`);
    }

    bodyParts.push('Kind regards,');
    bodyParts.push(data.name);

    return bodyParts.join('\n\n');
  },
};
