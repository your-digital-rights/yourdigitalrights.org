import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({});
const UpperSection = ({ title, body }) => {
  return (
    <div>
      <Typography component="h3">{title}</Typography>
      <Typography component="p">{body}</Typography>
    </div>
  );
};

export default withStyles(styles)(UpperSection);
