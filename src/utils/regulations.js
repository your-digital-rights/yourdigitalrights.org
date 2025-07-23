import { FormattedMessage } from "react-intl";

const Regulations = {
  GDPR: {
    displayName: 'GDPR',
    geography: 'European Union',
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
          email: 'pasts@dvi.gov.lv',
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
    geography: 'UK',
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
          email: 'icocasework@ico.og.uk',
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
    geography: 'California',
    longName: 'California Consumer Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'CA AG',
      longName: 'California Privacy Protection Agency',
      requestFormURL: 'https://cppa.ca.gov/webapplications/complaint',
      defaultAction: 'email',
      geographies: [
        {
          name: 'California',
          countryCode: 'CA',
          email: 'info@cppa.ca.gov',
          website: 'https://cppa.ca.gov/',
          chairman: 'Rob Bonta'
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
        exceptionURL: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&lawCode=CIV',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 1798.110',        
      }
    } 
  },
  LGPD: {
    displayName: 'LGPD',
    geography: 'Brasil',
    longName: 'Lei Geral de Proteção de Dados Pessoais',
    timeLimit: 15,
    escalation_timeLimit: 30,
    dpa: {
      shortName: 'ANPD',
      longName: 'Autoridade Nacional de Proteção de Dados',
      requestFormURL: 'https://www.gov.br/secretariageral/pt-br/sei-peticionamento-eletronico',
      defaultAction: 'email',
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
    geography: 'Virginia',
    longName: 'Virginia Consumer Data Protection Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'VA AG',
      longName: 'Attorney General of Virginia',
      requestFormURL: 'https://www.oag.state.va.us/consumercomplaintform/form/start',
      defaultAction: 'email',
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
    geography: 'Canada',
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
    geography: '日本',
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
  CPA: {
    displayName: 'CPA',
    geography: 'Colorado',
    longName: 'Colorado Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'CO AG',
      longName: 'Attorney General of Colorado',
      requestFormURL: 'https://complaints.coag.gov/s/contact-us',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Colorado',
          countryCode: 'CO',
          email: 'attorney.general@coag.gov',
          website: 'https://coag.gov/',
          chairman: 'Phil Weiser'
        },
      ],
    },
    regulationURL: 'https://leg.colorado.gov/bills/sb21-190',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Subsection (1)(a)(IV)(C)(d)',
        exceptions: (
          <FormattedMessage
            id="request.next.declineCPA"
            defaultMessage="<ul><li>Financial institutions and affiliates subject to the Gramm-Leach-Bliley Act</li><li>Air carriers subject to Federal Aviation Administration regulation</li><li>National securities associations registered under the Securities Exchange Act</li><li>Certain types of personal data maintained in compliance with specific federal privacy laws, such the Health Insurance Portability and Accountability Act and the Fair Credit Reporting Act, or for certain governmental purposes.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://leg.colorado.gov/sites/default/files/2021a_190_signed.pdf',
      },
      ACCESS: {
        name: 'access',
        article: 'Subsection (1)(a)(IV)(C)(b)',        
      }
    } 
  }, 
  CTDPA: {
    displayName: 'CTDPA',
    geography: 'Connecticut',
    longName: 'Connecticut Data Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'CT AG',
      longName: 'Attorney General of Connecticut',
      requestFormURL: 'https://www.dir.ct.gov/ag/complaint/e-complaint.aspx',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Connecticut',
          countryCode: 'CT',
          email: 'attorney.general@ct.gov',
          website: 'https://portal.ct.gov/AG',
          chairman: 'William Tong'
        },
      ],
    },
    regulationURL: 'https://www.cga.ct.gov/asp/cgabillstatus/cgabillstatus.asp?selBillType=Bill&bill_num=SB00006&which_year=2022',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 4.3',
        exceptions: (
          <FormattedMessage
            id="request.next.declineCTDPA"
            defaultMessage="<ul><li>Entities including state and local governments, nonprofits, higher education institutions, certain national securities associations, financial institutions, and covered entities under specific acts, such as the Gramm-Leach-Bliley Act and the Health Insurance Portability and Accountability Act. are exempt</li><li>Protected health data</li><li>Employee data including job applicant data</li><li>De-identified data</li><li>Publicly available information</li><li>Aggregate information</li><li>Personal information collected for research of human subjects or as part of a clinical trial</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.cga.ct.gov/asp/cgabillstatus/cgabillstatus.asp?selBillType=Bill&bill_num=SB00006&which_year=2022',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 4.1',        
      }
    } 
  }, 
  UCPA: {
    displayName: 'UCPA',
    geography: 'Utah',
    longName: 'Utah Consumer Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'UT AG',
      longName: 'Attorney General of Utah',
      requestFormURL: 'https://www.attorneygeneral.utah.gov/contact/complaint-form/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Utah',
          countryCode: 'UT',
          email: 'uag@agutah.gov',
          website: 'https://www.attorneygeneral.utah.gov/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://le.utah.gov/~2022/bills/static/SB0227.html',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 13-61-201',
        exceptions: (
          <FormattedMessage
            id="request.next.declineUCPA"
            defaultMessage="<ul><li>Entities including state and local governments, nonprofits, higher education institutions, certain national securities associations, financial institutions, and covered entities under specific acts, such as the Gramm-Leach-Bliley Act and the Health Insurance Portability and Accountability Act. are exempt</li><li>Protected health data</li><li>Employee data including job applicant data</li><li>De-identified data</li><li>Publicly available information</li><li>Aggregate information</li><li>Personal information collected for research of human subjects or as part of a clinical trial</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://le.utah.gov/~2022/bills/static/SB0227.html',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 13-61-304',        
      }
    } 
  }, 
  TDPSA: {
    displayName: 'TDPSA',
    geography: 'Texas',
    longName: 'Texas Data Privacy and Security Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'TX AG',
      longName: 'Attorney General of Texas',
      requestFormURL: 'https://oag.my.salesforce-sites.com/CPDOnlineForm',
      defaultAction: 'form',
      geographies: [
        {
          name: 'Texas',
          countryCode: 'TX',
          email: '',
          website: 'https://www.texasattorneygeneral.gov/consumer-protection',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://capitol.texas.gov/BillLookup/Text.aspx?LegSess=88R&Bill=HB4',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 541.051.A.b.3',
        exceptions: (
          <FormattedMessage
            id="request.next.declineTDPSA"
            defaultMessage="Entities including state and local governments, nonprofits, higher education institutions, certain national securities associations, financial institutions, and covered entities under specific acts, such as the Gramm-Leach-Bliley Act and the Health Insurance Portability and Accountability Act. are exempt."
          />
        ),          
        exceptionURL: 'https://capitol.texas.gov/tlodocs/88R/billtext/html/HB00004F.htm',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 541.051.A.b.4',        
      }
    } 
  }, 
  OPCA: {
    displayName: 'OPCA',
    geography: 'Oregon',
    longName: 'Oregon Consumer Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'OR AG',
      longName: 'Attorney General of Oregon',
      requestFormURL: 'https://justice.oregon.gov/consumercomplaints/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Oregon',
          countryCode: 'OR',
          email: 'help@oregonconsumer.gov',
          website: 'https://www.doj.state.or.us/oregon-department-of-justice/office-of-the-attorney-general/office-of-the-attorney-general/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://olis.oregonlegislature.gov/liz/2023R1/Downloads/MeasureDocument/SB619/Enrolled',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 3.1.c',
        exceptions: (
          <FormattedMessage
            id="request.next.declineOPCA"
            defaultMessage="Entities including state and local governments, nonprofits, higher education institutions, certain national securities associations and financial institutions are exempt. In addition, some types of data are exempt:<ul><li>Protected health data</li><li>Employee data including job applicant data</li><li>De-identified data</li><li>Publicly available information</li><li>Aggregate information</li><li>Personal information collected for research of human subjects or as part of a clinical trial</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://olis.oregonlegislature.gov/liz/2023R1/Downloads/PublicTestimonyDocument/59856',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 3.1.a',        
      }
    } 
  }, 

  FDBR: {
    displayName: 'FDBR',
    geography: 'Florida',
    longName: 'Florida Digital Bill of Rights',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'FL AG',
      longName: 'Attorney General of Florida',
      requestFormURL: 'https://legacy.myfloridalegal.com/Contact.nsf/DBOR?OpenForm',
      defaultAction: 'form',
      geographies: [
        {
          name: 'Florida',
          countryCode: 'FL',
          email: 'oag.civil.eserve@myfloridalegal.com',
          website: 'myfloridalegal.com',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://www.flsenate.gov/Session/Bill/2023/262/BillText/er/HTML',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 501.705 2c',
        exceptions: (
          <FormattedMessage
            id="request.next.declineFDBR"
            defaultMessage="<ul><il>(a) Comply with federal or state laws, rules, or regulations.</il><il>(b) Comply with a civil, criminal, or regulatory inquiry, investigation, subpoena, or summons by federal, state, local, or other governmental authorities.</il><il>(c) Investigate, establish, exercise, prepare for, or defend legal claims.</il><il>(d) Provide a product or service specifically requested by a consumer or the parent or guardian of a child, perform a contract to which the consumer is a party, including fulfilling the terms of a written warranty, or take steps at the request of the consumer before entering into a contract.</il><il>(e) Take immediate steps to protect an interest that is essential for the life or physical safety of the consumer or of another individual and in which the processing cannot be manifestly based on another legal basis.</il><il>(f) Prevent, detect, protect against, or respond to security incidents, identity theft, fraud, harassment, malicious or deceptive activities, or any illegal activity.</il><il>(g) Preserve the integrity or security of systems or investigate, report, or prosecute those responsible for breaches of system security.</il><il>(h) Engage in public or peer-reviewed scientific or statistical research in the public interest which adheres to all other applicable ethics and privacy laws and is approved, monitored, and governed by an institutional review board or similar independent oversight entity that determines: 1. Whether the deletion of the information is likely to provide substantial benefits that do not exclusively accrue to the controller; 2. Whether the expected benefits of the research outweigh the privacy risks; and 3. Whether the controller has implemented reasonable safeguards to mitigate privacy risks associated with research, including any risks associated with reidentification.</il><il>(i) Assist another controller, processor, or third party in complying with the requirements of this part.</il><il>(j) Disclose personal data disclosed when a consumer uses or directs the controller to intentionally disclose information to a third party or uses the controller to intentionally interact with a third party. An intentional interaction occurs when the consumer intends to interact with the third party, by one or more deliberate interactions. Hovering over, muting, pausing, or closing a given piece of content does not constitute a consumer’s intent to interact with a third party.</il><il>(k) Transfer personal data to a third party as an asset that is part of a merger, an acquisition, a bankruptcy, or other transaction in which the third party assumes control of all or part of the controller, provided that the information is used or shared in a manner consistent with this part. If a third party materially alters how it uses or shares the personal data of a consumer in a manner that is materially inconsistent with the commitments or promises made at the time of collection, it must provide prior notice of the new or changed practice to the consumer. The notice must be sufficiently prominent and robust to ensure that consumers can easily exercise choices consistent with this part.</il></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.flsenate.gov/Session/Bill/2023/262/BillText/er/HTML',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 501.705 2a',        
      }
    } 
  }, 

  DPDPA: {
    displayName: 'DPDPA',
    geography: 'India',
    longName: 'Digital Personal Data Protection Act',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'DPBI',
      longName: 'Data Protection Board of India',
      requestFormURL: 'https://pgportal.gov.in/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'India',
          countryCode: 'IN',
          email: 'grievance-it@meity.gov.in',
          website: 'https://www.meity.gov.in/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://dpdpa.in/',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 12',
        exceptions: (
          <FormattedMessage
            id="request.next.declineDPDPA"
            defaultMessage="<ul><li>(a) the processing of personal data is necessary for enforcing any legal right or claim;</li><li>(b) the processing of personal data by any court or tribunal or any other body in India which is entrusted by law with the performance of any judicial or quasi-judicial or regulatory or supervisory function, where such processing is necessary for the performance of such function;</li><li>(c) personal data is processed in the interest of prevention, detection, investigation or prosecution of any offence or contravention of any law for the time being in force in India;</li><li>(d) personal data of Data Principals not within the territory of India is processed pursuant to any contract entered into with any person outside the territory of India by any person based in India;</li><li>(e) the processing is necessary for a scheme of compromise or arrangement or merger or amalgamation of two or more companies or a reconstruction by way of demerger or otherwise of a company, or transfer of undertaking of one or more company to another company, or involving division of one or more companies, approved by a court or tribunal or other authority competent to do so by any law for the time being in force; and</li><li>(f) the processing is for the purpose of ascertaining the financial information and assets and liabilities of any person who has defaulted in payment due on account of a loan or advance taken from a financial institution, subject to such processing being in accordance with the provisions regarding disclosure of information or data in any other law for the time being in force.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 11',        
      }
    } 
  }, 

  FADP: {
    displayName: 'FADP',
    geography: 'Switzerland',
    longName: 'Federal Act on Data Protection',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'FDPIC',
      longName: 'Federal Data Protection Commissioner',
      requestFormURL: 'https://www.edoeb.admin.ch/edoeb/de/home/deredoeb/kontakt/anzeigeformular_betroffene.html',
      defaultAction: 'form',
      geographies: [
        {
          name: 'Switzerland',
          countryCode: 'CH',
          email: '',
          website: 'https://www.edoeb.admin.ch/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://www.fedlex.admin.ch/eli/fga/2020/1998/it',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Article 32',
        exceptions: (
          <FormattedMessage
            id="request.next.declineFADP"
            defaultMessage="The controller may refuse to provide information, or restrict or delay the provision of information if:<ul><li>a. a formal law so provides, in particular in order to preserve professional secrecy;</li><li>b. this is required to safeguard overriding third-party interests; or</li><li>c. the request for information is obviously unjustified, in particular if does not serve the purpose of data protection or is clearly frivolous.</li></ul><br/>Furthermore, it is possible to refuse, restrict or delay the provision of information in the following cases:<ul><li>a. The controller is a private person and the following requirements are satisfied: 1. The controller's own overriding interests require the measure. 2. The controller does not intend to disclose the personal data to third parties.</li><li>b. The controller is a federal body, and one of the following requirements is satisfied: 1. The measure is required to satisfy overriding public interests, in particular Switzerland's internal or external security. 2. The communication of the information may compromise an enquiry, an investigation or administrative or judicial proceedings.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.fedlex.admin.ch/eli/fga/2020/1998/it',
      },
      ACCESS: {
        name: 'access',
        article: 'Article 25',        
      }
    } 
  },   

  MTCDPA: {
    displayName: 'MTCDPA',
    geography: 'Montana',
    longName: 'Montana Consumer Data Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'MT AG',
      longName: 'Attorney General of Montana',
      requestFormURL: 'https://app.doj.mt.gov/OCPPortal/?q=node/395/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Montana',
          countryCode: 'MT',
          email: 'contactocp@mt.gov',
          website: 'https://dojmt.gov',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://leg.mt.gov/bills/2023/billpdf/SB0384.pdf',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 5.1d',
        exceptions: (
          <FormattedMessage
            id="request.next.declineMTCDPA"
            defaultMessage="<ul><li>Entities including state and local governments, nonprofits, higher education institutions, certain national securities associations, financial institutions, and covered entities under specific acts, such as the Gramm-Leach-Bliley Act and the Health Insurance Portability and Accountability Act. are exempt</li><li>Protected health data</li><li>Employee data including job applicant data</li><li>De-identified data</li><li>Publicly available information</li><li>Aggregate information</li><li>Personal information collected for research of human subjects or as part of a clinical trial</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://leg.mt.gov/bills/2023/billpdf/SB0384.pdf',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 5.1a',        
      }
    } 
  }, 

  ICDPA : {
    displayName: 'ICDPA',
    geography: 'Iowa',
    longName: 'Iowa Consumer Data Protection Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'IA AG',
      longName: 'Attorney General of Iowa',
      requestFormURL: 'https://www.iowaattorneygeneral.gov/for-consumers/file-a-consumer-complaint',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Iowa',
          countryCode: 'IA',
          email: 'consumer@ag.iowa.gov',
          website: 'ag.iowa.gov',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://www.legis.iowa.gov/docs/publications/LGE/90/SF262.pdf',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 715D.3 1.b',
        exceptions: (
          <FormattedMessage
            id="request.next.declineICDPA"
            defaultMessage="<ul><li>Pseudonymous data</li><li>De-identified data</li><li>Publicly available information</li><li>Public or peer-reviewed scientific research</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.legis.iowa.gov/docs/publications/LGE/90/SF262.pdf',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 715D.3 1.c',        
      }
    } 
  }, 


  DPDP: {
    displayName: 'DPDP',
    geography: 'Delaware',
    longName: 'Delaware Personal Data Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'DE AG',
      longName: 'Attorney General of Delaware',
      requestFormURL: 'https://attorneygeneral.delaware.gov/fraud/cmu/complaint/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Delaware',
          countryCode: 'DE',
          email: 'consumer.protection@delaware.gov',
          website: 'https://attorneygeneral.delaware.gov',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://legis.delaware.gov/json/BillDetail/GenerateHtmlDocumentEngrossment?engrossmentId=35877&docTypeId=6',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: '§ 12D-104 a.3',
        exceptions: (
          <FormattedMessage
            id="request.next.declineDPDP"
            defaultMessage="<ul><li>Provide a product or service specifically requested by the consumer.</li><li>Perform certain internal operations that reasonably align with consumer expectations.</li><li>Issue a product recall or repair technical errors.</li><li>Respond to and prevent security incidents, identity theft, and fraud.</li><li>Comply with federal, state, or local law.</li><li>Pseudonymous data.</li><li>De-identified data.</li><li>Publicly available information.</li><li>Public or peer-reviewed scientific research.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://attorneygeneral.delaware.gov/fraud/personal-data-privacy-portal/frequently-asked-questions/',
      },
      ACCESS: {
        name: 'access',
        article: '§ 12D-104 a.4',      
      }
    } 
  }, 

  NHDPA: {
    displayName: 'NHDPA',
    geography: 'New Hampshire',
    longName: 'New Hampshire Data Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'NH AG',
      longName: 'Attorney General of New Hampshire',
      requestFormURL: 'https://app.doj.mt.gov/OCPPortal/?q=node/395/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'New Hampshire',
          countryCode: 'NH',
          email: 'CPB-DOJ@doj.nh.gov',
          website: 'https://www.doj.nh.gov/index.htm',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://www.gencourt.state.nh.us/rsa/html/LII/507-H/507-H-mrg.htm',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 507-H:4 1.c',
        exceptions: (
          <FormattedMessage
            id="request.next.declineNHDPA"
            defaultMessage="<ul><li>Pseudonymous data</li><li>De-identified data</li><li>Publicly available information</li><li>Public or peer-reviewed scientific research</li><li>Protected health data</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.gencourt.state.nh.us/rsa/html/LII/507-H/507-H-mrg.htm',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 507-H:4 1.d',        
      }
    } 
  }, 

  NDPA: {
    displayName: 'NDPA',
    geography: 'Nebraska',
    longName: 'Nebraska Data Privacy Act',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'NE AG',
      longName: 'Attorney General of Nebraska',
      requestFormURL: 'https://www.nebraska.gov/apps-ago-complaints/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'Nebraska',
          countryCode: 'NE',
          email: 'ago.info.help@nebraska.gov',
          website: 'https://ago.nebraska.gov/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://nebraskalegislature.gov/FloorDocs/108/PDF/Slip/LB1074.pdf',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 7.2.c',
        exceptions: (
          <FormattedMessage
            id="request.next.declineNDPA"
            defaultMessage="<ul><li>Pseudonymous data</li><li>De-identified data</li><li>Publicly available information</li><li>Public or peer-reviewed scientific research</li><li>Protected health data</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://nebraskalegislature.gov/FloorDocs/108/PDF/Slip/LB1074.pdf',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 7.2.d',        
      }
    } 
  }, 

  NJDPL: {
    displayName: 'NJDPL',
    geography: 'New Jersey',
    longName: 'New Jersey Data Privacy Law',
    timeLimit: 45,
    escalation_timeLimit: 90,
    dpa: {
      shortName: 'NJ AG',
      longName: 'Attorney General of New Jersey',
      requestFormURL: 'https://njconsumeraffairs.nj.gov/file-a-complaint/',
      defaultAction: 'email',
      geographies: [
        {
          name: 'New Jersey',
          countryCode: 'NJ',
          email: 'askconsumeraffairs@dca.njoag.gov',
          website: 'https://www.njoag.gov/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'https://pub.njleg.state.nj.us/Bills/2022/S0500/332_R6.PDF',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 'Section 7.a.3',
        exceptions: (
          <FormattedMessage
            id="request.next.declineNJDPL"
            defaultMessage="<ul><li>Pseudonymous data</li><li>De-identified data</li><li>Publicly available information</li><li>Public or peer-reviewed scientific research</li><li>Protected health data</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),          
        exceptionURL: 'https://www.njconsumeraffairs.gov/ocp/Pages/NJ-Data-Privacy-Law-FAQ.aspx',
      },
      ACCESS: {
        name: 'access',
        article: 'Section 7.a.4',        
      }
    } 
  }, 

  PIPL: {
    displayName: 'PIPL',
    geography: '中国',
    longName: '个人信息保护法',
    timeLimit: 30,
    escalation_timeLimit: 60,
    dpa: {
      shortName: 'CAC',
      longName: '国家互联网信息办公室',
      requestFormURL: 'https://www.12377.cn/qql/qqljb.html',
      defaultAction: 'email',
      geographies: [
        {
          name: '中国',
          countryCode: 'CN',
          email: 'jubao@12377.cn',
          website: 'https://www.12377.cn/',
          chairman: ''
        },
      ],
    },
    regulationURL: 'http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html',
    requestTypes: {
      DELETION: {
        name: '删除',
        article: '第47条',
        exceptions: (
          <FormattedMessage
            id="request.next.declinePIPL"
            defaultMessage="个人信息处理者处理个人信息的，在法律、行政法规规定应当保密或者不需要通知的情况下，可以不向个人通知前条第一款规定的事项。"
          />
        ),          
        exceptionURL: 'http://www.npc.gov.cn/npc/c2/c30834/202108/t20210820_313088.html',
      },
      ACCESS: {
        name: '审查和复制',
        article: '第45条',        
      }
    } 
  }, 

  "POPIA": {
    "displayName": "POPIA",
    "geography": "South Africa",
    "longName": "Protection of Personal Information Act",
    "timeLimit": 30,
    "escalation_timeLimit": 60,
    "dpa": {
      "shortName": "IR",
      "longName": "Information Regulator",
      "requestFormURL": "https://inforegulator.org.za/popia/",
      "defaultAction": "email",
      "geographies": [
        {
          "name": "South Africa",
          "countryCode": "ZA",
          "email": "PAIAComplaints@inforegulator.org.za",
          "website": "https://inforegulator.org.za",
          "chairman": ""
        }
      ]
    },
    "regulationURL": "https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013popi.pdf",
    "requestTypes": {
      "DELETION": {
        "name": "deletion",
        "article": "Section 24",
        "exceptions": (
          <FormattedMessage
            id="request.next.declinePOPIA"
            defaultMessage="<ul><li>Personal or household activity</li><li>Fully de-identified data</li><li>National-security</li><li>Law-enforcement</li><li>By the Cabinet and its committees or the Executive Council of a province</li><li>Relating to the judicial functions of a court referred to in section 166 of the Constitution.</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        "exceptionURL": "https://popia.co.za/section-6-exclusions/"
      },
      "ACCESS": {
        "name": "access",
        "article": "Section 23"
      }
    }
  },

  "TIPA": {
    "displayName": "TIPA",
    "geography": "Tennessee",
    "longName": "Tennessee Information Protection Act",
    "timeLimit": 45,
    "escalation_timeLimit": 90,
    "dpa": {
      "shortName": "TN AG",
      "longName": "Attorney General of Tennessee",
      "requestFormURL": "https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/file-a-complaint.html",
      "defaultAction": "email",
      "geographies": [
        {
          "name": "Tennessee",
          "countryCode": "TN",
          "email": "consumer.affairs@ag.tn.gov",
          "website": "https://www.tn.gov/attorneygeneral.html",
          "chairman": ""
        }
      ]
    },
    "regulationURL": "https://www.capitol.tn.gov/Bills/113/Bill/HB1181.pdf",
    "requestTypes": {
      "DELETION": {
        "name": "deletion",
        "article": "Section 47‑18‑3203(a)(2)(C)",
        "exceptions": (
          <FormattedMessage
            id="request.next.declineTIPA"
            defaultMessage="<ul><li>Government entities and political subdivisions</li><li>Covered entities and business associates subject to HIPAA/HITECH</li><li>Financial institutions and affiliates subject to the Gramm‑Leach‑Bliley Act (GLBA)</li><li>Institutions of higher education</li><li>Non‑profit organizations</li><li>Insurance companies licensed under Tennessee law</li><li>Personal data regulated by the Fair Credit Reporting Act (FCRA)</li><li>Employment‑related or commercial‑context personal data</li><li>Publicly available, aggregated or de‑identified data</li><li>Personal data regulated by FERPA or COPPA</li><li>Patient safety work product and other health data exempted under federal law</li><li>Scientific or statistical research data meeting statutory safeguards</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        "exceptionURL": "https://www.capitol.tn.gov/Bills/113/Bill/HB1181.pdf"
      },
      "ACCESS": {
        "name": "access",
        "article": "Section 47‑18‑3203(a)(2)(A)"
      }
    }
  },

  "MCDPA": {
    "displayName": "MCDPA",
    "geography": "Minnesota",
    "longName": "Minnesota Consumer Data Privacy Act",
    "timeLimit": 45,
    "escalation_timeLimit": 90,
    "dpa": {
      "shortName": "MN AG",
      "longName": "Attorney General of Minnesota",
      "requestFormURL": "https://www.ag.state.mn.us/office/complaint.asp",
      "defaultAction": "form",
      "geographies": [
        {
          "name": "Minnesota",
          "countryCode": "MN",
          "email": '',
          "website": "https://www.ag.state.mn.us/",
          "chairman": ""
        }
      ]
    },
    "regulationURL": "https://www.revisor.mn.gov/bills/text.php?number=SF2915&version=latest&session_year=2023&session_number=0",
    "requestTypes": {
      "DELETION": {
        "name": "deletion",
        "article": "Section 6.325O(1)(d)",
        "exceptions": (
          <FormattedMessage
            id="request.next.declineMCDPA"
            defaultMessage="<ul><li>Government entities</li><li>Federally recognised Indian tribes</li><li>Covered entities and business associates under HIPAA</li><li>State or federally chartered banks or credit unions</li><li>Insurance companies</li><li>Small businesses as defined by the U.S. Small Business Administration</li><li>Non‑profits established solely to detect or prevent insurance fraud</li><li>Personal data regulated by GLBA or FCRA</li><li>Employment‑context or job‑applicant personal data, benefits and emergency contact data</li><li>De‑identified or publicly available data</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        "exceptionURL": "https://www.revisor.mn.gov/bills/text.php?number=SF2915&version=latest&session_year=2023&session_number=0"
      },
      "ACCESS": {
        "name": "access",
        "article": "Section 6.325O(1)(b)"
      }
    }
  },

  "PDPL": {
    "displayName": "PDPL",
    "geography": "Jordan",
    "longName": "Personal Data Protection Law",
    "timeLimit": 30,
    "escalation_timeLimit": 60,
    "dpa": {
      "shortName": "PDPC",
      "longName": "Personal Data Protection Council",
      "requestFormURL": "https://jordan.gov.jo/en/custompages/onyourservice",
      "defaultAction": "email",
      "geographies": [
        {
          "name": "Jordan",
          "countryCode": "JO",
          "email": "modee@modee.gov.jo",
          "website": "https://www.modee.gov.jo/EN/Pages/Personal_Data_Protection_Council",
          "chairman": ""
        }
      ]
    },
    "regulationURL": "https://www.modee.gov.jo/ebv4.0/root_storage/en/eb_list_page/pdpl.pdf",
    "requestTypes": {
      "DELETION": {
        "name": "erasure",
        "article": "Article 4 (B)(5)",
        "exceptions": (
          <FormattedMessage
            id="request.next.declinePDPL"
            defaultMessage="<ul><li>Processing of personal data by a natural person for purely personal purposes</li><li>Processing carried out directly by a competent public authority to perform its statutory tasks</li><li>Processing necessary for national security or public order purposes</li><li>Processing without consent in the banking and financial sector as permitted by law</li><li>Processing by security services for national interest objectives</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        "exceptionURL": "https://www.modee.gov.jo/ebv4.0/root_storage/en/eb_list_page/pdpl.pdf"
      },
      "ACCESS": {
        "name": "access",
        "article": "Article 4 (B)(1)"
      }
    }
  },
  
  "PDPA": {
    "displayName": "PDPA",
    "geography": "Thailand",
    "longName": "Personal Data Protection Act",
    "timeLimit": 30,
    "escalation_timeLimit": 60,
    "dpa": {
      "shortName": "PDPC",
      "longName": "Personal Data Protection Committee",
      "requestFormURL": "https://complaint.pdpc.or.th/",
      "defaultAction": "email",
      "geographies": [
        {
          "name": "Thailand",
          "countryCode": "TH",
          "email": "saraban@pdpc.or.th",
          "website": "https://www.pdpc.or.th/",
          "chairman": ""
        }
      ]
    },
    "regulationURL": "https://mdes.go.th/law/detail/3577-Personal-Data-Protection-Act-B-E--2562--2019-",
    "requestTypes": {
      "DELETION": {
        "name": "erasure",
        "article": "Section 33",
        "exceptions": (
          <FormattedMessage
            id="request.next.declinePDPA"
            defaultMessage="<ul><li>Personal data processed for personal or household activities</li><li>Processing by state authorities related to national security, public safety or taxation</li><li>Processing for journalistic, artistic or literary purposes in the public interest</li><li>Processing by the House of Representatives, Senate, Parliament or their committees</li><li>Processing by courts and judicial officers within their duties</li><li>Processing by credit bureaus and their members under the Credit Information Business Act</li></ul>"
            values={{
              ul: txt => (<ul>{txt}</ul>),
              li: txt => (<li>{txt}</li>),
            }}
          />
        ),
        "exceptionURL": "https://pdpathailand.com/pdpa/content_eng/article4_eng.php"
      },
      "ACCESS": {
        "name": "access",
        "article": "Section 30"
      }
    }
  }
};

export default Regulations;


