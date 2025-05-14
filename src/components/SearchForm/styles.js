import { visuallyHidden } from "../../styles/layout";

const Style = () => ({
  searchInputWrapper: {
    padding: "6px 16px",
  },
  label: visuallyHidden,
  form: {
    position: "relative",
    height: "44px",
    "@media (minWidth: 900px)": {
      maxWidth: "80%",
      margin: "80px auto 0",
    },
  },
  results: {
    position: "absolute",
    width: "100%",
    zIndex: 1000,
  },
  searchIcon: {
    marginRight: "16px",
  },
  list: {
    padding: 0,
  },
  searchItem: {
    fontSize: 14,
    fontWeight: 400,
    marginLeft: "15px",
    lineHeight: "1.5em",
  }
});

export default Style;