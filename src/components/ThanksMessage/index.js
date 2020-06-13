import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Social from "../Social";
import tracking from "../../utils/tracking";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";

import { ThanksTitleText, ThanksCopyText, FindCompanyText } from "./text";

const styles = (theme) => ({
  root: {
    maxWidth: "780px",
    margin: "auto",
    marginTop: "-120px",
    marginBottom: "30px",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      marginTop: "-180px",
    },
  },

  content: {
    padding: "60px 77px 0 77px",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 25px 0 25px",
    },
  },

  title: {
    marginBottom: "20px",
  },

  text: {
    marginBottom: "30px",
    textAlign: "left",
  },

  extensionInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  browserExtensionsText: {
    fontSize: "1em",
    fontWeight: "600",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#585858",
  },

  browserExtensionLinkContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "35px 0",
    width: "150px",
  },

  extensionLinkIcons: {
    width: "64px",
    height: "64px",
  },

  btn: {
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    "&:hover": {
      background: "#04487B",
    },
  },

  startAgainBtn: {
    borderRadius: "24px 24px 24px 24px",
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%,50%)",
    color: "white",
    fontWeight: 800,
  },
});

const ThanksMessage = (props) => {
  let { classes } = props;

  let hide = () => {
    props.hideThanks();
  };

  const trackShare = (network) => {
    tracking.trackSocialShare(network);
  };

  return (
    <Paper
      component="div"
      className={classes.root}
      elevation={10}
      id="ThanksMessage"
    >
      <div className={classes.content}>
        <Typography
          variant="display1"
          gutterBottom={true}
          className={classes.title}
          id="ThanksMessageTitle"
        >
          {ThanksTitleText}
        </Typography>
        <Typography
          component="p"
          gutterBottom={true}
          className={classes.text}
          id="ThanksMessageText"
        >
          {ThanksCopyText}
        </Typography>
        <Button
          variant="raised"
          color="secondary"
          type="submit"
          className={classes.startAgainBtn}
          id="ThanksMessageBtn"
          onClick={hide}
        >
          {FindCompanyText}
        </Button>
      </div>
      <div className={classes.extensionInfoContainer}>
        <Typography
          component="b"
          gutterBottom={true}
          className={classes.browserExtensionsText}
        >
          Save time by installing our browser extension
        </Typography>
        <div className={classes.browserExtensionLinkContainer}>
          <a
            id="chromeExtension"
            target="_blank"
            onClick={trackShare.bind(null, "extension-chrome-thankyou-page")}
            href="https://chrome.google.com/webstore/detail/opt-out-one-click-gdpr-er/dedldhojjkgbejnmmfpmbnbihmmpfbpd?hl=en-GB"
          >
            <img
              className={classes.extensionLinkIcons}
              src="../../images/chrome.png"
            ></img>
          </a>
          <a
            id="firefoxExtension"
            target="_blank"
            onClick={trackShare.bind(null, "extension-firefox-thankyou-page")}
            href="https://addons.mozilla.org/en-GB/android/addon/opt-out/"
          >
            <img
              className={classes.extensionLinkIcons}
              src="../../images/firefox.png"
            ></img>
          </a>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(ThanksMessage);
