import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
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
    color: "black",
    backgroundColor: "#039277",
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  substack: {
    display: "flex",
    flexDirection: "row ",
    alignItems: "center",
    justifyContent: "center",
  },  
  title: {
    color: "white",
  },
  strapline: {
    color: "white",
  }  
});


const PrivacyAlerts = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "privacyAlerts.description", defaultMessage: "Subscribe to our monthly privacy alerts"});
  const BaseURL = "/privacy-alerts";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "privacyAlerts.title", defaultMessage: "Privacy Alerts"})}
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
          <Typography component="h1" variant="h4" gutterBottom={true} className={classes.title} >
            <FormattedMessage id="privacyAlerts.title" defaultMessage="Keep it private!" />
          </Typography>
          <Typography component="p" variant="h5" gutterBottom={true} className={classes.strapline}>
            <FormattedMessage
              id="privacyAlerts.strapline"
              defaultMessage="Your data is all over the internet, but you don't know how to get it back? We can help you get your privacy to a better place."
            />
          </Typography>
          <br/>          
          <Typography gutterBottom={true}>
            <FormattedMessage id="privacyAlerts.description1" defaultMessage="Improve your privacy posture over time by spending only 5 minutes a month. Sign up to our privacy alerts and each month we will email you a list of 3 companies with the worst privacy track record for the month. All you need to do is click the links in the email to opt-out." />
          </Typography>
            <div className={classes.substack}>
              <iframe src="https://consciousdigital.substack.com/embed" width="450" height="100"  frameBorder="0" scrolling="no" ></iframe>
            </div>     
          <Typography gutterBottom={true}>
            <FormattedMessage id="privacyAlerts.description2" defaultMessage="Our research team identifies companies while taking into consideration:" />
          </Typography>
          <ul className={classes.list}>
            <li>
              <FormattedMessage
                id="privacyAlerts.dscriptionBullit1"
                defaultMessage="Companies with the most opt-out requests for the month"
              />
            </li>
            <li>
              <FormattedMessage
                id="privacyAlerts.dscriptionBullit2"
                defaultMessage="New data brokers (companies selling personal information including location, and facial recognition data)"
              />
            </li>
            <li>
              <FormattedMessage
                id="privacyAlerts.dscriptionBullit3"
                defaultMessage="Companies who have experienced a recent data breach"
              />
            </li>
            <li>
              <FormattedMessage
                id="privacyAlerts.dscriptionBullit4"
                defaultMessage="Companies who have mishandled personal information "
              />
            </li>
          </ul>     
          <Typography color="inherit" className={classes.intro} gutterBottom={true}>
            <FormattedMessage
              id="privacyAlerts.description3"
              defaultMessage="Each email also includes new privacy best practices we have identified, which you can implement straight away. This is a paid service which helps ensure our long-term financial stability and independence."
            />
            <br/><br/>
            <FormattedMessage
              id="privacyAlerts.description4"
              defaultMessage="This is a paid service which helps ensure our long-term financial stability and independence."
            />
          </Typography>            
        </Paper>
      </div>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(withRouter(PrivacyAlerts));