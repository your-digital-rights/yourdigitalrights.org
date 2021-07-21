import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  hero: {
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
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
});

export default Style;