import { container } from "../../styles/layout";
export const indexStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0px 0px",
    ...container,
    [theme.breakpoints.down('md')]: {
      marginTop: "-100px",
      paddingTop: "160px",
    },
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  titleImg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  upperContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      margin: "60px 0",
    },
  },
  upperContent: {
    [theme.breakpoints.up("md")]: {
      flex: 1,
      marginLeft: 64,
    },
  },
  lowerContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "top",
    },
  },
});
