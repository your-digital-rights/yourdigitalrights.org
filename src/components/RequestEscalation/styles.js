const Style = (theme) => ({
  root: {
    paddingBottom: "80px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    textAlign: "left",
  },
  container: {
    paddingTop: "30px",
    maxWidth: "860px",
    boxSizing: "border-box",
    [theme.breakpoints.down('md')]: {
      padding: "30px 30px 0px",
      width: "100%",
    },
  },
  formContainer: {
    maxWidth: "860px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
  },
  formButton: {
    marginTop: "2rem",
    borderRadius: "24px 24px 24px 24px",
  },
  button: {
    width: "200px",
    margin: "0 10px 10px 30px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    color: "#fff",
    background: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      marginTop: "10px",
      marginLeft: "0px",
    },
  },  
  disclamer: {
    margin: "30px",
    [theme.breakpoints.down('md')]: {
      marginTop: "10px",
      marginLeft: "0px",
      marginRight: "0px", 
    },    
  }
});

export default Style;
