export default (theme) => ({
  formContainer: {
    position: "relative",
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
  formControl: {
    marginTop: theme.spacing.unit,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: "row",
  },
});
