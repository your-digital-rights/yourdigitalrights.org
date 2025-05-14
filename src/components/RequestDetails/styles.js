import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  root: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    textAlign: "left",
  },
  container: {
    maxWidth: "860px",
    boxSizing: "border-box",
    margin: "0px auto",
    width: "100%",
    [theme.breakpoints.down('md')]: {
      padding: "30px 0px 0px",
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
    [theme.breakpoints.down('md')]: {
      padding: "28px 30px",
    },
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