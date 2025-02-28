import nunjucks from "nunjucks";
import Regulations from "../utils/regulations";

export default {
  subject(data) {
    var subject = "Data access request";
    if (data.regulationType === 'LGPD') {
      subject = "Solicitação de acesso a dados";
    } else if (data.regulationType === "APPI") {
      subject = "データアクセス要求";
    } else if (data.regulationType === 'PIPL') {
      subject = "数据访问请求";
    }

    subject = subject.concat(` - ${data.companyUrl}`);

    if (data.reference.length > 0) {
      subject = subject.concat(` ${data.reference}`);
    }

    return subject;
  },
  body(data) {
    data.regulation = Regulations[data.regulationType];
    var templateFile = "access.template";

    if (data.regulationType === "LGPD") {
      templateFile = "access.lgpd.template";
    } else if (data.regulationType === "APPI") {
      templateFile = "access.ja.template";
    } else if (data.regulationType === "PIPL") {
      templateFile = "access.cn.template";
    }

    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });
    return env.render(templateFile, data);
  },
};