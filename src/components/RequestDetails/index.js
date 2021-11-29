import { Component } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import dateFormatter from "../../utils/date-formatter";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRequestEmail: false,
      showReminderEmail: false,
      showEscalationEmail: false,
    };
  }

  render() {
    const { classes, intl, requestItem, days, selectedCompany, status } = this.props;

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
                <dd>{ requestItem.requestType.S }</dd>
                <dt><FormattedMessage id="request.details.regulation" defaultMessage="Regulation:" /></dt>
                <dd>{ requestItem.regulationType.S }</dd>
                <dt><FormattedMessage id="request.details.name" defaultMessage="Requested by:" /></dt>
                <dd>{ requestItem.name.S }</dd>
                <dt><FormattedMessage id="request.details.organization" defaultMessage="Recipient:" /></dt>
                <dd>{ requestItem.companyName.S }</dd>
                <dt><FormattedMessage id="request.details.date" defaultMessage="Request date:" /></dt>
                <dd>{ dateFormatter(new Date(requestItem.requestCreatedAt.S)) }</dd>
                <dt><FormattedMessage id="request.details.sentTo" defaultMessage="Recipient email address:" /></dt>
                <dd>{ requestItem.requestEmailTo.S }</dd>
                {requestItem.reminderEmailSentAt && (
                  <>
                    <dt><FormattedMessage id="request.details.reminderDate" defaultMessage="Reminder email sent on:" /></dt>
                    <dd>{ dateFormatter(new Date(requestItem.reminderEmailSentAt.S)) }</dd>
                  </>
                )}
                {requestItem.escalationEmailSentAt && (
                  <>
                    <dt><FormattedMessage id="request.details.escalationDate" defaultMessage="Escalation email sent on:" /></dt>
                    <dd>{ dateFormatter(new Date(requestItem.escalationEmailSentAt.S)) }</dd>
                  </>
                )}
                <dt id="requestEmail">
                  <a className={classes.showEmail} onClick={() => this.setState({ showRequestEmail: !this.state.showRequestEmail })}>
                    {this.state.showRequestEmail && (
                      <FormattedMessage id="request.details.hide.request" defaultMessage="Hide request email" />
                    )}
                    {!this.state.showRequestEmail && (
                      <FormattedMessage id="request.details.show.request" defaultMessage="View request email" />
                    )}
                  </a>
                </dt>
                <dd className={this.state.showRequestEmail ? classes.showFullEmail : classes.hideFullEmail}>
                  <h3>{ requestItem.requestEmailSubject.S }</h3>
                  <p dangerouslySetInnerHTML={
                    ({__html: requestItem.requestEmailContent.S.replace(/\n/g, '<br>')})
                  } />
                </dd>
                {requestItem.reminderEmailSentAt && (
                  <>
                    <dt id="reminderEmail">
                      <a className={classes.showEmail} onClick={() => this.setState({ showReminderEmail: !this.state.showReminderEmail })}>
                        {this.state.showReminderEmail && (
                          <FormattedMessage id="request.details.hide.reminder" defaultMessage="Hide reminder email" />
                        )}
                        {!this.state.showReminderEmail && (
                          <FormattedMessage id="request.details.show.reminder" defaultMessage="View reminder email" />
                        )}
                      </a>
                    </dt>
                    <dd className={this.state.showReminderEmail ? classes.showFullEmail : classes.hideFullEmail}>
                      <h3>{ requestItem.reminderEmailSubject.S }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.reminderEmailContent.S.replace(/\n/g, '<br>')})
                      } />
                    </dd>
                  </>
                )}
                {requestItem.escalationEßailSentAt && (
                  <>
                    <dt id="escalationEmail">
                      <a className={classes.showEmail} onClick={() => this.setState({ showEscalationEmail: !this.state.showEscalationEmail })}>
                        {this.state.showEscalationEmail && (
                          <FormattedMessage id="request.details.hide.escalation" defaultMessage="Hide escalation email" />
                        )}
                        {!this.state.showEscalationEmail && (
                          <FormattedMessage id="request.details.show.escalation" defaultMessage="View escalation email" />
                        )}
                      </a>
                    </dt>
                    <dd className={this.state.showEscalationEmail ? classes.showFullEmail : classes.hideFullEmail}>
                      <h3>{ requestItem.escalationEmailSubject.S }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.escalationEmailContent.S.replace(/\n/g, '<br>')})
                      } />
                    </dd>
                  </>
                )}                
              </dl>
            )}
            {!requestItem.requestEmailTo && (
              <FormattedMessage id="request.details.nowDetails" defaultMessage="Request details are not avaialble at this time, if you have you sent the email please refresh the page." />
            )}
          </Paper>
        </div>
      </div>
    );
  }
};
export default withStyles(styles)(Details);
