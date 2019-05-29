import { FormattedMessage } from "react-intl";

export const ThanksTitleText = (
  <FormattedMessage id="thanksTitle" defaultMessage="Thank You" />
);

export const ThanksCopyText = (
  <FormattedMessage
    id="thanksCopy"
    defaultMessage="An Erasure Request email should have opened in your default email application. All you need to do is review and click Send. Organization have one calendar month to comply, and may ask you for additional information to help identify you in their systems. Check out our {faqLink} for information on what to do if you are unsatisfied with the way the organization has dealt with your request"
    values={{
      faqLink: (
        <a href="/#faq">
          Frequently Asked Questions
        </a>
      )
    }}
     />
);

export const FindCompanyText = (
  <FormattedMessage
    id="findCompany"
    defaultMessage="Find another company"
     />
);
