import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      paddingTop: "50px",
    },
    color: "white",
  },
  heading: {
    maxWidth: "970px !important",
    margin: "auto auto",
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      padding: "76px 30px",
      backgroundImage: "url('images/mascot_new.svg')",
      backgroundPosition: "right 70px top 100px",
      backgroundRepeat: "no-repeat",
    },
  },
  intro: {
    maxWidth: "650px",
  },
  WhiteText: {
    color: "white",
  },
  introEnd: {
    marginBottom: "50px",
    maxWidth: "650px",
  },
  titleImg: {
    width: "200px",
    maxWidth: "75%",
  },
  title: {
    marginBottom: 0,
  },
});

export default Theme;