import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Details = ({ classes, requestItem }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h2>What's next</h2>
        <p>According to the {requestItem.regulationType.S} organizations have
        [TIME LIMIT] days to reply to your request.</p>
        <div>
        [IF DAYS SINCE REMINDER LESS THAN TIME LIMIT]
          <p><strong>We recommend you wait until [TIME LIMIT] days have passed.</strong></p>
          <p>If you would rather not wait then you have the following options:</p>
        [END]
        </div>
        <ul>
          <li>
            <form>
              <button type="submit">Send a reminder email</button>
            </form>
          </li>
          <li>
            <form>
              <button type="submit">Escalate to [ESCALATION AUTHORITY]</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Details);
