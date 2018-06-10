import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    marginBottom: 16
  },
  heading: {
    display: "inline",
    color: "#005ea5",
    fontWeight: "600"
  },
  inline: {
    display: "inline"
  }
});
const UpperSection = ({ title, body, classes }) => {
  return (
    <div className={classes.root}>
      <Typography component="h3" className={classes.heading} variant="title">
        {title}.{" "}
      </Typography>
      <Typography component="p" className={classes.inline}>
        {body}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(UpperSection);
