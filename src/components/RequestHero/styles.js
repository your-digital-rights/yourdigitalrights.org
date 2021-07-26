import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  hero: {
    paddingBottom: "55px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    ...theme,
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 55px",
    },
  },
  container: {
    padding: "80px 30px 0",
    maxWidth: "850px",
    boxSizing: "border-box",
    margin: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px 0px",
      width: "100%",
    },
  },
  header: {
    fontSize: "38px",
    fontWeight: "normal",
    marginBottom: "10px",
  },
  information: {
    fontSize: "21px",
    fontWeight: "normal",
    lineHeight: "31px",
    marginTop: "10px",
  },
  status: {
    fontSize: "28px",
    fontWeight: "normal",
    margin: "37px 0 18px",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  button: {
    margin: "0 10px 10px 0",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    color: "#858585",
    background: "#e0e0e0",
    "&:hover": {
      background: "#fff",
    },
  },
  primaryButton: {
    margin: "0 10px 10px 0",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    color: "#fff",
    background: "#00ae8d",
    "&:hover": {
      background: "#00ae8d",
    },
  },
});

export default Style;