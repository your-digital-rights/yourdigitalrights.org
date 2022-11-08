import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Regulations from "../../utils/regulations";
import capitalize from "../../utils/capitalize";

const Recommendations = ({  requestItem, days, selectedCompany, status }) => {
  const regulation = Regulations[requestItem.regulationType.S];
  const timeLimit = regulation.timeLimit;
  const requestType = regulation.requestTypes[requestItem.requestType.S];
  const companyName = capitalize(selectedCompany.name);
  let action = <FormattedMessage id="request.next.selectTheOptions1" defaultMessage="Please select from the following options:"/>;
  let reply = [];
  if (requestItem.escalationEmailSentAt && status !== "SUCCESS") { // escalation email sent, and status is not success.
    reply.push(       
      <strong>
        <FormattedMessage
          id="request.next.escalatedAndNoSuccess"
          defaultMessage="You have escalated your request to the {dpaLong} ({dpaShort}), please continue to communicate with them directly. There's nothing else that we can do to help."
            values={{
              dpaLong: regulation.dpa.longName,
              dpaShort: regulation.dpa.shortName,
            }}
        />
      </strong>       
    );    
    action = <FormattedMessage id="request.next.selectTheOptions2" defaultMessage="If you wish to take further action then please select from the following options:"/>;
  } else { // escalation email not sent
    if (status === "NO_REPLY") {
      reply.push(              
        <FormattedMessage
          id="request.next.organizationsHaveXDays"
          defaultMessage="According to the {regulationType} organizations have { timeLimit } days to reply to your request."
            values={{
              regulationType: regulation.displayName,
              timeLimit: timeLimit,
            }}
        />
      );      
      if (days.sinceRequest < timeLimit) {
        reply.push(              
          <strong>
          <FormattedMessage
            id="request.next.waitUntilXDays"
            defaultMessage="Recommendation: wait until { timeLimit } days have passed to give the company time to process your request."
            values={{
              timeLimit: timeLimit,
            }}
          />
          </strong>
        );
        action = <FormattedMessage id="request.next.selectTheOptions3" defaultMessage="If you do not wish to wait then please select from the following options:"/>;
      } else { // over first time limit
        if (requestItem.reminderEmailSentAt) { // reminder sent
          if (days.sinceRequest < timeLimit*2) { // under 2nd time limit
            reply.push(              
              <strong>
                <FormattedMessage
                  id="request.next.waitUntilXDaysAfterReminder"
                  defaultMessage="Recommendation: wait until { timeLimit } days have passed from the date the request was sent to give the organization time to preocess your request, following your reminder email."
                  values={{
                    timeLimit: timeLimit*2,
                  }}
                />
              </strong>
            );
            action = <FormattedMessage id="request.next.selectTheOptions3" defaultMessage="If you do not wish to wait then please select from the following options:"/>;
          } else { // reminder sent, over 2nd time limit 
            reply.push( 
              <strong>
                <FormattedMessage
                  id="request.next.escalateToAuthorityNoReply"
                  defaultMessage="Recommendation: escalate your request to your { authorityLong } ({authorityShort})."
                  values={{
                    authorityLong: regulation.dpa.longName,
                    authorityShort: regulation.dpa.shortName,
                  }}
                />
              </strong>
            );
          }
        } else { // reminder email not sent
          if (days.sinceRequest < timeLimit*2) {
            reply.push(
              <strong>
                <FormattedMessage 
                  id="request.next.sendAReminderEmail" 
                  defaultMessage="Recommendation: send the organization a reminder email." 
                />
              </strong>
            )
          } else { // over time limit * 2
            reply.push(
              <strong>
                <FormattedMessage
                  id="request.next.escalateToAuthorityNoReply"
                  defaultMessage="Recommendation: escalate your request to your { authorityLong } ({authorityShort})."
                  values={{
                    authorityLong: regulation.dpa.longName,
                    authorityShort: regulation.dpa.shortName,
                  }}
                />
              </strong>
            )
          }
        }
      }
    } else if (status === "DECLINED") {
      reply.push(
        <FormattedMessage 
          id="request.next.circumstancesToDecline" 
          defaultMessage="There are certain exceptional circumstances when an organization is legally permitted to decline to comply with your request." 
        />
      )
      if (requestItem.requestType.S == 'DELETION') {
        reply.push(<span>{requestType.exceptions}</span>);
      }
      reply.push(
        <a href={ requestType.exceptionURL } target="_blank" rel="noreferrer noopener">
          <FormattedMessage 
            id="request.next.findOutMore" 
            defaultMessage="Find out more about these exceptions" 
          />
        </a>
      )
      action = <FormattedMessage id="request.next.selectTheOptions2" defaultMessage="If you wish to take further action then please select from the following options:"/>;
    } else if (status === "PARTIAL") {
      reply.push(
        <strong>
          <FormattedMessage
            id="request.next.escalateToAuthorityPartial"
            defaultMessage="Recommendation: if you believe { companyName } should have fully complied with your request, then we recommend that you escalate your request to the { authorityLong } ({authorityShort})."
            values={{
              authorityLong: regulation.dpa.longName,
              authorityShort: regulation.dpa.shortName,
              companyName: companyName,
            }}
          />
        </strong>
      );
    } else if (status === "SUCCESS") {
      reply.push(
        <strong>
          <FormattedMessage
            id="request.success"
            defaultMessage="Congratulations, { companyName } successfully complied with your request. Your personal data will be automatically deleted from this website within 120 days from the date of your original request. Alternatively you can <a>delete your personal data now</a>."
            values={{
              companyName: companyName,
              a: txt => (<a href={`/r/${requestItem.id.S}/delete`}>{txt}</a>),
            }}
          />
        </strong>
      );
      action = "";
    }
  }
  return (
    <div>
      {reply.map((r, i) => {
        return <p key={i}>{r}</p>
      })}
      <p>{action}</p>
    </div>
  );
};
export default withStyles(styles)(Recommendations);
