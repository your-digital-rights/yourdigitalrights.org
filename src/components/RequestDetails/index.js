import { useState } from "react";
import { FormattedMessage } from "react-intl";
import * as S from "./styles";
import Paper from "@mui/material/Paper";
import {FormattedDate} from 'react-intl'
import Regulations from "../../utils/regulations";

const Timeline = ({ intl, requestItem, days, selectedCompany, status }) => {
  const [showRequestEmail, setShowRequestEmail] = useState(false);
  const [showReminderEmail, showReminderEmailEmail] = useState(false);
  const [showEscalationEmail, showEscalationEmailEmail] = useState(false);
  const regulationType = Regulations[requestItem.regulationType].longName;
  const requestType = Regulations[requestItem.regulationType].requestTypes[requestItem.requestType].name;

  return (
    <S.Root id="requestDetails">
      <S.Container>
        <S.Header>
          <FormattedMessage id="request.details.header" defaultMessage="Request details" />
        </S.Header>
        <Paper
          component={S.Details}
          elevation={10}
        >
          {requestItem.requestEmailTo && (
            <S.DetailsList>
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
                <S.ShowEmail onClick={() => setShowRequestEmail(!showRequestEmail)}>
                  {showRequestEmail && (
                    <FormattedMessage id="request.details.hide.request" defaultMessage="Hide request email" />
                  )}
                  {!showRequestEmail && (
                    <FormattedMessage id="request.details.show.request" defaultMessage="View request email" />
                  )}
                </S.ShowEmail>
              </dt>
              {showRequestEmail ? (
                <S.ShowFullEmail>
                  <h3>{ requestItem.requestEmailSubject }</h3>
                  <p dangerouslySetInnerHTML={
                    ({__html: requestItem.requestEmailContent.replace(/\n/g, '<br>')})
                  } />
                </S.ShowFullEmail>
              ) : (
                <S.HideFullEmail>
                  <h3>{ requestItem.requestEmailSubject }</h3>
                  <p dangerouslySetInnerHTML={
                    ({__html: requestItem.requestEmailContent.replace(/\n/g, '<br>')})
                  } />
                </S.HideFullEmail>
              )}
              {requestItem.reminderEmailSentAt && (
                <>
                  <dt id="reminderEmail">
                    <S.ShowEmail onClick={() => showReminderEmailEmail(!showReminderEmail)}>
                      {showReminderEmail && (
                        <FormattedMessage id="request.details.hide.reminder" defaultMessage="Hide reminder email" />
                      )}
                      {!showReminderEmail && (
                        <FormattedMessage id="request.details.show.reminder" defaultMessage="View reminder email" />
                      )}
                    </S.ShowEmail>
                  </dt>
                  {showReminderEmail ? (
                    <S.ShowFullEmail>
                      <h3>{ requestItem.reminderEmailSubject }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.reminderEmailContent.replace(/\n/g, '<br>')})
                      } />
                    </S.ShowFullEmail>
                  ) : (
                    <S.HideFullEmail>
                      <h3>{ requestItem.reminderEmailSubject }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.reminderEmailContent.replace(/\n/g, '<br>')})
                      } />
                    </S.HideFullEmail>
                  )}
                </>
              )}
              {requestItem.escalationEmailSentAt && (
                <>
                  <dt id="escalationEmail">
                    <S.ShowEmail onClick={() => showEscalationEmailEmail(!showEscalationEmail)}>
                      {showEscalationEmail && (
                        <FormattedMessage id="request.details.hide.escalation" defaultMessage="Hide escalation email" />
                      )}
                      {!showEscalationEmail && (
                        <FormattedMessage id="request.details.show.escalation" defaultMessage="View escalation email" />
                      )}
                    </S.ShowEmail>
                  </dt>
                  {showEscalationEmail ? (
                    <S.ShowFullEmail>
                      <h3>{ requestItem.escalationEmailSubject }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.escalationEmailContent.replace(/\n/g, '<br>')})
                      } />
                    </S.ShowFullEmail>
                  ) : (
                    <S.HideFullEmail>
                      <h3>{ requestItem.escalationEmailSubject }</h3>
                      <p dangerouslySetInnerHTML={
                        ({__html: requestItem.escalationEmailContent.replace(/\n/g, '<br>')})
                      } />
                    </S.HideFullEmail>
                  )}
                </>
              )}                
            </S.DetailsList>
          )}
          {!requestItem.requestEmailTo && (
            <FormattedMessage id="request.details.nowDetails" defaultMessage="Request details are not avaialble at this time, please refresh the page once you have sent the email." />
          )}
        </Paper>
      </S.Container>
    </S.Root>
  );
}
export default Timeline;
