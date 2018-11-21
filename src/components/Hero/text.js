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
