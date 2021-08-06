import { FormattedMessage } from "react-intl";

export const Headline = (
  <FormattedMessage
    id="personalInfoForm.headline"
    defaultMessage="Fill in the following form to creates a Data Request email which you can then review and send. For more information read our <a>Frequently Asked Questions</a>."
    values={{
      a: txt => (<a target="_blank" href="/#faq">{txt}</a>),
    }}
  />
);

export const CompanyNameLabelText = (
  <FormattedMessage id="personalInfoForm.companyNameLabel" defaultMessage="Organization name" />
);

export const CompanyNameHelperText = (
  <FormattedMessage
    id="personalInfoForm.companyNameHelper"
    defaultMessage="Please enter the name of the organization you would like to contact."
  />
);

export const CompanyDomainLabelText = (
  <FormattedMessage id="personalInfoForm.companyDomainLabel" defaultMessage="Organization Domain" />
);

export const CompanyDomainHelperText = (
  <FormattedMessage
    id="personalInfoForm.companyDomainHelper"
    defaultMessage="Please enter the domain name of the organization (example: google.co.uk or facebook.com)."
  />
);

export const CompanyEmailLabelText = (
  <FormattedMessage
    id="personalInfoForm.companyEmailLabel"
    defaultMessage="Organization email address"
  />
);

export const CompanyEmailHelperText = (
  <FormattedMessage
    id="personalInfoForm.compnayEmailHelper"
    defaultMessage="Please enter the email address of the person or department responsible for handling GDPR / CCPA / privacy / legal requests. You can usually find this information on the organization’s website under the privacy policy, terms and conditions or contact us page."
  />
);

export const NameLabelText = (
  <FormattedMessage id="personalInfoForm.nameLabel" defaultMessage="Full name" />
);

export const NameHelperText = (
  <FormattedMessage
    id="personalInfoForm.nameHelper"
    defaultMessage="This will be used by the organization to identify you."
  />
);

export const IdentifyingInfoLabelText = (
  <FormattedMessage
    id="personalInfoForm.identifyingInfoLabel"
    defaultMessage="Additional identifying information (optional)"
  />
);

export const IdentifyingInfoHelperText = (
  <FormattedMessage
    id="personalInfoForm.IdentifyingInfoHelper"
    defaultMessage="Optionally provide any additional information which will help the organization to locate your data in their information systems such as Username, Customer ID or Account Number. <strong>Please do not provide your password or any personal information which the organization does not already have.</strong>"
    values = {{
      strong: txt => (<strong>{txt}</strong>),
    }}
  />
);

export const SubmitButtonText = (
  <FormattedMessage id="personalInfoForm.sendButton" defaultMessage="Review your request" />
);

export const CcpaOrGdprText = (
  <FormattedMessage
    id="personalInfoForm.ccpaOrGdpr"
    defaultMessage="Regulation"
  />
);

export const CcpaOrGdprHelperText = (
  <FormattedMessage
    id="personalInfoForm.ccpaOrGdprHelper"
    defaultMessage="Choose regulation based on your place of residence, unless you have a specific reason to choose differently."
  />
);

export const RequestTypeLabelText = (
  <FormattedMessage
    id="personalInfoForm.requestTypeLabelText"
    defaultMessage="Request type"
  />
);

export const DeletionRequestLabelText = (
  <FormattedMessage
    id="personalInfoForm.deletionRequestLabelText"
    defaultMessage="Delete my data"
  />
);

export const AccessRequestLabelText = (
  <FormattedMessage
    id="personalInfoForm.accessRequestLabelText"
    defaultMessage="Send me a copy of my data"
  />
);
