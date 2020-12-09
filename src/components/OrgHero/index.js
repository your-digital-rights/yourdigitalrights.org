import NewOrgTitle from "./text";

import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
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
                variant="display1"
                color="inherit"
                component="p"
                className={classes.heading}
              >
                {selectedCompany.name}
              </Typography>
              <Typography color="inherit">
                Domain:{" "}
                <strong>
                  <a
                    rel="nofollow"
                    target="new"
                    href={`https://${selectedCompany.url}`}
                    className={classes.introLink}
                  >
                    {selectedCompany.url}
                  </a>
                </strong>
              </Typography>               
              <Typography
                color="inherit"
                component="h1"
                variant="display2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgTitle"
                  defaultMessage="Request to delete your account or a copy of your personal data from {org} by sending a CCPA or a GDPR request."
                  values={{
                    org: companyName
                  }}                  
                />
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgSubTitle"
                  defaultMessage="This is a free service which  is not affiliated with {companyName}. Find out more {about}."
                  values={{
                    ccpa: <a className={classes.introLink} target="_blank" href='/#faq'>CCPA</a>,
                    gdpr: <a className={classes.introLink} target="_blank" href='/#faq'>GDPR</a>,
                    companyName: Capitalize(selectedCompany.url),
                    about: <a className={classes.introLink} target="_blank" href='/about'>about us</a>,
                  }}
                />
              </Typography>                           
              <Typography color="inherit">
                <a href="#about-org" className={classes.introLink}>
                  <strong>Find out more about privacy at {selectedCompany.name}</strong>
                </a>
              </Typography>
            </>
          )}
          {!selectedCompany && (

            <div id="add-org" className={classes.addOrg}>
              <Typography
                variant="display1"
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
