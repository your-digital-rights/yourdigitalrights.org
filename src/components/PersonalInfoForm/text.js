import { FormattedMessage } from "react-intl";

export const CompanyNameLabelText = (
  <FormattedMessage id="companyNameLabel" defaultMessage="Organization name" />
);

export const CompanyNameHelperText = (
  <FormattedMessage
    id="companyNameHelper"
    defaultMessage="Please enter the name of the organization you would like to contact."
  />
);

export const CompanyEmailLabelText = (
  <FormattedMessage
    id="companyEmailLabel"
    defaultMessage="Organization email address"
  />
);

export const CompanyEmailHelperText = (
  <FormattedMessage
    id="compnayEmailHelper"
    defaultMessage="Please enter the email address of the person or department responsible for handling GDPR / CCPA / privacy / legal requests. You can usually find this information on the privacy policy or contact us page of the organization’s website."
  />
);

export const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Your full name" />
);

export const NameHelperText = (
  <FormattedMessage
    id="nameHelper"
    defaultMessage="This will be used by the organization to identify you in their systems."
  />
);

export const IdentifyingInfoLabelText = (
  <FormattedMessage
    id="identifyingInfoLabel"
    defaultMessage="Additional identifying information (optional)"
  />
);

export const IdentifyingInfoHelperText = (
  <FormattedMessage
    id="IdentifyingInfoHelper"
    defaultMessage="Optionally provide any additional information which may help the organization to identify you in their information systems such as Username, Customer ID or Account Number. Please do not provide your password."
  />
);

export const SubmitButtonText = (
  <FormattedMessage id="sendButton" defaultMessage="Review your request" />
);

export const CcpaOrGdprText = (
  <FormattedMessage
    id="ccpaOrGdpr"
    defaultMessage="Choose regulation (GDPR or CCPA)"
  />
);

export const CcpaOrGdprHelperText = (
  <FormattedMessage
    id="ccpaOrGdprHelper"
    defaultMessage="Choose regulation based on your place of residence, unless you have a specific reason to choose differently."
  />
);
