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
    defaultMessage="Many organizations collect and sell your personal data, often without your consent. We make it easy to find out what data organizations have on you, and to get them to delete it."
  />
);
