import { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";
import {FormattedDate} from 'react-intl'
import Regulations from "../../utils/regulations";

const useStyles = makeStyles(styles);

const Timeline = ({ intl, requestItem, days, selectedCompany, status }) => {
  const classes = useStyles();
  const [showRequestEmail, setShowRequestEmail] = useState(false);
  const [showReminderEmail, showReminderEmailEmail] = useState(false);
  const [showEscalationEmail, showEscalationEmailEmail] = useState(false);
  const regulationType = Regulations[requestItem.regulationType].longName;
  const requestType = Regulations[requestItem.regulationType].requestTypes[requestItem.requestType].name;

  return (
    <div className={classes.root} id="requestDetails">
      <div className={classes.container}>
        <h2 className={classes.header}>
          <FormattedMessage id="request.details.header" defaultMessage="Request details" />
        </h2>
        <Paper
          component="div"
          className={classes.details}
          elevation={10}
        >
          {requestItem.requestEmailTo && (
            <dl className={classes.detailsList}>
              <dt><FormattedMessage id="request.details.type" defaultMessage="Request type:" /></dt>
              <dd>{ requestType }</dd>
              <dt><FormattedMessage id="request.details.regulation" defaultMessage="Regulation:" /></dt>
              <dd>{ regulationType }</dd>
              <dt><FormattedMessage id="request.details.name" defaultMessage="Requested by:" /></dt>
              <dd>{ requestItem.name }</dd>
              <dt><FormattedMessage id="request.details.organization" defaultMessage="Recipient:" /></dt>
              <dd>{ requestItem.companyName }</dd>
              <dt><FormattedMessage id="request.details.date" defaultMessage="Request email date:" /></dt>
              <dd><FormattedDate value={requestItem.requestEmailSentAt} /></dd>
              <dt><FormattedMessage id="request.details.sentTo" defaultMessage="Recipient email address:" /></dt>
              <dd>{ requestItem.requestEmailTo }</dd>
              {requestItem.reminderEmailSentAt && (
                <>
                  <dt><FormattedMessage id="request.details.reminderDate" defaultMessage="Reminder email date:" /></dt>
                  <dd><FormattedDate value={requestItem.reminderEmailSentAt} /></dd>
                </>
              )}
              {requestItem.escalationEmailSentAt && (
                <>
                  <dt><FormattedMessage id="request.details.escalationDate" defaultMessage="Escalation email date:" /></dt>
                  <dd><FormattedDate value={requestItem.escalationEmailSentAt} /></dd>
                </>
              )}
              <dt id="requestEmail">
                <a className={classes.showEmail} onClick={() => setShowRequestEmail(!showRequestEmail)}>
                  {showRequestEmail && (
                    <FormattedMessage id="request.details.hide.request" defaultMessage="Hide request email" />
                  )}
                  {!showRequestEmail && (
                    <FormattedMessage id="request.details.show.request" defaultMessage="View request email" />
                  )}
                </a>
              </dt>
              <dd className={showRequestEmail ? classes.showFullEmail : classes.hideFullEmail}>
                <h3>{ requestItem.requestEmailSubject }</h3>
                <p dangerouslySetInnerHTML={
                  ({__html: requestItem.requestEmailContent.replace(/\n/g, '<br>')})
                } />
              </dd>
              {requestItem.reminderEmailSentAt && (
                <>
                  <dt id="reminderEmail">
                    <a className={classes.showEmail} onClick={() => showReminderEmailEmail(!showReminderEmail)}>
                      {showReminderEmail && (
                        <FormattedMessage id="request.details.hide.reminder" defaultMessage="Hide reminder email" />
                      )}
                      {!showReminderEmail && (
                        <FormattedMessage id="request.details.show.reminder" defaultMessage="View reminder email" />
                      )}
                    </a>
                  </dt>
                  <dd className={showReminderEmail ? classes.showFullEmail : classes.hideFullEmail}>
                    <h3>{ requestItem.reminderEmailSubject }</h3>
                    <p dangerouslySetInnerHTML={
                      ({__html: requestItem.reminderEmailContent.replace(/\n/g, '<br>')})
                    } />
                  </dd>
                </>
              )}
              {requestItem.escalationEmailSentAt && (
                <>
                  <dt id="escalationEmail">
                    <a className={classes.showEmail} onClick={() => showEscalationEmailEmail(!showEscalationEmail)}>
                      {showEscalationEmail && (
                        <FormattedMessage id="request.details.hide.escalation" defaultMessage="Hide escalation email" />
                      )}
                      {!showEscalationEmail && (
                        <FormattedMessage id="request.details.show.escalation" defaultMessage="View escalation email" />
                      )}
                    </a>
                  </dt>
                  <dd className={showEscalationEmail ? classes.showFullEmail : classes.hideFullEmail}>
                    <h3>{ requestItem.escalationEmailSubject }</h3>
                    <p dangerouslySetInnerHTML={
                      ({__html: requestItem.escalationEmailContent.replace(/\n/g, '<br>')})
                    } />
                  </dd>
                </>
              )}                
            </dl>
          )}
          {!requestItem.requestEmailTo && (
            <FormattedMessage id="request.details.nowDetails" defaultMessage="Request details are not avaialble at this time, please refresh the page once you have sent the email." />
          )}
        </Paper>
      </div>
    </div>
  );
}

export default Timeline;
