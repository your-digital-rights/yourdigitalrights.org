import { IntroText, SubtitleText, MoreInfo, NewOrgTitle, OrgSubTitle, NewOrgSubTitle } from "./text";

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
        {selectedCompany  && (
          <div id="org-logo" className={classes.orgLogo}>
            <img className={classes.logo} src={`https://api.faviconkit.com/${selectedCompany.url}/24`} />
          </div>
        )}
        <div id="hero-text" className={classes.heroText}>
          {selectedCompany  && (
            <>
              <Typography
                  variant="display1"
                  color="inherit"
                  gutterBottom={true}
                  component="h1"
                  className={classes.heading}
              >
                Delete My {selectedCompany.name} Data
              </Typography>

              <Typography 
                color="inherit" 
                className={classes.subtitle}
                component="h2"
              >
                {OrgSubTitle}
              </Typography>
              
              <Typography color="inherit" className={classes.domain}>
                Domain: <strong><a rel="nofollow" target="new" href={`https://${selectedCompany.url}`} className={classes.introLink}>{selectedCompany.url}</a></strong>
                <br />
                <a href="#about-org" className={classes.introLink}>Find out more about {selectedCompany.name}</a>
              </Typography>  
            </>
          )}
          {!selectedCompany  && (
            <>
              <Typography
                  variant="display1"
                  color="inherit"
                  gutterBottom={true}
                  component="h1"
                  className={classes.heading}
              >
                {NewOrgTitle}
              </Typography>        
              <Typography 
                color="inherit" 
                className={classes.subtitle}
                component="h2"
              >
                {NewOrgSubTitle}
              </Typography>
            </>
          )}
          <Typography color="inherit" className={classes.info}>
              <FormattedMessage
                id="moreInfo"
                defaultMessage="To find out more about the process read our {faq}, or read more {about}."
                values={{ 
                  faq: <a href="/#faq" className={classes.introLink}>Frequently Asked Questions</a>,
                  about: <a href="/about" className={classes.introLink}>About Us</a>,
                }}
              />
          </Typography>          
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
