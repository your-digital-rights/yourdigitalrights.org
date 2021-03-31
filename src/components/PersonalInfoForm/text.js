import { FormattedMessage } from "react-intl";

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

export const FollowUpLabelText = (
  <FormattedMessage
    id="FollowUpLabel"
    defaultMessage="As stated in the legislation, you are entitled to follow up after your initial request. Would you like us to remind you to follow up?"
  />
);

export const YesFollowUpLabelText = (
  <FormattedMessage
    id="YesFollowUpLabel"
    defaultMessage="Yes, please remind me"
  />
);

export const NoFollowUpLabelText = (
  <FormattedMessage
    id="NoFollowUpLabel"
    defaultMessage="No, I don't need a reminder"
  />
);

export const FollowUpDetailsText = (
  <FormattedMessage
    id="FollowUpDetails"
    defaultMessage="In order to send you a reminder, we will need to store your email, name and additional identifying information. In the next step you'll see our email on the BCC section of the form. Please keep it there so we can inform you when the time comes to follow up. We will only use this data to remind you to follow up and then it will be removed from our database."
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
