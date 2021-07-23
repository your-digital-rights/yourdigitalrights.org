import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  hero: {
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    ...theme,
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 150px",
    },
  },
  container: {
    padding: "120px 30px 60px",
    maxWidth: "850px",
    boxSizing: "border-box",
    margin: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 30px 0px",
      width: "100%",
    },
  },
  buttons: {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  button: {
    marginRight: "10px",
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
    marginRight: "10px",
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