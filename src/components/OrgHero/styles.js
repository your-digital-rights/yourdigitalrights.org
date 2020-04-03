import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    ...themeBg,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px"
    }
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto"
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      padding: "76px 30px",
      backgroundImage: "url('static/mascot_new.svg')",
      backgroundPosition: "right 160px top 100px",
      backgroundRepeat: "no-repeat"
    }
  },
  intro: {
    width: "607px",
    fontFamily: "SuisseSign",
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
    fontFamily: "SuisseSign",
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
    fontFamily: "SuisseSign",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#ffffff"
  },
  logoLink: {
    display: "flex",
    justifyContent: "left"
  },
  logo: {
    width: "44px",
    outlineColor: "#e8f4f8",
  },  
  WhiteText: {
    color: "white"
  },
  introEnd: {
    marginBottom: "50px",
    maxWidth: "530px"
  },
  titleImg: {
    width: "200px",
    maxWidth: "75%"
  },
  title: {
    marginBottom: 0
  },
  introLink: {
    color: "#e89e15",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }



});
