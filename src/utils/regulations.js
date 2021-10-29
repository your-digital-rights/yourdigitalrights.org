const Regulations = {
  GDPR: {
    displayName: 'GDPR',
    gepgraphy: 'European Union',
    longName: 'General Data Protection Regulation',
    timeLimit: 30,
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
    exceptionInfo: 'https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/',
    requestTypes: {
      DELETION: {
        name: 'erasure',
        article: 17,
      },
      ACCESS: {
        name: 'SAR',
        article: 15,       
      }
    }
  },
  GDPRUK: {
    displayName: 'GDPR',
    gepgraphy: 'UK',
    longName: 'General Data Protection Regulation',
    timeLimit: 30,
    dpa: {
      shortName: 'DPA',
      longName: 'Data Protection Agency',
      defualtAction: 'email',
    },
    regulationURL: 'https://edpb.europa.eu/about-edpb/about-edpb/members_en',
    exceptionInfo: 'https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/',    
    requestTypes: {
      DELETION: {
        name: 'erasure',
        article: 17,
      },
      ACCESS: {
        name: 'access',
        article: 15,       
      }
    }
  },
  CCPA: {
    displayName: 'CCPA',
    gepgraphy: 'California',
    longName: 'California Consumer Privacy Act',
    timeLimit: 45,
    dpa: {
      shortName: 'CA AG',
      longName: 'California Attorney General',
      requestFormURL: 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company',
      defualtAction: 'form',
    },
    regulationURL: 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company',
    exceptionInfo: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&lawCode=CIV',
    requestTypes: {
      DELETION: {
        name: 'deletion',
        article: 105,
      },
      ACCESS: {
        name: 'access',
        article: 110,        
      }
    }
  }
};

export default Regulations;


