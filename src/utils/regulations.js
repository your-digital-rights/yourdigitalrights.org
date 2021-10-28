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
          email: 'dsb@dsb.gv.at',
          website: 'http://www.dsb.gv.at/',
          chairman: 'Dr Andrea Jelinek'
        },
        {
          name: 'Belgium',
          email: 'contact@apd-gba.be',
          website: 'https://www.autoriteprotectiondonnees.be/',
          chairman: 'Mr David Stevens'
        },
        {
          name: 'Bulgaria',
          email: 'kzld@cpdp.bg',
          website: 'https://www.cpdp.bg/',
          chairman: 'Mr Ventsislav Karadjov'
        },
        {
          name: 'Croatia',
          email: 'azop@azop.hr',
          website: 'http://www.azop.hr/',
          chairman: 'Mr Zdravko Vukić'
        },
        {
          name: 'Cyprus',
          email: 'commissioner@dataprotection.gov.cy',
          website: 'http://www.dataprotection.gov.cy/',
          chairman: 'Ms Irene Loizidou Nikolaidou'
        },
        {
          name: 'Czech Republic',
          email: 'posta@uoou.cz',
          website: 'http://www.uoou.cz/',
          chairman: 'Mr Jiří KAUCKÝ'
        },
        {
          name: 'Denmark',
          email: 'dt@datatilsynet.dk',
          website: 'http://www.datatilsynet.dk/',
          chairman: 'Ms Cristina Angela GULISANO'
        },
        {
          name: 'Estonia',
          email: 'info@aki.ee',
          website: 'http://www.aki.ee/',
          chairman: 'Ms Pille Lehis'
        },
        {
          name: 'Finland',
          email: 'tietosuoja@om.fi',
          website: 'http://www.tietosuoja.fi/en/',
          chairman: 'Ms Anu Talus'
        },
        {
          name: 'France',
          email: 'inforientation@cnil.fr',
          website: 'http://www.cnil.fr/|https://www.cnil.fr/en/contact-cnil',
          chairman: 'Ms Marie-Laure Denis'
        },
        {
          name: 'Germany',
          email: 'poststelle@bfdi.bund.de',
          website: 'http://www.bfdi.bund.de/',
          chairman: 'Mr Prof. Ulrich Kelber'
        },
        {
          name: 'Greece',
          email: 'contact@dpa.gr',
          website: 'http://www.dpa.gr/',
          chairman: 'Mr Konstantinos Menoudakos'
        },
        {
          name: 'Hungary',
          email: 'privacy@naih.hu',
          website: 'http://www.naih.hu/',
          chairman: 'Dr Attila Péterfalvi'
        },
        {
          name: 'Ireland',
          email: 'info@dataprotection.ie',
          website: 'http://www.dataprotection.ie/',
          chairman: 'Ms Helen Dixon'
        },
        {
          name: 'Italy',
          email: 'segreteria.stanzione@gpdp.it',
          website: 'http://www.garanteprivacy.it/',
          chairman: 'Prof. Pasquale Stanzione'
        },
        {
          name: 'Latvia',
          email: 'info@dvi.gov.lv',
          website: 'http://www.dvi.gov.lv/',
          chairman: 'Ms Jekaterina Macuka'
        },
        {
          name: 'Lithuania',
          email: 'ada@ada.lt',
          website: 'https://vdai.lrv.lt/',
          chairman: 'Mr Raimondas Andrijauskas'
        },
        {
          name: 'Luxembourg',
          email: 'info@cnpd.lu',
          website: 'http://www.cnpd.lu/',
          chairman: 'Ms Tine A. Larsen'
        },
        {
          name: 'Malta',
          email: 'idpc.info@idpc.org.mt',
          website: 'http://www.idpc.org.mt/',
          chairman: 'Mr Ian Deguara'
        },
        {
          name: 'Netherlands',
          email: 'privacy@autoriteitpersoonsgegevens.nl',
          website: 'https://autoriteitpersoonsgegevens.nl/',
          chairman: 'Mr Aleid Wolfsen',
          requestFormURL: 'https://autoriteitpersoonsgegevens.nl/nl/meldingsformulier-klachten',
        },
        {
          name: 'Poland',
          email: 'kancelaria@uodo.gov.pl|dwme@uodo.gov.pl',
          website: 'https://uodo.gov.pl/',
          chairman: 'Mr Jan Nowak'
        },
        {
          name: 'Portugal',
          email: 'geral@cnpd.pt',
          website: 'http://www.cnpd.pt/',
          chairman: 'Dr. Filipa CALVÃO'
        },
        {
          name: 'Romania',
          email: 'anspdcp@dataprotection.ro',
          website: 'http://www.dataprotection.ro/',
          chairman: 'Ms Ancuţa Gianina Opre'
        },
        {
          name: 'Slovakia',
          email: 'statny.dozor@pdp.gov.sk',
          website: 'http://www.dataprotection.gov.sk/',
          chairman: ''
        },
        {
          name: 'Slovenia',
          email: 'gp.ip@ip-rs.si',
          website: 'https://www.ip-rs.si/',
          chairman: 'Ms Mojca Prelesnik'
        },
        {
          name: 'Spain',
          email: 'internacional@aepd.es',
          website: 'https://www.aepd.es/',
          chairman: 'Ms María del Mar España Martí'
        },
        {
          name: 'Sweden',
          email: 'imy@imy.se',
          website: 'http://www.imy.se/',
          chairman: 'Ms Lena Lindgren Schelin'
        },
        {
          name: 'Iceland',
          email: 'postur@dpa.is',
          website: 'https://www.personuvernd.is/',
          chairman: 'Ms Helga Þórisdóttir'
        },
        {
          name: 'Liechtenstein',
          email: 'info.dss@llv.li',
          website: 'https://www.datenschutzstelle.li/',
          chairman: 'Dr Marie-Louise Gächter'
        },
        {
          name: 'Norway',
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
        name: 'SAR',
        article: 15,       
      }
    }
  },
  CCPA: {
    displayName: 'CCPA',
    gepgraphy = 'California',
    longName = 'California Consumer Privacy Act',
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


