import { IntroText, SubtitleText, MoreInfo, NewOrgTitle } from "./text";

import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { visuallyHidden } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const Hero = ({ classes, selectedCompany }) => {
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
                id="pageTitle"
                variant="display1"
                color="inherit"
                component="h1"
                className={classes.heading}
              >
                {selectedCompany.name}
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                variant="display2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgSubTitle"
                  defaultMessage="Request deletion, or a copy of your data by sending a {ccpa} or a {gdpr} data request."
                  values={{
                    ccpa: <a className={classes.introLink} href='/#faq'>CCPA</a>,
                    gdpr: <a className={classes.introLink} href='/#faq'>GDPR</a>,
                  }}
                />
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
                Delete or Access Your Data
            </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                <FormattedMessage
                  id="newOrgSubTitle"
                  defaultMessage="Send any organization a {ccpa} or a {gdpr} request."
                  values = {{
                    ccpa: <a className={classes.introLink} href='/#faq'>CCPA</a>,
                    gdpr: <a className={classes.introLink} href='/#faq'>GDPR</a>,
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
