import { FormattedMessage, intlShape, injectIntl } from "react-intl";
import { themeBg } from "../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import mailtoLink from "mailto-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // marginTop: -160,
    padding: '50px',
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

  btn: {
    padding: '0 20px',
    marginBottom: '20px',

    '&:hover': {
      opacity: '0.85'
    }
  }
});

const GITHUB_URL = 'https://github.com/opt-out-eu/opt-out';

const Social = (props) => {
  let { classes, intl } = props;
  let className;

  if (props.offset) {
    className = classes.offset;
  }


  const emailSubject = intl.formatMessage({ id: 'socialEmailSubject', defaultMessage: "Opt-out - automated GDPR requests" });
  const emailBody = intl.formatMessage({ id: 'socialEmailBody', defaultMessage: "Hey there,\nDid you know that you can get any organisation to erase your personal data for free?\nCheck out http://opt-out.eu to know more." });
  const twitterTitle = intl.formatMessage({ id:"socialTwitterTitle", defaultMessage:"Get any organisation to erase your personal data - automated GDPR requests" });
  const facebookQuote = intl.formatMessage({ id:"socialFacebookQuote", defaultMessage:"Get any organisation to erase your personal data - automated GDPR requests - http://opt-out.eu" });
  const emailLink = mailtoLink({ subject: emailSubject, body: emailBody });

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(emailLink);
  };

  const shareButtonProps = {
    class: 'ss-btn'
  };

  return <div className={classNames(classes.root, className, 'ss')} style={props.style}>
    <Typography variant="title" gutterBottom={true} className={classes.shareHeading}>
      <FormattedMessage
        id="socialShareHeading"
        defaultMessage="If you find this service useful, please spread the word"
        />
    </Typography>
    <LinkedinShareButton additionalProps={shareButtonProps} url="https://opt-out.eu" className={classes.shareButton}><img src="static/sh/lin.svg" /></LinkedinShareButton>
    <TwitterShareButton additionalProps={shareButtonProps} url="https://opt-out.eu" title={twitterTitle} hashtags={['privacy', 'privacy', 'GDPR', 'ownyourdata', 'righttobeforgotten', 'optout']} className={classes.shareButton}><img src="static/sh/tw.svg" /></TwitterShareButton>
    <a href={emailLink} onClick={handleEmailClick} className={classes.shareButton}><img src="static/sh/mail.svg" /></a>
    <FacebookShareButton url="https://opt-out.eu" quote={facebookQuote} className={classes.shareButton}><img src="static/sh/fb.svg" /></FacebookShareButton>
  </div>;
};

Social.propTypes = {
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Social));
