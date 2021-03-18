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
    display1: {
      fontWeight: "900",
      color: "#005ea5",
      fontSize: "3rem",
    },
    display2: {
      fontWeight: "600",
      color: "#005ea5",
      fontSize: "1.8rem",
      paddingTop: "10px",
    },
    headline: {
      fontWeight: "bold",
      color: "#005ea5",
    },
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },	
  backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
  color: "white",
});

export default theme;
