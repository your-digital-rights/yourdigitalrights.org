import { FormattedMessage, intlShape, injectIntl } from "react-intl";
import { themeBg } from "../../styles/theme";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import mailtoLink from "mailto-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import classNames from "classnames";
import tracking from "../../utils/tracking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faFirefox } from "@fortawesome/free-brands-svg-icons";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,

    padding: "50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "baseline",
    ...themeBg,
  },

  offsetThankYou: {
    paddingTop: "50px",
    marginTop: -10,
  },
  
  offset: {
    paddingTop: "200px",
    marginTop: -160,
  },

  shareHeading: {
    color: "white",
    marginBottom: "30px",
    flex: "1 0 100%",
    fontWeight: "bold",
  },

  btn: {
    padding: "0 20px",
    marginBottom: "20px",

    "&:hover": {
      opacity: "0.85",
    },
  },

  extensionHelperPlaceHolder: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "60px",
    paddingTop: "90px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
      paddingTop: "150px",
    },
  },

  extensionHelperContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "900px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  extensionHelpImgContainer: {
    display: "flex",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
      marginBottom: "30px",
    },
  },

  extensionHelpImg: {
    width: "390px",
    height: "197px",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },

  extensionHelpTextContainer: {
    display: "flex",
    flexDirection: "column",
    width: "430px",
    fontFamily: theme.palette.fontFamily,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  extensionHelpHeading: {
    marginBottom: "10px",
  },

  extensionHelpParagraph: {
    marginBottom: "30px",
  },

  extensionHelpButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },

  extensionDownloadButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "10px",
    paddingRight: "20px",
    height: "39px",
    borderRadius: "32px",
    backgroundColor: "#eaeaea",
    color: "#585858",
    marginBottom: "20px",
    fontSize: "1em",
    textTransform: "capitalize",
    fontWeight: "bold",
    textAlign: "left",
  },

  extensionDownloadButtonIcon: {
    width: "28px",
    height: "28px",
    marginRight: "10px",
    fontSize: "40px",
    textAlign: "left",
  },

  extensionDownloadButtonIconFireFox: {
    marginLeft: "3px",
  },

  extensionDownloadButtonLabel: {
    fontSize: "1em",
    fontWeight: "bold",
  },

  shareButton: {
    padding: "0 10px",
    cursor: "pointer",
  },
});

const Social = ({
  classes,
  intl,
  sourcePage = "thankyou" /* default value */,
  style,
}) => {
  var rootClassName = (sourcePage === "thankyou") ? classes.offsetThankYou : classes.offset;

  const emailSubject = intl.formatMessage({
    id: "socialEmailSubject",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it | Your Digital Rights",
  });
  const emailBody = intl.formatMessage({
    id: "socialEmailBody",
    defaultMessage:
      "Check out YourDigitalRights.org, a free service which makes it easy to find out what personal data thousands of organizations have on you, and get them to delete it.",
  });
  const twitterTitle = intl.formatMessage({
    id: "socialTwitterTitle",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org",
  });
  const facebookQuote = intl.formatMessage({
    id: "socialFacebookQuote",
    defaultMessage:
      "Find out what personal data thousands of organizations have on you, and get them to delete it. Check out yourdigitalrights.org",
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
              <img
                src="/images/extensionHelperImages/extensionToolTipImage.png"
                className={classes.extensionHelpImg}
              ></img>
            </div>
            <div className={classes.extensionHelpTextContainer}>
              <Typography
                className={classes.extensionHelpHeading}
                component="h2"
                variant="display2"
                color="inherit"
              >
                Opt out directly from your browser
              </Typography>
              <Typography
                className={classes.extensionHelpParagraph}
                component="p"
                color="inherit"
              >
                Do you want better control over who has access to your personal
                data? Our browser extension allows you to opt out of the
                websites you visit with a click of a button.
              </Typography>
              <div className={classes.extensionHelpButtonContainer}>
                <Button
                  variant="extendedFab"
                  onClick={() => trackWebExtension("chrome-extension")}
                  aria-label="Google Chrome Extension"
                  className={classes.extensionDownloadButton}
                  target="_blank"
                  href="https://chrome.google.com/webstore/detail/opt-out-one-click-gdpr-er/dedldhojjkgbejnmmfpmbnbihmmpfbpd?hl=en-GB"
                >
                  <FontAwesomeIcon
                    className={classes.extensionDownloadButtonIcon}
                    color="#005ea5"
                    icon={faChrome}
                  />
                  Download it for Chrome
                </Button>
                <Button
                  variant="extendedFab"
                  onClick={trackWebExtension.bind(null, 'firefox-extension')}
                  aria-label="FireFox Extention"
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
                  Download it for Firefox
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Typography
        variant="title"
        gutterBottom={true}
        className={classes.shareHeading}
      >
        <FormattedMessage
          id="socialShareHeading"
          defaultMessage="If you find this service useful, please spread the word"
        />
      </Typography>

      <FacebookShareButton
        additionalProps={shareButtonProps}
        beforeOnClick={trackShare.bind(null, "facebook")}
        url={
          "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=facebook&pk_source=" +
          sourcePage
        }
        className="ss-btn"
        quote={facebookQuote}
      >
        <img src="/images/sh/fb.svg" />
      </FacebookShareButton>
      <LinkedinShareButton
        additionalProps={shareButtonProps}
        beforeOnClick={trackShare.bind(null, "linkedin")}
        url={
          "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=linkedin&pk_source=" +
          sourcePage
        }
        className="ss-btn"
      >
        <img src="/images/sh/lin.svg" />
      </LinkedinShareButton>
      <TwitterShareButton
        additionalProps={shareButtonProps}
        beforeOnClick={trackShare.bind(null, "twitter")}
        url={
          "https://yourdigitalrights.org/?pk_campaign=siteshare&pk_kwd=twitter&pk_source=" +
          sourcePage
        }
        title={twitterTitle}
        hashtags={[
          "GDPR",
          "CCPA",
          "yourdigitalrights",
          "righttobeforgotten",
          "optout",
          "ownyourdata",
        ]}
        className="ss-btn"
      >
        <img src="/images/sh/tw.svg" />
      </TwitterShareButton>
      <a
        href={emailLink}
        onClick={handleEmailClick}
        className="ss-btn SocialMediaShareButton--email"
      >
        <img src="/images/sh/mail.svg" />
      </a>
    </div>
  );
};

Social.propTypes = {
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(Social));
