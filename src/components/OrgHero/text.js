import { FormattedMessage } from "react-intl";

export const MoreInfo = (
  <FormattedMessage
    id="moreInfo"
    defaultMessage="To find out more about the process read our {faq}. To find out more about this service read our {about} page."
    values={{
      faq: <a href="/#faq">Frequently Asked Questions</a>,
      about: <a href="/about">About</a>,
    }}
  />
);

export const NewOrgTitle = (
  <FormattedMessage id="newOrgTitle" defaultMessage="Delete my personal data" />
);
