import { FormattedMessage } from "react-intl";

export const IntroText = (
  <FormattedMessage
    id="formIntro"
    defaultMessage="To comply with your request the organization will need to locate your data on their systems. To help them do so, please enter the following information. Please note that all the information you enter will be erased from our systems as soon as the your session concludes."
  />
);

export const CompanyNameLabelText = (
  <FormattedMessage id="companyNameLabel" defaultMessage="Company name" />
);

export const CompanyNameHelperText = (
  <FormattedMessage
    id="companyNameHelper"
    defaultMessage="Some help text" // TODO: Update
  />
);

export const CompanyEmailLabelText = (
  <FormattedMessage
    id="companyEmailLabel"
    defaultMessage="Company email address"
  />
);

export const CompanyEmailHelperText = (
  <FormattedMessage
    id="compnayEmailHelper"
    defaultMessage="Some help text" // TODO: Update
  />
);

export const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Your name" />
);

export const NameHelperText = (
  <FormattedMessage
    id="nameHelper"
    defaultMessage="This will be used to by the company to identify you in their systems"
  />
);

export const AddressLabelText = (
  <FormattedMessage id="homeAddressLabel" defaultMessage="Your home address" />
);

export const AddressHelperText = (
  <FormattedMessage
    id="addressHelper"
    defaultMessage="Your home address will be used to validate that you are a resident of the European Union"
  />
);

export const SubmitButtonText = (
  <FormattedMessage id="sendButton" defaultMessage="Send your request" />
);
