import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { FormattedMessage, FormattedDate} from 'react-intl'

const Timeline = ({ classes, requestItem, days }) => {
  
  return (
    <div className={classes.root} id="requestTimeline">
      <div className={classes.container}>
        <h2 className={classes.header}>
          <FormattedMessage 
            id="request.timeline.requestTimeline" 
            defaultMessage="Your request timeline" 
          />
        </h2>
        <ul className={classes.timeline}>
          <li className={classes.timelineItem}>
            <FormattedMessage id="request.timeline.requestSent" defaultMessage="Request sent" />
            <br />
            <FormattedMessage 
                id="request.timeline.sinceRequestDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceRequest }} 
            />
          </li>
          {typeof days.sinceReminder === 'number' && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.reminderSent" 
                defaultMessage="Reminder sent" 
              />
              <br />
              <FormattedMessage 
                id="request.timeline.sinceReminderDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceReminder }} 
              />              
            </li>
          )}
          {typeof days.sinceReminder !== 'number' && days.toReminder >= 0 && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.sendReminder" 
                defaultMessage="Send a reminder"
              />
              <br/>
              <FormattedMessage 
                id="request.timeline.sendReminderDays" 
                defaultMessage="{days, plural, =0 {today} one {tommorow} other {in # days}}"
                values={{ days: days.toReminder }} 
              />
            </li>
          )}
          {typeof days.sinceReminder !== 'number' && days.toReminder < 0 && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.sendReminder" 
                defaultMessage="Send a reminder"
              />
            </li>
          )}          
          {typeof days.sinceEscalation === 'number' && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.sendEscalation" 
                defaultMessage="Escalation sent" 
              />
              <br />
              <FormattedMessage 
                id="request.timeline.sinceEscalationDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceEscalation }} 
              />  
            </li>
          )}
          {typeof days.sinceEscalation !== 'number' && days.toEscalation >= 0 && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.esclateTo" 
                defaultMessage="Escalate your request" 
              />
              <br/>
              <FormattedMessage 
                id="request.timeline.sendEscalationDays" 
                defaultMessage="{days, plural, =0 {today} one {tommorow} other {in # days}}"
                values={{ days: days.toEscalation }} 
              />
            </li>
          )}
          {typeof days.sinceEscalation !== 'number' && days.toEscalation < 0 && (
            <li className={classes.timelineItem}>
              <FormattedMessage 
                id="request.timeline.esclateTo" 
                defaultMessage="Escalate your request" 
              />
            </li>
          )}          
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Timeline);
