import { FormattedMessage } from "react-intl";
const Title = <FormattedMessage id="title" defaultMessage="How it works" />;

const TitleImgAlt = (
  <FormattedMessage
    id="imgAlt"
    defaultMessage="A graphic representing the user interface"
  />
);

const SearchTitle = (
  <FormattedMessage id="searchTitle" defaultMessage="Search" />
);

const SearchBody = (
  <FormattedMessage
    id="search"
    defaultMessage="Search for an organization using the search box above. If the organization you are looking for is not on the list, you can still send it a request by providing a contact email."
  />
);

const FillInTitle = (
  <FormattedMessage id="fillInTitle" defaultMessage="Fill in" />
);

const FillInBody = (
  <FormattedMessage
    id="fillIn"
    defaultMessage="Fill in your name and any additional information which may help the organization to identify you in their information systems (we do not keep this information)."
  />
);

const SendTitle = <FormattedMessage id="sendTitle" defaultMessage="Send" />;

const SendBody = (
  <FormattedMessage
    id="send"
    defaultMessage="Click the Send button to create an Erasure Request email addressed to the relevant person at the organization you selected. The email will open up in your email application where you can review, and then send it."
  />
);

const YourDataTitle = (
  <FormattedMessage
    id="yourDataTitle"
    defaultMessage="It's your data, own it!"
  />
);
const YourDataBody = (
  <FormattedMessage
    id="yourData"
    defaultMessage="The {GDPRlink} (GDPR) and the {CCPAlink} (CCPA) require organizations to erase personal data upon request. Organizations have a short time period to comply, otherwise they can face steep fines."
    values={{
      GDPRlink: (
        <a href="https://www.eugdpr.org/">
          General Data Protection Regulations
        </a>
      ),
      CCPAlink: (
        <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
          California Consumer Privacy Act
        </a>
      )      
    }}
  />
);

const WhyTitle = (
  <FormattedMessage id="whyTitle" defaultMessage="Why YourDigitalRights.com?" />
);

const WhyBody = (
  <FormattedMessage
    id="whyBody"
    defaultMessage="We created this free service because we believe that privacy matters, and that exercising your right to privacy should be easy. We do not collect or sell personal data."
  />
);

export {
  Title,
  TitleImgAlt,
  SearchTitle,
  SearchBody,
  FillInBody,
  FillInTitle,
  SendBody,
  SendTitle,
  YourDataTitle,
  YourDataBody,
  WhyTitle,
  WhyBody
};
