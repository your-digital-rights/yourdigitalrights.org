import { container } from "../../styles/layout";
import { theme } from "../../styles/theme";

const Style = (theme) => ({
  root: {
    paddingBottom: "55px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    textAlign: "left",
    color: "white",
    [theme.breakpoints.down('md')]: {
      padding: "60px 0px 55px",
    },
  },
  container: {
    paddingTop: "80px",
    maxWidth: "860px",
    boxSizing: "border-box",
    margin: "0px auto",
    width: "860px",
    [theme.breakpoints.down('md')]: {
      padding: "20px 30px 0px",
      width: "100%",
    },
  },
  header: {
    fontSize: "38px",
    fontWeight: "normal",
    marginBottom: "-15px",
    [theme.breakpoints.down('md')]: {
      fontSize: "28px",
    },    
  },
  status: {
    fontSize: "24px",
    fontWeight: "normal",
    marginBottom: "30px",
    [theme.breakpoints.down('md')]: {
      fontSize: "16px",
    },      
  },
  ref: {
    fontSize: "24px",
    fontWeight: "normal",
    marginBottom: "30px",
    [theme.breakpoints.down('md')]: {
      fontSize: "16px",
    },      
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  button: {
    margin: "0 10px 10px 0",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    color: "#858585",
    background: "#e0e0e0",
    "&:hover": {
      background: "#fff",
    },
    [theme.breakpoints.down('md')]: {
      padding: "10px",
      fontSize: "12px",
    },      
  },
  primaryButton: {
    margin: "0 10px 10px 0",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    color: "#fff",
    background: "#00ae8d",
    "&:hover": {
      background: "#00ae8d",
    },
    [theme.breakpoints.down('md')]: {
      padding: "10px",
      fontSize: "12px",
    },      
  },
});

export default Style;