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
import Typography from "@mui/material/Typography";
import UpperSection from "./UpperSection";
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import HowItWorksImage from "../../../public/images/img-howto.svg";
import ICHappy from "../../../public/images/ic-happy.svg";
import ICVerified from "../../../public/images/ic-verified-user.svg";
import styles from "./styles";

const Root = styled('div')(styles.root);
const UpperContainer = styled('div')(styles.upperContainer);
const UpperContent = styled('div')(styles.upperContent);
const LowerContainer = styled('div')(styles.lowerContainer);
const StyledImage = styled(Image)(styles.titleImg);

const HowItWorks = () => {
  return (
    <Root id="howItWorks">
      <UpperContainer>
        <StyledImage
          src={HowItWorksImage}
          alt={TitleImgAlt}
        />
        <UpperContent>
          <Typography
            variant="h4"
            component="h2"
            sx={styles.title}
            gutterBottom={true}
          >
            {Title}
          </Typography>
          <UpperSection title={SearchTitle} body={SearchBody} />
          <UpperSection title={FillInTitle} body={FillInBody} />
          <UpperSection title={SendTitle} body={SendBody} />
        </UpperContent>
      </UpperContainer>
      <LowerContainer>
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
      </LowerContainer>
    </Root>
  );
};

export default HowItWorks;
