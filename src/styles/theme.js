import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#005ea5",
    },
    secondary: {
      main: "#ea9e13",
    },
  },
  typography: {
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontWeight: "600",
    },
    h4: {
      fontWeight: "900",
      color: "#005ea5",
      fontSize: "3rem",
    },    
    h6: {
      fontSize: "1.31rem",
    },
    h3: {
      fontWeight: "600",
      color: "#005ea5",
      fontSize: "1.8rem",
      paddingTop: "10px",
      lineHeight: "1.13333em",
    },
    h5: {
      fontWeight: "bold",
      color: "#005ea5",
    },
    link: {
      color: "red",
    },
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },	
  backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
  color: "white",
});

export default theme;
