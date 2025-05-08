import capitalize from "../utils/capitalize";
import daysSince from "../utils/days-since";
import Regulations from "../utils/regulations";
import nunjucks from "nunjucks";

export default {
  subject(data) {
    const requestItem = data.requestItem;
    const regulation = Regulations[requestItem.regulationType];
    const requestType = regulation['requestTypes'][requestItem.requestType];
    const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt : requestItem.requestCreatedAt;
    
    if (requestItem.regulationType === "LGPD") {
      return `Aviso: Minha Solicitação de ${capitalize(requestType.name)} de Dados ${regulation.displayName} enviada ${new Intl.DateTimeFormat('pt', { dateStyle: 'full'}).format(new Date(requestSentDate))} (ref: ${requestItem.id.split("-")[0]})`;
    } else if (requestItem.regulationType === "PIPL") {
      return `提醒：我的${regulation.displayName}数据${requestType.name}请求已发送${new Intl.DateTimeFormat('zh', { dateStyle: 'full'}).format(new Date(requestSentDate))}（参考：${requestItem.id.split("-")[0]}）`
    } else if (requestItem.regulationType === "APPI") {
      return `リマインダー: データリクエスト (ref: ${requestItem.id.split("-")[0]})`;
    } else {
      return `Reminder: My ${regulation.displayName} Data ${capitalize(requestType.name)} Request sent ${new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestSentDate))} (ref: ${requestItem.id.split("-")[0]})`;
    }
  },
  body(data) {
    const requestItem = data.requestItem;
    data.regulation = Regulations[requestItem.regulationType];
    data.requestType = data.regulation['requestTypes'][requestItem.requestType];
    const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt : requestItem.requestCreatedAt;
    data.daysSinceRequest = daysSince(new Date(requestSentDate));
    data.previousEmails = assemblePreviusEmails(requestItem, "en");
    data.requestSentDate_en = new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestSentDate));
    var templateFile;

    if (requestItem.regulationType === "LGPD") {
      data.requestSentDate = new Intl.DateTimeFormat('pt', { dateStyle: 'full'}).format(new Date(requestSentDate));
      templateFile = "reminder.lgpd.template";
    } else if (requestItem.regulationType === "APPI") {
      data.requestSentDate = new Intl.DateTimeFormat('ja', { dateStyle: 'full'}).format(new Date(requestSentDate));
      templateFile = "reminder.ja.template";
    } else if (requestItem.regulationType === "PIPL") {
      data.requestSentDate = new Intl.DateTimeFormat('zh', { dateStyle: 'full'}).format(new Date(requestSentDate));
      templateFile = "reminder.cn.template";
    } else {
      data.requestSentDate = new Intl.DateTimeFormat('en', { dateStyle: 'full'}).format(new Date(requestSentDate));
      templateFile = "reminder.template";
    }
    
    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });
    return env.render(templateFile, data);
  },
};

function assemblePreviusEmails(requestItem, local) {
  const to = requestItem.reminderEmailTo ? requestItem.reminderEmailTo : requestItem.requestEmailTo;
  const emailParts = [];

  if (requestItem.requestEmailSentAt) {
    emailParts.push("---------- Forwarded message ---------");
    emailParts.push(`From: ${requestItem.requestEmailFrom}`);
    emailParts.push(`Date: ${new Intl.DateTimeFormat(local, { dateStyle: 'full'}).format(new Date(requestItem.requestEmailSentAt))}`);
    emailParts.push(`Subject: ${requestItem.requestEmailSubject}`);
    emailParts.push(`To: ${to}`);
    emailParts.push('\n');
    emailParts.push(requestItem.requestEmailContent);
    emailParts.push('\n');
  }
  return emailParts.join('\n');
};