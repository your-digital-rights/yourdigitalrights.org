import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import Regulations from "../../utils/regulations";
import RequestEscalation from "../RequestEscalation";
import tracking from "../../utils/tracking";
import Recommendations from "./Recommendations";
import EmailSendButton from "../EmailSendButton";

const useStyles = makeStyles(styles);

const WhatsNext = ({ requestItem, days, selectedCompany, intl, status, children }) => {
  const classes = useStyles();
  const [showEscalation, setShowEscalation] = useState(false);
  const reminderForm = useRef();

  const handleReminderFormSubmit = (e) => {
    e.preventDefault();
  }

  const handleReminderEmailSendClick = (generateEmailFields) => {
    const formStatus = reminderForm.current.reportValidity();
    if (!formStatus) return;

    setShowEscalation(false);

    const data = {
      requestItem,
      days,
      selectedCompany,
      intl,
      status
    }

    const selectedAction = generateEmailFields(data);    
    selectedAction.run();

    tracking.trackSendReminderEmail(
      requestItem.companyUrl,
      requestItem.regulationType
    );  
  }

  const buttons = () => {
    const authority = Regulations[requestItem.regulationType].dpa.longName;
    return (
      <ul className={classes.buttons}>
        <li>
          <form onSubmit={handleReminderFormSubmit} ref={reminderForm}>
            <EmailSendButton
              emailType="REMINDER"
              onClick={handleReminderEmailSendClick}
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
            onClick={() => setShowEscalation(true)}
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
        { status !== 'SUCCESS' && buttons() }
        { showEscalation && (
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
};

export default WhatsNext;
