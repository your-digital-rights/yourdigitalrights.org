import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({});
const LowerSection = ({ title, body, imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} role="presentation" />
      <Typography component="h3">{title}</Typography>
      <Typography component="p">{body}</Typography>
    </div>
  );
};

export default withStyles(styles)(LowerSection);
