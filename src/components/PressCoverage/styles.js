import { container } from "../../styles/layout";

const styles = {
  container: {
    backgroundColor: "#f2f2f2",
    position: "relative",
    paddingTop: "30px",
    textAlign: "center",
  },
  inner: {
    display: 'flex',
    overflow: 'hidden',
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingBottom: "30px",
  },
  gridList: {
    width: "80%",
  },
  pressLogo: {
    objectFit: "contain",
  },
};

export default styles;
