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
    defaultMessage="for an organization using the search box at the top of this page."
  />
);

const FillInTitle = (
  <FormattedMessage id="howItWorks.sendTitle" defaultMessage="Send" />
);

const FillInBody = (
  <FormattedMessage
    id="howItWorks.send"
    defaultMessage="the organization a request to delete, or send you a copy of your data."
  />
);

const SendTitle = <FormattedMessage id="howItWorks.followUpTitle" defaultMessage="Follow-up" />;

const SendBody = (
  <FormattedMessage
    id="howItWorks.followUp"
    defaultMessage="using our smart follow up assistant to help ensure that the organization complies with your request, and even help you escalate your request to the relevant government regulator."
  />
);

const YourDataTitle = (
  <FormattedMessage
    id="howItWorks.yourDataTitle"
    defaultMessage="You have the right to privacy!"
  />
);

const YourDataBody = (
  <FormattedMessage
    id="howItWorks.yourData"
    defaultMessage="Data protection laws such as the GDPR (European Union), the CCPA (California), and the LGPD (Brazil) require organizations to delete or provide you with a copy of your data upon request. Organizations have a short time period to comply, otherwise they can face steep fines. Our mission is to make it easy for you to exercise your legal rights."
  />
);

const WhyTitle = (
  <FormattedMessage id="howItWorks.whyTitle" defaultMessage="Why Trust Us?" />
);

const WhyBody = (
  <FormattedMessage
    id="howItWorks.whyBody"
    defaultMessage="We are a registered charity called <cd>Conscious Digital</cd>. We created this service because we believe that privacy matters, and that exercising your right to privacy should be easy and free. We do not collect or sell personal data. The service is funded by its creators, and with the help of your <donations>donations</donations>."
    values={{
      cd: txt=> (<a target="_blank" href="https://consciousdigital.org">{txt}</a>),
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
