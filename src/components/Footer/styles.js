import { styled } from '@mui/material/styles';
import { container } from "../../styles/layout";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Root = styled('div')(() => ({
  ...container,
  position: "relative",
  zIndex: 2,
  overflow: "visible",
}));

export const Inner = styled('div')(({ theme }) => ({
  // borderTop: "2px solid #005ea5",
  marginTop: 30,
  paddingTop: 30,
  paddingBottom: 30,
  [theme.breakpoints.up("md")]: {
    paddingRight: 30,
    paddingLeft: 30,
  },
}));

export const InnerLeft = styled('div')(({ theme }) => ({
  // borderTop: "2px solid #005ea5",
  width: "20%",
  float: "left",
  marginBottom: 30,
  [theme.breakpoints.down('md')]: {
    width: "100%",
    textAlign: "center",
  },
}));

export const InnerRight = styled('div')(({ theme }) => ({
  // borderTop: "2px solid #005ea5",
  width: "75%",
  float: "right",
  marginBottom: 60,
  fontSize: '14px',
  fontWeight: "400",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    fontSize: '10px',
  },
}));

export const Copyright = styled('div')(() => ({
  textAlign: "center",
}));

export const WishList = styled('div')(() => ({
  textAlign: "center",
  position: "relative",
  zIndex: 3,
}));

export const WishButton = styled(Button)(() => ({
  marginTop: "-25px",
  position: "relative",
  zIndex: 4,
  borderRadius: "24px 24px 24px 24px",
  color: "white",
  fontWeight: "600",
  padding: "10px 20px",
  "&:hover": {
    background: "#cf8600",
  },
}));

export const DisclaimerLink = styled('a')(() => ({
  color: "#005ea5",
  fontWeight: "600",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const VercelLogo = styled('div')(() => ({
  height: "1.8em",
  marginTop: "5px",
  display: "inline-block",
  '& img': {
    height: "1.8em !important",
    width: "auto !important",
  }
}));
