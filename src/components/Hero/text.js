import { FormattedMessage } from "react-intl";

export const SubtitleText = (
  <FormattedMessage
    id="heroHeading"
    defaultMessage="{strong}"
    values={{ strong: <strong>Own your data</strong> }}
  />
);

export const IntroText = (
  <FormattedMessage
    id="intro"
    defaultMessage="Many organizations collect and sell your personal data, often without your consent. This website makes it easy to get organizations to erase your data by automating the process of sending GDPR and CCPA erasure (right to be forgotten) requests."
  />
);
