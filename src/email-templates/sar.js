export default {
  subject(data) {
    var subject = "Data access request";

    if (data.regulationType === 'LGPD') {
      subject = "Solicitação de acesso a dados";
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
      `${salutation}

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

I am writing to request access to personal information pursuant to Section 1798.110 of The California Consumer Privacy Act (CCPA). Please advise as to the following:

1. Please confirm to me whether or not my personal information has been collected, sold or disclosed over the past 12 months. If so, please disclose:
    1.1 What categories of personal information has been collected or disclosed for business purposes, and provide me with a copy of, or access to, my personal information that you have or are processing
    1.2 Please identify the specific pieces of personal information that you have collected about me
    1.3 Please advise what sources were used to obtain my personal information
    1.4 Please advise what categories of my personal information that you have shared with or disclosed to third parties
    1.5 Please advise in which countries my personal information is stored, or accessible from. In case you make use of cloud services to store or process my data, please include the countries in which the servers are located where my data are or were (in the past 12 months) stored

2. Please provide me with a detailed accounting of the business or commercial purposes for which you are collecting or selling my personal information

3. Please advise how long you store my personal information, and if retention is based upon the category of personal information, please identify how long each category is retained

4. Please advise as to whether any categories of my personal information have been sold to a third party, and if so, what categories were included in such sale. If my personal information has been sold, please identify:
    4.1 The categories of third parties to whom the information was sold
    4.1 What specific personal information has been sold to such third party(ies)

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with these requests, please forward this email to the relevant person in your organization. Please note that you have 45 days to comply with this request as required under subsection 1798.130.

`;

const GDPR_TEXT = `To whom it may concern:

I am writing to obtain the following information that I am entitled to receive pursuant to Article 15 of the General Data Protection Regulation (GDPR). Please confirm as to whether or not my personal data is being processed, and, where that is the case, please provide the following information:

1. a copy of my personal data that you have or are processing
2. a detailed account of the specific uses that you have made, are making, or will be making of my personal data
3. the purposes of the processing
4. the categories of personal data concerned
5. a list of all third parties with whom you have (or may have) shared my personal data
6. where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period
7. where the personal data are not collected from me, any available information as to their source, as referred to in Article 14 of the GDPR
8. the existence of automated decision-making, including profiling, and at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for me
9. the safeguards you provide if you transfer my personal data to a third country or international organisation
10. In addition, I would like to know whether or not my personal data has been disclosed inadvertently by your company in the past, or as a result of a security or privacy breach:
    10.1 a general description of what occurred
    10.2 the date and time of the breach (or the best possible estimate)
    10.3 the date and time the breach was discovered
    10.4 the source of the breach (either your own organization, or a third party to whom you have transferred my personal data)
    10.5 details of my personal data that was disclosed
    10.6 your company's assessment of the risk of harm to myself, as a result of the breach
    10.7 a description of the measures taken or that will be taken to prevent further unauthorized access to my personal data
    10.8 contact information so that I can obtain more information and assistance in relation to such a breach
    10.9 information and advice on what I can do to protect myself against any harms, including identity theft and fraud

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that I have the right to receive this information in a standardized format within 30 days of your receipt of this request.

`;

const GDPRUK_TEXT = `To whom it may concern:

I am writing to obtain the following information that I am entitled to receive pursuant to Article 43 of the Data Protection Act (DPA). Please confirm as to whether or not my personal data is being processed, and, where that is the case, please provide the following information:

1. a copy of my personal data that you have or are processing
2. a detailed account of the specific uses that you have made, are making, or will be making of my personal data
3. the purposes of the processing
4. the categories of personal data concerned
5. a list of all third parties with whom you have (or may have) shared my personal data
6. where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period
7. where the personal data are not collected from me, any available information as to their source
8. the existence of automated decision-making, including profiling, and at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for me
9. the safeguards you provide if you transfer my personal data to a third country or international organisation
10. In addition, I would like to know whether or not my personal data has been disclosed inadvertently by your company in the past, or as a result of a security or privacy breach:
    10.1 a general description of what occurred
    10.2 the date and time of the breach (or the best possible estimate)
    10.3 the date and time the breach was discovered
    10.4 the source of the breach (either your own organization, or a third party to whom you have transferred my personal data)
    10.5 details of my personal data that was disclosed
    10.6 your company's assessment of the risk of harm to myself, as a result of the breach
    10.7 a description of the measures taken or that will be taken to prevent further unauthorized access to my personal data
    10.8 contact information so that I can obtain more information and assistance in relation to such a breach
    10.9 information and advice on what I can do to protect myself against any harms, including identity theft and fraud

Please note that I do not consent to any personal information which is part of this request, including my email address and name, to be used for any purpose other than fulfilling this request.

If you do not normally deal with data protection requests, please forward this email to your Data Protection Officer, or relevant member of staff. Please note that I have the right to receive this information in a standardized format within 30 days of your receipt of this request.

`;

const LGPD_TEXT = `A quem possa interessar,

Venho, por meio deste, solicitar a confirmação da existência de tratamento dos meus dados pessoais, e, se for o caso, providenciar o meu acesso a tais dados, de acordo com o art. 18, inciso I e II da Lei Geral de Proteção de Dados (LGPD), fornecendo as seguintes informações:

1.  Uma cópia dos meus dados pessoais que você realiza algum tratamento;
2. Uma descrição detalhada sobre a forma em que você tratou, está tratando ou como irá tratar os meus dados pessoais;
3. As finalidades do tratamento;
4. A categoria dos dados pessoais tratados;
5. A lista de todos os terceiros com quem você tenha (ou possa ter) compartilhado meus dados pessoais;
6. Quando possível, o período pelo qual os dados pessoais serão armazenados ou, se não for possível, os critérios utilizados para determinar esse período;
7. Se o caso, a existência de decisões automatizadas, incluindo a definição de perfis, e pelo menos nesses casos, compartilhar as informações significativas sobre a lógica envolvida, bem como o significado e as conseqüências previstas em tal tratamento, observados os segredos comercial e industrial;
8. As garantias que você fornece se transferir internacionalmente meus dados pessoais para um país terceiro ou organização internacional;
9. Além disso, gostaria de saber se meus dados pessoais já foram ou não divulgados inadvertidamente pela organização, ou em decorrência de um incidente de segurança, compartilhando as seguintes informações:
9.1 uma descrição geral do que ocorreu;
9.2 a data e a hora do incidente (ou a melhor estimativa possível);
9.3 a data e a hora em que o incidente foi descoberto;
9.4 a fonte da violação (sua própria organização, ou um terceiro com quem você compartilhou meus dados pessoais);
9.5 detalhes dos meus dados pessoais que foram divulgados;
9.6 a avaliação da sua empresa sobre o risco de dano como resultado do incidente;
9.7 uma descrição das medidas tomadas ou que serão tomadas para evitar mais acessos não autorizados aos meus dados pessoais;
9.8 informações de contato para que eu possa obter mais informações e assistência em relação a tal incidente;
9.9 informações e orientações sobre o que posso fazer para me proteger contra qualquer dano, incluindo roubo de identidade e fraude.

Por favor, observe que eu não forneci o meu consentimento de que qualquer informação pessoal que faça parte desta solicitação, incluindo meu nome e endereço de e-mail, seja utilizado para qualquer outro fim que não seja o cumprimento da minha solicitação.

Se você não é o responsável por atender a minha solicitação, por favor, encaminhe este e-mail para o Encarregado de Proteção de Dados (“DPO”) ou, se for o caso, para a pessoa responsável. Por favor, observe que você deve seguir os prazos estabelecidos pela LGPD e pelas regulamentações da ANPD, sob pena de ser responsabilizado pela legislação.

`;