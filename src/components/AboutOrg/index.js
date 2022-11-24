import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const AboutOrg = ({ classes, selectedCompany }) => {
  return (
    <div className={classes.about}>
      <div id="about-org" className={classes.container}>
        <div id="about-org-text" className={classes.aboutText}>
          <div id="about-org-heading" className={classes.heading}>
            <Typography
              variant={"h4"}
              className={classes.title}
              gutterBottom={true}
              component={"h3"}
            >
              <FormattedMessage 
                id="aboutOrg.details" 
                defaultMessage="Additional information:" 
              />
            </Typography>
          </div>
          <div id="about-detail-text" className={classes.detailText}>
            Email:{" "}
            <strong>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={`mailto:${selectedCompany.email}`}
                className={classes.link}
              >
                {selectedCompany.email}
              </a>
            </strong>
            {selectedCompany.privacyPolicyUrl && (
              <span>
                <br />
                <FormattedMessage id="aboutOrg.privacyPolicy" defaultMessage="Privacy Policy:" />{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={`${selectedCompany.privacyPolicyUrl}`}
                  className={classes.link}
                >
                  {selectedCompany.privacyPolicyUrl}
                </a>
              </span>
            )}
            <br />
            <FormattedMessage id="aboutOrg.numRequests" defaultMessage="Number of request sent:"/>{" "}
            <strong>{selectedCompany.emailsSent}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
