import { FormattedMessage } from "react-intl";
const Title = <FormattedMessage id="title" defaultMessage="How it works" />;

const TitleImgAlt = (
  <FormattedMessage
    id="imgAlt"
    defaultMessage="A graphic representing the opt-out user interface"
  />
);

const SearchTitle = (
  <FormattedMessage id="searchTitle" defaultMessage="Search" />
);

const SearchBody = (
  <FormattedMessage
    id="search"
    defaultMessage="Search for an organisation using the search box above. If the organisation you are looking for is not on the list, you can still send it a request by providing a contact email."
  />
);

const FillInTitle = (
  <FormattedMessage id="fillInTitle" defaultMessage="Fill in" />
);

const FillInBody = (
  <FormattedMessage
    id="fillIn"
    defaultMessage="Fill in your name and home address. This information is needed for organisations to locate you on their systems (we do not keep this information)."
  />
);

const SendTitle = <FormattedMessage id="sendTitle" defaultMessage="Send" />;

const SendBody = (
  <FormattedMessage
    id="send"
    defaultMessage="Click the Send button to create an Erasure Request email addressed to the relevant person at the organisation you selected. The email will open up in your email application where you can then review, and then send it."
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
    defaultMessage="{link} (GDPR) recently introduced in Europe require organisations to erase personal data upon request. Organisations have one month to comply, otherwise they can face steep fines"
    values={{
      link: (
        <a href="https://www.eugdpr.org/">
          The General Data Protection Regulations
        </a>
      )
    }}
  />
);

const WhyTitle = (
  <FormattedMessage id="whyTitle" defaultMessage="Why Opt-out?" />
);

const WhyBody = (
  <FormattedMessage
    id="whyBody"
    defaultMessage="We created this service because we believe that privacy matters, and that exercising your right to privacy should be easy. This is a free service. We do not offer any services to the organizations on our list. We do not collect or trade any personal data."
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
