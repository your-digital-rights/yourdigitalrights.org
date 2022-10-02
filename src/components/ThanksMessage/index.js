import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Social from "../Social";
import tracking from "../../utils/tracking";
import { 
  ThanksTitleText, 
  ThanksCopyPart1Email,
  ThanksCopyPart1Copy, 
  ThanksRequestTypeDelete,
  ThanksRequestTypeAccess,
  ThanksCopyPart3,
  FindCompanyText,
  DonationText
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
    padding: "30px 77px 0 77px",

    [theme.breakpoints.down("sm")]: {
      padding: "30px 25px 0 25px",
    },
  },

  title: {
    marginBottom: "20px",
  },

  text: {
    marginBottom: "30px",
    textAlign: "left",
  },

  donateButton: {
    marginBottom: "30px",
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
  let { classes, requestType, regulationType, uuid, selectedActionName } = props;
  let requestTypeText = (requestType == "DELETION") ? ThanksRequestTypeDelete : ThanksRequestTypeAccess;
  let ThanksCopyPart1 = (selectedActionName == "Copy") ? ThanksCopyPart1Copy : ThanksCopyPart1Email;
  let replyTimeText = intl.formatMessage({
      id: "thankyou.howLongToReply",
      defaultMessage: "Organizations have {days} to comply, and may ask you for additional information to help identify you in their systems.",
    },
    {
      days: (<em>{Regulations[regulationType].timeLimit} days</em>),
    }
  );

  let hide = () => {
    tracking.trackFindAnotherOrg();
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
          {requestTypeText}{" "}{ThanksCopyPart1}{" "}{replyTimeText}{" "}
        </Typography>
      </div>
      <Social />
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
    </Paper>
  );
};

export default withStyles(styles)(ThanksMessage);
