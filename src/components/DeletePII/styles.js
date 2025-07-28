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
  textAlign: "center",
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  padding: "30px",
  boxSizing: "border-box",
  ...container,
}));

export const StyledRightButton = styled(Button)(({ theme }) => ({
  marginTop: "-25px",
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  fontWeight: "600",
  padding: "10px 20px",
  "&:hover": {
    background: "#04487B",
  },
}));

export const StyledLeftButton = styled(Button)(({ theme }) => ({
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

export const StyledIntro = styled(Typography)(({ theme }) => ({
  marginTop: "20px",
  marginBottom: "50px",
}));

export const StyledTitleImg = styled('img')(({ theme }) => ({
  width: "300px",
  maxWidth: "75%",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 0,
}));

export const StyledButtons = styled('div')(({ theme }) => ({
  textAlign: "center",
  marginBottom: "30px",
}));