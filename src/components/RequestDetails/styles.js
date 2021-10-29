import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  root: {
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  container: {
    maxWidth: "850px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px 0px",
      width: "100%",
    },
  },
  header: {
    fontSize: "38px",
    color: theme.palette.primary.main,
  },
  details: {
    padding: "28px 50px",
    color: theme.palette.primary.main,
    fontWeight: "normal",
  },
  detailsList: {
    fontSize: "18px",
    lineHeight: "24px",
    "& dt": {
      float: "left",
      clear: "left",
      fontWeight: "bold",
      padding: "0 0.5em 15px 0",
    },
    "& dd": {
      margin: "0",
      paddingBottom: "15px",
    },
  },
  showEmail: {
    textDecoration: "underline",
    cursor: "pointer",
  },
  showFullEmail: {
    clear: "left",
  },
  hideFullEmail: {
    height: "0",
    overflow: "hidden",
    clear: "left",
  },
});

export default Style;