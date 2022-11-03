import React from "react";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Regulations from "../../utils/regulations";
import RequestEscalation from "../RequestEscalation";
import tracking from "../../utils/tracking";
import Recommendations from "./Recommendations";
import EmailSendButton from "../EmailSendButton";

class WhatsNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEscalation: false,
    };
    this.reminderForm = React.createRef();
  }

  handleReminderFormSubmit = (e) => {
    e.preventDefault();
  }

  handleReminderEmailSendClick = (generateEmailFields) => {

    const formStatus  = this.reminderForm.current.reportValidity();
    if (!formStatus) return;

    this.setState({showEscalation: false});
    const selectedAction = generateEmailFields(this.props);    
    selectedAction.run();

    tracking.trackSendReminderEmail(
      this.props.requestItem.companyUrl.S,
      this.props.requestItem.regulationType.S
    );  
  }

  buttons(classes) {
    const { requestItem } = this.props;
    const authority = Regulations[requestItem.regulationType.S].dpa.longName;
    return (
      <ul className={classes.buttons}>
        <li>
          <form onSubmit={this.handleReminderFormSubmit} ref={this.reminderForm}>
            <EmailSendButton
              emailType="REMINDER"
              onClick={this.handleReminderEmailSendClick}
              className={classes.button}
            >
              <FormattedMessage
                id="request.next.reminderButton"
                defaultMessage="Send the organization a reminder email"
              />
            </EmailSendButton>
          </form>
        </li>
        <li>
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
