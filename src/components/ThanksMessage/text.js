import { FormattedMessage } from "react-intl";

export const ThanksTitleText = (
  <FormattedMessage id="thankyou.title" defaultMessage="Thank You" />
);

export const ThanksCopyPart1Email = (
  <FormattedMessage
    id="thankyou.copyPart1Email"
    defaultMessage="email should have opened in your email application, all you need to do is review it and click Send."
  />
);
export const ThanksCopyPart1Copy = (
  <FormattedMessage
    id="thankyou.copyPart1Copy"
    defaultMessage="has been copied to the clipboard, all you need to do is paste it in an email, reivew it, and click Send."
  />
);

export const ThanksRequestTypeDelete = (
  <FormattedMessage
    id="thankyou.requestTypeDelete"
    defaultMessage="A deletion request"
  />
);

export const ThanksRequestTypeAccess = (
  <FormattedMessage
    id="thankyou.requestTypeAccess"
    defaultMessage="An access request"
  />
);

export const ThanksCopyPart2GDPR = (
  <FormattedMessage
    id="thankyou.copyPart2GDPR"
    defaultMessage="Organizations have <em>one month</em> to comply, and may ask you for additional information to help identify you in their systems."
    values={{
      em: txt => (<em>{txt}</em>),
    }}
  />
);

export const ThanksCopyPart2CCPA = (
  <FormattedMessage
    id="thankyou.copyPart2CCPA"
    defaultMessage="Organization have <em>45 days</em> to comply, and may ask you for additional information to help identify you in their systems."
    values={{
      em: txt => (<em>{txt}</em>),
    }}
  />
);

export const ThanksCopyPart3 = (
  <FormattedMessage
    id="thankyou.copyPart3"
    defaultMessage="Please see our list of <a>Frequently Asked Questions</a> for additional information."
    values={{
      a: txt => (<a target="_blank" href='/#faq'>{txt}</a>),
    }}
  />
);

export const FindCompanyText = (
  <FormattedMessage
    id="thankyou.findCompany"
    defaultMessage="Find another organization"
  />
);

export const DonationText = (
  <FormattedMessage
    id="thankyou.donation"
    defaultMessage="Please consider making a donation to help ensure our long-term financial stability and independence:"
  />
);