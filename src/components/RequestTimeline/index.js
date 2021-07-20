import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Timeline = ({ classes, requestItem }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h2>Your request timeline</h2>
        <ul>
          <li>Request Sent [DD.MM.YYYY]</li>
          [IF REMINDER]
            <li>Reminder Sent [DD.MM.YYYY]</li>
          [ELSE]
            <li>Send a reminder</li>
          [END]
          [IF ESCALATION]
            <li>Escalation Sent [DD.MM.YYYY]</li>
          [ELSE]
            <li>Escalate to [ESCLATION_AUTHORITY]</li>
          [END]
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Timeline);
