import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ImageWithFallback from '../../utils/image';

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const Hero = ({ classes, selectedCompany }) => {
  const companyName = selectedCompany ? Capitalize(selectedCompany.name) : null;
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        {selectedCompany && (
          <div id="org-logo" className={classes.orgLogo}>
            <ImageWithFallback
              className={classes.logo}
              src={`https://logo.uplead.com/${selectedCompany.url}`}
              width={44}
              height={44}
              fallbackSrc="/images/Keep-it-private.png"
            />
          </div>
        )}
        <div id="hero-text" className={classes.heroText}>
          {selectedCompany && (
            <>
              <Typography
                id="orgName"
                variant="h4"
                color="inherit"
                component="p"
                className={classes.heading}
              >
                {Capitalize(selectedCompany.url)}
              </Typography>
              <Typography color="inherit">
              <FormattedMessage
                  id="orgHero.orgName"
                  defaultMessage="Organization: {org}."
                  values={{ 
                    org: <strong>{selectedCompany.name}</strong> 
                  }}
              />                
              </Typography>               
              <Typography
                color="inherit"
                component="h1"
                variant="h3"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgHero.title"
                  defaultMessage="Request account deletion or a copy of your personal data."
                />
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgHero.subTitle"
                  defaultMessage="Use this free service to send GDPR, CCPA and LGPD data requests."
                />
              </Typography>                           
              <Typography
                color="inherit"
                component="p"
              >
                <FormattedMessage
                  id="orgHero.notAffiliatedDisclamer"
                  defaultMessage="This service is <disclamer>not affiliated with</disclamer> (find out more <about>about us</about>)."
                  values={{
                    disclamer: txt =>(<strong>{txt + " " + Capitalize(selectedCompany.name)}</strong>),
                    about: txt => (<a className={classes.introLink} target="_blank" href='/about'>{txt}</a>),
                  }}
                />
              </Typography>   
            </>
          )}
          {!selectedCompany && (

            <div id="add-org" className={classes.addOrg}>
              <Typography
                variant="h4"
                color="inherit"
                gutterBottom={true}
                component="h1"
                className={classes.heading}
              >
                <FormattedMessage
                  id="orgHero.newOrgTitle"
                  defaultMessage="Delete or Get a Copy of Your Personal Data"
                />
            </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                <FormattedMessage
                  id="orgHero.newOrgSubTitle"
                  defaultMessage="Send any organization a {ccpa} or a {gdpr} request."
                  values = {{
                    ccpa: <a className={classes.introLink} target="_blank" href='/#faq'>CCPA</a>,
                    gdpr: <a className={classes.introLink} target="_blank" href='/#faq'>GDPR</a>,
                  }}
                />
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
