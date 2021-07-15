import { FormattedMessage } from "react-intl";

const Title = <FormattedMessage id="howItWorks.title" defaultMessage="How it works" />;

const TitleImgAlt = (
  <FormattedMessage
    id="howItWorks.imgAlt"
    defaultMessage="A graphic representing the user interface"
  />
);

const SearchTitle = (
  <FormattedMessage id="howItWorks.searchTitle" defaultMessage="Search" />
);

const SearchBody = (
  <FormattedMessage
    id="howItWorks.search"
    defaultMessage="Search for an organization using the search box above. If the organization you are looking for is not on the list, you can still send it a request by providing a contact email."
  />
);

const FillInTitle = (
  <FormattedMessage id="howItWorks.fillInTitle" defaultMessage="Fill in" />
);

const FillInBody = (
  <FormattedMessage
    id="howItWorks.fillIn"
    defaultMessage="Fill in your name and any additional information which may help the organization to identify you in their information systems (we do not keep this information)."
  />
);

const SendTitle = <FormattedMessage id="howItWorks.sendTitle" defaultMessage="Send" />;

const SendBody = (
  <FormattedMessage
    id="howItWorks.send"
    defaultMessage="Click the Send button to generate a request email addressed to the relevant person at the organization you selected. The email will open up in your default email application where you can review, and then send it."
  />
);

const YourDataTitle = (
  <FormattedMessage
    id="howItWorks.yourDataTitle"
    defaultMessage="It's your data, own it!"
  />
);

const YourDataBody = (
  <FormattedMessage
    id="howItWorks.yourData"
    defaultMessage="The <gdpr>General Data Protection Regulations</gdpr> (GDPR) and the <ccpa>California Consumer Privacy Act</ccpa> (CCPA) require organizations to erase or provide a copy of your personal data upon request. Organizations have a short time period to comply, otherwise they can face steep fines."
    values={{
      gdpr: txt => (<a target="_blank" href="https://gdpr.eu/tag/gdpr/">{txt}</a>),
      ccpa: txt => (<a target="_blank" href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">{txt}</a>),
    }}
  />
);

const WhyTitle = (
  <FormattedMessage id="howItWorks.whyTitle" defaultMessage="Why Trust Us?" />
);

const WhyBody = (
  <FormattedMessage
    id="howItWorks.whyBody"
    defaultMessage="We created this service because we believe that privacy matters, and that exercising your right to privacy should be easy and free. We do not collect or sell personal data. The service is self funded by it’s creators, and with the help of your <donations>donations</donations>. Read more <about>about us</about>."
    values={{
      about: txt=> (<a href="/about">{txt}</a>),
      donations: txt=>(<a href="/#donations">{txt}</a>),
    }}
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
  WhyBody,
};
