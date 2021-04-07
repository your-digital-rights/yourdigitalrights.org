import { FormattedMessage } from "react-intl";

export const ThanksTitleText = (
  <FormattedMessage id="thanksTitle" defaultMessage="Thank You" />
);

export const ThanksCopyPart1 = (
  <FormattedMessage
    id="thanksCopyPart1"
    defaultMessage="request email should have opened in your email application. All you need to do is review it and click Send. "
    values={{
      faqLink: <a href="/#faq">Frequently Asked Questions</a>,
    }}
  />
);

export const ThanksCopyPart2GDPR = (
  <FormattedMessage
    id="thanksCopyPart2GDPR"
    defaultMessage="Organizatios have {time} to comply, and may ask you for additional information to help identify you in their systems."
    values={{
      time: <em>one month</em>,
    }}
  />
);

export const ThanksCopyPart2CCPA = (
  <FormattedMessage
    id="thanksCopyPart2CCPA"
    defaultMessage="Organization have {time} to comply, and may ask you for additional information to help identify you in their systems."
    values={{
      time: <em>45 days</em>
    }}
  />
);

export const FindCompanyText = (
  <FormattedMessage
    id="findCompany"
    defaultMessage="Find another organization"
  />
);
