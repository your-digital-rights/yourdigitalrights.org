import { Component } from "react";
import { FormattedMessage } from "react-intl";
import fetch from "universal-fetch";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import capitalize from "../../utils/capitalize";
import styles from "./styles";

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  updateStatus(newStatus) {
    const oldStatus = this.props.status;
  
    // Optimistically assume the status update will succeed
    this.props.setStatus(newStatus);

    fetch(`/api/status?uuid=${this.props.requestItem.id.S}&status=${newStatus}`, {
    }).then((response) => {
      if (!response.ok) {
        // If the status didn't update, revert it back
        this.props.setStatus(oldStatus);
      }
    });
  }
  
  render() {
    const {classes, requestItem, selectedCompany, days, status} = this.props;
    const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;

    return (
      <div className={classes.root} id="requestHero">
        <div className={classes.container}>
          <h1 className={classes.header}>
            <FormattedMessage
              id="request.hero.header"
              defaultMessage="Your data {requestType} request to {companyName}"
              values={{
                requestType: requestItem.requestType.S.toLowerCase(),
                companyName: selectedCompany.name,
              }}
            />
          </h1>
          <h2 className={classes.status}>
            <strong><FormattedMessage id="request.hero.requestStatus" defaultMessage="Request Status:" /> </strong>
            {selectedCompany.name}&nbsp;
            {status === "SUCCESS" ? (
              <FormattedMessage id="request.hero.handledRequest" defaultMessage="handled your request successfuly." />
            ) : (
              status === "PARTIAL" ? (
                <FormattedMessage id="request.hero.partiallyHandled" defaultMessage="handled your request partially." />
              ) : (
                status === "DECLINED" ? (
                  <FormattedMessage id="request.hero.declinedRequest" defaultMessage="declined your request." />
                ) : (
                  <FormattedMessage id="request.hero.didNotReply" defaultMessage="did not reply yet." />
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
