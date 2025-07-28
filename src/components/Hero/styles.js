import { styled } from '@mui/material/styles';
import { container } from "../../styles/layout";

export const HeroContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    paddingTop: "50px",
  },
  color: "white",
}));

export const Heading = styled('div')(({ theme }) => ({
  maxWidth: "970px !important",
  margin: "auto auto",
}));

export const Container = styled('div')(({ theme }) => ({
  padding: "30px",
  boxSizing: "border-box",
  ...container,
  [theme.breakpoints.up("md")]: {
    padding: "76px 30px",
    backgroundImage: "url('images/mascot_new.svg')",
    backgroundPosition: "right 70px top 100px",
    backgroundRepeat: "no-repeat",
  },
}));

export const Intro = styled('div')(({ theme }) => ({
  maxWidth: "650px",
}));

export const WhiteText = styled('div')(({ theme }) => ({
  color: "white",
}));

export const IntroEnd = styled('div')(({ theme }) => ({
  marginBottom: "50px",
  maxWidth: "650px",
}));

export const TitleImg = styled('img')(({ theme }) => ({
  width: "200px",
  maxWidth: "75%",
}));

export const Title = styled('h1')(({ theme }) => ({
  marginBottom: 0,
}));