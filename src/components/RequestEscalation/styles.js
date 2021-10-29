const Style = (theme) => ({
  hero: {
    paddingBottom: "80px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  container: {
    padding: "30px 30px 60px",
    maxWidth: "850px",
    boxSizing: "border-box",
    margin: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 30px 0px",
      width: "100%",
    },
  },
  formContainer: {
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