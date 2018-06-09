import { themeBg } from "../styles/theme";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "200px 0 75px",
    marginTop: -160,
    ...themeBg
  }
});

const Social = ({ classes }) => {
  return <div className={classes.root} />;
};
export default withStyles(styles)(Social);
