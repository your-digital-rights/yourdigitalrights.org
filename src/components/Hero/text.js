import { FormattedMessage } from "react-intl";

export const titleText = (
  <FormattedMessage
    id="heroHeading"
    defaultMessage="{strong}"
    values={{ strong: <strong>Own Your Data</strong> }}
  />
);

export const IntroText = (
  <FormattedMessage
    id="intro"
    defaultMessage="Many organizations collect and sell your personal data, often without your consent."
  />
);

export const headerText = (
  <FormattedMessage
    id="headerText"
    defaultMessage="Get organizations to delete your account or send you a copy of your personal data."
  />
);