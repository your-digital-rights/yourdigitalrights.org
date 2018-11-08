import { FormattedMessage } from "react-intl";

export const SubtitleText = (
  <FormattedMessage
      id="heading"
      defaultMessage="{strong}"
    values={{ strong: <strong>Own your data</strong> }}
  />
);

export const IntroText = (
  <FormattedMessage
    id="intro"
    defaultMessage="Many organisations collect your personal data, often without consent. Now you can get these organisations to erase this data, hassle free. Opt Out is a free service which helps you exercise your right to be forgotten under the European General Data Protection Regulations (GDPR). This service does not collect or trade any personal data. "
  />
);
export const DataBrokers = (
  <FormattedMessage
      id="brokers"
      defaultMessage="If you don't know where to start, we recommend you start by opting out of the {BrokersLink}. Data Brokers are companies that collect and sell personal data, typically without your knowledge or consent."
    values={{ BrokersLink: <strong><a  href="/data-brokers"> Top 10 Data Brokers</a></strong> }}
  />
);
