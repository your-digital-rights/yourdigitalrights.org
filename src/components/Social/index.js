import { FormattedMessage, intlShape, injectIntl } from "react-intl";
import { themeBg } from "../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import mailtoLink from "mailto-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';
import classNames from 'classnames';
import tracking from '../../utils/tracking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFirefox } from '@fortawesome/free-brands-svg-icons'



const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,

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
    flex: "1 0 100%",
    fontWeight: 'bold'
  },

  btn: {
    padding: '0 20px',
    marginBottom: '20px',

    '&:hover': {
      opacity: '0.85'
    }
  },

  extensionHelperPlaceHolder: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '60px'
  },

  extensionHelperContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '800px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  
  extensionHelpImgContainer: {
    display: 'flex',
    [theme.breakpoints.down("sm")]: {
      marginBottom: '30px'
    }
  },

  extensionHelpImg: {
    width: '377px',
    height: '197px',
    objectFit: 'contain'
  },

  extensionHelpTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '378px',
    fontFamily: theme.palette.fontFamily,
    textAlign: 'left'
  },

  extensionHelpHeading: {
    marginBottom: '10px'
  },

  extensionHelpParagraph: {
    marginBottom: '30px'
  },

  extensionHelpButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },

  extensionDownloadButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '20px',
    width: '290px',
    height: '64px',
    borderRadius: '32px',
    backgroundColor: '#eaeaea',
    color: '#585858',
    marginBottom: '20px',
    fontSize: '15px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'left'
  },

  extensionDownloadButtonIcon: {
    width: '2em',
    height: '38px',
    marginRight: '20px',
    fontSize: '40px'
  },

  extensionDownloadButtonLabel: {
    fontSize: '15px',
    fontWeight: 'bold',
  },

  shareButton: {
    padding: '0 10px',
    cursor: 'pointer'
  }
});

const GITHUB_URL = 'https://github.com/opt-out-eu/opt-out';


const Social = ({ classes, intl, sourcePage = 'thankyou' /* default value */, style }) => {

  if (sourcePage === 'homepage') {
    var className = classes.offset;
  }

  const emailSubject = intl.formatMessage({ id: 'socialEmailSubject', defaultMessage: "Opt-out - automated GDPR requests" });
  const emailBody = intl.formatMessage({ id: 'socialEmailBody', defaultMessage: "Hey there,\n\nDid you know that you can get any organisation to erase your personal data for free? Check out https://opt-out.eu to know more.\n\nI hope you find it useful." });
  const twitterTitle = intl.formatMessage({ id:"socialTwitterTitle", defaultMessage:"Get any organisation to erase your personal data - automated GDPR requests" });
  const facebookQuote = intl.formatMessage({ id:"socialFacebookQuote", defaultMessage:"Get any organisation to erase your personal data - automated GDPR requests - http://opt-out.eu" });
  const emailLink = mailtoLink({ subject: emailSubject, body: emailBody });

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(emailLink);
  };

  const shareButtonProps = {
    className: 'ss-btn'
  };

  const trackShare = (network) => {
    tracking.trackSocialShare(network);
  };

  return <div className={classNames(classes.root, className, 'ss')} style={style}>
    {sourcePage === 'homepage' && (
      <div className={classes.extensionHelperPlaceHolder}>
        <div className={classes.extensionHelperContainer}>
          <div className={classes.extensionHelpImgContainer}><img src='../../static/extensionHelperImages/extensionToolTipImage.png' className={classes.extensionHelpImg}></img></div>
          <div className={classes.extensionHelpTextContainer}>
            <Typography className={classes.extensionHelpHeading} component="h2" variant="display1" color="inherit">Opt out directly from your browser</Typography>
            <Typography className={classes.extensionHelpParagraph} component="p" color="inherit">
              Opt out directly from your browser with our new chrome extension. Submit your reequest and contribute to grow the 
              <b> opt-out movement</b>.
            </Typography>
            <div className={classes.extensionHelpButtonContainer}>
              <Button variant="extendedFab" aria-label="Delete" className={classes.extensionDownloadButton}>
              <FontAwesomeIcon className={classes.extensionDownloadButtonIcon} color="#005ea5" icon={faChrome}/>
                Download it for Chrome
              </Button>
              <Button variant="extendedFab" aria-label="Delete" className={classes.extensionDownloadButton} href="https://addons.mozilla.org/en-GB/android/addon/opt-out/">
                <FontAwesomeIcon className={classes.extensionDownloadButtonIcon} color="#005ea5" icon={faFirefox}/>
                Download it for Firefox
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
    

    <Typography variant="title" gutterBottom={true} className={classes.shareHeading}>
      <FormattedMessage
        id="socialShareHeading"
        defaultMessage="If you find this service useful, please spread the word"
        />
    </Typography>
    
    <LinkedinShareButton additionalProps={shareButtonProps} beforeOnClick={trackShare.bind(null, 'linkedin')} url={"https://opt-out.eu/?pk_campaign=siteshare&pk_kwd=linkedin&pk_source=" + sourcePage} className='ss-btn'><img src="static/sh/lin.svg" /></LinkedinShareButton>

    <TwitterShareButton  additionalProps={shareButtonProps} beforeOnClick={trackShare.bind(null, 'twitter')} url={"https://opt-out.eu/?pk_campaign=siteshare&pk_kwd=twitter&pk_source=" + sourcePage} title={twitterTitle} hashtags={['privacy', 'privacy', 'GDPR', 'ownyourdata', 'righttobeforgotten', 'optout']} className='ss-btn'><img src="static/sh/tw.svg" /></TwitterShareButton>

    <a href={emailLink} onClick={handleEmailClick} className='ss-btn SocialMediaShareButton--email'><img src="static/sh/mail.svg" /></a>
    <a href={GITHUB_URL} className='ss-btn SocialMediaShareButton--github'><img src="static/sh/github.svg" /></a>
    <FacebookShareButton additionalProps={shareButtonProps} beforeOnClick={trackShare.bind(null, 'facebook')} url={"https://opt-out.eu/?pk_campaign=siteshare&pk_kwd=facebook&pk_source=" + sourcePage} className='ss-btn' quote={facebookQuote}><img src="static/sh/fb.svg" /></FacebookShareButton>

  </div>; 
};

Social.propTypes = {
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Social));
