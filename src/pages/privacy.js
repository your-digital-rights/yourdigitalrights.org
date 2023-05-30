import { useIntl, FormattedDate, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { container } from "../styles/layout";
import withStyles from '@mui/styles/withStyles';
import Donations from "../components/Donations";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { withRouter } from "next/router";

const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  inner: {
    padding: 30,
  },
});

const Privacy = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "privacy.description", defaultMessage: "You own your data, we exist to help you control who has access to it. This is our privay policy page."});
  const BaseURL = "/privacy";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "privacy.title", defaultMessage: "Privacy Policy"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />    
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner} elevation={2} >
          <Typography component="h1" variant="h4" gutterBottom={true}>
            <FormattedMessage
              id="privacy.privacyTitle"
              defaultMessage="Privacy Policy"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage id="privacy.lastUpdated" defaultMessage="Last updated:" />{" "}
            <FormattedDate
              value={new Date(2022, 1, 8)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage id="privacy.promise" defaultMessage="Our Promise" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.promiseBody"
              defaultMessage="You own your data. We exist to help you control who has access to it. We strongly believe in keeping your personal information personal, private and secure. We do not use non essential cookies and limit the Personal Data we collect from you to the absolute minimum required to deliver this Service (YourDigitalRights.org). In some cases you can turn on  optional features which require you to provide additional Personal Data. Such cases require you to explicitly opt-in, and are clearly labeled. We will never sell or rent your personal information to anyone and will not retain it on our servers for more than 120 days. We will only share your personal information when it is required to provide the service or as otherwise outlined in this Policy."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="privacy.personalData"
              defaultMessage="Sending Requests"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.personalDataBody1"
              defaultMessage='While sending requests (without turning on the optional request follow up feature) we ask that you to provide us with the following personal data:'
            />
            <ul>
              <li>
                <FormattedMessage
                  id="privacy.personalDataBodyOneA"
                  defaultMessage="Your name"
                />
              </li>
              <li>
                <FormattedMessage
                  id="privacy.personalDataBodyOneB"
                  defaultMessage="Additional information needed to identify you with the organizations you choose to contact (such as a Username, Customer ID or Account Number)"
                />
              </li>
            </ul>
            <FormattedMessage
              id="privacy.personalDataBodyOneE"
              defaultMessage="We only use Personal Data collected when you send requests to generate an email, and do not store it on our servers."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="privacy.additionalPersonalData"
              defaultMessage="Request Follow Ups"
            />
          </Typography>
          <Typography gutterBottom={false}>
            <FormattedMessage
              id="privacy.additionalPersonalDataBody1"
              defaultMessage='While using this Service, following the submission of a data request, you may opt-in to receive further support from us via email. If you choose to use this optional feature we will collect the the following additional personal data:'
            />
            <ul>
              <li>
                <FormattedMessage
                  id="privacy.additionalPersonalDataBodyOneA"
                  defaultMessage="Your email address"
                />
              </li>
              <li>
                <FormattedMessage
                  id="privacy.additionalPersonalDataBodyOneB"
                  defaultMessage="The content of the data request emails you send to organizations and Data Protection Agencies (DPAs)"
                />
              </li>
              <li>
                <FormattedMessage
                  id="privacy.additionalPersonalDataBodyOneC"
                  defaultMessage="Metadata regarding the data request emails you send to organizations and Data Protection Agencies (DPA), such as the time an email was sent and the to and from addresses"
                />
              </li>
            </ul>
            <FormattedMessage
              id="privacy.additionalPersonalDataBodyOneE"
              defaultMessage="We keep Extended Personal Data for a maximum of 120 days."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.additionalPersonalDataBodyOneF"
              defaultMessage="By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to this website, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of YourDigitalRights.org and the authorized third parties referred to in this Policy."
            />
          </Typography>          
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="privacy.cookies"
              defaultMessage="Cookies and Tracking"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.cookiesBody"
              defaultMessage='We only use cookies to save the choices you make on the website so that it is easier for you to use the service next time. A cookie is a piece of information that the computer hosting our Service gives to your browser when you access the Service.'
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage id="dataProcessors" defaultMessage="Data sharing and processors" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.usageDataBody"
              defaultMessage='We work with the following third party providers to perform some data processing tasks on our behalf. We engage these providers on terms that ensure the confidentiality and security of your data.'
            />
            <ul>
              <li>
                <FormattedMessage
                  id="privacy.processorsA"
                  defaultMessage="Matomo: a privacy minded web analytics service by Innocraft. We use Matomo to collect  anonymized information on how the Service is accessed and used ('Usage Data'). You can visit their { matomo } page."
                  values={{
                    matomo: (
                      <a href="https://www.innocraft.com/privacy">
                        Privacy Policy
                      </a>
                    ),
                  }}
                />
              </li>
              <li>
                <FormattedMessage
                  id="privacy.processorsB"
                  defaultMessage="Amazon AWS: a provider of cloud infrastructure services. When you opt-in to Request Follow Ups we use AWS to process the emails you send, store related information and send you reminder emails. You can visit their { matomo } page."
                  values={{
                    matomo: (
                      <a href="https://aws.amazon.com/privacy/?nc1=f_pr">
                        Privacy Policy
                      </a>
                    ),
                  }}
                />
              </li>              
            </ul>
          </Typography>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage id="privacy.contact" defaultMessage="Contact" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.contactBody"
              defaultMessage="If you have questions or concerns about this Privacy Policy, please contact us at {mail}."
              values={{
                mail: <a href="mailto:info@yourdigitalrights.org">info@yourdigitalrights.org</a>,
              }}
            />
          </Typography>
        </Paper>
      </div>
      <Donations />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(withRouter(Privacy));
