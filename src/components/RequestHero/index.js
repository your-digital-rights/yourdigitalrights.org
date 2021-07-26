import { Component } from "react";
import aws from "aws-sdk";
import fetch from "universal-fetch";
import { FormattedMessage } from "react-intl";
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

  render() {
    const {classes, requestItem, selectedCompany, days} = this.props;
    const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;
    const {status} = this.state;

    return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h1 className={classes.header}>Your data {requestItem.requestType.S.toLowerCase()} to {selectedCompany.name}</h1>
        <p className={classes.information}>
          The request was sent {days.sinceRequest} day{days.sinceRequest === 1 ? '' : 's'} ago.
          {typeof days.sinceReminder === 'number' && (
            <>
              &nbsp;A reminder was sent {days.sinceReminder} day{days.sinceReminder === 1 ? '' : 's'} ago.
            </>
          )}
          {typeof days.sinceEscalation === 'number' && (
            <>
              &nbsp;An escalation email was sent {days.sinceEscalation} day{days.sinceEscalation === 1 ? '' : 's'} ago.
            </>
          )}
        </p>
        <h2 className={classes.status}>
          <strong>Request Status: </strong>
          {selectedCompany.name}&nbsp;
          {status === "SUCCESS" ? (
            <>
              handled your request
            </>
          ) : (
            status === "PARTIAL" ? (
              <>
                partially handled your request
              </>
            ) : (
              status === "DECLINED" ? (
                <>
                  declined your request
                </>
              ) : (
                <>
                  did not reply
                </>
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
              Handled successfully
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
              Handled partially
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
              Declined
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
              No reply
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
  }
};
export default withStyles(styles)(Hero);
