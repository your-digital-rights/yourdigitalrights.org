export default () => ({
  paper: {
    padding: "40px 50px",
    textAlign: "center",
    maxWidth: "700px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "20px",
  },
  close: {
    position: "absolute",
    top: "40px",
    right: "40px",
    background: "none",
    border: "none",
    fontWeight: "bold",
    width: "30px",
    height: "30px",
    outline: "none",
  },
  closeImg: {
    width: "150%",
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: "40px",
    textAlign: "left",
  },
  heading: {
    fontSize: "1.75em",
    lineHeight: "1.1em",
    color: "#005ea5",
    flex: "0",
  },
  button: {
    marginTop: "40px",
    borderRadius: "30px",
    fontWeight: "bold",
    fontSize: "1.25em",
  },
  logo: {
    width: "125px",
  },
  copy: {
    marginRight: "20px",
    marginLeft: "20px",
    fontSize: "0.8125em",
  },
  backdrop: {
    backgroundColor: "rgba(255,255,255,0.5)",
  },
});
