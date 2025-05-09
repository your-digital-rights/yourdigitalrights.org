const Style = () => ({
  formContainer: {
    position: "relative",
    maxWidth: "777px",
    margin: "-130px auto 60px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    "@media (minWidth: 960px)": {
      padding: "60px",
      margin: "-180px auto 50px",
    },
  },
  formButton: {
    marginTop: "30px",
  },
  formControl: {
    marginTop: "8px",
  },
  group: {
    margin: "8px",
    flexDirection: "row",
  },
  introText: {
    paddingBottom: "500px",
  },
  supportButton:  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    height: "40px",
    backgroundColor: "#ef6a6e",
    fontSize: "14px",
    fontWeight: "800",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "1.15",
    color: "#ffffff",
    borderRadius: "25px",
    outlineColor: "#e8f4f8",
    cursor: "pointer",
    paddingLeft: "20px",
    paddingRight: "20px",
    textDecoration: "none",
  },
  supportLink: {
    textDecoration: "none",
  },
  support: {
    display: "flex",
    justifyContent: "end",
    marginTop: "-40px",
    marginBottom: "20px",
    marginRight: "-30px",
    "@media (max-width: 960px)": {
      marginTop: "-10px",
      marginBottom: "20px",
      marginRight: "-10px",
    },    
  }
});

export default Style;