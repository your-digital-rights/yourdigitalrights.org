import { FormattedMessage, injectIntl } from "react-intl";
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import Fab from '@mui/material/Fab';
import mailtoLink from "mailto-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share";
import classNames from "classnames";
import tracking from "../../utils/tracking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChrome, 
  faFirefox, 
  faReddit, 
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import ExtensionToolTipImage from "../../../public/images/extensionHelperImages/extensionToolTipImage.png";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Social = ({
  intl,
  sourcePage = "thankyou" /* default value */,
  style,
}) => {
  const classes = useStyles();
  var rootClassName = (sourcePage === "thankyou") ? classes.offsetThankYou : classes.offset;

  const emailSubject = intl.formatMessage({
    id: "social.emailSubject",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it | Your Digital Rights",
  });
  const emailBody = intl.formatMessage({
    id: "social.emailBody",
    defaultMessage:
      "Check out YourDigitalRights.org, a free service which makes it easy to find out what personal data thousands of organizations have on you, and get them to delete it.",
  });
  const twitterTitle = intl.formatMessage({
    id: "social.twitterTitle",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const facebookQuote = intl.formatMessage({
    id: "social.facebookQuote",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const whatsappMessage = intl.formatMessage({
    id: "social.whatsappMessage",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const redditTitle = intl.formatMessage({
    id: "social.redditTitle",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org.",
  });
  const emailLink = mailtoLink({ subject: emailSubject, body: emailBody });

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(emailLink);
  };

  const shareButtonProps = {
    className: "ss-btn",
  };

  const trackShare = (network) => {
    tracking.trackSocialShare(network, sourcePage);
  };

  const trackWebExtension = (brower) => {
    tracking.trackWebExtension(brower, sourcePage);
  };

  return (
    <div className={classNames(classes.root, rootClassName, "ss")} style={style}>
      {sourcePage === "homepage" && (
        <div id="Extension" className={classes.extensionHelperPlaceHolder}>
          <div className={classes.extensionHelperContainer}>
            <div className={classes.extensionHelpImgContainer}>
              <Image
                src={ExtensionToolTipImage}
                className={classes.extensionHelpImg}
              />
            </div>
            <div className={classes.extensionHelpTextContainer}>
              <Typography
                className={classes.extensionHelpHeading}
                component="h2"
                variant="h3"
                color="inherit"
              >
                <FormattedMessage id="social.extensionHeadline" defaultMessage="Opt out directly from your browser" />
              </Typography>
              <Typography
                className={classes.extensionHelpParagraph}
                component="p"
                color="inherit"
              >
                <FormattedMessage id="social.extensionText" defaultMessage="Do you want better control over who has access to your personal data? Our browser extension allows you to opt out of the websites you visit with a click of a button." />
              </Typography>
              <div className={classes.extensionHelpButtonContainer}>
                <Fab
                  variant="extended"
                  onClick={() => trackWebExtension("chrome-extension")}
                  aria-label={intl.formatMessage({id: "social.chromeTitle", defaultMessage: "Google Chrome Extension"})}
                  className={classes.extensionDownloadButton}
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/opt-out-one-click-gdpr-er/dedldhojjkgbejnmmfpmbnbihmmpfbpd?hl=en-GB"
                >
                  <FontAwesomeIcon
                    className={classes.extensionDownloadButtonIcon}
                    color="#005ea5"
                    icon={faChrome}
                  />
                  <FormattedMessage id="social.chromeCTA" defaultMessage="Download it for Chrome" />
                </Fab>
                <Fab
                  variant="extended"
                  onClick={trackWebExtension.bind(null, 'firefox-extension')}
                  aria-label={intl.formatMessage({id: "social.frefoxTitle", defaultMessage: "FireFox Extention"})}
                  className={classes.extensionDownloadButton}
                  target="_blank"
                  href="https://addons.mozilla.org/en-GB/android/addon/opt-out/"
                >
                  <FontAwesomeIcon
                    className={classNames(
                      classes.extensionDownloadButtonIcon,
                      classes.extensionDownloadButtonIconFireFox
                    )}
                    color="#005ea5"
                    icon={faFirefox}
                  />
                  <FormattedMessage id="social.firefoxCTA" defaultMessage="Download it for Firefox" />
                </Fab>
              </div>
            </div>
          </div>
        </div>
      )}

      <Typography className={classes.shareHeading} variant="h4">
        <FormattedMessage id="social.shareHeading" defaultMessage="Share this page" />
      </Typography>

      <div className={classes.shareButton}>
        <FacebookShareButton
          url="https://yourdigitalrights.org"
          quote={facebookQuote}
          beforeOnClick={() => trackShare("facebook")}
          {...shareButtonProps}
        >
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </FacebookShareButton>
      </div>

      <div className={classes.shareButton}>
        <TwitterShareButton
          url="https://yourdigitalrights.org"
          title={twitterTitle}
          beforeOnClick={() => trackShare("twitter")}
          {...shareButtonProps}
        >
          <FontAwesomeIcon icon={faTwitter} color="white" />
        </TwitterShareButton>
      </div>

      <div className={classes.shareButton}>
        <LinkedinShareButton
          url="https://yourdigitalrights.org"
          beforeOnClick={() => trackShare("linkedin")}
          {...shareButtonProps}
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" />
        </LinkedinShareButton>
      </div>

      <div className={classes.shareButton}>
        <WhatsappShareButton
          url="https://yourdigitalrights.org"
          title={whatsappMessage}
          beforeOnClick={() => trackShare("whatsapp")}
          {...shareButtonProps}
        >
          <FontAwesomeIcon icon={faWhatsapp} color="white" />
        </WhatsappShareButton>
      </div>

      <div className={classes.shareButton}>
        <RedditShareButton
          url="https://yourdigitalrights.org"
          title={redditTitle}
          beforeOnClick={() => trackShare("reddit")}
          {...shareButtonProps}
        >
          <FontAwesomeIcon icon={faReddit} color="white" />
        </RedditShareButton>
      </div>

      <div className={classes.shareButton}>
        <button
          onClick={() => {
            trackShare("email");
            window.open(`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`, '_blank');
          }}
          className={shareButtonProps.className}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="white" />
        </button>
      </div>
    </div>
  );
};

export default injectIntl(Social);
