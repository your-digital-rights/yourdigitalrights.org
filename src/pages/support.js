import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { container } from "../styles/layout";
import withStyles from '@mui/styles/withStyles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { useRouter } from 'next/router'
import Social from "../components/Social";
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
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  columns: {
    marginTop: "2em",
    display: "flex",
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
    },
  },
  descriptionColumn: {
    width: "60%",   
    [theme.breakpoints.down('md')]: {
      width: "100%",    
    }
  },
  subtitle: {
    fontSize: "1.65rem",
    marginBottom: "15px",
    [theme.breakpoints.down('md')]: {
      fontSize: "20px",
    }
  },  
  mainDescription: {
    fontSize: "1.35rem",
    [theme.breakpoints.down('md')]: {
      marginBottom: "35px",
      fontSize: "18px",
    }
  },
  list: {
      fontWeight: 400,
  },
  pricing: {
      marginTop: "-30px",    
      [theme.breakpoints.up('md')]: {
        marginLeft: "70px",
      }      
  }
});


const Support = ({ classes }) => {
  const router = useRouter();
  const postPayment = (router.query.status === 'paid');
  const intl = useIntl();
  const Description = intl.formatMessage({id: "support.seoDescription", defaultMessage: "Paid support service gives you direct access to one of our staff members"});
  const BaseURL = "/support";

  const trackSubscribe = () => {
    tracking.trackSubscribe('Privacy Alerts Page');
  };

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "support.seoTitle", defaultMessage: "Support"})}
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
        { postPayment ? (
          <>
            <Typography component="h1" variant="h4" gutterBottom={true}>
              <FormattedMessage
                id="support.posPaidtitle"
                defaultMessage="Thank you!"
              />
            </Typography>     
            <Typography component="p" variant="h6" className={classes.mainDescription}>
              <FormattedMessage 
                id="support.postPaidDescription1" 
                defaultMessage="Please contact us via the following email address to access paid support:" 
              />
              <br/>
              <FormattedMessage 
                id="support.postPaidDescription2" 
                defaultMessage="{email}." 
                values={{
                  email: <a 
                            target="_blank" 
                            rel="noreferrer noopener"
                            href="mailto:support@yourdigitalrights.org"
                          >
                            support@yourdigitalrights.org
                          </a>
                }}
              />              
            </Typography>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h4" gutterBottom={true}>
              <FormattedMessage
                id="support.title"
                defaultMessage="Paid Support"
              />
            </Typography>     
            <div className={classes.columns}>
              <div className={classes.descriptionColumn}>
              <Typography component="h2" variant="h4" className={classes.subtitle}>
                <FormattedMessage id="support.description1" defaultMessage="We understand that getting companies to delete your data can sometimes be frustrating." />
              </Typography>
              <Typography component="p" variant="h6" className={classes.mainDescription}> 
                <FormattedMessage id="support.description2" defaultMessage="Our paid support service gives you direct access to one of our staff members, who will be happy to assist you with your data deletion or access request." />
              </Typography>
              </div>
              <div className={classes.pricing}>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table 
                  pricing-table-id="prctbl_1O6vggL6744XdVfOWc48gZU5"
                  publishable-key="pk_live_51Lhpu4L6744XdVfOEOM0kOeRaOaag73Lo9wbjnXqU4G9kfniyJf8aeQw8exGhu6yZwaPkJMHH6fQbB64Yx42JKR5008umYBaAw"
                  customer-email="test+location_FR@email.com"
                >
                </stripe-pricing-table>
              </div>    
              </div> 
          </>       
        )}          
        </Paper>
      </div>
      <Social sourcePage="priceAlerts"/>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(Support);