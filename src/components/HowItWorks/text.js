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
    defaultMessage="Search for an organization using the search box above."
  />
);

const FillInTitle = (
  <FormattedMessage id="howItWorks.sendTitle" defaultMessage="Send" />
);

const FillInBody = (
  <FormattedMessage
    id="howItWorks.send"
    defaultMessage="Send the organization a request to delete or access your personal data."
  />
);

const SendTitle = <FormattedMessage id="howItWorks.followUpTitle" defaultMessage="Follow-up" />;

const SendBody = (
  <FormattedMessage
    id="howItWorks.followUp"
    defaultMessage="Our smart follow-up assistant can help to make sure that the organization complies with your request, and even help you escalate your request to the relevant government regulator."
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
    defaultMessage="Privacy regulations such as the <gdpr>GDPR</gdpr> and the <ccpa>CCPA</ccpa> require organizations to erase or provide a copy of your personal data upon request. Organizations have a short time period to comply, otherwise they can face steep fines."
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
