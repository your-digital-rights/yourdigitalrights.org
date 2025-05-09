import { container } from "../../styles/layout";

const Style = () => ({
  about: {
    backgroundColor: "#005ea5",
  },
  heading: {
    maxWidth: "777px",
    margin: "45px auto auto",
    lineHeight: "0.9em",
    "@media (max-width: 960px)": {
      marginTop: "-140px",
      paddingTop: "150px",
      maxWidth: "100%",
      lineHeight: "0.9em",
    },
  },
  container: {
    "@media (max-width: 960px)": {
      width: "100%",
      fontSize: "18px",
    },
    padding: "30px",
    boxSizing: "border-box",
    maxWidth: "777px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    "@media (minWidth: 960px)": {
      padding: "60px",
    },
  },
  Continue: {
    textAlign: "center",
    margin: "25px 0px",
    borderRadius: "24px 24px 24px 24px",
    fontWeight: "600",
    "@media (minWidth: 600px)": {
      textAlign: "left",
    },
  },
  title: {
    fontFamily: "Arial, sans-serif",
    fontSize: "50px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.22",
    letterSpacing: "normal",
    color: "#ffffff",
    lineHeight: "0.9em",
    textAlign: "left",
    "@media (max-width: 960px)": {
      fontSize: "30px",
      marginLeft: "0",
    },    
  },
  detailText: {
    paddingBottom: "20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.8",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  aboutText: {
    width: "100%",
    margin: "0",
    "@media (max-width: 960px)": {
      width: "100%",
      margin: "auto",
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
    "@media (max-width: 960px)": {
      width: "100%",
      margin: "auto 0",
      padding: "21px 30px",
    },
  },
  disqusComments: {
    marginTop: "20px",
  },
  discussionHeading: {
    fontFamily: "Arial, sans-serif",
    fontSize: "28px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#005ea5",
    "@media (max-width: 960px)": {
      width: "100%",
      margin: "auto 0",
    },
  },
  discussionSubHeading: {
    fontFamily: "Arial, sans-serif",
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