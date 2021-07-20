import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  hero: {
    paddingBottom: "150px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 150px",
    },
  },
});

export default Style;