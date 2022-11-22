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
import Social from "../components/Social";
import Script from 'next/script'

const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  inner: {
    borderRadius: "20px",
    color: "black",
    backgroundColor: "white",
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 30,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  substack: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row ",
    alignItems: "center",
    justifyContent: "center",
  },  
});


const PrivacyAlerts = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "privacyAlerts.seoDescription", defaultMessage: "Subscribe to our monthly privacy alerts"});
  const BaseURL = "/privacy-alerts";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "privacyAlerts.seoTitle", defaultMessage: "Privacy Alerts"})}
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
          <div >
            <Script src="https://js.stripe.com/v3/pricing-table.js" />
            <stripe-pricing-table pricing-table-id="prctbl_1M6tTaL6744XdVfOcVKzvZ3o"
            publishable-key="pk_live_51Lhpu4L6744XdVfOEOM0kOeRaOaag73Lo9wbjnXqU4G9kfniyJf8aeQw8exGhu6yZwaPkJMHH6fQbB64Yx42JKR5008umYBaAw">
            </stripe-pricing-table>
          </div>   
          <Typography component="p" variant="h5" gutterBottom={true} >
            <FormattedMessage
              id="privacyAlerts.strapline"
              defaultMessage="Your data is all over the internet, but you're not sure how to get it back? We can help you get your privacy to a better place."
            />
          </Typography>
          <br/>          
          <Typography gutterBottom={true}>
            <FormattedMessage id="privacyAlerts.description1" defaultMessage="Each month our research team hand-picks the three worst privacy offenders to share with our paid subscribers. In less than 5 minutes you can improve your online privacy month by month and take back control of your data." />
          </Typography>                
        </Paper>
      </div>
      <Social sourcePage="priceAlerts"/>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(withRouter(PrivacyAlerts));