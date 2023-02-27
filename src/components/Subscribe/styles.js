import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  heading: {
    color: "white",
    padding: "25px 8% 0px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    maxWidth: "980px !important",
    margin: "30px 30px 60px",
    [theme.breakpoints.down("sm")]: {
      display: "inherit",
      margin: "auto 10px",
    },
  },
  container: {
    paddingBottom: "20px",
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
    marginTop: "20px",
    alignItems: "center",
  },
  signUpButton: {
    marginTop: "20px",
  }
});

export default Theme;
