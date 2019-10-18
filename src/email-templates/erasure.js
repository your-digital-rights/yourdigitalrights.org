export default {
  subject: "Erasure Request",
  formatBody(data) {
    const date = new Date();
    var body = `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email. 

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with these requests, please forward this email to your Data Protection Officer. Please note that you have 30 days to comply with this request.

`;

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
