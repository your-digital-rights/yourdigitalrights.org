import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    ...themeBg
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      padding: "76px 30px",
      backgroundImage: "url('static/logo.svg')",
      backgroundPosition: "right 50px top 100px",
      backgroundRepeat: "no-repeat"
    }
  },
  intro: {
    marginBottom: "50px",
    maxWidth: "530px"
  },
  titleImg: {
    width: "300px",
    maxWidth: "75%"
  },
  title: {
    marginBottom: 0
  }
});
