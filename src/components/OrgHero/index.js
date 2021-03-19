import NewOrgTitle from "./text";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { visuallyHidden } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";


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
            <img
              className={classes.logo}
              src={`https://api.faviconkit.com/${selectedCompany.url}/24`}
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
                <a
                  rel="nofollow"
                  target="new"
                  href={`https://${selectedCompany.url}`}
                  className={classes.titleLink}
                >              
                {Capitalize(selectedCompany.url)}
                </a>
              </Typography>
              <Typography color="inherit">
                Organization: <strong>{selectedCompany.name}.</strong>
              </Typography>               
              <Typography
                color="inherit"
                component="h1"
                variant="h3"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgTitle"
                  defaultMessage="Request account deletion or a copy of your personal data."
                />
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgSubTitle"
                  defaultMessage="Use this free and independent service to send {ccpa} and {gdpr} requests. Find out more {about}."
                  values={{
                    ccpa: <a className={classes.introLink} target="_blank" href='/#faq'>CCPA</a>,
                    gdpr: <a className={classes.introLink} target="_blank" href='/#faq'>GDPR</a>,
                    companyName: Capitalize(selectedCompany.name),
                    about: <a className={classes.introLink} target="_blank" href='/about'>about us</a>,
                    orgDetails: <a href="#about-org" className={classes.introLink}>{selectedCompany.name}</a>
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
                Delete Your Account or Access Your Personal Data
            </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                <FormattedMessage
                  id="newOrgSubTitle"
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
