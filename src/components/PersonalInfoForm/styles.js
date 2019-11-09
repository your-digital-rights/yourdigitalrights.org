export default theme => ({
  formContainer: {
    maxWidth: "777px",
    margin: "auto",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "60px",
      margin: "60px auto"
    }
  },
  formButton: {
    marginTop: "2rem",
    borderRadius:"24px 24px 24px 24px"
  }
});
