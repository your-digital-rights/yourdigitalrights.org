import nunjucks from "nunjucks";
import Regulations from "../utils/regulations";

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
  body(data) {
    data.regulation = Regulations[data.regulationType];
    var templateFile = "access.en.template";
    if (data.regulationType === "LGPD") {
      templateFile = "access.pt.template";
    }

    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });
    var res = env.render(templateFile, data);

    return res;
  },
};