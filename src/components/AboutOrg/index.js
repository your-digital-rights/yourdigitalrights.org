import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import { FormattedMessage } from "react-intl";
import { useState } from "react";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const AboutOrg = ({ classes, selectedCompany }) => {
  const [showMore, setShowMore] = useState(false);  
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
            { (selectedCompany.slogan.length > 0 || (selectedCompany.description.length > 0)) && (
              <strong>
                <FormattedMessage id="aboutOrg.description" defaultMessage="In their own words:" />
                <br/>
              </strong>
            )}
            { selectedCompany.slogan.length > 0 && (
              <>
                {selectedCompany.slogan}
                <br/>
              </>
            )}
            { selectedCompany.description.length > 0 && (
              <>
                {showMore ? selectedCompany.description.substring(0, 2000) : `${selectedCompany.description.substring(0, 300)}`}
                <br/>
                <a className={classes.showMore} onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show less" : "Show more"}
                </a>
                <br/>
              </>
            )}
            { selectedCompany.industries.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.industry" defaultMessage="Industry:" />{" "}
                </strong>
                {selectedCompany.industries}
                <br/>
              </>
            )}  
            { selectedCompany.specialties.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.specialties" defaultMessage="Company Specialties:" />{" "}
                </strong>
                {selectedCompany.specialties}
                <br/>
              </>
            )}
            { selectedCompany.type.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.type" defaultMessage="Company Type:" />{" "}
                </strong>
                {selectedCompany.type}
                <br/>
              </>
            )}     
            { selectedCompany.headquarters.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.headquarters" defaultMessage="Headquarters:" />{" "}
                </strong>
                {selectedCompany.headquarters}
                <br/>
              </>
            )}    
            { selectedCompany.founded.length > 0 && (
              <>
                <strong>
                  <FormattedMessage id="aboutOrg.founded" defaultMessage="Founded:" />{" "}
                </strong>
                {selectedCompany.founded}
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
            {selectedCompany.privacyPolicy.length > 0 && (
              <strong>
                <FormattedMessage 
                  id="aboutOrg.privacyPolicy" 
                  defaultMessage="View {org}'s <a>Privacy Policy</a>"
                  values={{
                    org: selectedCompany.name,
                    a: txt => (<a target="_blank" rel="noreferrer noopener" href={selectedCompany.privacyPolicy} className={classes.link} ><strong>{txt}</strong></a>),
                  }}  
                />
              </strong>
            )}            
          </div>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
