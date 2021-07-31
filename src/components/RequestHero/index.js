import { Component } from "react";
import { FormattedMessage, FormattedPlural } from "react-intl";
import aws from "aws-sdk";
import fetch from "universal-fetch";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import capitalize from "../../utils/capitalize";
import styles from "./styles";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.requestItem.status ? props.requestItem.status.S : "NO_REPLY",
    };
  }

  updateStatus(newStatus) {
    const oldStatus = this.state.status;
  
    // Optimistically assume the status update will succeed
    this.setState({ status: newStatus });

    fetch('/api/update', {
        method: "POST",
        body: JSON.stringify({
          uuid: this.props.requestItem.id.S,
          status: newStatus,
        }),
        headers: {
          "Content-Type": "application/json"
        },
    }).then((response) => {
      if (!response.ok) {
        // If the status didn't update, revert it back
        this.setState({ status: oldStatus });
      }
    });
  }

  pluralizeDay(number) {
    if (number === 1) {
      return <FormattedMessage id="request.hero.day" defaultMessage="day" />;
    }

    return <FormattedMessage id="request.hero.days" defaultMessage="days" />;
  }

  render() {
    const {classes, requestItem, selectedCompany, days} = this.props;
    const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;
    const {status} = this.state;

    return (
      <div className={classes.hero} id="hero">
        <div className={classes.container}>
          <h1 className={classes.header}>
            <FormattedMessage
              id="request.hero.header"
              defaultMessage="Your data {requestType} to {companyName}"
              values={{
                requestType: requestItem.requestType.S.toLowerCase(),
                companyName: selectedCompany.name,
              }}
            />
          </h1>
          <p className={classes.information}>
            <FormattedMessage
              id="request.hero.requestDateStatement"
              defaultMessage="The request was sent {daysSince} {day} ago."
              values={{
                daysSince: days.sinceRequest,
                day: this.pluralizeDay(days.sinceRequest),
              }}
            />
            {typeof days.sinceReminder === 'number' && (
              <>
                &nbsp;
                <FormattedMessage
                  id="request.hero.reminderDateStatement"
                  defaultMessage="A reminder was sent {daysSince} {day} ago."
                  values={{
                    daysSince: days.sinceReminder,
                    day: this.pluralizeDay(days.sinceReminder),
                  }}
                />
              </>
            )}
            {typeof days.sinceEscalation === 'number' && (
              <>
                &nbsp;
                <FormattedMessage
                  id="request.hero.escalationDateStatement"
                  defaultMessage="An escalation was sent {daysSince} {day} ago."
                  values={{
                    daysSince: days.sinceEscalation,
                    day: this.pluralizeDay(days.sinceEscalation),
                  }}
                />
              </>
            )}
          </p>
          <h2 className={classes.status}>
            <strong><FormattedMessage id="request.hero.requestStatus" defaultMessage="Request Status:" /> </strong>
            {selectedCompany.name}&nbsp;
            {status === "SUCCESS" ? (
              <FormattedMessage id="request.hero.handledRequest" defaultMessage="handled your request" />
            ) : (
              status === "PARTIAL" ? (
                <FormattedMessage id="request.hero.partiallyHandled" defaultMessage="partially handled your request" />
              ) : (
                status === "DECLINED" ? (
                  <FormattedMessage id="request.hero.declinedRequest" defaultMessage="declined your request" />
                ) : (
                  <FormattedMessage id="request.hero.didNotReply" defaultMessage="did not reply" />
                )
              )
            )}
          </h2>
          <ul className={classes.buttons}>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={status === "SUCCESS" ? classes.primaryButton : classes.button}
                onClick={() => this.updateStatus('SUCCESS')}
              >
                <FormattedMessage id="request.hero.handledSuccessfully" defaultMessage="Handled successfully" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={status === "PARTIAL" ? classes.primaryButton : classes.button}
                onClick={() => this.updateStatus('PARTIAL')}
              >
                <FormattedMessage id="request.hero.handledPartially" defaultMessage="Handled partially" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={status === "DECLINED" ? classes.primaryButton : classes.button}
                onClick={() => this.updateStatus('DECLINED')}
              >
                <FormattedMessage id="request.hero.declined" defaultMessage="Declined" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={status === "NO_REPLY" ? classes.primaryButton : classes.button}
                onClick={() => this.updateStatus('NO_REPLY')}
              >
                <FormattedMessage id="request.hero.noReply" defaultMessage="No reply" />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
export default withStyles(styles)(Hero);
