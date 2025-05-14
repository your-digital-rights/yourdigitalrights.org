import { container } from "../../styles/layout";

const styles = {
  heading: {
    color: "white",
    padding: "25px 8% 20px",
    backgroundColor: "#039277",
    borderRadius: "20px",
    maxWidth: "980px !important",
    margin: "30px 30px 60px",
    "@media (max-width: 900px)": {
      display: "inherit",
      margin: "auto 10px",
    },
  },
  container: {
    paddingBottom: "20px",
    boxSizing: "border-box",
    textAlign: "center",
    ...container,
    "@media (max-width: 900px)": {
      paddingLeft: "0px",
      paddingRight: "0px",
    }
  },
  image: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  title: {
    marginBottom: 0,
  },
  text: {
    paddingRight: "20px",
  },
  substack: {
    marginTop: "20px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "black",
  }, 
  success: {
    color: "black",
  },
  signUpButton: {
    marginTop: "20px",
  },
  intro: {
    marginBottom: "20px",
  }
};

export default styles;
