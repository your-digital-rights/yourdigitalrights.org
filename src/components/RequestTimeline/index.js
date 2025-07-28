import * as S from "./styles";
import { FormattedMessage, FormattedDate} from 'react-intl'

const Timeline = ({ requestItem, days }) => {
  const completionRatio = Math.min(days.sinceRequest / (days.reminderTimeLimit * 2), 1);
  const timelineTrackerStyle = {
    left: `calc(${Math.floor(completionRatio * 200 - 50)}% - 17px)`,
  };
  
  return (
    <S.StyledRoot id="requestTimeline">
      <S.StyledContainer>
        <S.StyledHeader>
          <FormattedMessage 
            id="request.timeline.requestTimeline" 
            defaultMessage="Your request timeline" 
          />
        </S.StyledHeader>
        <S.StyledTimeline>
          {typeof requestItem.requestEmailSentAt === 'undefined' && (
            <S.StyledTimelineItem>
              <FormattedMessage id="request.timeline.requestNotSent" defaultMessage="Request not sent" />
            </S.StyledTimelineItem> 
          )}
          {typeof requestItem.requestEmailSentAt !== 'undefined' && (
          <S.StyledTimelineItem>
            <FormattedMessage id="request.timeline.requestSent" defaultMessage="Request sent" />
            <br />
            <FormattedMessage 
                id="request.timeline.sinceRequestDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceRequest }}
            />
          </S.StyledTimelineItem>
          )}
          {typeof days.sinceReminder === 'number' && (
            <S.StyledTimelineItem>
              <S.StyledTimelineTracker style={timelineTrackerStyle}><span>{ days.sinceRequest }</span></S.StyledTimelineTracker>
              <FormattedMessage 
                id="request.timeline.reminderSent" 
                defaultMessage="Reminder sent" 
              />
              <br />
              <FormattedMessage 
                id="request.timeline.sinceReminderDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceReminder }} 
              />              
            </S.StyledTimelineItem>
          )}
          {typeof days.sinceReminder !== 'number' && days.toReminder >= 0 && (
            <S.StyledTimelineItem>
              <S.StyledTimelineTracker style={timelineTrackerStyle}><span>{ days.sinceRequest }</span></S.StyledTimelineTracker>
              <FormattedMessage 
                id="request.timeline.sendReminder" 
                defaultMessage="Send a reminder"
              />
              <br/>
              <FormattedMessage 
                id="request.timeline.sendReminderDays" 
                defaultMessage="{days, plural, =0 {today} one {tommorow} other {in # days}}"
                values={{ days: days.toReminder }} 
              />
            </S.StyledTimelineItem>
          )}
          {typeof days.sinceReminder !== 'number' && days.toReminder < 0 && (
            <S.StyledTimelineItem>
              <S.StyledTimelineTracker style={timelineTrackerStyle}><span>{ days.sinceRequest }</span></S.StyledTimelineTracker>
              <FormattedMessage 
                id="request.timeline.sendReminder" 
                defaultMessage="Send a reminder"
              />
            </S.StyledTimelineItem>
          )}          
          {typeof days.sinceEscalation === 'number' && (
            <S.StyledTimelineItem>
              <FormattedMessage 
                id="request.timeline.sendEscalation" 
                defaultMessage="Escalation sent" 
              />
              <br />
              <FormattedMessage 
                id="request.timeline.sinceEscalationDays" 
                defaultMessage="{days, plural, =0 {today} one {yesterday} other {# days ago}}"
                values={{ days: days.sinceEscalation }} 
              />  
            </S.StyledTimelineItem>
          )}
          {typeof days.sinceEscalation !== 'number' && days.toEscalation >= 0 && (
            <S.StyledTimelineItem>
              <FormattedMessage 
                id="request.timeline.esclateTo" 
                defaultMessage="Escalate your request" 
              />
              <br/>
              <FormattedMessage 
                id="request.timeline.sendEscalationDays" 
                defaultMessage="{days, plural, =0 {today} one {tommorow} other {in # days}}"
                values={{ days: days.toEscalation }} 
              />
            </S.StyledTimelineItem>
          )}
          {typeof days.sinceEscalation !== 'number' && days.toEscalation < 0 && (
            <S.StyledTimelineItem>
              <FormattedMessage 
                id="request.timeline.esclateTo" 
                defaultMessage="Escalate your request" 
              />
            </S.StyledTimelineItem>
          )}          
        </S.StyledTimeline>
      </S.StyledContainer>
    </S.StyledRoot>
  );
};
export default Timeline;
