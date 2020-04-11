import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default theme => ({
  hero: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    ...themeBg,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px"
    }
  },
  orgLogo: {
    paddingTop: "15px",
    paddingRight: "25px",
    display: "block",
  },
  heroText: {
    flex: 1,
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto"
  },
  container: {
    display: "flex",
    maxWidth: "777px",
    padding: "30px",
    display: "flex",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      padding: "76px 30px",
    }
  },
  intro: {
    width: "607px",
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "21px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff"
  },
  domain: {
    width: "475px",
    height: "40px",
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#ffffff",
  },  
  info: {
    width: "624px",
    height: "108px",
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#ffffff"
  },
  logo: {
    width: "44px",
    outlineColor: "#e8f4f8",
  },  
  introLink: {
    fontSize: "15px",
    color: "#ffffff",
    fontWeight: "bold",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline"
    }
  }



});
