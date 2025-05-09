import { container } from "../../styles/layout";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0px 0px",
    ...container,
    '@media (max-width:900px)': {
      marginTop: "-100px",
      paddingTop: "160px",
    },
    '& a': {
      fontWeight: 400,
    },
  },
  title: {
    textAlign: "center",
    '@media (min-width:900px)': {
      textAlign: "left",
    },
  },
  titleImg: {
    display: "none",
    '@media (min-width:900px)': {
      display: "block",
    },
  },
  upperContainer: {
    '@media (min-width:900px)': {
      display: "flex",
      alignItems: "center",
      margin: "60px 0",
    },
  },
  upperContent: {
    '@media (min-width:900px)': {
      flex: 1,
      marginLeft: 64,
    },
  },
  lowerContainer: {
    '@media (min-width:600px)': {
      display: "flex",
      alignItems: "flex-start",
    },
  },
};

export default styles;
