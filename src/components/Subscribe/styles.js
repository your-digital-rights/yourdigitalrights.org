import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  subscribe: {
    backgroundColor: "#f2f2f2",
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-140px",
      paddingTop: "150px",
    },
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",
    ...container,
    /*[theme.breakpoints.up("md")]: {
      padding: "76px 30px",
      backgroundImage: "url('/images/QR.svg')",
      backgroundPosition: "right 130px top 140px",
      backgroundRepeat: "no-repeat",
    },*/
  },
  titleImg: {
    width: "300px",
    maxWidth: "75%",
  },
  title: {
    marginBottom: 0,
  },
  substack: {
    marginTop: "30px",
    textAlign: "center",
    marginBottom: "30px",
  },
});

export default Theme;