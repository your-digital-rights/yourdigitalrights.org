import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const AboutOrg = ({ classes, selectedCompany }) => {
  const description = selectedCompany.description.length > 0 ? selectedCompany.description : selectedCompany.slogan;
  console.log(description);
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
                defaultMessage="About {org}" 
                values={{
                  org: selectedCompany.name
                }}
              />
            </Typography>
          </div>
          <div id="about-detail-text" className={classes.detailText}>
            { description.length > 0 && (
              <>
              <strong>
                <FormattedMessage id="aboutOrg.description" defaultMessage="In their own words:" />
              </strong>
              <br/>
              {description}
              <br/>
              </>
            )}
            <strong>
              <FormattedMessage id="aboutOrg.email" defaultMessage="Email:" />{" "}
            </strong>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`mailto:${selectedCompany.email}`}
              className={classes.link}
            >
              {selectedCompany.email}
            </a>
            <br />
            {selectedCompany.privacyPolicy && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.privacyPolicy" defaultMessage="Privacy Policy:" />{" "}
                </strong>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={`${selectedCompany.privacyPolicy}`}
                  className={classes.link}
                >
                  {selectedCompany.privacyPolicy}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
