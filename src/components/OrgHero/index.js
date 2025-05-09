import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./styles";
import ImageWithFallback from '../../utils/image';

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Hero = ({ selectedCompany }) => {
  return (
    <Box sx={styles.hero} id="hero">
      <Box sx={styles.container}>
        {selectedCompany && (
          <Box id="org-logo" sx={styles.orgLogo}>
            <ImageWithFallback
              sx={styles.logo}
              src={`https://logo.uplead.com/${selectedCompany.url}`}
              width={44}
              height={44}
              fallbackSrc="/images/Keep-it-private.png"
              alt="Organization logo"
            />
          </Box>
        )}
        <Box id="hero-text" sx={styles.heroText}>
          {selectedCompany && (
            <>
              <Typography
                id="orgName"
                variant="h4"
                color="inherit"
                component="p"
                sx={styles.heading}
              >
                {Capitalize(selectedCompany.url)}
              </Typography>      
              <Typography
                color="inherit"
                component="h1"
                gutterBottom={true}
                sx={styles.title}
              >
                <FormattedMessage
                  id="orgHero.title"
                  defaultMessage="Delete your {domain} account or request your data."
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
                  defaultMessage="Send {name} a data deletion or access request using this <disclamer>free and independent</disclamer> service."
                  values={{
                    disclamer: txt =>(<strong>{txt}</strong>),
                    name: <strong>{selectedCompany.name}</strong>,
                  }}
                />
              </Typography>                           
            </>
          )}
          {!selectedCompany && (
            <Box id="add-org" sx={styles.addOrg}>
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
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
