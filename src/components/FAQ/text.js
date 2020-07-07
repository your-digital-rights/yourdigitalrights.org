import { FormattedMessage } from "react-intl";

export const Title = (
  <FormattedMessage id="title" defaultMessage="Frequently Asked Questions" />
);

export default [
  {
    heading: (
      <FormattedMessage
        id="heading1"
        defaultMessage="Which regulation protects me, GDPR or CCPA?"
      />
    ),
    body: [
      <FormattedMessage
        id="body1A"
        defaultMessage="There are currently two main regulations protecting individual privacy online. The General Data Protection Regulations, or GDPR protects Europian Union residents, and the California Consumer Privacy Act, or CCPA protects California residents."
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage id="heading2" defaultMessage="What is the GDPR?" />
    ),
    body: [
      <FormattedMessage
        id="body2A"
        defaultMessage="The General Data Protection Regulations, or GDPR for short, is a new regulation introduced in the European Union in May 2018. It protects the fundamental right of people to the protection of personal data."
      />,
      <br />,
      <FormattedMessage
        id="body2Ai"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://gdpr-info.eu/art-1-gdpr/">Read the regulation</a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading3"
        defaultMessage="Who does the GDPR apply to?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage id="body3A" defaultMessage="The GDPR applies to:" />
        ),
        subItems: [
          <FormattedMessage
            id="body3Ai"
            defaultMessage="Organizations established within the EU who collect or process personal data (even of people located outside the EU)"
          />,
          <FormattedMessage
            id="body3Aii"
            defaultMessage="Organizations established outside the EU collecting or processing personal information while providing goods or services (paid or for free) to people located within the EU"
          />,
          <FormattedMessage
            id="body3Aiii"
            defaultMessage="Organizations established outside the EU collecting or processing personal information while engaged in the monitoring of the behavior of people while they are in the EU"
          />,
        ],
      },
      <FormattedMessage
        id="body2B"
        defaultMessage="The GDPR does not apply to certain activities including law enforcement, national security, and purely for personal / household activities."
      />,
      <br />,
      <FormattedMessage
        id="body2C"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">
              Find out more
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage id="heading4" defaultMessage="What is the CCPA?" />
    ),
    body: [
      <FormattedMessage
        id="body4A"
        defaultMessage="The California Consumer Privacy Act, or CCPA for short, is a new regulation introduced in California in January 2020. It protects the fundamental right of people to the protection of their personal data and privacy online."
      />,
      <br />,
      <FormattedMessage
        id="body4Ai"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
              Read the regulation
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading5"
        defaultMessage="Who does the CCPA apply to?"
      />
    ),
    body: [
      {
        item: (
          <FormattedMessage
            id="body5A"
            defaultMessage="The CCPA applies to organizations that collect consumers’ personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers’ personal information, that does business in the State of California, and that satisfies one or more of the following thresholds:"
          />
        ),
        subItems: [
          <FormattedMessage
            id="body5Ai"
            defaultMessage="Has annual gross revenues in excess of twenty-five million dollars ($25,000,000)"
          />,
          <FormattedMessage
            id="body5Aii"
            defaultMessage="Annually buys, receives, sells, or shares for commercial purposes, alone or in combination, the personal information of 50,000 or more consumers, households, or devices"
          />,
          <FormattedMessage
            id="body5Aiii"
            defaultMessage="Derives 50 percent or more of its annual revenues from selling consumers’ personal information"
          />,
        ],
      },
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading6"
        defaultMessage="What constitutes personal data?"
      />
    ),
    body: [
      <FormattedMessage id="body6Ai" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="body6Aii"
        defaultMessage="Any information relating to a person which can be directly or indirectly used to identify them. A person can be identified in a wide range of ways including name, identification number, location data or other online identifiers."
      />,
      <br />,
      <FormattedMessage
        id="body6Aiii"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/key-definitions/what-is-personal-data/">
              Find out more
            </a>
          ),
        }}
      />,
      <br />,
      <FormattedMessage id="body6Bi" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="body6Bii"
        defaultMessage="Personal information is anything that identifies, relates to, describes, or is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household."
      />,
      <br />,
      <FormattedMessage
        id="body6Biii"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.140.&lawCode=CIV">
              Read the definition
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading7"
        defaultMessage="When can I request erasure of my personal data?"
      />
    ),
    body: [
      <FormattedMessage id="body7A" defaultMessage="Under the GDPR:" />,
      <br />,
      {
        item: (
          <FormattedMessage
            id="body7Ai"
            defaultMessage="The right to erasure is not absolute, and concerns data processing where consent is the legal basis for the processing. For example, data needed due to a contract, or data which is in the public interest does not fall under this definition. More specifically, the right only applies in the following circumstances:"
          />
        ),
        subItems: [
          <FormattedMessage
            id="body7Aii"
            defaultMessage="The organization no longer needs your data. Example: after you have cancelled your gym membership, it no longer needs to keep details of your name, address, age and health conditions."
          />,
          <FormattedMessage
            id="body7Aiii"
            defaultMessage="You initially consented to the use of your data, but have now withdrawn your consent. Example: you agreed to take part in a market-research study and now no longer wish to do so."
          />,
          <FormattedMessage
            id="body7Aiv"
            defaultMessage="You have objected to the use of your data, and your interests outweigh those of the organization using it."
          />,
          <FormattedMessage
            id="body7Av"
            defaultMessage="The organization has collected or used your data unlawfully. Example: it hasn’t complied with the rules on data protection."
          />,
          <FormattedMessage
            id="body7Avi"
            defaultMessage="The organization has a legal obligation to erase your data."
          />,
          <FormattedMessage
            id="body7Avii"
            defaultMessage="The data was collected from you as a child for an online service. Example: social media or a gaming app. The law gives children special protection because they may be less aware of the risks and consequences of giving their data to organizations. Even if you are now an adult, you have a right to have your data erased if it was collected from you as a child."
          />,
        ],
      },
      <FormattedMessage
        id="body7B"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/">
              Find out more
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading8"
        defaultMessage="When can the organization say no?"
      />
    ),
    body: [
      <FormattedMessage
        id="body8A"
        defaultMessage="There are certain circumstances where an organization is legally permitted to refuse to erase your data."
      />,
      <br />,
      {
        item: (
          <FormattedMessage id="body8Ai" defaultMessage="Under the GDPR:" />
        ),
        subItems: [
          <FormattedMessage
            id="body8Aii"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes)."
          />,
          <FormattedMessage
            id="body8Aiii"
            defaultMessage="When the organization is legally obliged to keep hold of your data."
          />,
          <FormattedMessage
            id="body8Aiv"
            defaultMessage="When keeping hold of your data is necessary for reasons of public health."
          />,
          <FormattedMessage
            id="body8Av"
            defaultMessage="When keeping your data is necessary for establishing, exercising or defending legal claims."
          />,
          <FormattedMessage
            id="body8Avi"
            defaultMessage="When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest."
          />,
          <FormattedMessage
            id="body8Avii"
            defaultMessage="If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the ICO, or through the courts."
          />,
        ],
      },
      <FormattedMessage
        id="body8B"
        defaultMessage="The organization can also refuse your request if it is, as the law states, “manifestly unfounded or excessive”."
      />,
      <br />,
      <FormattedMessage
        id="body8Bi"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">
              Find out more
            </a>
          ),
        }}
      />,
      <br />,
      {
        item: <FormattedMessage id="body8C" defaultMessage="Under the CCPA:" />,
        subItems: [
          <FormattedMessage
            id="body8Ci"
            defaultMessage="Free speech or another right provided by law."
          />,
          <FormattedMessage
            id="body8Cii"
            defaultMessage="Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research."
          />,
          <FormattedMessage
            id="body8Ciii"
            defaultMessage="Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity."
          />,
          <FormattedMessage
            id="body8Civ"
            defaultMessage="For complying with a legal obligation."
          />,
          <FormattedMessage
            id="body8Cv"
            defaultMessage="To perform a contract between the business and the consumer."
          />,
          <FormattedMessage
            id="body8Cvi"
            defaultMessage="Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity."
          />,
          <FormattedMessage
            id="body8Cvii"
            defaultMessage="Debug to identify and repair errors that impair existing intended functionality."
          />,
          <FormattedMessage
            id="body8Cviii"
            defaultMessage="To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business."
          />,
          <FormattedMessage
            id="body8Cix"
            defaultMessage="Otherwise use the consumer’s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information."
          />,
        ],
      },
      <br />,
      <FormattedMessage
        id="body8D"
        defaultMessage="{link}"
        values={{
          link: (
            <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&lawCode=CIV">
              Find out more
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading9"
        defaultMessage="How long does an organization have to comply with a request?"
      />
    ),
    body: [
      <FormattedMessage id="body9A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="body9Ai"
        defaultMessage="An organization has one month to comply with a request. The deadline can be extended to 2 additional months taking into account the complexity and number of requests. In any case, the organization must inform you of such extension within one month from the receipt of the request."
      />,
      <br />,
      <FormattedMessage id="body9Aii" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="body9Aiii"
        defaultMessage="The deadline to respond to a request is 45 days from the receipt of the consumer’s request. The deadline can be extended an additional 45 days when reasonably necessary, if the consumer is informed within the first 45 days."
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading10"
        defaultMessage="What should I do if an organization did not comply, or did not fully comply with my request?"
      />
    ),
    body: [
      <FormattedMessage id="body10A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="body10Ai"
        defaultMessage="If you are unhappy with how the organization has handled your request, you should first complain to it. Having done so, if you remain dissatisfied you can make a complaint to the local Data Protection Authorities (DPA). You can also seek to enforce your rights through the courts. If you decide to do this, we strongly advise you to seek independent legal advice first. You can download a list of DPAs {link} (PDF)."
        values={{
          link: (
            <a target="_blank" href="http://ec.europa.eu/newsroom/article29/document.cfm?action=display&doc_id=50061">
              here
            </a>
          ),
        }}
      />,
      <br />,
      <FormattedMessage id="body10B" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="body10Bii"
        defaultMessage="If you are unhappy with how an organization has handled your request, you should first complain to it. Having done so, if you remain dissatisfied you have two options. {link} or take private action."
        values={{
          link: (
            <a target="_blank" href="https://oag.ca.gov/contact/consumer-complaint-against-business-or-company">
              Complain to the Attorney General
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading11"
        defaultMessage="What are the penalties an organization that does not comply with a request may face?"
      />
    ),
    body: [
      <FormattedMessage id="body11A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="body11Ai"
        defaultMessage="Organizations can be fined up to 4% of annual global turnover for breaching GDPR or 20 Million Euro."
      />,
      <br />,
      <FormattedMessage
        id="body11Aii"
        defaultMessage="{link}."
        values={{
          link: <a target="_blank" href="https://gdpr-info.eu/art-83-gdpr/">Find out more</a>,
        }}
      />,
      <br />,
      <FormattedMessage id="body11B" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="body11Bi"
        defaultMessage="The penalty for an intentional violation of the CCPA is $7,500 per incident, and for an unintentional violation $2,500 per incident. Consumers are entitled to between $100-$750 in compensation per incident or actual damages, whichever is greater, if a company did not take reasonable security measures in the event of a breach of sensitive personal information."
      />,
      <br />,
      <FormattedMessage
        id="body11Biii"
        defaultMessage="{link}."
        values={{
          link: (
            <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.155&lawCode=CIV">
              Find out more
            </a>
          ),
        }}
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading12"
        defaultMessage="Who in an organization is responsible for handling the requests?"
      />
    ),
    body: [
      <FormattedMessage id="body12A" defaultMessage="Under the GDPR:" />,
      <br />,
      <FormattedMessage
        id="body12Ai"
        defaultMessage="The Data Protection Office (DPO), although the legislation states that organizations should train staff to recognize GDPR requests no matter who they reach or in which format."
      />,
      <br />,
      <FormattedMessage id="body12B" defaultMessage="Under the CCPA:" />,
      <br />,
      <FormattedMessage
        id="body12Bi"
        defaultMessage="The CCPA does not define who specifically within an organization is responsible for this."
      />,
    ],
  },
  {
    heading: (
      <FormattedMessage
        id="heading13"
        defaultMessage="When sending a request via the website, I get an error message, or nothing happens"
      />
    ),
    body: [
      <FormattedMessage
        id="body13A"
        defaultMessage="To fix this issue you will need to configure a default email client on your system. Here are instructions on how to do this on {mac} and {windows}."
        values={{
          mac: (
            <a target="_blank" href="http://osxdaily.com/2014/05/06/change-default-mail-app-mac/">
              Mac
            </a>
          ),
          windows: (
            <a target="_blank" href="https://support.microsoft.com/en-us/help/555566">
              Windows
            </a>
          ),
        }}
      />,
    ],
  },
];
