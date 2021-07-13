import { FormattedMessage } from "react-intl";

export const RedirectHeadingText = (
  <FormattedMessage
    id="redirect.headingText"
    defaultMessage="opt-out.eu is now yourdigitalrights.org"
  />
);

export const RedirectText = (
  <FormattedMessage
    id="redirect.text"
    defaultMessage="Great news, this service is growing! We have recently launched support for the California Consumer Privacy Act (CCPA), and will soon launch support for additional request types beyond erasure. As a result we feel that the domain name ‘opt-out.eu’ is too limiting. We are more committed than ever to help you exercise your digital rights, welcome to our new home @ <style>yourdigitalrights.org</style>!"
    values={{
      style: txt => (
        <span style={{ fontWeight: "bold", color: "black" }}>
          {txt}
        </span>
      ),
    }}
  />
);

export const ContinueText = (
  <FormattedMessage id="redirect.continueText" defaultMessage="Continue" />
);
