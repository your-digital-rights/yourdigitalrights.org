import nunjucks from "nunjucks";
import Regulations from "../utils/regulations";

export default {
  subject(data) {
    var subject = "Data deletion request";
    if (data.regulationType === 'LGPD') {
      subject = "Solicitação de exclusão de dados";
    } else if (data.regulationType === "APPI") {
      subject = "データ削除リクエスト";
    } else if (data.regulationType === 'PIPL') {
      subject = "数据删除请求";
    }

    subject = subject.concat(` - ${data.companyUrl}`);

    if (data.reference.length > 0) {
      subject = subject.concat(` ${data.reference}`);
    }

    return subject;
  },
  body(data) {
    data.regulation = Regulations[data.regulationType];
    var templateFile = "deletion.template";

    if (data.regulationType === "LGPD") {
      templateFile = "deletion.lgpd.template";
    } else if (data.regulationType === "APPI") {
      templateFile = "deletion.ja.template";
    } else if (data.regulationType === "PIPL") {
      templateFile = "deletion.cn.template";
    } 
    
    var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'), { autoescape: false, trimBlocks: true });  
    return env.render(templateFile, data);
  },
};

