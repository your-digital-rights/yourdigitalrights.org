import { FormattedMessage as F } from "react-intl";

export const Title = (
  <F id="title" defaultMessage="Frequently Asked Questions" />
);

export default [
  {
    heading: (
      <F
        id="heading1"
        defaultMessage="Which organizations does the GDPR regulation affect?
        "
      />
    ),
    body: [
      <F
        id="1a"
        defaultMessage="It applies to all companies processing and holding the personal data of European Union residents, regardless of the organisation’s location."
      />
    ]
  },
  {
    heading: (
      <F id="heading2" defaultMessage="When can you request erasure? " />
    ),
    body: [
      {
        item: (
          <F
            id="2a"
            defaultMessage="The right to erasure is not absolute. The right only applies in the following circumstances:"
          />
        ),
        subItems: [
          <F
            id="2b"
            defaultMessage="The organisation no longer needs your data. Example: after you have cancelled your gym membership, it no longer needs to keep details of your name, address, age and health conditions."
          />,
          <F
            id="2c"
            defaultMessage="You initially consented to the use of your data, but have now withdrawn your consent. Example: you agreed to take part in a market-research study and now no longer wish to do so."
          />,
          <F
            id="2d"
            defaultMessage="You have objected to the use of your data, and your interests outweigh those of the organisation using it."
          />,
          <F
            id="2e"
            defaultMessage="The organisation has collected or used your data unlawfully. Example: it hasn’t complied with the rules on data protection."
          />,
          <F
            id="2f"
            defaultMessage="The organisation has a legal obligation to erase your data."
          />,
          <F
            id="2g"
            defaultMessage="The data was collected from you as a child for an online service. Example: social media or a gaming app. The law gives children special protection because they may be less aware of the risks and consequences of giving their data to organisations. Even if you are now an adult, you have a right to have your data erased if it was collected from you as a child."
          />
        ]
      }
    ]
  },
  {
    heading: (
      <F id="heading3" defaultMessage="When can the organisation say no?" />
    ),
    body: [
      {
        item: (
          <F
            id="3a"
            defaultMessage="The organisation can refuse to erase your data in the following circumstances:"
          />
        ),
        subItems: [
          <F
            id="3ai"
            defaultMessage="When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes)."
          />,
          <F
            id="3aii"
            defaultMessage="When the organisation is legally obliged to keep hold of your data."
          />,
          <F
            id="3aiii"
            defaultMessage="When keeping hold of your data is necessary for reasons of public health."
          />,
          <F
            id="3aiv"
            defaultMessage="When keeping your data is necessary for establishing, exercising or defending legal claims."
          />,
          <F
            id="3av"
            defaultMessage="When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest."
          />,
          <F
            id="3avi"
            defaultMessage="If, having considered your request, the organisation decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the ICO, or through the courts."
          />
        ]
      },
      <F
        id="3b"
        defaultMessage="The organisation can also refuse your request if it is, as the law states, “manifestly unfounded or excessive”.
      "
      />
    ]
  },
  {
    heading: (
      <F
        id="heading4"
        defaultMessage="How long does an organisation has to comply with a request?"
      />
    ),
    body: [
      <F
        id="4a"
        defaultMessage="An organisation has 30 days to comply with a request."
      />
    ]
  },
  {
    heading: (
      <F
        id="heading5"
        defaultMessage="What should I do if an organisation did not comply, or did not fully comply with my request "
      />
    ),
    body: [
      <F
        id="5a"
        defaultMessage="If you are unhappy with how the organisation has handled your request, you should first complain to it. Having done so, if you remain dissatisfied you can make a complaint to the local Data Protection Agency (DPA). You can also seek to enforce your rights through the courts. If you decide to do this, we strongly advise you to seek independent legal advice first."
      />
    ]
  },
  {
    heading: (
      <F
        id="heading6"
        defaultMessage="What are the penalties an organisation that does not comply with a request may face?"
      />
    ),
    body: [
      <F
        id="6a"
        defaultMessage="Organizations can be fined up to 4% of annual global turnover for breaching GDPR or €20 Million."
      />
    ]
  },
  {
    heading: (
      <F id="heading7" defaultMessage="What constitutes personal data?" />
    ),
    body: [
      <F
        id="7a"
        defaultMessage="any information relating to a person who can be directly or indirectly identified. A person can be identified in a wide range of ways  including name, identification number, location data or online identifier."
      />
    ]
  },
  {
    heading: (
      <F
        id="heading8"
        defaultMessage="Who in an organisation is responsible for handling GDPR requests "
      />
    ),
    body: [
      <F
        id="8a"
        defaultMessage="The Data Protection Office (DPO), although the legislation states that companies should train staff to recognize GDPR requests no matter who they reach or in which format."
      />
    ]
  }
];
