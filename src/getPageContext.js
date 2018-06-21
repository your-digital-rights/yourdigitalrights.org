/* eslint-disable no-underscore-dangle */

import {
  createGenerateClassName,
  createMuiTheme
} from "@material-ui/core/styles";

import { SheetsRegistry } from "jss";
import blue from "@material-ui/core/colors/blue";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#005ea5"
    },
    secondary: {
      main: "#ea9e13"
    }
  },
  typography: {
    body2: {
      fontWeight: "600"
    },
    display1: {
      fontWeight: "bold",
      color: "#005ea5",
      fontSize: "2.5rem"
    },
    headline: {
      fontWeight: "bold",
      color: "#005ea5"
    },
    fontFamily: ["Source Sans Pro", "sans-serif"].join(",")
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
