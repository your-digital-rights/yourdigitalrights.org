import { FormattedMessage } from "react-intl";

export const ThanksTitleText = (
  <FormattedMessage id="thankyou.title" defaultMessage="Thank You" />
);

export const ThanksCopyPart1 = (
  <FormattedMessage
    id="thankyou.copyPart1"
    defaultMessage="request email should have opened in your email application, all you need to do is review it and click Send. "
  />
);

export const ThanksRequestTypeDelete = (
  <FormattedMessage
    id="thankyou.requestTypeDelete"
    defaultMessage="A deletion"
  />
);

export const ThanksRequestTypeAccess = (
  <FormattedMessage
    id="thankyou.requestTypeAccess"
    defaultMessage="An access"
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
