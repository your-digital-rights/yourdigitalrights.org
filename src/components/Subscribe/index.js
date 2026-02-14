import Typography from "@mui/material/Typography";
import * as S from "./styles";
import { FormattedMessage } from "react-intl";
import NewsletterSignupForm from "../NewsletterSignupForm";

const Subscribe = () => {
  return (
    <>
      <S.StyledContainer>
        <div className="subscribe">
          <S.StyledHeading id="subscribe">
          <S.StyledText>
            <Typography
                color="inherit" 
                variant="h3"
                component="h3"
                gutterBottom={true}
              >
                <FormattedMessage id="subscribe.title" defaultMessage="Subscribe To Privacy Alerts!" />
              </Typography>          
              <S.StyledIntro 
                as={Typography}
                color="inherit" 
                gutterBottom={true}
              >
                <FormattedMessage
                  id="subscribe.alertsOneLiner1"
                  defaultMessage="Stay ahead of online threats and take control of your personal data with Privacy Alerts! Our newsletter provides the latest expert advice, tips, and tricks to safeguard your privacy in the digital world. Subscribe now to stay informed and empowered!"
                />

              </S.StyledIntro> 
            </S.StyledText>
            <div>
              <NewsletterSignupForm
                layout="compact"
                tone="inverted"
              />
            </div>
          </S.StyledHeading>
        </div>
      </S.StyledContainer>
    </>
  );
};
export default Subscribe;
