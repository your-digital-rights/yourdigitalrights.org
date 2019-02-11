import { FormattedMessage as F } from "react-intl";

export const Title = (
  <F id="title" defaultMessage="Frequently Asked Questions" />
);

export default [
  {
    heading: (
      <F
        id="heading1"
        defaultMessage="What is GDPR?"
      />
    ),
    body: [
      <F
        id="1a"
        defaultMessage="The General Data Protection Regulations, or GDPR for short, is a new regulation introduced in the European Union in May 2018. It protects the fundamental right of people to the protection of personal data. {link}."
        values={{
          link: (
            <a href="https://gdpr-info.eu/art-1-gdpr/">
              Read the regulations
            </a>
          )
        }}        
      />
    ]
  },
  {
    heading: (
      <F id="heading2" defaultMessage="Who does the GDPR apply to?" />
    ),
    body: [
      {
        item: (
          <F
            id="2a"
            defaultMessage="The GDPR applies to:"
          />
        ),
        subItems: [
          <F
            id="2ai"
            defaultMessage="Organisations established within the EU who collect or process personal data (even of people located outside the EU)."
          />,
          <F
            id="2aii"
            defaultMessage="Organisations established outside the EU collecting or processing personal information while providing goods or services (paid or for free) to people located within the EU."
          />,
          <F
            id="2aiii"
            defaultMessage="Organisations established outside the EU collecting or processing personal information while engaged in the monitoring of the behavior of people while they are in the EU."
          />,
        ]
      },
      <F
        id="2b"
        defaultMessage="The GDPR does not apply to certain activities including law enforcement, national security, and purely for personal / household activities."
      />,  
      <F
        id="2c"
        defaultMessage="{link}."
        values={{
          link: (
            <a href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">
              Find out more
            </a>
          )
        }}         
      />      
    ]
  }, 
  {
    heading: (
      <F
        id="heading3"
        defaultMessage="What constitutes personal data?"
      />
    ),
    body: [
      <F
        id="3a"
        defaultMessage="Any information relating to a person who can be directly or indirectly used to identify them. A person can be identified in a wide range of ways including name, identification number, location data or other online identifiers."    
      />,
      <F
        id="3b"
        defaultMessage="{link}."
        values={{
          link: (
            <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/key-definitions/what-is-personal-data/">
              Find out more
            </a>
          )
        }}         
      />            
    ]
  },   
  {
    heading: (
      <F id="heading4" defaultMessage="When can I request erasure of my personal data?" />
    ),
    body: [
      {
        item: (
          <F
            id="4a"
            defaultMessage="The right to erasure is not absolute, and concerns data processing where consent is the legal basis for the processing. For example, data needed due to a contract, or data which is in the public interest does not fall under this definition. More specifically, the right only applies in the following circumstances:"
          />
        ),
        subItems: [
          <F
            id="4ai"
            defaultMessage="The organisation no longer needs your data. Example: after you have cancelled your gym membership, it no longer needs to keep details of your name, address, age and health conditions."
          />,
          <F
            id="4aii"
            defaultMessage="You initially consented to the use of your data, but have now withdrawn your consent. Example: you agreed to take part in a market-research study and now no longer wish to do so."
          />,
          <F
            id="4aiii"
            defaultMessage="You have objected to the use of your data, and your interests outweigh those of the organisation using it."
          />,
          <F
            id="4aiv"
            defaultMessage="The organisation has collected or used your data unlawfully. Example: it hasn’t complied with the rules on data protection."
          />,
          <F
            id="4av"
            defaultMessage="The organisation has a legal obligation to erase your data."
          />,
          <F
            id="4avi"
            defaultMessage="The data was collected from you as a child for an online service. Example: social media or a gaming app. The law gives children special protection because they may be less aware of the risks and consequences of giving their data to organisations. Even if you are now an adult, you have a right to have your data erased if it was collected from you as a child."
          />
        ]
      },
      <F
        id="4b"
        defaultMessage="{link}."
        values={{
          link: (
            <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/lawful-basis-for-processing/">
              Find out more
            </a>
          )
        }}         
      />        
    ]
  },
  {
    heading: (
      <F id="heading5" defaultMessage="When can the organisation say no?" />
    ),
    body: [
      {
        item: (
          <F
            id="5a"
            defaultMessage="The organisation can refuse to erase your data in the following circumstances:"
          />
        ),
        subItems: [
          <F
            id="5ai"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes)."
          />,
          <F
            id="5aii"
            defaultMessage="When the organisation is legally obliged to keep hold of your data."
          />,
          <F
            id="5aiii"
            defaultMessage="When keeping hold of your data is necessary for reasons of public health."
          />,
          <F
            id="5aiv"
            defaultMessage="When keeping your data is necessary for establishing, exercising or defending legal claims."
          />,
          <F
            id="5av"
            defaultMessage="When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest."
          />,
          <F
            id="5avi"
            defaultMessage="If, having considered your request, the organisation decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the ICO, or through the courts."
          />
        ]
      },
      <F
        id="5b"
        defaultMessage="The organisation can also refuse your request if it is, as the law states, “manifestly unfounded or excessive”."
      />,
      <F
        id="5c"
        defaultMessage="{link}."
        values={{
          link: (
            <a href="https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/">
              Find out more
            </a>
          )
        }}         
      />            
    ]
  },
  {
    heading: (
      <F
        id="heading6"
        defaultMessage="How long does an organisation have to comply with a request?"
      />
    ),
    body: [
      <F
        id="6a"
        defaultMessage="An organisation has one month to comply with a request."
      />
    ]
  },
  {
    heading: (
      <F
        id="heading7"
        defaultMessage="What should I do if an organisation did not comply, or did not fully comply with my request?"
      />
    ),
    body: [
      <F
        id="7a"
        defaultMessage="If you are unhappy with how the organisation has handled your request, you should first complain to it. Having done so, if you remain dissatisfied you can make a complaint to the local Data Protection Authorities (DPA). You can also seek to enforce your rights through the courts. If you decide to do this, we strongly advise you to seek independent legal advice first."
      />,
      <F
        id="7b"
        defaultMessage="You can download a list of DPAs {link} (PDF)."
        values={{
          link: (
            <a href="http://ec.europa.eu/newsroom/article29/document.cfm?action=display&doc_id=50061">
              here
            </a>
          )
        }}         
      />           
    ]
  },
  {
    heading: (
      <F
        id="heading8"
        defaultMessage="What are the penalties an organisation that does not comply with a request may face?"
      />
    ),
    body: [
      <F
        id="8a"
        defaultMessage="Organizations can be fined up to 4% of annual global turnover for breaching GDPR or 20 Million Euro."
      />,
      <F
        id="8b"
        defaultMessage="{link}."
        values={{
          link: (
            <a href="https://gdpr-info.eu/art-83-gdpr/">
              Find out more
            </a>
          )
        }}         
      />          
    ]
  },
  {
    heading: (
      <F
        id="heading9"
        defaultMessage="Who in an organisation is responsible for handling GDPR requests?"
      />
    ),
    body: [
      <F
        id="9a"
        defaultMessage="The Data Protection Office (DPO), although the legislation states that organisations should train staff to recognize GDPR requests no matter who they reach or in which format."
      />
    ]
  },
  {
    heading: (
      <F
        id="heading10"
        defaultMessage="I got an error message, or nothing happened after clicking ‘Send’"
      />
    ),
    body: [
      <F
        id="10a"
        defaultMessage="To fix this issue you will need to configure a default email client on your system. Here are instructions on how to do this on {mac} and {windows}."
        values={{
          mac: (
            <a href="http://osxdaily.com/2014/05/06/change-default-mail-app-mac/">
              Mac
            </a>
          ),
          windows: (
            <a href="https://support.microsoft.com/en-us/help/555566">
              Windows
            </a>
          )          
        }}           
      />
    ]
  }  
];
