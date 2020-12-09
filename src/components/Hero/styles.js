import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default (theme) => ({
  hero: {
    color: "#005ea5",
    backgroundColor: theme.palette.primary.main,
    ...themeBg,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "50px",
    },
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto",
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      padding: "76px 30px",
      backgroundImage: "url('images/mascot_new.svg')",
      backgroundPosition: "right 160px top 100px",
      backgroundRepeat: "no-repeat",
    },
  },
  intro: {
    maxWidth: "550px",
  },
  WhiteText: {
    color: "white",
  },
  introEnd: {
    marginBottom: "50px",
    maxWidth: "530px",
  },
  titleImg: {
    width: "200px",
    maxWidth: "75%",
  },
  title: {
    marginBottom: 0,
  },
  introLink: {
    color: "white !important",
    textDecoration: "underline",
  },
  subHeader: {
    
  }
});
