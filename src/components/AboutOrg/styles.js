import { theme } from "../../styles/theme";
import { container } from "../../styles/layout";

const Style = (theme) => ({
  about: {
    backgroundColor: theme.palette.primary.main,
    ...theme,
  },
  heading: {
    maxWidth: "850px !important",
    margin: "45px auto auto",
    lineHeight: "0.9em",
    [theme.breakpoints.down('md')]: {
      marginTop: "-140px",
      paddingTop: "150px",
      maxWidth: "350px !important",
      lineHeight: "0.9em",
    },
  },
  container: {
    [theme.breakpoints.down('md')]: {
      width: "100%",
      fontSize: "18px",
    },
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
      padding: "30px",
      margin: "auto auto",
    },
  },
  Continue: {
    textAlign: "center",
    margin: "25px 0px",
    borderRadius: "24px 24px 24px 24px",
    fontWeight: "600",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  title: {
    fontFamily: theme.palette.fontFamily,
    fontSize: "50px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.22",
    letterSpacing: "normal",
    color: "#ffffff",
    lineHeight: "0.9em",
    [theme.breakpoints.down('md')]: {
      fontSize: "30px",
      marginLeft: "-20px",
    },    
  },
  detailText: {
    paddingBottom: "20px",
    fontFamily: theme.palette.fontFamily,
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  aboutText: {
    margin: "0px 198px",
    [theme.breakpoints.down('md')]: {
      width: "100%",
      margin: "auto auto;",
    },
  },
  discourse: {
    maxWidth: "777px",
    margin: "60px auto",
  },
  discussion: {
    width: "766px",
    boxShadow:
      "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)",
    backgroundColor: "white",
    padding: "21px 50px",
    margin: "auto",
    [theme.breakpoints.down('md')]: {
      width: "100%",
      margin: "auto 0;",
      padding: "21px 30px",
    },
  },
  disqusComments: {
    marginTop: "20px",
  },
  discussionHeading: {
    fontFamily: theme.palette.fontFamily,
    fontSize: "28px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#005ea5",
    [theme.breakpoints.down('md')]: {
      width: "100%",
      margin: "auto 0;",
    },
  },
  discussionSubHeading: {
    fontFamily: theme.palette.fontFamily,
    fontSize: "18px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#212121",
    padding: "12px 0px",
  },
  link: {
    fontSize: "15px",
    color: "#ffffff",
    fontWeight: "bold",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  showMore: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "white",
  },
});

export default Style;