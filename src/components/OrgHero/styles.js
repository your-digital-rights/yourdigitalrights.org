import { styled } from '@mui/material/styles';

export const Hero = styled('div')(({ theme }) => ({
  color: "white",
  paddingBottom: "150px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  textAlign: "left",
  [theme.breakpoints.down('md')]: {
    padding: "60px 0px 150px",
  },
}));

export const OrgLogo = styled('div')(({ theme }) => ({
  paddingTop: "5px",
  paddingRight: "25px",
  display: "block",
  [theme.breakpoints.down('md')]: {
    display: "none",
  },
}));

export const HeroText = styled('div')(({ theme }) => ({
  flex: 1,
}));

export const Heading = styled('div')(({ theme }) => ({
  maxWidth: "100%",
  marginBottom: "5px",
  lineHeight: "1em",
  [theme.breakpoints.down('md')]: {
    margin: "auto 0px 0px",
    maxWidth: "100%",
  },
}));

export const AddOrg = styled('div')(({ theme }) => ({
  width: "660px",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },
}));

export const Container = styled('div')(({ theme }) => ({
  display: "flex",
  padding: "120px 30px 60px",
  maxWidth: "850px",
  boxSizing: "border-box",
  margin: "auto",
  paddingLeft: "30px",
  paddingRight: "30px",
  [theme.breakpoints.down('md')]: {
    padding: "50px 30px 0px",
    width: "100%",
  },
}));

export const Logo = styled('img')(({ theme }) => ({
  width: "44px",
  outlineColor: "#e8f4f8",
  [theme.breakpoints.down('md')]: {
    display: "none",
  },
}));

export const Title = styled('div')(({ theme }) => ({
  fontWeight: "600",
  color: "white",
  fontSize: "1.7rem",
  paddingTop: "10px",
  lineHeight: "1.13333em",
}));

export const TitleLink = styled('a')(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const IntroLink = styled('a')(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "underline",
  "&:hover": {
    textDecoration: "underline",
  },
}));