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

export const FollowUpLabelText = (
  <FormattedMessage
    id="personalInfoForm.FollowUpLabel"
    defaultMessage="Would you like us to guide you in case the organization does not fully comply with your request?"
  />
);

export const YesFollowUpLabelText = (
  <FormattedMessage
    id="personalInfoForm.YesFollowUpLabel"
    defaultMessage="Yes, please send me follow-up emails"
  />
);

export const NoFollowUpLabelText = (
  <FormattedMessage
    id="personalInfoForm.NoFollowUpLabel"
    defaultMessage="No, I can manage on my own"
  />
);

export const FollowUpDetailsText = (
  <FormattedMessage
    id="personalInfoForm.FollowUpDetails"
    defaultMessage="We will send you up to 4 follow-up emails when it’s time to take further action. Send the organization a reminder email, or the local Data Protection Agency an escalation email with a click. <strong>By selecting this feature you are agreeing to let us process and store the following personal information: your email address, name and the text of your request emails.</strong> We collect this information automatically by adding a special email address to the BCC field of the request email which you are about to send. All personal information relating to this request will be automatically deleted from our systemn within 120 days unless you specify otherwise."
    values = {{
      strong: chunks => (<strong>{chunks}</strong>),
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
