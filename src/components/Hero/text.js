import { FormattedMessage } from "react-intl";

export const SubtitleText = (
  <FormattedMessage
    id="heading"
    defaultMessage="We help you {strong}"
    values={{ strong: <strong>own your data</strong> }}
  />
);

export const IntroText = (
  <FormattedMessage
    id="intro"
    defaultMessage="Many companies collect, store and process your personal information, often without your consent. Now you can get any organisation to erase your personal data, hassle free. This is a free service. We are a not for profit organization, and do not collect your personal data."
  />
);
