import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          color: '#005ea5',
          fontWeight: '900',
        },
          "a:hover": {
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#005ea5",
    },
    muted: {
      main: "#00ae8d",
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
      fontSize: '1.05em',
      fontWeight: "600",
    },
    body3: {
      fontWeight: "400",
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
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },	
  backgroundImage: "linear-gradient(152deg, #005ea5, #005ea5)",
  color: "white",
});

export default theme;
