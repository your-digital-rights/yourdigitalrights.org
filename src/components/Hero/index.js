import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import * as S from "./styles";
import { heroUrlAnchor } from "../../utils/urlAnchors";

const Hero = ({ children }) => {
  return (
    <S.HeroContainer id={heroUrlAnchor}>
      <S.Container>
        <S.Heading>
          <Typography
            variant="h4"
            color="inherit"
            gutterBottom={true}
            component="p"
            id="hero-heading"
          >
            <FormattedMessage
              id="hero.heading"
              defaultMessage="Own Your Data"
            />
          </Typography>
          <Typography
            color="inherit"
            component="h1"
            variant="h3"
            gutterBottom={true}
            sx={{ maxWidth: "650px" }}
          >  
            <FormattedMessage
              id="hero.headerText"
              defaultMessage="Get organizations to delete your account or provide a copy of your personal information."
            />
          </Typography>
          <Typography
            color="inherit"
            component="h2"
            sx={{ marginBottom: "50px", maxWidth: "650px" }}
          >
            <FormattedMessage
              id="hero.intro"
              defaultMessage="Many organizations collect and sell your personal data, often without your consent. Use this free service to send them a data deletion or access request. Start by searching for an organization below."
            />            
          </Typography>
          {children}
        </S.Heading>
      </S.Container>
    </S.HeroContainer>
  );
};
export default Hero;
