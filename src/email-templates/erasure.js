import nunjucks from "nunjucks";
import Regulations from "../utils/regulations";

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
  body(data) {
    data.regulation = Regulations[data.regulationType];
    var templateFile = "deletion.template";
    if (data.regulationType === "LGPD") {
      var templateFile = "deletion.lgpd.template";
    }

    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });
    var res = env.render(templateFile, data);

    return res;
  },
};

