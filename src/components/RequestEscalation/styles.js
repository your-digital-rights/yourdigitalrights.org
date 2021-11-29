const Style = (theme) => ({
  root: {
    paddingBottom: "80px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  container: {
    paddingTop: "30px",
    maxWidth: "850px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px 0px",
      width: "100%",
    },
  },
  formContainer: {
    margin: "auto",
    maxWidth: "777px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },    
  formButton: {
    marginTop: "2rem",
    borderRadius: "24px 24px 24px 24px",
  },
});

export default Style;