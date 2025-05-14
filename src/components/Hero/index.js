import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import { heroUrlAnchor } from "../../utils/urlAnchors";
import styles from "./styles";

const HeroRoot = styled('div')(styles.hero);
const HeroContainer = styled('div')(styles.container);
const HeroHeading = styled('div')(styles.heading);
const HeroIntro = styled('div')(styles.intro);
const HeroIntroEnd = styled('div')(styles.introEnd);

const Hero = ({ children }) => {
  return (
    <HeroRoot id={heroUrlAnchor}>
      <HeroContainer>
        <HeroHeading>
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
            sx={styles.intro}
          >  
            <FormattedMessage
              id="hero.headerText"
              defaultMessage="Get organizations to delete your account or provide a copy of your personal information."
            />
          </Typography>
          <Typography
            color="inherit"
            component="h2"
            sx={styles.introEnd}
          >
            <FormattedMessage
              id="hero.intro"
              defaultMessage="Many organizations collect and sell your personal data, often without your consent. Use this free service to send them a data deletion or access request. Start by searching for an organization below."
            />            
          </Typography>
          {children}
        </HeroHeading>
      </HeroContainer>
    </HeroRoot>
  );
};

export default Hero;
