import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  container: {
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: "27px",
  },
  header: {
    fontSize: "38px",
    paddingBottom: "10px",
    color: theme.palette.primary.main,
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "39px 0 0",
    padding: "0",
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