import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  root: {
    paddingBottom: "0px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F2F2F2",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 0px",
    },
  },
  container: {
    paddingTop: "25px",
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: "27px",
    maxWidth: "850px",
    boxSizing: "border-box",
    marginLeft: "33%",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px 0px",
      width: "100%",
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
    margin: "0 10px 10px 0",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    color: "#fff",
    background: theme.palette.primary.main,
  },
});

export default Style;