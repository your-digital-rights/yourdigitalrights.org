import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  ThanksTitleText,
  ThanksCopyText
} from './text';

const styles = theme => ({
  root: {
    maxWidth: '780px',
    margin: "auto",
    marginTop: "30px",
    padding: "30px"
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
        id="ThanksMessage"
      >
      <Typography variant="display1" gutterBottom={true} className={classes.title} id="ThanksMessageTitle">
        {ThanksTitleText}
      </Typography>
      <Typography component="p" gutterBottom={true} className={classes.text} id="ThanksMessageText">
        {ThanksCopyText}
      </Typography>
      <Button variant="raised"
        color="primary"
        type="submit" className={classes.btn}
        >Yes</Button>
    </Paper>
  );
}

export default withStyles(styles)(ThanksMessage);
