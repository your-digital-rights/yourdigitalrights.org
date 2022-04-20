import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Social from "../Social";
import tracking from "../../utils/tracking";
import { 
  ThanksTitleText, 
  ThanksCopyPart1, 
  ThanksRequestTypeDelete,
  ThanksRequestTypeAccess,
  ThanksCopyPart2CCPA, 
  ThanksCopyPart2GDPR,  
  ThanksCopyPart3,
  FindCompanyText 
} from "./text";
import {useIntl} from 'react-intl';
import Regulations from "../../utils/regulations";

const styles = (theme) => ({
  root: {
    maxWidth: "780px",
    margin: "auto",
    marginTop: "-120px",
    marginBottom: "30px",
    textAlign: "center",
    position: "relative",
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
  
  donate: {
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "50px",
  },

  donateBTCButton: {
    marginTop: "-25px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    "&:hover": {
      background: "#04487B",
    },
  },

  donateLPButton: {
    marginTop: "-25px",
    marginRight: "10px",
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
  const intl = useIntl();
  let { classes, requestType, regulationType, uuid } = props;
  let requestTypeText = (requestType == "DELETION") ? ThanksRequestTypeDelete : ThanksRequestTypeAccess;
  let replyTimeText = intl.formatMessage({
      id: "thankyou.howLongToReply",
      defaultMessage: "Organizations have {days} to comply, and may ask you for additional information to help identify you in their systems.",
    },
    {
      days: (<em>{Regulations[regulationType].timeLimit} days</em>),
    }
  );
  
  (regulationType == "GDPR") ? ThanksCopyPart2GDPR : ThanksCopyPart2CCPA;

  let hide = () => {
    props.hideThanks();
  };

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Thank You Component");
  };

  const trackWebExtension = (brower) => {
    tracking.trackWebExtension(brower, "Thank You Component");
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
          variant="h4"
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
          {requestTypeText}{" "}{ThanksCopyPart1}{" "}{replyTimeText}{" "}{ThanksCopyPart3}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className={classes.startAgainBtn}
          id="ThanksMessageBtn"
          onClick={hide}
        >
          {FindCompanyText}
        </Button>
      </div>
      <div className={classes.donate}>
        <Button
          variant="contained"
          href="https://liberapay.com/YourDigitalRights.org/donate"
          color="primary"
          type="submit"
          className={classes.donateLPButton}
          onClick={() => trackDonate("Donation - Librapay")}
        >
          <FormattedMessage id="thankyou.Liberapay" defaultMessage="Donate via Liberapay" />
        </Button>                          
        <Button
          variant="contained"
          href="bitcoin:34kHDRPhrBmP15BZBYvx4gn5amwCwa6kGe"
          color="primary"
          type="submit"
          className={classes.donateBTCButton}
          onClick={() => trackDonate("Donation - BTC")}
        >
          <FormattedMessage id="thankyou.Bitcoin" defaultMessage="Donate Bitcoin" />
        </Button>
      </div>
      <div className={classes.extensionInfoContainer}>
        <Typography
          component="b"
          gutterBottom={true}
          className={classes.browserExtensionsText}
        >
          <FormattedMessage id="thankyou.extensionText" defaultMessage="Save time by installing our browser extension" />
        </Typography>
        <div className={classes.browserExtensionLinkContainer}>
          <a
            id="chromeExtension"
            target="_blank"
            onClick={() => trackWebExtension("chrome-extension")}
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
            onClick={() => trackWebExtension("chrome-extension")}
            href="https://addons.mozilla.org/en-GB/android/addon/opt-out/"
          >
            <img
              className={classes.extensionLinkIcons}
              src="../../images/firefox.png"
            ></img>
          </a>
        </div>
      </div>
      <Social />
    </Paper>
  );
};

export default withStyles(styles)(ThanksMessage);
