import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Image from 'next/image';

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: "center",
  margin: "32px 16px",
  flex: 1,
  [theme.breakpoints.up("md")]: {
    margin: "32px",
  },
}));

const StyledImg = styled(Image)(({ theme }) => ({
  display: "block",
  margin: "0 auto 16px",
  height: "70px",
  width: "auto",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({}));

const StyledBody = styled(Typography)(({ theme }) => ({}));

const LowerSection = ({ title, body, imgSrc, imgAlt = "" }) => {
  return (
    <StyledRoot>
      <StyledImg src={imgSrc} alt={imgAlt} role="presentation" />
      <StyledTitle component="h3" variant="h5" gutterBottom={true}>
        {title}
      </StyledTitle>
      <StyledBody component="p">{body}</StyledBody>
    </StyledRoot>
  );
};

export default LowerSection;
