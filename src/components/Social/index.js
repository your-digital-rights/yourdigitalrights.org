import { FormattedMessage } from "react-intl";
import { themeBg } from "../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // marginTop: -160,
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'baseline',
    ...themeBg
  },

  offset: {
    paddingTop: '200px',
    marginTop: -160
  },

  shareHeading: {
    color: "white",
    marginBottom: '30px',
    flex: "1 0 100%"
  },

  shareButton: {
    padding: '0 20px',
    marginBottom: '20px',

    '&:hover': {
      opacity: '0.85'
    }
  }
});

const GITHUB_URL = 'https://github.com/opt-out-eu/opt-out';

const Social = (props) => {
  let { classes } = props;
  let className;

  if (props.offset) {
    className = classes.offset;
  }

  return <div className={classNames(classes.root, className, 'social-share')} style={props.style}>
    <Typography variant="headline" gutterBottom={true} className={classes.shareHeading}>
      <FormattedMessage
        id="socialShareHeading"
        defaultMessage="If you find this service useful, please spread the word"
        />
    </Typography>

    <LinkedinShareButton url="https://opt-out.eu" beforeOnClick={() => console.log('linkedin')} className={classes.shareButton}><img src="static/share/linkedin.svg" /></LinkedinShareButton>
    <TwitterShareButton url="https://opt-out.eu" className={classes.shareButton}><img src="static/share/twitter.svg" /></TwitterShareButton>
    <EmailShareButton url="https://opt-out.eu" className={classes.shareButton}><img src="static/share/mail.svg" /></EmailShareButton>
    <FacebookShareButton url="https://opt-out.eu" className={classes.shareButton}><img src="static/share/facebook.svg" /></FacebookShareButton>
    <a href={GITHUB_URL} onClick={(e) => { e.preventDefault(); window.open(GITHUB_URL)}}  class={classes.shareButton}><img src="static/share/github.svg" /></a>
  </div>;
};

export default withStyles(styles)(Social);
