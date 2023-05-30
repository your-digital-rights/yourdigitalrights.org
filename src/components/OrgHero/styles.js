import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  hero: {
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    ...theme,
    [theme.breakpoints.down('md')]: {
      padding: "60px 0px 150px",
    },
  },
  orgLogo: {
    paddingTop: "5px",
    paddingRight: "25px",
    display: "block",
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      margin: "auto 0px 0px",
      maxWidth: "100%",
    },
  },
  addOrg: {
    width: "660px",
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      padding: "50px 30px 0px",
      width: "100%",
    },
  },
  logo: {
    width: "44px",
    outlineColor: "#e8f4f8",
    [theme.breakpoints.down('md')]: {
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

export default Style;