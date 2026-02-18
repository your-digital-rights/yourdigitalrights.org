import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { container } from "../../styles/layout";

export const StyledAbout = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export const StyledHeading = styled('div')(({ theme }) => ({
  maxWidth: "850px !important",
  margin: "45px auto auto",
  lineHeight: "0.9em",
  [theme.breakpoints.down('md')]: {
    marginTop: "-140px",
    paddingTop: "150px",
    maxWidth: "350px !important",
    lineHeight: "0.9em",
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: "100%",
    fontSize: "18px",
  },
  padding: "30px",
  boxSizing: "border-box",
  ...container,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down('md')]: {
    padding: "30px",
    margin: "auto auto",
  },
}));

export const StyledContinue = styled('div')(({ theme }) => ({
  textAlign: "center",
  margin: "25px 0px",
  borderRadius: "24px 24px 24px 24px",
  fontWeight: "600",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  fontSize: "50px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "0.9em",
  letterSpacing: "normal",
  color: "#ffffff",
  [theme.breakpoints.down('md')]: {
    fontSize: "30px",
    marginLeft: "-20px",
  },    
}));

export const StyledDetailText = styled('div')(({ theme }) => ({
  paddingBottom: "20px",
  fontFamily: theme.palette.fontFamily,
  fontSize: "15px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.8",
  letterSpacing: "normal",
  color: "#ffffff",
}));

export const StyledAboutText = styled('div')(({ theme }) => ({
  margin: "0px 198px",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    margin: "auto auto;",
  },
}));

export const StyledDiscourse = styled('div')(({ theme }) => ({
  maxWidth: "777px",
  margin: "60px auto",
}));

export const StyledDiscussion = styled('div')(({ theme }) => ({
  width: "766px",
  boxShadow:
    "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)",
  backgroundColor: "white",
  padding: "21px 50px",
  margin: "auto",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    margin: "auto 0;",
    padding: "21px 30px",
  },
}));

export const StyledDisqusComments = styled('div')(({ theme }) => ({
  marginTop: "20px",
}));

export const StyledDiscussionHeading = styled('div')(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  fontSize: "28px",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#005ea5",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    margin: "auto 0;",
  },
}));

export const StyledDiscussionSubHeading = styled('div')(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  fontSize: "18px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.8",
  letterSpacing: "normal",
  color: "#212121",
  padding: "12px 0px",
}));

export const StyledLink = styled('a')(({ theme }) => ({
  fontSize: "15px",
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const StyledShowMore = styled('a')(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  color: "white",
}));
