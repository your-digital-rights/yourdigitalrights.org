import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  subscribe: {
    backgroundColor: "#f2f2f2",
  },
  heading: {
    color: "white",
    padding: "30px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    display: "flex",
    maxWidth: "850px !important",
    margin: "auto auto",
    [theme.breakpoints.down("sm")]: {
      display: "inherit",
    },
  },
  container: {
    padding: "40px",
    boxSizing: "border-box",
    ...container,
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
    alignItems: "center"
  },
});

export default Theme;
