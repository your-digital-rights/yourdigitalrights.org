import {
  FillInBody,
  FillInTitle,
  SearchBody,
  SearchTitle,
  SendBody,
  SendTitle,
  Title,
  TitleImgAlt,
  WhyBody,
  WhyTitle,
  YourDataBody,
  YourDataTitle,
} from "./text";
import LowerSection from "./LowerSection";
import UpperSection from "./UpperSection";
import * as S from "./styles";
import HowItWorksImage from "../../../public/images/img-howto.svg";
import ICHappy from "../../../public/images/ic-happy.svg";
import ICVerified from "../../../public/images/ic-verified-user.svg";

const HowItWorks = () => {
  return (
    <S.StyledRoot id="howItWorks">
      <S.StyledUpperContainer>
        <S.StyledTitleImg
          src={HowItWorksImage}
          alt={TitleImgAlt}
        />
        <S.StyledUpperContent>
          <S.StyledTitle
            variant="h4"
            component="h2"
            gutterBottom={true}
          >
            {Title}
          </S.StyledTitle>
          <UpperSection title={SearchTitle} body={SearchBody} />
          <UpperSection title={FillInTitle} body={FillInBody} />
          <UpperSection title={SendTitle} body={SendBody} />
        </S.StyledUpperContent>
      </S.StyledUpperContainer>
      <S.StyledLowerContainer>
        <LowerSection
          title={YourDataTitle}
          body={YourDataBody}
          imgSrc={ICHappy}
        />
        <LowerSection
          title={WhyTitle}
          body={WhyBody}
          imgSrc={ICVerified}
        />
      </S.StyledLowerContainer>
    </S.StyledRoot>
  );
};

export default HowItWorks;
