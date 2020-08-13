import { FormattedMessage } from "react-intl";

export const IntroText = (
      <FormattedMessage
        id="IntroText"
        defaultMessage="To send a request please fill in the following information which will help the organization locate your data. Submitting this form creates a request email which you can review and then send. This website does not keep any of the information entered."
      />
);

export const ReadMore = (
      <FormattedMessage
        id="readMore"
        defaultMessage="Read more about Data Deletion on our {ReadMore}."
        values={{
          ReadMore: (
            <a target="_blank" href="/#faq">
              Frequently Asked Questions
            </a>
          ),
        }}
      />
);

export const RequestChoice = (
  <FormattedMessage
    id="requestChoice"
    defaultMessage="I would like to:"
  />
);

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
    defaultMessage="Please enter the email address of the person or department responsible for handling GDPR / CCPA / privacy / legal requests. You can usually find this information on the organization’s website under the privacy policy, terms and conditions or contact us page."
  />
);

export const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Full name" />
);

export const NameHelperText = (
  <FormattedMessage
    id="nameHelper"
    defaultMessage="This will be used by the organization to identify you."
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
    defaultMessage="Optionally provide any additional information which will help the organization to locate your data in their information systems such as Username, Customer ID or Account Number. {warning}"
    values = {{
      warning: <strong>Please do not provide your password or any personal information which the organization does not already have.</strong>
    }}
  />
);

export const SubmitButtonText = (
  <FormattedMessage id="sendButton" defaultMessage="Review your request" />
);

export const CcpaOrGdprText = (
  <FormattedMessage
    id="ccpaOrGdpr"
    defaultMessage="Regulation"
  />
);

export const CcpaOrGdprHelperText = (
  <FormattedMessage
    id="ccpaOrGdprHelper"
    defaultMessage="Choose regulation based on your place of residence, unless you have a specific reason to choose differently."
  />
);

export const RequestTypeLabelText = (
  <FormattedMessage
    id="requestTypeLabelText"
    defaultMessage="Request type"
  />
);

export const DeletionRequestLabelText = (
  <FormattedMessage
    id="deletionRequestLabelText"
    defaultMessage="Delete my data"
  />
);

export const AccessRequestLabelText = (
  <FormattedMessage
    id="accessRequestLabelText"
    defaultMessage="Send me a copy of my data"
  />
);
