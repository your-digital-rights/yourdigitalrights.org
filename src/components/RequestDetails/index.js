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
        <h2>Request details</h2>
        <dl>
          <dt>Full name:</dt>
          <dd>{ requestItem.name.S }</dd>
          <dt>Organization:</dt>
          <dd>{ requestItem.companyName.S }</dd>
          <dt>Request type:</dt>
          <dd>{ requestItem.requestType.S }</dd>
          <dt>Regulation:</dt>
          <dd>{ requestItem.regulationType.S }</dd>
          <dt>Request date:</dt>
          <dd>{ requestItem.requestCreatedAt.S }</dd>
          <dt>Sent to email address:</dt>
          <dd>{ requestItem.emailTo.S }</dd>
          {requestItem.reminderCreatedAt && (
            <>
              <dt>Reminder email date:</dt>
              <dd>{ requestItem.reminderCreatedAt.S }</dd>
            </>
          )}
          {requestItem.escalationCreatedAt && (
            <>
              <dt>Escalation email date:</dt>
              <dd>{ requestItem.escalationCreatedAt.S }</dd>
            </>
          )}
          <dt>To see the email you sent, please click here</dt>
          <dd>
            <h3>{ requestItem.emailSubject.S }</h3>
            { requestItem.emailBody.S }
          </dd>
        </dl>
      </div>
    </div>
  );
};
export default withStyles(styles)(Details);
