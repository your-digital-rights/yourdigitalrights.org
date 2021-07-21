import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const Details = ({ classes, requestItem }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
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
