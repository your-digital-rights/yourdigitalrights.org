import { container } from "../../styles/layout";

const styles = {
  hero: {
    color: "white",
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "primary.main",
    textAlign: "left",
    "@media (maxWidth: 900px)": {
      padding: "60px 0px 150px",
    },
  },
  orgLogo: {
    paddingTop: "5px",
    paddingRight: "25px",
    display: "block",
    "@media (maxWidth: 900px)": {
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
    "@media (maxWidth: 900px)": {
      margin: "auto 0px 0px",
      maxWidth: "100%",
    },
  },
  addOrg: {
    width: "660px",
    "@media (maxWidth: 900px)": {
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
    "@media (maxWidth: 900px)": {
      padding: "50px 30px 0px",
      width: "100%",
    },
  },
  logo: {
    width: "44px",
    outlineColor: "#e8f4f8",
    "@media (maxWidth: 900px)": {
      display: "none",
    },
  },
  title: {
    fontWeight: "600",
    color: "white",
    fontSize: "1.7rem",
    paddingTop: "10px",
    lineHeight: "1.13333em",
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
};

export default styles;