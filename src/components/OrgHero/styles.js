import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default (theme) => ({
  hero: {
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    ...themeBg,
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 150px",
    },
  },
  orgLogo: {
    paddingTop: "5px",
    paddingRight: "25px",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heroText: {
    flex: 1,
  },
  heading: {
    maxWidth: "100%",
    marginBottom: "5px",
    lineHeight: "1em",
    [theme.breakpoints.down("sm")]: {
      margin: "auto 0px 0px",
      maxWidth: "100%",
    },
  },
  addOrg: {
    width: "660px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  container: {
    display: "flex",
    padding: "120px 30px 60px",
    maxWidth: "850px",
    display: "flex",
    boxSizing: "border-box",
    margin: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 30px 0px",
      width: "100%",
    },
  },
  logo: {
    width: "44px",
    outlineColor: "#e8f4f8",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  titleLink: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },  
  introLink: {
    color: "#ffffff",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
