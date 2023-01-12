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
      defaultAction: 'email',
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
        article: 'Article 17',
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
        article: 'Article 15',       
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
      defaultAction: 'email',
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
        article: 'Article 45',
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
        article: 'Article 43',       
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
      longName: 'Attorney General of California',
      requestFormURL: 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company',
      defaultAction: 'form',
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
        article: 'Section 1798.105',
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
        article: 'Section 1798.110',        
      }
    } 
  },
  LGPD: {
    displayName: 'LGPD',
    gepgraphy: 'Brasil',
    longName: 'Lei Geral de Proteção de Dados Pessoais',
    timeLimit: 15,
    escalation_timeLimit: 30,
    dpa: {
      shortName: 'ANPD',
      longName: 'Autoridade Nacional de Proteção de Dados',
      requestFormURL: 'https://www.gov.br/secretariageral/pt-br/sei-peticionamento-eletronico',
      defaultAction: 'form',
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
        article: 'Artigo 18',
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
        article: 'Artigo 18',        
      }
    }
  },
  VCDPA: {
    displayName: 'VCDPA',
    gepgraphy: 'Virginia',
    longName: 'Virginia Consumer Data Protection Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'VA AG',
      longName: 'Attorney General of Virginia',
      requestFormURL: 'https://www.oag.state.va.us/consumercomplaintform/form/start',
      defaultAction: 'form',
      geographies: [
        {
          name: 'Virginia',
          countryCode: 'VA',
          email: 'mailoag@oag.state.va.us',
          website: 'https://www.oag.state.va.us/consumer-protection/index.php',
          chairman: 'Jason Miyares'
        },
      ],
    },
    regulationURL: 'https://law.lis.virginia.gov/vacode/title59.1/chapter53/',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 59.1-577(A)(3)',
        exceptions: (
          <FormattedMessage
            id="request.next.declineVCDPA"
            defaultMessage="<ul><li>Protected health information under HIPAA;</li><li>Health records for purposes of Title 32.1;</li><li>Patient identifying information for purposes of 42 U.S.C. § 290dd-2;</li><li>Identifiable private information for purposes of the federal policy for the protection of human subjects under 45 C.F.R. Part 46; identifiable private information that is otherwise information collected as part of human subjects research pursuant to the good clinical practice guidelines issued by The International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use; the protection of human subjects under 21 C.F.R. Parts 6, 50, and 56, or personal data used or shared in research conducted in accordance with the requirements set forth in this chapter, or other research conducted in accordance with applicable law;</li> <li>Information and documents created for purposes of the federal Health Care Quality Improvement Act of 1986 (42 U.S.C. § 11101 et seq.);</li><li>Patient safety work product for purposes of the federal Patient Safety and Quality Improvement Act (42 U.S.C. § 299b-21 et seq.);</li><li>Information derived from any of the health care-related information listed in this subsection that is de-identified in accordance with the requirements for de-identification pursuant to HIPAA;</li><li>Information originating from, and intermingled to be indistinguishable with, or information treated in the same manner as information exempt under this subsection that is maintained by a covered entity or business associate as defined by HIPAA or a program or a qualified service organization as defined by 42 U.S.C. § 290dd-2;</li><li>Information used only for public health activities and purposes as authorized by HIPAA;</li><li>The collection, maintenance, disclosure, sale, communication, or use of any personal information bearing on a consumer's credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living by a consumer reporting agency or furnisher that provides information for use in a consumer report, and by a user of a consumer report, but only to the extent that such activity is regulated by and authorized under the federal Fair Credit Reporting Act (15 U.S.C. § 1681 et seq.);</li> <li>Personal data collected, processed, sold, or disclosed in compliance with the federal Driver's Privacy Protection Act of 1994 (18 U.S.C. § 2721 et seq.);</li><li>Personal data regulated by the federal Family Educational Rights and Privacy Act (20 U.S.C. § 1232g et seq.);</li> <li>Personal data collected, processed, sold, or disclosed in compliance with the federal Farm Credit Act (12 U.S.C. § 2001 et seq.);</li><li>Data processed or maintained (i) in the course of an individual applying to, employed by, or acting as an agent or independent contractor of a controller, processor, or third party, to the extent that the data is collected and used within the context of that role; (ii) as the emergency contact information of an individual under this chapter used for emergency contact purposes; or (iii) that is necessary to retain to administer benefits for another individual relating to the individual under clause (i) and used for the purposes of administering those benefits.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://law.lis.virginia.gov/vacode/title59.1/chapter53/section59.1-576/',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 59.1-577(A)(1)',        
      }
    } 
  },
  PIPEDA: {
    displayName: 'PIPEDA',
    gepgraphy: 'Canada',
    longName: 'Personal Information Protection and Electronic Documents Act',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'OPC',
      longName: 'Office of the Privacy Commissioner of Canada',
      requestFormURL: 'https://plainte-complaint.priv.gc.ca/en/register-pipeda',
      defaultAction: 'form',
      geographies: [
        {
          name: 'Canada',
          countryCode: 'CA',
          email: 'info@priv.gc.ca',
          website: 'https://www.priv.gc.ca/en/contact-the-opc/',
        },
      ],
    },
    regulationURL: 'https://laws-lois.justice.gc.ca/eng/acts/P-8.6/page-1.html',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Schedule 1, Principle 9',
        exceptions: (
          <FormattedMessage
            id="request.next.declinePIPEDA"
            defaultMessage="<ul><li>Exceptions to the access requirement should be limited and specific.</li><li>The reasons for denying access should be provided to the individual upon request.</li><li>Exceptions may include information that is prohibitively costly to provide, information that contains references to other individuals, information that cannot be disclosed for legal, security, or commercial proprietary reasons, and information that is subject to solicitor-client or litigation privilege.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://laws-lois.justice.gc.ca/eng/acts/P-8.6/page-7.html#h-417659',
      },
      ACCESS: {
        name: 'access',
        article: 'Schedule 1, Principle 9',        
      }
    } 
  },  
  APPI: {
    displayName: 'APPI',
    gepgraphy: '日本',
    longName: '個人情報の保護に関する法律',
    timeLimit: 14,
    escalation_timeLimit: 28,
    dpa: {
      shortName: '委員会',
      longName: '個人情報保護委員会',
      requestFormURL: 'https://www.ppc.go.jp/personalinfo/pipldial/',
      phoneNumber: '03-6457-9849',
      defaultAction: 'phone',
      geographies: [
        {
          name: 'Japan',
          countryCode: 'JP',
          email: '',
          website: 'https://www.ppc.go.jp/',
        },
      ],
    },
    regulationURL: 'https://elaws.e-gov.go.jp/document?lawid=415AC0000000057',
    requestTypes: {
      DELETION: {
        name: '利用停止等請求',
        article: '第三十条',
        exceptions: (
          <FormattedMessage
            id="request.next.declineAPPI"
            defaultMessage="<ul><li>Any personal data whose known presence or absence of a database is likely to threaten the life, body, or property of the identifiable person;</li><li>Any personal data whose known presence or absence of a database is likely to prompt or trigger an illegal activity or wrongful conduct;</li><li>Any personal data whose known presence or absence of a database is likely to undermine national security, damage a relationship of confidence with a foreign country or international organization, or put the country at a disadvantage in negotiations with another country or with an international organization;</li><li>Any personal data whose known presence or absence of a database is likely to interfere with crime prevention, crime control, or criminal investigations or with otherwise upholding public safety and order.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://elaws.e-gov.go.jp/document?lawid=415CO0000000507',
      },
      ACCESS: {
        name: '開示請求',
        article: '第二十八条',        
      }
    } 
  },  
 
};

export default Regulations;


