import { FormattedMessage } from "react-intl";

const Regulations = {
  GDPR: {
    displayName: 'GDPR',
    gepgraphy: 'European Union',
    longName: 'General Data Protection Regulation',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'DPA',
      longName: 'Data Protection Agency',
      defualtAction: 'email',
      geographies: [
        {
          name: 'Austria',
          countryCode: 'AT',
          email: 'dsb@dsb.gv.at',
          website: 'http://www.dsb.gv.at/',
          chairman: 'Dr Andrea Jelinek'
        },
        {
          name: 'Belgium',
          countryCode: 'BE',
          email: 'contact@apd-gba.be',
          website: 'https://www.autoriteprotectiondonnees.be/',
          chairman: 'Mr David Stevens'
        },
        {
          name: 'Bulgaria',
          countryCode: 'BG',
          email: 'kzld@cpdp.bg',
          website: 'https://www.cpdp.bg/',
          chairman: 'Mr Ventsislav Karadjov'
        },
        {
          name: 'Croatia',
          countryCode: 'HR',
          email: 'azop@azop.hr',
          website: 'http://www.azop.hr/',
          chairman: 'Mr Zdravko Vukić'
        },
        {
          name: 'Cyprus',
          countryCode: 'CY',
          email: 'commissioner@dataprotection.gov.cy',
          website: 'http://www.dataprotection.gov.cy/',
          chairman: 'Ms Irene Loizidou Nikolaidou'
        },
        {
          name: 'Czech Republic',
          countryCode: 'CZ',
          email: 'posta@uoou.cz',
          website: 'http://www.uoou.cz/',
          chairman: 'Mr Jiří KAUCKÝ'
        },
        {
          name: 'Denmark',
          countryCode: 'DK',
          email: 'dt@datatilsynet.dk',
          website: 'http://www.datatilsynet.dk/',
          chairman: 'Ms Cristina Angela GULISANO'
        },
        {
          name: 'Estonia',
          countryCode: 'EE',
          email: 'info@aki.ee',
          website: 'http://www.aki.ee/',
          chairman: 'Ms Pille Lehis'
        },
        {
          name: 'Finland',
          countryCode: 'FI',
          email: 'tietosuoja@om.fi',
          website: 'http://www.tietosuoja.fi/en/',
          chairman: 'Ms Anu Talus'
        },
        {
          name: 'France',
          countryCode: 'FR',
          email: 'inforientation@cnil.fr',
          website: 'http://www.cnil.fr/|https://www.cnil.fr/en/contact-cnil',
          chairman: 'Ms Marie-Laure Denis'
        },
        {
          name: 'Germany',
          countryCode: 'DE',
          email: 'poststelle@bfdi.bund.de',
          website: 'http://www.bfdi.bund.de/',
          chairman: 'Mr Prof. Ulrich Kelber'
        },
        {
          name: 'Greece',
          countryCode: 'GR',
          email: 'contact@dpa.gr',
          website: 'http://www.dpa.gr/',
          chairman: 'Mr Konstantinos Menoudakos'
        },
        {
          name: 'Hungary',
          countryCode: 'HU',
          email: 'privacy@naih.hu',
          website: 'http://www.naih.hu/',
          chairman: 'Dr Attila Péterfalvi'
        },
        {
          name: 'Ireland',
          countryCode: 'IE',
          email: 'info@dataprotection.ie',
          website: 'http://www.dataprotection.ie/',
          chairman: 'Ms Helen Dixon'
        },
        {
          name: 'Italy',
          countryCode: 'IT',
          email: 'segreteria.stanzione@gpdp.it',
          website: 'http://www.garanteprivacy.it/',
          chairman: 'Prof. Pasquale Stanzione'
        },
        {
          name: 'Latvia',
          countryCode: 'LV',
          email: 'info@dvi.gov.lv',
          website: 'http://www.dvi.gov.lv/',
          chairman: 'Ms Jekaterina Macuka'
        },
        {
          name: 'Lithuania',
          countryCode: 'LT',
          email: 'ada@ada.lt',
          website: 'https://vdai.lrv.lt/',
          chairman: 'Mr Raimondas Andrijauskas'
        },
        {
          name: 'Luxembourg',
          countryCode: 'LU',
          email: 'info@cnpd.lu',
          website: 'http://www.cnpd.lu/',
          chairman: 'Ms Tine A. Larsen'
        },
        {
          name: 'Malta',
          countryCode: 'MT',
          email: 'idpc.info@idpc.org.mt',
          website: 'http://www.idpc.org.mt/',
          chairman: 'Mr Ian Deguara'
        },
        {
          name: 'Netherlands',
          countryCode: 'NL',
          email: 'privacy@autoriteitpersoonsgegevens.nl',
          website: 'https://autoriteitpersoonsgegevens.nl/',
          chairman: 'Mr Aleid Wolfsen',
          requestFormURL: 'https://autoriteitpersoonsgegevens.nl/nl/meldingsformulier-klachten',
        },
        {
          name: 'Poland',
          countryCode: 'PL',
          email: 'kancelaria@uodo.gov.pl|dwme@uodo.gov.pl',
          website: 'https://uodo.gov.pl/',
          chairman: 'Mr Jan Nowak'
        },
        {
          name: 'Portugal',
          countryCode: 'PT',
          email: 'geral@cnpd.pt',
          website: 'http://www.cnpd.pt/',
          chairman: 'Dr. Filipa CALVÃO'
        },
        {
          name: 'Romania',
          countryCode: 'RO',
          email: 'anspdcp@dataprotection.ro',
          website: 'http://www.dataprotection.ro/',
          chairman: 'Ms Ancuţa Gianina Opre'
        },
        {
          name: 'Slovakia',
          countryCode: 'SK',
          email: 'statny.dozor@pdp.gov.sk',
          website: 'http://www.dataprotection.gov.sk/',
          chairman: ''
        },
        {
          name: 'Slovenia',
          countryCode: 'SI',
          email: 'gp.ip@ip-rs.si',
          website: 'https://www.ip-rs.si/',
          chairman: 'Ms Mojca Prelesnik'
        },
        {
          name: 'Spain',
          countryCode: 'ES',
          email: 'internacional@aepd.es',
          website: 'https://www.aepd.es/',
          chairman: 'Ms María del Mar España Martí'
        },
        {
          name: 'Sweden',
          countryCode: 'SE',
          email: 'imy@imy.se',
          website: 'http://www.imy.se/',
          chairman: 'Ms Lena Lindgren Schelin'
        },
        {
          name: 'Iceland',
          countryCode: 'IS',
          email: 'postur@dpa.is',
          website: 'https://www.personuvernd.is/',
          chairman: 'Ms Helga Þórisdóttir'
        },
        {
          name: 'Liechtenstein',
          countryCode: 'LI',
          email: 'info.dss@llv.li',
          website: 'https://www.datenschutzstelle.li/',
          chairman: 'Dr Marie-Louise Gächter'
        },
        {
          name: 'Norway',
          countryCode: 'NO',
          email: 'postkasse@datatilsynet.no',
          website: 'https://www.datatilsynet.no/',
          chairman: 'Mr Bjørn Erik Thon'
        }
      ],
    },
    regulationURL: 'https://edpb.europa.eu/about-edpb/about-edpb/members_en',
    requestTypes: {
      DELETION: {
        name: 'erasure',
        article: 17,
        exceptions: (
          <FormattedMessage
            id="request.next.declineGDPR"
            defaultMessage="<ul><li>When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes).</li><li>When the organization is legally obliged to keep hold of your data.</li><li>When keeping hold of your data is necessary for reasons of public health.</li><li>When keeping your data is necessary for establishing, exercising or defending legal claims.</li><li>When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest.</li><li>If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the DPA, or through the courts.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        exceptionURL: 'https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/',
      },
      ACCESS: {
        name: 'SAR',
        article: 15,       
      }
    }
  },
  GDPRUK: {
    displayName: 'DPA',
    gepgraphy: 'UK',
    longName: 'Data Protection Act',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'ICO',
      longName: "Information Commissioner's Office",
      defualtAction: 'email',
      geographies: [
        {
          name: 'United Kingdom',
          countryCode: 'UK',
          email: 'dpo@ico.org.uk',
          website: 'https://ico.org.uk/',
          chairman: 'John Edwards'
        },
      ],      
    },
    regulationURL: 'https://publications.parliament.uk/pa/bills/lbill/2017-2019/0066/lbill_2017-20190066_en_1.htm',
    requestTypes: {
      DELETION: {
        name: 'erasure',
        article: 45,
        exceptions: (
          <FormattedMessage
            id="request.next.declineGDPR"
            defaultMessage="<ul><li>When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes).</li><li>When the organization is legally obliged to keep hold of your data.</li><li>When keeping hold of your data is necessary for reasons of public health.</li><li>When keeping your data is necessary for establishing, exercising or defending legal claims.</li><li>When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest.</li><li>If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the DPA, or through the courts.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),  
        exceptionURL: 'https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/',          
      },
      ACCESS: {
        name: 'access',
        article: 43,       
      }
    }
  },
  CCPA: {
    displayName: 'CCPA',
    gepgraphy: 'California',
    longName: 'California Consumer Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'CA AG',
      longName: 'California Attorney General',
      requestFormURL: 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company',
      defualtAction: 'form',
      geographies: [
        {
          name: 'California',
          countryCode: 'CA',
          email: 'PrivacyOffice@doj.ca.gov',
          website: 'https://www.oag.ca.gov/',
          chairman: 'Rob Nota'
        },
      ],
    },
    regulationURL: 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 105,
        exceptions: (
          <FormattedMessage
            id="request.next.declineCCPA"
            defaultMessage="<ul><li>Free speech or another right provided by law.</li><li>Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research.</li><li>Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity.</li><li>For complying with a legal obligation.</li><li>To perform a contract between the business and the consumer.</li><li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity.</li><li>Debug to identify and repair errors that impair existing intended functionality.</li><li>To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business.</li><li>Otherwise use the consumer’s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&nodeTreePath=8.4.45&lawCode=CIV',
      },
      ACCESS: {
        name: 'access',
        article: 110,        
      }
    }
  },
  LGPD: {
    displayName: 'LGPD',
    gepgraphy: 'Brazil',
    longName: 'Lei Geral de Proteção de Dados Pessoais',
    timeLimit: 15,
    escalation_timeLimit: 30,
    dpa: {
      shortName: 'ANPD',
      longName: 'Autoridade Nacional de Proteção de Dados',
      requestFormURL: 'https://falabr.cgu.gov.br/publico/Manifestacao/RegistrarManifestacao.aspx?idFormulario=4&tipo=1&origem=idp&modo=&orgaoDestinatario=235884&ouvidoria=2769&servico=&assunto=',
      defualtAction: 'email',
      geographies: [
        {
          name: 'Brasil',
          countryCode: 'BR',
          email: 'encarregado@anpd.gov.br',
          website: 'https://www.gov.br/anpd/pt-br',
          chairman: 'Thiago Guimaraes Moraes'
        },
      ],
    },
    regulationURL: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm',
    requestTypes: {
      DELETION: {
        name: 'eliminação',
        article: 18,
        exceptions: (
          <FormattedMessage
            id="request.next.declineLGPD"
            defaultMessage="<ul><li>Free speech or another right provided by law.</li><li>Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research.</li><li>Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity.</li><li>For complying with a legal obligation.</li><li>To perform a contract between the business and the consumer.</li><li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity.</li><li>Debug to identify and repair errors that impair existing intended functionality.</li><li>To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business.</li><li>Otherwise use the consumer’s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm',
      },
      ACCESS: {
        name: 'acesso',
        article: 18,        
      }
    }
  }

};

export default Regulations;


