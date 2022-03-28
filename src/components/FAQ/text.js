import { FormattedMessage } from "react-intl";

export const Title = (
  <FormattedMessage id="faq.title" defaultMessage="Frequently Asked Questions" />
);

export default [
  {
    heading: (
      <FormattedMessage
        id="faq.heading0"
        defaultMessage="What are data protection laws?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body0A"
        defaultMessage="Data protection laws protect individuals with regards to the processing of their personal data by organizations. They define the responsibilities organizations have when processing personal data, and grant individual certain rights with regards to their data."
      />,
      <br />,
    ],
  },
  {    
    heading: (
      <FormattedMessage
        id="faq.heading1"
        defaultMessage="Which data protection laws protect me?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage id="faq.body1" 
          defaultMessage="Different countries have different regulations protecting individual privacy online. This website supports the following regulations:" />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body1A"
            defaultMessage="European Union - The General Data Protection Regulations (GDPR)"
          />,
          <FormattedMessage
            id="faq.body1B"
            defaultMessage="California - Consumer Privacy Act (CCPA)"
          />,
          <FormattedMessage
            id="faq.body1C"
            defaultMessage="Brazil - General Data Protection Law (LGPD)"
          />,
        ],
      },     
      <br />, 
    ],
  },
  {
    heading: (
      <FormattedMessage id="faq.heading2" defaultMessage="What is the GDPR?" />
    ),
    body: [
      <FormattedMessage
        id="faq.body2A"
        defaultMessage="The General Data Protection Regulations, or GDPR for short, is an EU regulation which protects the fundamental right of people to the protection of their personal data."
      />,
      <br />,
      <FormattedMessage
        id="faq.body2Ai"
        defaultMessage="<a>Read the regulation</a>"
        values={{
          a: txt => (<a target="_blank" href="https://gdpr-info.eu/art-1-gdpr/">{txt}</a>),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading3"
        defaultMessage="Who does the GDPR apply to?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage id="faq.body3A" defaultMessage="The GDPR applies to:" />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body3Ai"
            defaultMessage="Organizations established within the EU who collect or process personal data (even of people located outside the EU)"
          />,
          <FormattedMessage
            id="faq.body3Aii"
            defaultMessage="Organizations established outside the EU collecting or processing personal information while providing goods or services (paid or for free) to people located within the EU"
          />,
          <FormattedMessage
            id="faq.body3Aiii"
            defaultMessage="Organizations established outside the EU collecting or processing personal information while engaged in the monitoring of the behavior of people while they are in the EU"
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="faq.body2B"
        defaultMessage="The GDPR does not apply to certain activities including law enforcement, national security, and purely for personal / household activities."
      />,
      <br />,
      <FormattedMessage
        id="faq.body2C"
        defaultMessage="<a>Find out more</a>"
        values={{
            a: txt => (<a target="_blank" href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">{txt}</a>),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage id="faq.heading4" defaultMessage="What is the CCPA?" />
    ),
    body: [
      <FormattedMessage
        id="faq.body4A"
        defaultMessage="The California Consumer Privacy Act, or CCPA for short, is a regulation introduced in California in January 2020. It protects the fundamental right of people to the protection of their personal data and privacy online."
      />,
      <br />,
      <FormattedMessage
        id="faq.body4Ai"
        defaultMessage="<a>Read the regulation</a>"
        values={{
          a: txt => ( <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">{txt}</a>),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading5"
        defaultMessage="Who does the CCPA apply to?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage
            id="faq.body5A"
            defaultMessage="The CCPA applies to organizations that collect consumer's personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumer's personal information, that does business in the State of California, and that satisfies one or more of the following thresholds:"
          />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body5Ai"
            defaultMessage="Has annual gross revenues in excess of twenty-five million dollars ($25,000,000)"
          />,
          <FormattedMessage
            id="faq.body5Aii"
            defaultMessage="Annually buys, receives, sells, or shares for commercial purposes, alone or in combination, the personal information of 50,000 or more consumers, households, or devices"
          />,
          <FormattedMessage
            id="faq.body5Aiii"
            defaultMessage="Derives 50 percent or more of its annual revenues from selling consumer's personal information"
          />,
        ],
      },
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage id="faq.headingWhatIsLGPD" defaultMessage="What is the LGPD?" />
    ),
    body: [
      <FormattedMessage
        id="faq.bodyWhatIsLGPD1"
        defaultMessage="The LGPD (Lei Geral de Proteção de Dados Pessoais) is a Brazilian regulation establishing rules on collecting, handling, storing and sharing of personal data managed by organizations. It establishes the protection of fundamental rights of freedom and of the privacy of individuals as its principal goals."
      />,
      <br />,
      <FormattedMessage
        id="faq.bodyWhatIsLGPD2"
        defaultMessage="<a>Read the regulation</a>"
        values={{
          a: txt => ( <a target="_blank" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm">{txt}</a>),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.headingWhoLGPDAppliesTo"
        defaultMessage="Who does the LGPD apply to?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo1"
            defaultMessage="The LGPD applies to any individual or legal entity governed by public or private law, that processes personal data (such as collection, production, reception, classification, processing, etc.) in the Brazilian territory and outside the country, when: 
            "
          />
        ),
        subItems: [
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo2"
            defaultMessage="Personal data is collected in Brazil"
          />,
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo3"
            defaultMessage="Data is related to an individuals located in the Brazilian territory, or"
          />,
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo4"
            defaultMessage="Their goal is to offer products and/or services to individuals, Brazilian or foreign, in Brazil"
          />,
        ],
      },
      <br />,
      {
        item: (
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo5"
            defaultMessage="The LGPD is not applicable in cases where the processing of personal data is made: 
            "
          />
        ),
        subItems: [
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo6"
            defaultMessage="By a natural person for exclusively private and non-commercial purposes."
          />,
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo7"
            defaultMessage="Exclusively for journalistic, artistic or academic purposes."
          />,
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo8"
            defaultMessage="By public authorities, in case of use for the promotion of public security, national defense, state security or activities of investigation and prosecution of criminal offenses."
          />,
          <FormattedMessage
            id="faq.bodyWhoLGPDAppliesTo9"
            defaultMessage="When the data origin isn't Brazilian territory and: a) isn't the object of any data processing in Brazil; c) isn't shared with Brazilian processing agents; d) isn’t shared with other countries which are not the country of origin, as long as the country of origin has a law or a regulation which provide a level of personal data protection equivalent to data protection offered by the LGPD."
          />,          
        ],        
      },      
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading6"
        defaultMessage="What constitutes personal data?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body6Ai" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="faq.body6Aii"
        defaultMessage="Any information relating to a person which can be directly or indirectly used to identify them. A person can be identified in a wide range of ways including name, identification number, location data or other online identifiers."
      />,
      <br />,
      <FormattedMessage
        id="faq.body6Aiii"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => ( <a target="_blank" href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/key-definitions/what-is-personal-data/">{txt}</a>),
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body6Bi" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="faq.body6Bii"
        defaultMessage="Personal information is anything that identifies, relates to, describes, or is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household."
      />,
      <br />,
      <FormattedMessage
        id="faq.body6Biii"
        defaultMessage="<a>Read the definition</a>"
        values={{
          a: txt => ( <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV">{txt}</a>),          
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body6Ci" defaultMessage="Under the LDPG:" />,
      <br />,
      <FormattedMessage
        id="faq.body6Cii"
        defaultMessage="Any information relating to an identified or identifiable natural person such as name, ID-number, location data, email, etc."
      />,      
      <br />,
      <FormattedMessage
        id="faq.body6Ciii"
        defaultMessage="Sensitive personal data is defined as a subcategory to personal data and applies when the data processed concerns to racial or ethnic origin, religious belief, political opinion, trade union or religious, philosophical or political organization membership, data concerning health or sex life, genetic or biometric data."
      />,      
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading7"
        defaultMessage="When can I request erasure of my personal data?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body7A" defaultMessage="Under the GDPR:" />,
      <br />,
      {
        item: (
          <FormattedMessage
            id="faq.body7Ai"
            defaultMessage="The right to erasure is not absolute, and concerns data processing where consent is the legal basis for the processing. For example, data needed due to a contract, or data which is in the public interest does not fall under this definition. More specifically, the right only applies in the following circumstances:"
          />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body7Aii"
            defaultMessage="The organization no longer needs your data. Example: after you have cancelled your gym membership, it no longer needs to keep details of your name, address, age and health conditions."
          />,
          <FormattedMessage
            id="faq.body7Aiii"
            defaultMessage="You initially consented to the use of your data, but have now withdrawn your consent. Example: you agreed to take part in a market-research study and now no longer wish to do so."
          />,
          <FormattedMessage
            id="faq.body7Aiv"
            defaultMessage="You have objected to the use of your data, and your interests outweigh those of the organization using it."
          />,
          <FormattedMessage
            id="faq.body7Av"
            defaultMessage="The organization has collected or used your data unlawfully. Example: it hasn't complied with the rules on data protection."
          />,
          <FormattedMessage
            id="faq.body7Avi"
            defaultMessage="The organization has a legal obligation to erase your data."
          />,
          <FormattedMessage
            id="faq.body7Avii"
            defaultMessage="The data was collected from you as a child for an online service. Example: social media or a gaming app. The law gives children special protection because they may be less aware of the risks and consequences of giving their data to organizations. Even if you are now an adult, you have a right to have your data erased if it was collected from you as a child."
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="faq.body7Aviii"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => ( <a target="_blank" href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/">{txt}</a>),                    
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body7B" defaultMessage="Under the CCPA:" />,
      <br />,
      {
        item: (
          <FormattedMessage
            id="faq.body7Bi"
            defaultMessage="Consumers can exercise the right to delete their personal data if:"
          />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body7Bii"
            defaultMessage="The personal information was collected by the business from the consumer."
          />,
          <FormattedMessage
            id="faq.body7Biii"
            defaultMessage="It is no longer necessary for the business or service provider to maintain the personal information in order to fulfill one of the purposes identified in by law (California civil code section 1798.105 (d))."
          />,
          <FormattedMessage
            id="faq.body7Biv"
            defaultMessage="The business is not entitled to retain the personal information under one of the general exemptions under the law (California civil code section 1798.145)."
          />,
        ],
      },
      <br />,
      <FormattedMessage id="faq.body7C" defaultMessage="Under the LGPD:" />,
      <br />,
      <FormattedMessage
        id="faq.body7Ci"
        defaultMessage="The regulation requires organizations to delete the personal data of a natural person if it has been requested, since the data has been collected based on consent."
      />,
      <br />,
      <FormattedMessage
        id="faq.body7Cii"
        defaultMessage="In case of data processing based on consent, the data subject may request the elimination of any data collected, except if the storage is permitted by the LGPD."
      />,
      <br />,
      <FormattedMessage
        id="faq.body7Ciii"
        defaultMessage="If an organization has shared the data with 3rd parties, it must communicate any deletion request with these 3rd parties so that the procedure can be repeated, except in cases where such communication is demonstrably impossible or involves disproportionate effort."
      />,
      <br />,
      <FormattedMessage
        id="faq.body7Ciiii"
        defaultMessage="In addition, the LGPD states that data must be deleted if it was processed for reasons that are excessive, unnecessary, or unlawful."
      />,
      <br />,               
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading8"
        defaultMessage="When can the organization say no?"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body8A"
        defaultMessage="There are certain circumstances where an organization is legally permitted to refuse to erase your data."
      />,
      <br />,
      {
        item: (
          <FormattedMessage id="faq.body8Ai" defaultMessage="Under the GDPR:" />
        ),
        subItems: [
          <FormattedMessage
            id="faq.body8Aii"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes)."
          />,
          <FormattedMessage
            id="faq.body8Aiii"
            defaultMessage="When the organization is legally obliged to keep hold of your data."
          />,
          <FormattedMessage
            id="faq.body8Aiv"
            defaultMessage="When keeping hold of your data is necessary for reasons of public health."
          />,
          <FormattedMessage
            id="faq.body8Av"
            defaultMessage="When keeping your data is necessary for establishing, exercising or defending legal claims."
          />,
          <FormattedMessage
            id="faq.body8Avi"
            defaultMessage="When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest."
          />,
          <FormattedMessage
            id="faq.body8Avii"
            defaultMessage="If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the ICO, or through the courts."
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="faq.body8B"
        defaultMessage="The organization can also refuse your request if it is, as the law states, “manifestly unfounded or excessive”."
      />,
      <br />,
      <FormattedMessage
        id="faq.body8Bi"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => (  <a target="_blank" href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">{txt}</a>),                    
        }}
      />,
      <br />,
      {
        item: <FormattedMessage id="faq.body8C" defaultMessage="Under the CCPA:" />,
        subItems: [
          <FormattedMessage
            id="faq.body8Ci"
            defaultMessage="Free speech or another right provided by law."
          />,
          <FormattedMessage
            id="faq.body8Cii"
            defaultMessage="Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research."
          />,
          <FormattedMessage
            id="faq.body8Ciii"
            defaultMessage="Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity."
          />,
          <FormattedMessage
            id="faq.body8Civ"
            defaultMessage="For complying with a legal obligation."
          />,
          <FormattedMessage
            id="faq.body8Cv"
            defaultMessage="To perform a contract between the business and the consumer."
          />,
          <FormattedMessage
            id="faq.body8Cvi"
            defaultMessage="Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity."
          />,
          <FormattedMessage
            id="faq.body8Cvii"
            defaultMessage="Debug to identify and repair errors that impair existing intended functionality."
          />,
          <FormattedMessage
            id="faq.body8Cviii"
            defaultMessage="To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer's relationship with the business."
          />,
          <FormattedMessage
            id="faq.body8Cix"
            defaultMessage="Otherwise use the consumer's personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information."
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="faq.body8D"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => (<a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&lawCode=CIV">{txt}</a>),                    
        }}
      />,
      <br />,
        <FormattedMessage 
        id="faq.body8E" 
        defaultMessage="Under the LGPD:" 
      />,
      <br />,
      {
        item: <FormattedMessage id="faq.body8F" defaultMessage="The LGPD permits keeping data for the following purposes:" />,
        subItems: [
          <FormattedMessage
            id="faq.body8Fi"
            defaultMessage="Compliance with a statutory or regulatory obligation by the organization."
          />,
          <FormattedMessage
            id="faq.body8Fii"
            defaultMessage="Studies by a research body, guaranteeing, whenever possible, the anonymization of personal data."
          />,
          <FormattedMessage
            id="faq.body8Fiii"
            defaultMessage="Transfer to third parties, upon compliance with the data processing requirements set forth in this law."
          />,
          <FormattedMessage
            id="faq.body8Fiv"
            defaultMessage="Exclusive use of the organization of anonymized data, on the condition that access of the data by third parties is prohibited."
          />,
        ],
      },
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading9"
        defaultMessage="How long do organizations have to comply with a request?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body9A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="faq.body9Ai"
        defaultMessage="faq.An organization has one month to comply with a request. The deadline can be extended to 2 additional months taking into account the complexity and number of requests. In any case, the organization must inform you of such extension within one month from the receipt of the request."
      />,
      <br />,
      <FormattedMessage id="faq.body9Aii" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="faq.body9Aiii"
        defaultMessage="The deadline to respond to a request is 45 days from the receipt of the consumer's request. The deadline can be extended an additional 45 days when reasonably necessary, if the consumer is informed within the first 45 days."
      />,
      <br />,
      <FormattedMessage id="faq.body9C" defaultMessage="Under the LGPD:" />,
      <br />,
      {
        item: <FormattedMessage id="faq.body9D" defaultMessage="The LGPD specifies a deadline with regards to the right to confirmation of existence of personal data, and the right of access to personal data:" />,
        subItems: [
          <FormattedMessage
            id="faq.body9Di"
            defaultMessage="In simplified form, if the confirmation or access is provided immediately."
          />,
          <FormattedMessage
            id="faq.body9Dii"
            defaultMessage="By means of a clear and complete statement, indicating the origin of the data, nonexistence of records, criteria used and purpose of the processing, as the case may be, within 15 (fifteen) days counted from the date of the request."
          />,
        ],
      },
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading10"
        defaultMessage="What should I do if an organization did not comply, or did not fully comply with my request?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body10A" defaultMessage="When submitting a data request via this website, turn on the “Smart Follow-up Assistance” option to get personalized advice on what to do in case an organization has not complied with your request." />,
      <br />,
      <FormattedMessage id="faq.body10B" defaultMessage="If you are unhappy with how the organization has handled your request, you should first send the organization a reminder email explaining your dissatisfaction. If after sending the organization a reminder you are still dissatisfied, you can complain to the Data Protection Agency, a governmental regulatory body. Some regulations provide individuals with a private right of action - the ability to sue an organization in court.  If you decide to do this, we strongly advise you to seek independent legal advice first." />,
      <br />,
      <FormattedMessage id="faq.body10C" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="faq.body10Ci"
        defaultMessage="You can make a complaint to the local Data Protection Authorities (DPA). You can also seek to enforce your rights through the courts. You can download a list of DPAs <a>here</a> (PDF)."
        values={{
          a: txt => (<a target="_blank" href="http://ec.europa.eu/newsroom/article29/document.cfm?action=display&doc_id=50061">{txt}</a>),                              
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body10D" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="faq.body10Di"
        defaultMessage="You can make a complaint to the California <a>Attorney General</a>. You can also seek to enforce your rights through the courts."
        values={{
          a: txt => (<a target="_blank" href="https://oag.ca.gov/contact/consumer-complaint-against-business-or-company">{txt}</a>),                              
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body10E" defaultMessage="Under the LGPD:" />,
      <br />,
      <FormattedMessage
        id="faq.body10Ei"
        defaultMessage="You can make a complaint to the ANPD. You can also seek to enforce your rights through the courts."
      />,  
      <br />,    
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading11"
        defaultMessage="What are the penalties an organization that does not comply with a request may face?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body11A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="faq.body11Ai"
        defaultMessage="Organizations can be fined up to 4% of annual global turnover for breaching GDPR or 20 Million Euro."
      />,
      <br />,
      <FormattedMessage
        id="faq.body11Aii"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => (<a target="_blank" href="https://gdpr-info.eu/art-83-gdpr/">{txt}</a>),                              
        }}
      />,
      <br />,
      <FormattedMessage id="faq.body11B" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="faq.body11Bi"
        defaultMessage="The penalty for an intentional violation of the CCPA is $7,500 per incident, and for an unintentional violation $2,500 per incident. Consumers are entitled to between $100-$750 in compensation per incident or actual damages, whichever is greater, if a company did not take reasonable security measures in the event of a breach of sensitive personal information."
      />,
      <br />,
      <FormattedMessage
        id="faq.body11Biii"
        defaultMessage="<a>Find out more</a>"
        values={{
          a: txt => (<a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.155&lawCode=CIV">{txt}</a>),                              
        }}
      />,

      <br />,
      <FormattedMessage id="faq.body11D" defaultMessage="Under the LGPD:" />,
      <br />,
      {
        item: <FormattedMessage id="faq.body11C0" defaultMessage="The administrative sanctions applicable range are:" />,
        subItems: [
          <FormattedMessage
            id="faq.body11Ci"
            defaultMessage="Warning."
          />,
          <FormattedMessage
            id="faq.body11Cii"
            defaultMessage="By means of a clear and complete statement, indicating the origin of the data, nonexistence of records, criteria used and purpose of the processing, as the case may be, within fifteen days counted from the date of the request."
          />,
          <FormattedMessage
            id="faq.body11Ciii"
            defaultMessage="Fine that could reach 2% of the group's revenues in Brazil, limited to BRL$ 50 million per violation."
          />,
          <FormattedMessage
            id="faq.body11Civ"
            defaultMessage="Daily fine."
          />,
          <FormattedMessage
            id="faq.body11Cv"
            defaultMessage="Daily fine."
          />,
          <FormattedMessage
            id="faq.body11Cvi"
            defaultMessage="Blocking of the personal data to which the infraction refers until its regularization."
          />,
          <FormattedMessage
            id="faq.body11Cvii"
            defaultMessage="Deletion of the personal data to which the infringement refers."
          />,
          <FormattedMessage
            id="faq.body11Cviii"
            defaultMessage="Partial suspension of the operation of the database to which the infraction refers for a maximum period of 6 (six) months, extendable for an equal period, until the processing activity is regularized by the organization."
          />,
          <FormattedMessage
            id="faq.body11Cix"
            defaultMessage="Partial or total ban on the exercise of activities related to data processing."
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="faq.body11C"
        defaultMessage="The sanctions may be applied cumulatively, by day and violation, but always based on the seriousness and extent of the violation."
      />,  
      <br />,    
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading12"
        defaultMessage="Who in an organization is responsible for handling the requests?"
      />
    ),
    body: [
      <FormattedMessage id="faq.body12A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="faq.body12Ai"
        defaultMessage="The Data Protection Office (DPO), although the legislation states that organizations should train staff to recognize GDPR requests no matter who they reach or in which format."
      />,
      <br />,
      <FormattedMessage id="faq.body12B" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="faq.body12Bi"
        defaultMessage="The CCPA does not define who specifically within an organization is responsible for this."
      />,
      <br />,
      <FormattedMessage id="faq.body12C" defaultMessage="Under the LGPD:" />,
      <br />,
      <FormattedMessage
        id="faq.body12Ci"
        defaultMessage="The Data Protection Officer (DPO). However, small data processing agents such as micro-companies, startups, and legal entities of private law, are not required to appoint the personal data controller, but must provide a communication channel with consumers."
      />,
      <br />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="faq.heading13"
        defaultMessage="When sending a request via the website, I get an error message, or nothing happens"
      />
    ),
    body: [
      <FormattedMessage
        id="faq.body13A"
        defaultMessage="To fix this issue you will need to configure a default email client on your system. Here are instructions on how to do this on <a1>Mac</a1> and <a2>Windows</a2>."
        values={{
          a1: txt => (<a target="_blank" href="http://osxdaily.com/2014/05/06/change-default-mail-app-mac/">{txt}</a>),                              
          a2: txt => (<a target="_blank" href="https://support.microsoft.com/en-us/help/555566">{txt}</a>),                              
        }}
      />,
      <br />,
    ],
  },
];
