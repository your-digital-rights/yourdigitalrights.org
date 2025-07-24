import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { container } from "../../styles/layout";

export const StyledRoot = styled('div')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px 0px 0px",
  ...container,
  [theme.breakpoints.down('md')]: {
    marginTop: "-100px",
    paddingTop: "160px",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export const StyledTitleImg = styled(Image)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const StyledUpperContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    margin: "60px 0",
  },
}));

export const StyledUpperContent = styled('div')(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    flex: 1,
    marginLeft: 64,
  },
}));

export const StyledLowerContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "top",
  },
}));
