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
    defaultMessage="Search for a company using the search box below. If the company you are looking for is not on the list, you can add it by providing a contact email."
  />
);

const FillInTitle = (
  <FormattedMessage id="fillInTitle" defaultMessage="Fill in" />
);

const FillInBody = (
  <FormattedMessage
    id="fillIn"
    defaultMessage="Fill in your name, email and home address. This information is needed for companies to locate you on their systems and confirm that you are an EU resident (we do not keep any of this information)."
  />
);

const SendTitle = <FormattedMessage id="sendTitle" defaultMessage="Send" />;

const SendBody = (
  <FormattedMessage
    id="send"
    defaultMessage="Click the Send button to create a formal GDPR Erasure Request email addressed to the relevant person at the selected company. You can then review the email and send it."
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
    defaultMessage="{link} (GDPR) recently introduced in Europe requires companies to erase personal data upon request. If an organisation does not comply within 30 days it can face steep fees."
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
    defaultMessage="This service was created because we believe that privacy matters, and that exercising your right to privacy should be easy. This is a free service. We do not offer complementary services to the companies on our list. We do not collect your personal data."
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
