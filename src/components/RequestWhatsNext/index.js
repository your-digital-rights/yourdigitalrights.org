import { Component } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { isMobile } from "react-device-detect";
import mailtoLink from "mailto-link";
import { mailgoDirectRender } from "mailgo";
import getInboundEmailAddress from "../../utils/email";
import reminderEmail from "../../email-templates/reminder";
import Regulations from "../../utils/regulations";
import RequestEscalation from "../RequestEscalation";
import tracking from "../../utils/tracking";
import Recommendations from "./Recommendations";

class WhatsNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEscalation: false,
    };
  }

  renderMailTo() {
    const {requestItem, status} = this.props;
    const to = requestItem.requestEmailTo.S;
    const cc = getInboundEmailAddress(requestItem.id.S, 'reminder');
    const subject = reminderEmail.subject(requestItem);
    const body = reminderEmail.body(requestItem, status);

    return mailtoLink({
      to,
      cc,
      subject,
      body,
    });
  }

  handleReminderFormSubmit = (e) => {
    e.preventDefault();
    this.setState({showEscalation: false});
    const mailTo = this.renderMailTo();
    if (isMobile) {
      window.open(mailTo);
    } else {
      mailgoDirectRender(mailTo);
    }
    tracking.trackSendReminderEmail(
      this.props.requestItem.companyUrl.S,
      this.props.requestItem.regulationType.S
    );
  }

  handleEscalationButtonClick = (e) => {
    const uuid = this.props.requestItem.id.S;

    fetch(
      "/api/registerEscalation",
      {
        method: "POST",
        body: JSON.stringify({ uuid }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    tracking.trackEscalationRequest(
      this.props.requestItem.companyUrl.S,
      this.props.requestItem.regulationType.S
    );
  }

  buttons(classes, regulation) {
    const { requestItem } = this.props;
    const authority = Regulations[requestItem.regulationType.S].dpa.longName;
    return (
      <ul className={classes.buttons}>
        <li>
          <form onSubmit={this.handleReminderFormSubmit}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              <FormattedMessage
                id="request.next.reminderButton"
                defaultMessage="Send the organization a reminder email"
              />
            </Button>
          </form>
        </li>
        <li>
          {Regulations[requestItem.regulationType.S].dpa.defualtAction === 'form' && (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              href={Regulations[requestItem.regulationType.S].dpa.requestFormURL}
              onClick={this.handleEscalationButtonClick}
              target="_blank"
            >
              <FormattedMessage
                id="request.next.esclateButton"
                defaultMessage="Escalate to the { authority }"
                values={{
                  authority: authority,
                }}
              />
            </Button>
          )}
          {Regulations[requestItem.regulationType.S].dpa.defualtAction !== 'form' && (
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              onClick={e => this.setState({showEscalation: true})}
            >
              <FormattedMessage
                id="request.next.esclateButton"
                defaultMessage="Escalate to the { authority }"
                values={{
                  authority: authority,
                }}
              />
            </Button>
          )}
        </li>
      </ul>
    )
  }

  render() {
    const { classes, requestItem, days, selectedCompany, intl, status, children} = this.props;
    return (
      <div className={classes.root} id="whatsNext">
        <div className={classes.container}>
          <h2 className={classes.header}><FormattedMessage id="request.next.whatsNext" defaultMessage="What's next" /></h2>
          <Recommendations 
            requestItem={requestItem} 
            days={days} 
            selectedCompany={selectedCompany} 
            status={status}
          />
          {this.buttons(classes)}
          { this.state.showEscalation && (
            <RequestEscalation 
              requestItem={requestItem}
              intl={intl}
              status={status}
            />
          )}
          {children}
        </div>
      </div>
    );
  }
};
export default withStyles(styles)(WhatsNext);
