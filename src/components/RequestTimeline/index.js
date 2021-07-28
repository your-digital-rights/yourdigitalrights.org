import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import dateFormatter from "../../utils/date-formatter";

const Timeline = ({ classes, requestItem, days, regulation }) => {
  const requestedCreatedAt = new Date(requestItem.requestCreatedAt.S);
  const requestDate = dateFormatter(requestedCreatedAt);

  let reminderDate;
  if (requestItem.reminderCreatedAt) {
    const reminderCreatedAt = new Date(requestItem.reminderCreatedAt.S);
    const reminderDate = dateFormatter(reminderCreatedAt);
  }

  let escalationDate;
  if (requestItem.escalationCreatedAt) {
    const escalationCreatedAt = new Date(requestItem.escalationCreatedAt.S);
    const escalationDate = dateFormatter(escalationCreatedAt);
  }

  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h2 className={classes.header}>Your request timeline</h2>
        <ul className={classes.timeline}>
          <li className={classes.timelineItem}>Request Sent<br />{ requestDate }</li>
          {typeof days.sinceReminder === 'number' && (
            <li className={classes.timelineItem}>Reminder Sent<br />{ requestItem.reminderCreatedAt.S }</li>
          )}
          {typeof days.sinceReminder !== 'number' && (
            <li className={classes.timelineItem}>Send a reminder</li>
          )}
          {typeof days.sinceEscalation === 'number' && (
            <li className={classes.timelineItem}>Escalation Sent<br />{ requestItem.escalationCreatedAt.S }</li>
          )}
          {typeof days.sinceEscalation !== 'number' && (
            <li className={classes.timelineItem}>Escalate to<br />{ regulation.authority }</li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Timeline);
