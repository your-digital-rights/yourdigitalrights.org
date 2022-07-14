import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  root: {
    paddingBottom: "0px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 0px",
    },
  },
  container: {
    paddingTop: "25px",
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: "27px",
    maxWidth: "860px",
    boxSizing: "border-box",
    margin: "0px auto",
    width: "860px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  header: {
    fontSize: "38px",
    color: theme.palette.primary.main,
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "39px 0 0",
    padding: "0px 0px 20px",
  },
  button: {
    margin: "0 10px 10px 10px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    color: "#fff",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      marginLeft: "0px",
    },
  },
});

export default Style;