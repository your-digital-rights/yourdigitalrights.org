import { container } from "../../styles/layout";
import { themeBg } from "../../styles/theme";

export default (theme) => ({
  container: {
    height: "120px",
    backgroundColor: "#f2f2f2",
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
  },
  inner: {
    display: 'flex',
    overflow: 'hidden',
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingTop: "15px",
    paddingBottom: "10px",
  },
  gridList: {
    width: "80%",
  },
  pressLogo: {
    width: "90%",
    maxHeight: "50px",
    objectFit: "contain",
  },
});
