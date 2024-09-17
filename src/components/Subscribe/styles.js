import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  heading: {
    color: "white",
    padding: "25px 8% 20px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    maxWidth: "980px !important",
    margin: "30px 30px 60px",
    [theme.breakpoints.down('md')]: {
      display: "inherit",
      margin: "auto 10px",
    },
  },
  container: {
    paddingBottom: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    ...container,
    [theme.breakpoints.down('md')]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    }
  },
  image: {
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
  title: {
    marginBottom: 0,
  },
  text: {
    paddingRight: "20px",
  },
  substack: {
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "black",
  }, 
  success: {
    color: "black",
  },
  signUpButton: {
    marginTop: "20px",
  },
  intro: {
    marginBottom: "20px",
  }
});

export default Theme;
