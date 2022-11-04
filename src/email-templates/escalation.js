import capitalize from "../utils/capitalize";
import daysSince from "../utils/days-since";
import Regulations from "../utils/regulations";

export default {
  subject(requestItem) {
    const regulation = Regulations[requestItem.regulationType.S];
    const requestType = regulation['requestTypes'][requestItem.requestType.S];
   
    if (requestItem.regulationType.S === "LGPD") {
      return `Reclamação contra "${requestItem.companyName.S}" em relação a ${regulation.displayName} minha solicitação de ${capitalize(requestType.name)} (ref: ${requestItem.id.S.split("-")[0]}).`;
    } else {
      return `Complaint against "${requestItem.companyName.S}" regarding a ${regulation.displayName} Data ${capitalize(requestType.name)} Request (ref: ${requestItem.id.S.split("-")[0]}).`;
    }
  },
  body(requestItem, complaintText, status) {
    if (requestItem.regulationType.S === "LGPD") {
      const regulation = Regulations[requestItem.regulationType.S];
      const requestType = regulation['requestTypes'][requestItem.requestType.S];
      const bodyParts = [];
      const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt.S : requestItem.requestCreatedAt.S;

      bodyParts.push('A quem possa interessar:');
      bodyParts.push(`No ${new Intl.DateTimeFormat('pt', { dateStyle: 'full'}).format(new Date(requestSentDate))} enviei "${requestItem.companyName.S}" (website: ${requestItem.companyUrl.S}) uma requisição sobre dados ${capitalize(requestType.name)} nos termos do artigo ${requestType.article} da ${regulation.longName} (${regulation.displayName}).`);

      if (requestItem.reminderEmailSentAt) {
        bodyParts.push(`Eu também enviei à organização um e-mail reiterando o pedido em ${new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S))}.`);
      }

      let reason = '';
      if (status === 'PARTIAL') {
        reason = 'organização não atendeu integralmente a minha solicitação';
      } else if (status === 'DECLINED') {
        reason = 'a organização recusou-se a atender a minha solicitação';
      } else if (status === 'NO_REPLY') {
        reason = 'organização não atendeu integralmente a minha solicitação';
      }
      const daysSinceRequest = daysSince(new Date(requestSentDate));
      bodyParts.push(`Eu gostaria de apresentar uma reclamação formal porque a ${reason}, que eu enviei ${daysSinceRequest} dias atrás.`);

      if (complaintText) {
        bodyParts.push(`Informações adicionais:\n${complaintText}`);
      }

      bodyParts.push(`Por favor, me mantenha atualizado(a) sobre a situação de sua investigação, bem como me informe se deseja que eu forneça qualquer informação adicional. Preferencialmente, o meu meio de contato é por e-mail.`);

      /* bodyParts.push(`A solicitação original foi enviada por e-mail através do meu endereço eletrônico pessoal. O texto do e-mail foi gerado por YourDigitalRights.org, um website que automatiza o processo de solicitação de direitos do titular. O serviço gentilmente manteve um registro da minha solicitação que você pode visualizar aqui.`); */
      
      bodyParts.push(`Por favor, observe que copiei a ${requestItem.companyName.S} neste e-mail.`);
      bodyParts.push('Atenciosamente,');
      bodyParts.push(`${requestItem.name.S}`);
      
      bodyParts.push(assemblePreviusEmails(requestItem, "pt"));

      return bodyParts.join('\n\n');
    } else {
      const regulation = Regulations[requestItem.regulationType.S];
      const requestType = regulation['requestTypes'][requestItem.requestType.S];
      const bodyParts = [];
      const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt.S : requestItem.requestCreatedAt.S;

      bodyParts.push('Dear Data Protection Agency,');
      bodyParts.push(`On ${new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestSentDate))} I sent "${requestItem.companyName.S}" (website: ${requestItem.companyUrl.S}) a Data ${capitalize(requestType.name)} Request pursuant to article ${requestType.article} of the ${regulation.longName} (${regulation.displayName}).`);

      if (requestItem.reminderEmailSentAt) {
        bodyParts.push(`I have also sent the organization a reminder email on ${new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S))}.`);
      }

      let reason = '';
      if (status === 'PARTIAL') {
        reason = 'the organization failed to fully comply with my request';
      } else if (status === 'DECLINED') {
        reason = 'the organization declined to comply with my request';
      } else if (status === 'NO_REPLY') {
        reason = 'the organization did not reply to my request';
      }
      const daysSinceRequest = daysSince(new Date(requestSentDate));
      bodyParts.push(`I would like to file a formal complaint since ${reason}, which I sent ${daysSinceRequest} days ago.`);

      if (complaintText) {
        bodyParts.push(`Additional details:\n${complaintText}`);
      }

      bodyParts.push(`Please keep me updated as to the status of your investigation. Please let me know if you would like me to provide any additional information. My preferred method of communication is email.`);

      /* bodyParts.push(`The original request was emailed from my personal email address. The text of the email was generated by YourDigitalRights.org, a website which automates the process of filing data requests. The service has kindly kept a record of my request which you can view here.`); */
      
      bodyParts.push(`Please note that I have copied ${requestItem.companyName.S} to this email.`);
      bodyParts.push('Kind regards,');
      bodyParts.push(`${requestItem.name.S}`);
      
      bodyParts.push(assemblePreviusEmails(requestItem, "en"));
      
      return bodyParts.join('\n\n');
    }
  },
};

function assemblePreviusEmails(requestItem, local) {
  const to = requestItem.reminderEmailTo ? requestItem.reminderEmailTo.S : requestItem.requestEmailTo.S;
  const emailParts = [];

  if (requestItem.reminderEmailSentAt) {
    emailParts.push("---------- Forwarded message ---------");
    emailParts.push(`From: ${requestItem.requestEmailFrom.S}`);
    emailParts.push(`Date: ${new Intl.DateTimeFormat(local, { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S))}`);
    emailParts.push(`Subject: ${requestItem.reminderEmailSubject.S}`);
    emailParts.push(`To: ${to}`);
    emailParts.push('\n');
    emailParts.push(requestItem.reminderEmailContent.S);
    emailParts.push('\n');
  }

  if (requestItem.requestEmailSentAt) {
    emailParts.push("---------- Forwarded message ---------");
    emailParts.push(`From: ${requestItem.requestEmailFrom.S}`);
    emailParts.push(`Date: ${new Intl.DateTimeFormat(local, { dateStyle: 'full'}).format(new Date(requestItem.requestEmailSentAt.S))}`);
    emailParts.push(`Subject: ${requestItem.requestEmailSubject.S}`);
    emailParts.push(`To: ${to}`);
    emailParts.push('\n');
    emailParts.push(requestItem.requestEmailContent.S);
    emailParts.push('\n');
  }
  return emailParts.join('\n');
};