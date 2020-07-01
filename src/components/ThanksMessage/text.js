import { FormattedMessage } from "react-intl";

export const ThanksTitleText = (
  <FormattedMessage id="thanksTitle" defaultMessage="Thank You" />
);

export const ThanksCopyPart1 = (
  <FormattedMessage
    id="thanksCopyPart1"
    defaultMessage="request email should have opened in your default email application. All you need to do is review it and click Send. "
    values={{
      faqLink: <a href="/#faq">Frequently Asked Questions</a>,
    }}
  />
);

export const ThanksCopyPart2GDPR = (
  <FormattedMessage
    id="thanksCopyPart2GDPR"
    defaultMessage="Organization have one month to comply, "
    values={{
      faqLink: <a href="/#faq">Frequently Asked Questions</a>,
    }}
  />
);

export const ThanksCopyPart2CCPA = (
  <FormattedMessage
    id="thanksCopyPart2CCPA"
    defaultMessage="Organization have 45 days to comply, "
    values={{
      faqLink: <a href="/#faq">Frequently Asked Questions</a>,
    }}
  />
);

export const ThanksCopyPart3 = (
  <FormattedMessage
    id="thanksCopyPart3"
    defaultMessage="and may ask you for additional information to help identify you in their systems. Check out our {faqLink} for information on what to do if you are unsatisfied with the way the organization has dealt with your request."
    values={{
      faqLink: <a href="/#faq">Frequently Asked Questions</a>,
    }}
  />
);

export const FindCompanyText = (
  <FormattedMessage
    id="findCompany"
    defaultMessage="Find another organization"
  />
);
