import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { container } from "../../styles/layout";

export const StyledDonate = styled('div')(({ theme }) => ({
  backgroundColor: "#f2f2f2",
}));

export const StyledHeading = styled('div')(({ theme }) => ({
  maxWidth: "850px !important",
  margin: "auto auto",
  [theme.breakpoints.down('md')]: {
    marginTop: "-140px",
    paddingTop: "150px",
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  padding: "30px",
  boxSizing: "border-box",
  ...container,
  /*[theme.breakpoints.up("md")]: {
    padding: "76px 30px",
    backgroundImage: "url('/images/QR.svg')",
    backgroundPosition: "right 130px top 140px",
    backgroundRepeat: "no-repeat",
  },*/
}));

export const StyledDonateBTCButton = styled(Button)(({ theme }) => ({
  marginTop: "-25px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  fontWeight: "600",
  padding: "10px 20px",
  "&:hover": {
    background: "#04487B",
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '35px',
  },     
}));

export const StyledDonateLPButton = styled(Button)(({ theme }) => ({
  marginTop: "-25px",
  marginRight: "10px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  fontWeight: "600",
  padding: "10px 20px",
  "&:hover": {
    background: "#04487B",
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '35px',
  },
}));

export const StyledTitleImg = styled('img')(({ theme }) => ({
  width: "300px",
  maxWidth: "75%",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 0,
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  marginTop: "50px",
  textAlign: "center",
  marginBottom: "30px",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
  },
}));

export const StyledIntro = styled(Typography)(({ theme }) => ({}));