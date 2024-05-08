import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import ImageWithFallback from '../../utils/image';

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const Hero = ({ classes, selectedCompany }) => {
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
              alt="Organization logo"
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
                gutterBottom={true}
                className={classes.title}
              >
                <FormattedMessage
                  id="orgHero.title"
                  defaultMessage="Delete your {domain} account or get a copy of your data."
                  values={{ 
                    domain: <strong>{selectedCompany.url}</strong> 
                  }}
                />
              </Typography>
              <Typography
                color="inherit"
                component="h2"
                gutterBottom={true}
              >
                <FormattedMessage
                  id="orgHero.subTitle2"
                  defaultMessage="Send a data deletion or access request using this <disclamer>free and independent</disclamer> service."
                  values={{
                    disclamer: txt =>(<strong>{txt}</strong>),
                  }}
                />
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
              >
                <FormattedMessage
                  id="orgHero.newOrgTitle"
                  defaultMessage="Send a data deletion or access request."
                />
            </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                <FormattedMessage
                  id="orgHero.subTitleNewOrg"
                  defaultMessage="Get organizations to delete or send you a copy of your personal data using this <disclamer>free and independent</disclamer> service."
                  values={{
                    disclamer: txt =>(<strong>{txt}</strong>),
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
