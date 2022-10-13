import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  heading: {
    color: "white",
    padding: "30px 50px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    maxWidth: "980px !important",
    margin: "0px 30px",
    [theme.breakpoints.down("sm")]: {
      display: "inherit",
      margin: "auto 10px",
    },
  },
  container: {
    paddingBottom: "40px",
    boxSizing: "border-box",
    textAlign: "center",
    ...container,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    }
  },
  image: {
    [theme.breakpoints.down("sm")]: {
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
    alignItems: "center",
  },
  signUpButton: {
    marginTop: "20px",
  }
});

export default Theme;
