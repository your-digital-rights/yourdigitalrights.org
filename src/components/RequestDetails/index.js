import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import RequestWhatsNext from "../RequestWhatsNext";
import dateFormatter from "../../utils/date-formatter";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmail: false,
    };
  }

  render() {
    const { classes, intl, requestItem, days, selectedCompany, status } = this.props;

    return (
      <div className={classes.hero} id="hero">
        <div className={classes.container}>
          <RequestWhatsNext 
            requestItem={requestItem}
            days={days}
            selectedCompany={selectedCompany}
            intl={intl}
            status={status}
          />
          <h2 className={classes.header}>
            <FormattedMessage id="request.details.header" defaultMessage="Request details" />
          </h2>
          <Paper
            component="div"
            className={classes.details}
            elevation={10}
          >
            <dl className={classes.detailsList}>
              <dt><FormattedMessage id="request.details.name" defaultMessage="Full name:" /></dt>
              <dd>{ requestItem.name.S }</dd>
              <dt><FormattedMessage id="request.details.organization" defaultMessage="Organization:" /></dt>
              <dd>{ requestItem.companyName.S }</dd>
              <dt><FormattedMessage id="request.details.type" defaultMessage="Request type:" /></dt>
              <dd>{ requestItem.requestType.S }</dd>
              <dt><FormattedMessage id="request.details.regulation" defaultMessage="Regulation:" /></dt>
              <dd>{ requestItem.regulationType.S }</dd>
              <dt><FormattedMessage id="request.details.date" defaultMessage="Request date:" /></dt>
              <dd>{ dateFormatter(new Date(requestItem.requestCreatedAt.S)) }</dd>
              <dt><FormattedMessage id="request.details.sentTo" defaultMessage="Sent to email address:" /></dt>
              <dd>{ requestItem.emailTo.S }</dd>
              {requestItem.reminderCreatedAt && (
                <>
                  <dt><FormattedMessage id="request.details.reminderDate" defaultMessage="Reminder email date:" /></dt>
                  <dd>{ dateFormatter(new Date(requestItem.reminderCreatedAt.S)) }</dd>
                </>
              )}
              {requestItem.escalationCreatedAt && (
                <>
                  <dt><FormattedMessage id="request.details.escalationDate" defaultMessage="Escalation email date:" /></dt>
                  <dd>{ dateFormatter(new Date(requestItem.escalationCreatedAt.S)) }</dd>
                </>
              )}
              <dt id="email">
                <a className={classes.showEmail} onClick={() => this.setState({ showEmail: !this.state.showEmail })}>
                  {this.state.showEmail && (
                    <FormattedMessage id="request.details.hide" defaultMessage="To hide the email you sent, please click here" />
                  )}
                  {!this.state.showEmail && (
                    <FormattedMessage id="request.details.show" defaultMessage="To see the email you sent, please click here" />
                  )}
                </a>
              </dt>
              <dd className={this.state.showEmail ? classes.showFullEmail : classes.hideFullEmail}>
                <h3>{ requestItem.emailSubject.S }</h3>
                <p dangerouslySetInnerHTML={
                  ({__html: requestItem.emailBody.S.replace(/\n/g, '<br>')})
                } />
              </dd>
            </dl>
          </Paper>
        </div>
      </div>
    );
  }
};
export default withStyles(styles)(Details);
