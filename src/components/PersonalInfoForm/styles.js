export default (theme) => ({
  formContainer: {
    maxWidth: "777px",
    margin: "-130px auto 60px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      padding: "60px",
      margin: "-180px auto 50px",
    },
  },
  formButton: {
    marginTop: "2rem",
    borderRadius: "24px 24px 24px 24px",
  },
});
