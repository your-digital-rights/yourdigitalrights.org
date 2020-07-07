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
    defaultMessage="Many organizations collect and sell your personal data, often without your consent. Get organizations to send you a copy of the data they have on you, or get them to delete it."
  />
);
