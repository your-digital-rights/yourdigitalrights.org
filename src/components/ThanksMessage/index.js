import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Social from '../Social';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';

import {
  ThanksTitleText,
  ThanksCopyText,
  FindCompanyText
} from './text';

const styles = theme => ({
  root: {
    maxWidth: '780px',
    margin: "auto",
    marginTop: "30px",
    marginBottom: '30px',
    textAlign: 'center',
    position: 'relative'
  },

  content: {
    padding: '60px 77px',
    paddingBottom: '20px'
  },

  title: {
    marginBottom: '20px'
  },

  text: {
    marginBottom: '30px',
    textAlign: 'left'
  },

  btn: {
    borderRadius:"24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: '10px 20px',
    '&:hover': {
      background: '#04487B'
    }
  },

  startAgainBtn: {
    borderRadius: '24px 24px 24px 24px',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,50%)',
    color: 'white',
    fontWeight: 800
  }
});

const ThanksMessage = (props) => {
  let { classes } = props;

  let hide = () => {
    props.hideThanks();
  };

  return (
    <Paper
        component="div"
        className={classes.root}
        elevation={10}
        id="ThanksMessage"
      >
      <div class={classes.content}>
        <Typography variant="display1" gutterBottom={true} className={classes.title} id="ThanksMessageTitle">
          {ThanksTitleText}
        </Typography>
        <Typography component="p" gutterBottom={true} className={classes.text} id="ThanksMessageText">
          {ThanksCopyText}
        </Typography>
        <Button variant="raised" color="secondary" type="submit" className={classes.startAgainBtn} id="ThanksMessageBtn" onClick={hide}>
          {FindCompanyText}
        </Button>
      </div>
      <Social />
    </Paper>
  );
}

export default withStyles(styles)(ThanksMessage);
