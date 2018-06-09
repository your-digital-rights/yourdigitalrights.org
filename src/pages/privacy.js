import { FormattedDate, FormattedMessage } from "react-intl";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    position: "relative",
    ...container,
    [theme.breakpoints.up("md")]: {
      marginTop: 60
    }
  },
  inner: {
    padding: 30
  }
});

const Privacy = ({ classes }) => {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner}>
          <Typography component="h1" variant="display1" gutterBottom={true}>
            <FormattedMessage
              id="privacyTitle"
              defaultMessage="Privacy policy"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage id="lastUpdated" defaultMessage="Last updated:" />{" "}
            <FormattedDate
              value={new Date(2018, 6, 1)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Typography>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage id="promise" defaultMessage="Our Promise" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="promiseBody"
              defaultMessage="You own your data. We exist to help you control who has access to it. We want to be transparent in this regard, and we strongly believe in keeping your personal information personal, private and secure. We will limit the Personal Data we collect from you to the minimum required to deliver this service. We will not sell or rent your personal information to anyone. We will only share your personal information when it is required to provide our service or as otherwise outlined in this Policy."
            />
          </Typography>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="personalData"
              defaultMessage="Personal Data That You Provide"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="personalDataBody1"
              defaultMessage="We collect Personal Data from you when you use this Website. We process and provide this information to third party service providers, such as Google or an email client, to deliver the Service. We share your Personal Data with these third party service providers, only as necessary for them to provide their service to us. We also share this information with the companies you request to contact so that they can identify you on their systems and contact you directly. We do not retain any of this information on our servers."
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="personalDataBody2"
              defaultMessage="By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data to this website, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of Out-out.eu and the authorized third parties referred to herein."
            />
          </Typography>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="cookies"
              defaultMessage="Website Cookies and Tracking"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="cookiesBody"
              defaultMessage="In operating the Services, we may use a technology called &quot;cookies.&quot; A cookie is a piece of information that the computer hosting our Services gives to your browser when you access the Services. While we do not use cookies to deliver the Service, we do use cookies to help us analyze Services usage more accurately. In all cases in which we use cookies, we will not collect Personal Data except with your permission. On most web browsers, you will find a &quot;help&quot; section on the toolbar. Please refer to this section for information on how to receive notification when you are receiving a new cookie and how to turn cookies off."
            />
          </Typography>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage defaultMessage="Contact" id="contact" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contactBody"
              defaultMessage="Have questions or concerns about our Services and privacy? Contact us at {mail}."
              values={{
                mail: <a href="mailto:info@opt-out.eu">info@opt-out.eu</a>
              }}
            />
          </Typography>
        </Paper>
      </div>
      <Social />
      <Footer />
    </div>
  );
};

export default withRoot(pageWithIntl(withStyles(styles)(Privacy)));
