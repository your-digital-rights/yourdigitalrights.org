import { themeBg } from "../../styles/theme";
import { container } from "../../styles/layout";
import Button from "@material-ui/core/Button";

export default (theme) => ({
  about: {
    backgroundColor: theme.palette.primary.main,
    ...themeBg,
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto",

    [theme.breakpoints.down("sm")]: {
      marginTop: "-140px",
      paddingTop: "150px",
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
    },
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "60px",
      margin: "60px auto",
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
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "50px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.22",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  detailText: {
    paddingBottom: "20px",
    fontFamily: "Source Sans Pro,sans-serif",
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
    padding: "21px 88px",
    margin: "30px 127px 10px 127px;",
  },
  discouseComments: {
    boxShadow:
      "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)",
    backgroundColor: "#ffffff",
  },
  discussionHeading: {
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "28px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#005ea5",
  },
  discussionSubHeading: {
    fontFamily: "Source Sans Pro,sans-serif",
    fontSize: "15px",
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
});
