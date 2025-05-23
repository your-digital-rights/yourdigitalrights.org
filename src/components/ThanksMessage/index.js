import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import withStyles from '@mui/styles/withStyles';
import Subscribe from "../Subscribe";
import tracking from "../../utils/tracking";
import { 
  ThanksTitleText, 
  ThanksCopyPart1Email,
  ThanksCopyPart1Copy, 
  ThanksRequestTypeDelete,
  ThanksRequestTypeAccess
} from "./text";
import {useIntl} from 'react-intl';
import Regulations from "../../utils/regulations";

const styles = (theme) => ({
  root: {
    borderRadius: "20px",
    maxWidth: "1000px",
    margin: "auto",
    marginBottom: "30px",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.down('md')]: {
      marginTop: "-120px",
    },
  },
  content: {
    padding: "60px 77px 15px 77px",
    [theme.breakpoints.down('md')]: {
      padding: "60px 25px 0 25px",
    },
  },
  title: {
    marginBottom: "20px",
  },
  text: {
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
  let { classes, requestType, regulationType, selectedActionName } = props;
  let requestTypeText = (requestType == "DELETION") ? ThanksRequestTypeDelete : ThanksRequestTypeAccess;
  let ThanksCopyPart1 = (selectedActionName == "Copy") ? ThanksCopyPart1Copy : ThanksCopyPart1Email;
  let replyTimeText = regulationType ? intl.formatMessage({
      id: "thankyou.howLongToReply",
      defaultMessage: "Organizations have {days} to comply, and may request additional information in order to verify your identity.",
    },
    {
      days: (<em>{Regulations[regulationType].timeLimit} days</em>),
    }
  ) : "";

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
          {requestTypeText}{" "}{ThanksCopyPart1}{" "}{replyTimeText}
        </Typography>
        <br/>
        <Typography
          component="p"
          variant="h5"
          gutterBottom={false}
          className={classes.text}
        >      
          <FormattedMessage
            id="thankyou.donation"
            defaultMessage="Help us keep this service free by <a>making a donation</a> to help ensure our long-term financial stability and independence."
            values={{
              a: txt => ( <a rel="noreferrer noopener" href="https://opencollective.com/consciousdigital" target="_blank">{txt}</a>),
            }}
          />
        </Typography>
      </div>
      <Subscribe/>
{/*      <Button
          variant="contained"
          color="secondary"
          type="submit"
          className={classes.startAgainBtn}
          id="ThanksMessageBtn"
          onClick={hide}
        >
          {FindCompanyText}
      </Button>      
*/}      
    </Paper>
  );
};

export default withStyles(styles)(ThanksMessage);
