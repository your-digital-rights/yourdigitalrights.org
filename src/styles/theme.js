import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const source_sans_pro = localFont({
  src: [
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-200.woff2',
      weight: '200',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-200italic.woff2',
      weight: '200',
      style: 'italic',
      fontDisplay: 'optional',
    },    
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-300.woff2',
      weight: '300',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-300italic.woff2',
      weight: '300',
      style: 'italic',
      fontDisplay: 'optional',
    },   
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-regular.woff2',
      weight: '400',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-italic.woff2',
      weight: '400',
      style: 'italic',
      fontDisplay: 'optional',
    }, 
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-600.woff2',
      weight: '600',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-600italic.woff2',
      weight: '600',
      style: 'italic',
      fontDisplay: 'optional',
    },  
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-700.woff2',
      weight: '700',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-700italic.woff2',
      weight: '700',
      style: 'italic',
      fontDisplay: 'optional',
    },  
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-900.woff2',
      weight: '900',
      style: 'normal',
      fontDisplay: 'optional',
    },
    {
      path: '../../fonts/source-sans-pro-v21-latin-ext_latin-900italic.woff2',
      weight: '900',
      style: 'italic',
      fontDisplay: 'optional',
    },                   
  ],
  fallback: ['sans-serif'],
})


// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      hyml: {
          a: {
            color: '#005ea5',
            fontWeight: '900',
          },
            "a:hover": {
          },
          body: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
          },          
        }
      `
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
    textSecondary: {
      main: "blue",
    },

  },	
  backgroundImage: "linear-gradient(152deg, #005ea5, #005ea5)",
  color: "white",
});

export default theme;
