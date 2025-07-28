import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import * as S from "./styles";

const Donations = ({ children }) => {

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Donation Component");
  };

  return (
    <S.StyledDonate>
      <S.StyledContainer>
        <S.StyledHeading id="donations">
          <S.StyledTitle
            variant="h4"
            component="h2"
            gutterBottom={true}
          >
            <FormattedMessage id="donations.headingDonate" defaultMessage="We need your support" />
          </S.StyledTitle>
          <S.StyledIntro color="inherit" gutterBottom={true}>
            <FormattedMessage
              id="donations.donateIntro"
              defaultMessage="YourDigitalRights.org was created because we believe that privacy matters, and that exercising your right to privacy should be easy. That's why we've made it free. By donating, or becoming a supporting member you can help ensure our long-term financial stability and independence."
            />
          </S.StyledIntro>          
          <S.StyledButtons>
            <S.StyledDonateLPButton
              variant="contained"
              href="https://opencollective.com/consciousdigital"
              color="primary"
              type="submit"
              target="_blank"
              onClick={() => trackDonate("Donation - Open Collective")}
            >
              <FormattedMessage id="donations.donate" defaultMessage="Donate" />
            </S.StyledDonateLPButton>                          
            {/* 
            <S.StyledDonateBTCButton
              variant="contained"
              href="bitcoin:34kHDRPhrBmP15BZBYvx4gn5amwCwa6kGe"
              color="primary"
              type="submit"
              onClick={() => trackDonate("Donation - BTC")}
            >
              <FormattedMessage id="donations.Bitcoin" defaultMessage="Donate Bitcoin" />
            </S.StyledDonateBTCButton> 
            */}
          </S.StyledButtons>
          {children}
        </S.StyledHeading>
      </S.StyledContainer>
    </S.StyledDonate>
  );
};

export default Donations;
