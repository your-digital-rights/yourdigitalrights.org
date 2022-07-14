export default {
  subject(data) {
    var subject = "Data deletion request";

    if (data.regulationType === 'LGPD') {
      subject = "Solicitação de exclusão de dados";
    }

    if (data.reference.length > 0) {
      subject = subject.concat(` ${data.reference}`);
    }

    return subject;
  },
  formatBody(data) {
    var body;
    var additionalInfo = ADDITIONAL_INFO_TEXT_EN;
    var salutation = SALUTATION_EN;

    switch (data.regulationType) {
      case "CCPA":
        body = CCPA_TEXT;
        break;
      case "GDPR":
        body = GDPR_TEXT;
        break;
      case "GDPRUK":
        body = GDPRUK_TEXT;
        break;   
      case "LGPD":
        body = LGPD_TEXT;
        additionalInfo = ADDITIONAL_INFO_TEXT_PT;
        salutation = SALUTATION_PT;
        break;        
    }

    if (data.identifyingInfo) {
      body = body.concat(
`${additionalInfo}
${data.identifyingInfo}
`);
    }

    body = body.concat(
`
${salutation}

${data.name}

${POWERED_BY}
`);

    return body;
  },
};

const ADDITIONAL_INFO_TEXT_EN = `Please use the following information to identify me in your systems:`;
const ADDITIONAL_INFO_TEXT_PT = `Use as seguintes informações para me identificar em seus sistemas:`;
const SALUTATION_EN = `Kind regards,`;
const SALUTATION_PT = `Atenciosamente,`;
const POWERED_BY = `Powered by YourDigitalRights.org`;

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

const GDPR_TEXT = `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 17 of the General Data Protection Regulation (GDPR). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that you have 30 days to comply with this request.

`;

const GDPRUK_TEXT = `To whom it may concern:

I am writing to request that you erase all my personal information from all your information systems pursuant to Article 45 of the Data Protection Act (DPA). To the extent that you rely on consent to process my personal data, I withdraw that consent. To the extent that you rely on your 'legitimate interest' to process my personal data, I object to the processing as there are no overriding legitimate grounds.

Please confirm that you have erased my personal information from your systems, and that you have followed up with any controller with whom my information has been shared to ensure that they erase their copy of the data. If you need any further information from me in order to identify me or locate my records in your systems, please let me know as soon as possible. My preferred method of contact is email.

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that you have 30 days to comply with this request.

`;

const LGPD_TEXT = `A quem possa interessar,

Venho por meio deste solicitar que você apague as minhas informações pessoais de seus registros, de acordo com o inciso VI do artigo 18 da Lei Geral de Proteção de Dados (LGPD). 

Caso você trate os meus dados pessoais com base no consentimento, neste momento, eu revogo este consentimento. Por outro lado, caso você trate os meus dados pessoais com base em seu legítimo interesse, eu me oponho a este tratamento, nos termos do art. 18, §2º.

Por favor, peço que confirme que você apagou minhas informações pessoais de seus sistemas, bem como comprove que orientou os seus prestadores de serviços, parceiros ou fornecedores, com quem minhas informações foram compartilhadas, a também excluir os meus dados dos seus respectivos sistemas, conforme prevê o art. 18, §6º.

Se você precisar de mais informações para me identificar ou localizar meus registros em seus sistemas, por favor, entre em contato o mais rápido possível. Preferencialmente, o meu meio de contato é por e-mail.

Se você não puder atender à minha solicitação para apagar minhas informações pessoais, por favor, informe o motivo específico pelo qual a minha solicitação não pode ser atendida. Se você estiver se baseando em outras bases legais do artigo 7º ou 11º da LGPD, por favor, me informe quais são e qual a justificativa para a sua utilização.

Por favor, observe que eu não forneci o meu consentimento de que qualquer informação pessoal que faça parte desta solicitação, incluindo meu nome e endereço de e-mail, seja utilizado para qualquer outro fim que não seja o cumprimento da minha solicitação.

Se você não é o responsável por atender a minha solicitação, por favor, encaminhe este e-mail para o Encarregado de Proteção de Dados (“DPO”) ou, se for o caso, para a pessoa responsável. Por favor, observe que você deve seguir os prazos estabelecidos pela LGPD e pelas regulamentações da ANPD, sob pena de ser responsabilizado pela legislação.

`;