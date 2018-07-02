import { FormattedMessage } from "react-intl";

export const CompanyNameLabelText = (
  <FormattedMessage id="companyNameLabel" defaultMessage="Organisation name" />
);

export const CompanyNameHelperText = (
  <FormattedMessage
    id="companyNameHelper"
    defaultMessage="Please enter the name of the organisation you would like to contact." 
  />
);

export const CompanyEmailLabelText = (
  <FormattedMessage
    id="companyEmailLabel"
    defaultMessage="Organisation email address"
  />
);

export const CompanyEmailHelperText = (
  <FormattedMessage
    id="compnayEmailHelper"
    defaultMessage="Please enter the email address of the person or department responsible for handling GDPR / privacy / legal requests."
  />
);

export const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Your name" />
);

export const NameHelperText = (
  <FormattedMessage
    id="nameHelper"
    defaultMessage="This will be used by the organisation to identify you in their systems."
  />
);

export const AddressLabelText = (
  <FormattedMessage id="homeAddressLabel" defaultMessage="Your home address" />
);

export const AddressHelperText = (
  <FormattedMessage
    id="addressHelper"
    defaultMessage="Your home address will be used to validate that you are a located in the European Union."
  />
);

export const SubmitButtonText = (
  <FormattedMessage id="sendButton" defaultMessage="Send your request" />
);
