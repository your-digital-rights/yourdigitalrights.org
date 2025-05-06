import capitalize from "../utils/capitalize";
import daysSince from "../utils/days-since";
import Regulations from "../utils/regulations";
import nunjucks from "nunjucks";

export default {
  subject(data) {
    const requestItem = data.requestItem;
    const regulation = Regulations[requestItem.regulationType.S];
    const requestType = regulation['requestTypes'][requestItem.requestType.S];
   
    if (requestItem.regulationType.S === "LGPD") {
      return `Reclamação contra "${requestItem.companyName.S}" em relação a ${regulation.displayName} minha solicitação de ${capitalize(requestType.name)} (ref: ${requestItem.id.S.split("-")[0]}).`;
    } else if (requestItem.regulationType.S === "PIPL") {
      return `针对“${requestItem.companyName.S}”的${regulation.displayName}数据${requestType.name}请求（参考：${requestItem.id.S.split("-")[0]}）的投诉。`
    } else if (requestItem.regulationType.S === "APPI") {
      return `リマインダー: データリクエスト (ref: ${requestItem.id.S.split("-")[0]})`;      
    } else {
      return `Complaint against "${requestItem.companyName.S}" regarding a ${regulation.displayName} Data ${capitalize(requestType.name)} Request (ref: ${requestItem.id.S.split("-")[0]}).`;
    }
  },
  body(data) {
    const requestItem = data.requestItem;
    data.regulation = Regulations[requestItem.regulationType.S];
    data.requestType = data.regulation['requestTypes'][requestItem.requestType.S];
    const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt.S : requestItem.requestCreatedAt.S;
    data.daysSinceRequest = daysSince(new Date(requestSentDate));
    data.previousEmails = assemblePreviusEmails(requestItem, "en")
    var templateFile;
    
    if (requestItem.regulationType.S === "LGPD") {
      data.requestSentDate = new Intl.DateTimeFormat('pt', { dateStyle: 'full'}).format(new Date(requestSentDate));
      if (requestItem.reminderEmailSentAt) {
        data.reminderSentDate = new Intl.DateTimeFormat('pt', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S));
      }
      templateFile = "escalation.lgpd.template";
    } else if (data.regulationType === "APPI") {
      data.requestSentDate = new Intl.DateTimeFormat('ja', { dateStyle: 'full'}).format(new Date(requestSentDate));
      if (requestItem.reminderEmailSentAt) {
        data.reminderSentDate = new Intl.DateTimeFormat('ja', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S));
      }
      templateFile = "escalation.ja.template";
    } else if (requestItem.regulationType.S === "PIPL") {
      data.requestSentDate = new Intl.DateTimeFormat('zh', { dateStyle: 'full'}).format(new Date(requestSentDate));
      if (requestItem.reminderEmailSentAt) {
        data.reminderSentDate = new Intl.DateTimeFormat('zh', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S));
      }
      templateFile = "escalation.cn.template";
    }  else {
      data.requestSentDate = new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestSentDate));
      if (requestItem.reminderEmailSentAt) {
        data.reminderSentDate = new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestItem.reminderEmailSentAt.S));
      }
      templateFile = "escalation.template";
    }

    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });
    return env.render(templateFile, data);
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
  } else {
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