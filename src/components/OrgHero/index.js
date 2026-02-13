import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import * as S from "./styles";

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const Hero = ({ selectedCompany }) => {
  return (
    <S.Hero id="hero">
      <S.Container>
        {selectedCompany && (
          <S.OrgLogo id="org-logo">
            <S.Logo
              src={`https://logo.uplead.com/${selectedCompany.url}`}
              width={44}
              height={44}
              alt="Organization logo"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </S.OrgLogo>
        )}
        <S.HeroText id="hero-text">
          {selectedCompany && (
            <>
              <Typography
                id="orgName"
                variant="h4"
                color="inherit"
                component="p"
                sx={{ 
                  maxWidth: "100%",
                  marginBottom: "5px",
                  lineHeight: "1em",
                  '@media (max-width: 900px)': {
                    margin: "auto 0px 0px",
                    maxWidth: "100%",
                  }
                }}
              >
                {Capitalize(selectedCompany.url)}
              </Typography>      
              <Typography
                color="inherit"
                component="h1"
                gutterBottom={true}
                sx={{
                  fontWeight: "600",
                  color: "white",
                  fontSize: "1.7rem",
                  paddingTop: "10px",
                  lineHeight: "1.13333em",
                }}
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
            <S.AddOrg id="add-org">
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
            </S.AddOrg>
          )}
        </S.HeroText>
      </S.Container>
    </S.Hero>
  );
};
export default Hero;
