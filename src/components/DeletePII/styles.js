import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Theme = (theme) => ({
  donate: {
    backgroundColor: "#f2f2f2",
  },
  heading: {
    maxWidth: "850px !important",
    margin: "auto auto",
    textAlign: "center",
  },
  container: {
    padding: "30px",
    boxSizing: "border-box",

    ...container,
  },
  rightButton: {
    marginTop: "-25px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 30px",
    minWidth: "180px",
    "&:hover": {
      background: "#04487B",
    },
  },
  leftButton: {
    marginTop: "-25px",
    marginRight: "10px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 30px",
    minWidth: "180px",
    "&:hover": {
      background: "#04487B",
    },
  },
  intro: {
    marginTop: "20px",
    marginBottom: "50px",
  },
  titleImg: {
    width: "300px",
    maxWidth: "75%",
  },
  title: {
    marginBottom: 0,
  },
  buttons: {
    textAlign: "center",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "30px",
      "& $leftButton": {
        marginRight: 0,
      },
    },
  },
});

export default Theme;