import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Timeline = ({ classes, requestItem, days, regulation }) => {
  const dayFormatter = new Intl.DateTimeFormat('en', { day: '2-digit' });
  const monthFormatter = new Intl.DateTimeFormat('en', { month: '2-digit' });
  const yearFormatter = new Intl.DateTimeFormat('en', { year: 'numeric' });

  const requestedCreatedAt = new Date(requestItem.requestCreatedAt.S);
  const requestDate = `${
    dayFormatter.format(requestedCreatedAt)
  }.${
    monthFormatter.format(requestedCreatedAt)
  }.${
    yearFormatter.format(requestedCreatedAt)
  }`;

  let reminderDate;
  if (requestItem.reminderCreatedAt) {
    const reminderCreatedAt = new Date(requestItem.reminderCreatedAt.S);
    const reminderDate = `${
      dayFormatter.format(reminderCreatedAt)
    }.${
      monthFormatter.format(reminderCreatedAt)
    }.${
      yearFormatter.format(reminderCreatedAt)
    }`;
  }

  let escalationDate;
  if (requestItem.escalationCreatedAt) {
    const escalationCreatedAt = new Date(requestItem.escalationCreatedAt.S);
    const escalationDate = `${
      dayFormatter.format(escalationCreatedAt)
    }.${
      monthFormatter.format(escalationCreatedAt)
    }.${
      yearFormatter.format(escalationCreatedAt)
    }`;
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
