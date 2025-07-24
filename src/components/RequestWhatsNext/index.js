import React from "react";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as S from "./styles";
import Button from "@mui/material/Button";
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

    const data = {
      ...this.props,
    }

    const selectedAction = generateEmailFields(data);    
    selectedAction.run();

    tracking.trackSendReminderEmail(
      this.props.requestItem.companyUrl,
      this.props.requestItem.regulationType
    );  
  }

  buttons() {
    const { requestItem } = this.props;
    const authority = Regulations[requestItem.regulationType].dpa.longName;
    return (
      <S.StyledButtons>
        <li>
          <form onSubmit={this.handleReminderFormSubmit} ref={this.reminderForm}>
            <S.StyledButton>
              <EmailSendButton
                emailType="REMINDER"
                onClick={this.handleReminderEmailSendClick}
              >
                <FormattedMessage
                  id="request.next.reminderButton"
                  defaultMessage="Send the organization a reminder email"
                />
              </EmailSendButton>
            </S.StyledButton>
          </form>
        </li>
        <li>
          <S.StyledButton>
            <Button
              variant="contained"
              color="primary"
              type="submit"
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
          </S.StyledButton>
        </li>
      </S.StyledButtons>
    )
  }

  render() {
    const { requestItem, days, selectedCompany, intl, status, children} = this.props;
    return (
      <S.StyledRoot id="whatsNext">
        <S.StyledContainer>
          <S.StyledHeader><FormattedMessage id="request.next.whatsNext" defaultMessage="What's next" /></S.StyledHeader>
          <Recommendations 
            requestItem={requestItem} 
            days={days} 
            selectedCompany={selectedCompany} 
            status={status}
          />
          { this.props.status !== 'SUCCESS' && (
            this.buttons()
          )}
          { this.state.showEscalation && (
            <RequestEscalation 
              requestItem={requestItem}
              intl={intl}
              status={status}
            />
          )}
          {children}
        </S.StyledContainer>
      </S.StyledRoot>
    );
  }
};
export default WhatsNext;
