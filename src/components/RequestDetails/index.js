import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import RequestWhatsNext from "../RequestWhatsNext";

const Details = ({ classes, requestItem, days, regulation, selectedCompany }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <RequestWhatsNext 
          requestItem={requestItem}
          days={days}
          regulation={regulation}
          selectedCompany={selectedCompany}
        />
        <h2 className={classes.header}>Request details</h2>
        <Paper
          component="div"
          className={classes.details}
          elevation={10}
        >
          <dl className={classes.detailsList}>
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
        </Paper>
      </div>
    </div>
  );
};
export default withStyles(styles)(Details);
