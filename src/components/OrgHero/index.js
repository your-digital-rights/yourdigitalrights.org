import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import ImageWithFallback from '../../utils/image';

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const Hero = ({ classes, selectedCompany }) => {
  let showOrg = false;
  let disclamer;
  if (selectedCompany) {
    showOrg = selectedCompany.name.toUpperCase() != selectedCompany.url.toUpperCase();
      disclamer=<FormattedMessage
      id="orgHero.subTitle1"
      defaultMessage="Send {domain} a data deletion or access request using this <disclamer>free and independent</disclamer> service."
      values={{
        domain: <strong>{Capitalize(selectedCompany.url)}</strong>,
        disclamer: txt =>(<strong>{txt}</strong>),
      }}
    />
  } else {
      disclamer=<FormattedMessage
      id="orgHero.subTitle2"
      defaultMessage="Send a data deletion or access request using this <disclamer>free and independent</disclamer> service."
      values={{
        disclamer: txt =>(<strong>{txt}</strong>),
      }}
    />
  }

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
              {showOrg && (
                <Typography color="inherit">
                  <FormattedMessage
                      id="orgHero.orgName"
                      defaultMessage="Organization: {org}."
                      values={{ 
                        org: <strong>{selectedCompany.name}</strong> 
                      }}
                  />                
                </Typography>         
              )}      
              <Typography
                color="inherit"
                component="h1"
                variant="h3"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgHero.title"
                  defaultMessage="Delete your account or get a copy of your personal data."
                />
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                gutterBottom={true}
              >
                {disclamer}
              </Typography>                            
            </>
          )}
          {!selectedCompany && (

            <div id="add-org" className={classes.addOrg}>
              <Typography
                variant="h3"
                color="inherit"
                gutterBottom={true}
                component="h1"
                className={classes.heading}
              >
                <FormattedMessage
                  id="orgHero.newOrgTitle"
                  defaultMessage="Delete or Get a Copy of Your Personal Data."
                />
            </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                {disclamer}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
