import Head from "next/head";
import { useIntl, FormattedDate, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
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
              value={new Date(2020, 5, 18)}
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
              defaultMessage="You own your data. We exist to help you control who has access to it. We want to be transparent in this regard, and we strongly believe in keeping your personal information personal, private and secure. We will limit the Personal Data we collect from you to the absolute minimum required to deliver this Service (yourdigitalrights.org). We will not sell or rent your personal information to anyone and will not retain it on our servers. We will only share your personal information when it is required to provide the service or as otherwise outlined in this Policy."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="privacy.personalData"
              defaultMessage="Personal Data That You Provide"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.personalDataBody1"
              defaultMessage='While using this Service, we may ask you to provide us with certain personal information that can be used to contact or identify you ("Personal Data"). The Personally identifiable information collect is:'
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
                  defaultMessage="Additional information needed to identify you with the organizations you choose to opt-out from (such as a Username, Customer ID or Account Number)"
                />
              </li>
              <li>
                <FormattedMessage
                  id="privacy.personalDataBodyOneC"
                  defaultMessage="Cookies and Usage Data"
                />
              </li>
            </ul>
            <FormattedMessage
              id="privacy.personalDataBodyOneE"
              defaultMessage="By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to this website, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of yourdigitalrights.org and the authorized third parties referred to in this Policy."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="privacy.nameAndAdditionalInfo"
              defaultMessage="Name and Additional Information (such as a Username, Customer ID or Account Number)"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.nameAndAdditionalInfoBody2"
              defaultMessage="We do not retain any of this information on our servers and do not share it with any 3rd parties. We use this information to generate a request email which is rendered on your personal computer via your default email client. It is up to you to then send this email."
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
              defaultMessage='In operating the Service we use a technology called "cookies". A cookie is a piece of information that the computer hosting our Service gives to your browser when you access the Service. While we do not use cookies to deliver the Service, we use cookies to help us analyze Service usage more accurately, and to save the choices you make on the website so that it is easier for you to use the service next time. In all cases in which we use cookies, we will not collect Personal Data except with your explicit permission. On most web browsers, you will find a "help" section on the toolbar. Please refer to this section for information on how to receive notification when you are receiving a new cookie and how to turn cookies off.'
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage id="usageData" defaultMessage="Usage Data" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="privacy.usageDataBody"
              defaultMessage='We may collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as the Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, the actions you perform, unique device identifiers and other diagnostic data. We use the following third-party Service Provider to monitor and analyze the use of our Service:'
            />
            <ul>
              <li>
                <FormattedMessage
                  id="privacy.analyticsBodyOneA"
                  defaultMessage="Matomo: a privacy minded web analytics service by Innocraft. You can visit their { matomo } page."
                  values={{
                    matomo: (
                      <a href="https://www.innocraft.com/privacy">
                        Privacy Policy
                      </a>
                    ),
                  }}
                />
              </li>
            </ul>
          </Typography>
          <br />
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
