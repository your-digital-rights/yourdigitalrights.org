import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  subscribe: {
    backgroundColor: "#005ea5",
  },
  subscribeContained: {
    backgroundColor: "#white",
  },
  heading: {
    color: "white",
    padding: "50px 20px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    display: "flex",
    maxWidth: "980px !important",
    margin: "auto 35px",
    [theme.breakpoints.down("sm")]: {
      display: "inherit",
      margin: "auto 10px",
    },
  },
  container: {
    paddingTop: "60px",
    paddingBottom: "60px",
    boxSizing: "border-box",
    ...container,
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  containerContained: {
    paddingTop: "0px",
    paddingBottom: "60px",
    boxSizing: "border-box",

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Theme;
