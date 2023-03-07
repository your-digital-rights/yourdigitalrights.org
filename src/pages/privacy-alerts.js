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
import { useEffect } from "react";
import tracking from "../utils/tracking";
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
  columns: {
    marginTop: "2em",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  descriptionColumn: {
    width: "60%",   
    [theme.breakpoints.down("sm")]: {
      width: "100%",    
    }
  },
  mainDescription: {
    fontSize: "1.65rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    }
  },
  substack: {
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    flexDirection: "row ",
    alignItems: "center",
    justifyContent: "center",
  },  
  list: {
      fontWeight: 400,
  },
  pricing: {
      marginLeft: "40px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",    
      }      
  }
});


const PrivacyAlerts = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "privacyAlerts.seoDescription", defaultMessage: "Subscribe to our monthly privacy alerts"});
  const BaseURL = "/privacy-alerts";

  const trackSubscribe = () => {
    tracking.trackSubscribe('Privacy Alerts Page');
  };

  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "consciousdigital.substack.com",
      placeholder: "you@example.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#005EA5",
        input: "#FFFFFF",
        email: "#000000",
        text: "#FFFFFF",
      }
    };
  }, []);

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
         <Typography component="h1" variant="h4" gutterBottom={true}>
            <FormattedMessage
              id="privacyAlerts.title"
              defaultMessage="Privacy Alerts"
            />
          </Typography>            
          <Typography component="h2" variant="h6" className={classes.mainDescription}>
            <FormattedMessage id="privacyAlerts.description1" defaultMessage="A monthly email listing the three worst privacy-offending companies identified by our research team. Improve your privacy and take back control of your personal information by spending five minutes a month opting out of these companies." />
          </Typography>
          <div id="custom-substack-embed" className={classes.substack}/>
          <Script id="substack-embed-external" src={`https://substackapi.com/widget.js?foo=${Math.round(Math.random() * 100)}`}/>      
          <Typography component="h3" variant="h5" gutterBottom={true} >
            <FormattedMessage
              id="privacyAlerts.whyPrivacy"
              defaultMessage="Why you should invest in your privacy?"
            />
          </Typography>           
          <Typography gutterBottom={true}>
            <FormattedMessage 
              id="privacyAlerts.whyPrivacyBody1" 
              defaultMessage="Every online interaction we make leaves behind traces of our personal information. Companies we interact with, data brokers, governments, and individuals who are up to no good are all interested in our data." 
            />
            <br/>
            <br/>
            <FormattedMessage 
              id="privacyAlerts.whyPrivacyBody2" 
              defaultMessage="This reality leaves us exposed to a variety of influence campaigns. These include targeted online advertising, political and social manipulation via fake news, various types of fraud such as identity theft, and addictive apps and online services. All of which are made possible by the abundance of personal information we leave behind." 
            />
            <br/>
            <br/>
            <FormattedMessage 
              id="privacyAlerts.whyPrivacyBody3" 
              defaultMessage="So how do we get it back under control?" 
            />
            <br/>
            <br/>
            <FormattedMessage 
              id="privacyAlerts.whyPrivacyBody4" 
              defaultMessage="We have designed Privacy Alerts based on feedback from the people using our services. It is a simple way to improve your online privacy over time by spending only five minutes a month opting out of the worst-offending companies hand-picked by our research team." 
            />
            <br/>
            <br/>
          </Typography>                
        </Paper>
      </div>
      <Social sourcePage="priceAlerts"/>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(withRouter(PrivacyAlerts));