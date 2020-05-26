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

export const OrgSubTitle = (
  <FormattedMessage
    id="orgSubTitle"
    defaultMessage="Send a {ccpa} or a {gdpr} data deletion request."
    values = {{
      ccpa: <a href='/#faq'>CCPA</a>,
      gdpr: <a href='/#faq'>CCPA</a>,
    }}
  />
);

export const NewOrgTitle = (
  <FormattedMessage
    id="newOrgTitle"
    defaultMessage="Delete My Personal Data"
  />
);

export const NewOrgSubTitle = (
  <FormattedMessage
    id="newOrgSubTitle"
    defaultMessage="Send any organization a {ccpa} or a {gdpr} data deletion request."
    values = {{
      ccpa: <a href='/#faq'>CCPA</a>,
      gdpr: <a href='/#faq'>CCPA</a>,
    }}
  />
);
