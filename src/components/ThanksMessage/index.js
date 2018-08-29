import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    maxWidth: '1100px',
    margin: "auto",
    paddingLeft: "30px",
    paddingRight: "30px"
  },

  title: {

  },

  text: {
    marginBottom: '30px'
  },

  btn: {
    borderRadius:"24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: '10px 20px',
    '&:hover': {
      background: '#04487B'
    },
  }
});

const ThanksMessage = ({ classes }) => {
  return (
    <Paper
        component="div"
        className={classes.root}
        elevation={10}
      >
      <Typography variant="display1" gutterBottom={true}>
        Thanks
      </Typography>
      <Typography component="p" gutterBottom={true} className={classes.text}>Thanks</Typography>
      <Button variant="raised"
        color="primary"
        type="submit" className={classes.btn}>Yes</Button>
    </Paper>
  );
}

export default withStyles(styles)(ThanksMessage);
