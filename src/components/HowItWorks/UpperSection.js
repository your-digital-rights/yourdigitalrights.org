import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

const StyledRoot = styled('div')(({ theme }) => ({
  marginBottom: 16,
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  display: "inline",
  color: "#005ea5",
  fontWeight: "600",
}));

const StyledInline = styled(Typography)(({ theme }) => ({
  display: "inline",
}));

const UpperSection = ({ title, body }) => {
  return (
    <StyledRoot>
      <StyledHeading component="h3" variant="h6">
        {title}{" "}
      </StyledHeading>
      <StyledInline component="p">
        {body}
      </StyledInline>
    </StyledRoot>
  );
};

export default UpperSection;
