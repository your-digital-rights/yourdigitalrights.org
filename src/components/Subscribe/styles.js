import { styled } from '@mui/material/styles';
import { container } from "../../styles/layout";

export const StyledHeading = styled('div')(({ theme }) => ({
  color: "white",
  padding: "25px 8% 20px",
  backgroundColor: "#039277",
  borderRadius: "20px",
  maxWidth: "980px !important",
  margin: "30px 30px 60px",
  [theme.breakpoints.down('md')]: {
    display: "inherit",
    margin: "auto 10px",
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  paddingBottom: "20px",
  boxSizing: "border-box",
  textAlign: "center",
  ...container,
  [theme.breakpoints.down('md')]: {
    paddingLeft: "0px",
    paddingRight: "0px",
  }
}));

export const StyledImage = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: "none",
  },
}));

export const StyledTitle = styled('div')(() => ({
  marginBottom: 0,
}));

export const StyledText = styled('div')(() => ({
  paddingRight: "20px",
}));

export const StyledSubstack = styled('div')(() => ({
  marginTop: "20px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
}));

export const StyledError = styled('div')(() => ({
  color: "black",
}));

export const StyledSuccess = styled('div')(() => ({
  color: "black",
}));

export const StyledSignUpButton = styled('div')(() => ({
  marginTop: "20px",
}));

export const StyledIntro = styled('div')(() => ({
  marginBottom: "20px",
}));

export const StyledEmbedPlaceholder = styled('div')(() => ({
  width: "330px",
  height: "150px",
  backgroundColor: "rgba(255, 255, 255, 0.18)",
  borderRadius: "8px",
}));
