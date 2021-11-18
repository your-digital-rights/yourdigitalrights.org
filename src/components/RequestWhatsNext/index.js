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
import capitalize from "../../utils/capitalize";
import Regulations from "../../utils/regulations";
import RequestEscalation from "../RequestEscalation";

class WhatsNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEscalation: false,
    };
  }

  renderMailTo() {
    const {requestItem, status} = this.props;
    const to = requestItem.emailTo.S;
    const bcc = getInboundEmailAddress(requestItem.id.S, 'reminder');
    const subject = reminderEmail.subject(requestItem);
    const body = reminderEmail.body(requestItem, status);

    return mailtoLink({
      to,
      bcc,
      subject,
      body,
    });
  }

  handleFormSubmit = (e) => {;
    e.preventDefault();
    this.setState({showEscalation: false});
    const mailTo = this.renderMailTo();
    if (isMobile) {
      window.open(mailTo);
    } else {
      mailgoDirectRender(mailTo);
    }
  }

  buttons(classes, regulation) {
    const { requestItem } = this.props;
    const authority = Regulations[requestItem.regulationType.S].dpa.longName;
    return (
      <ul className={classes.buttons}>
        <li>
          <form onSubmit={this.handleFormSubmit}>
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
    const timeLimit = Regulations[requestItem.regulationType.S].timeLimit;
    const companyName = capitalize(selectedCompany.name);

      return (
        <div className={classes.root} id="whatsNext">
          <div className={classes.container}>
            <h2 className={classes.header}><FormattedMessage id="request.next.whatsNext" defaultMessage="What's next" /></h2>
            { this.props.status === "NO_REPLY" && (
              <>
                <p>
                  <FormattedMessage
                    id="request.next.organizationsHaveXDays"
                    defaultMessage="According to the {regulationType} organizations have { timeLimit } days to reply to your request."
                      values={{
                        regulationType: requestItem.regulationType.S,
                        timeLimit: timeLimit,
                      }}
                  />
                </p>
                {days.sinceRequest < timeLimit && (
                  <>
                    <strong>
                      <FormattedMessage
                        id="request.next.waitUntilXDays"
                        defaultMessage="We recommend you wait until { timeLimit } days have passed."
                        values={{
                          timeLimit: timeLimit,
                        }}
                      />
                    </strong>
                    <p><FormattedMessage id="request.next.ratherNotWait" defaultMessage="If you would rather not wait then you have the following options:" /></p>
                  </>
                )}
                {days.sinceRequest >= timeLimit && (
                  <>
                    <p><strong><FormattedMessage id="request.next.sendAnEmail" defaultMessage="We recommend that you send them a reminder email." /></strong></p>
                    <p><FormattedMessage id="request.next.selectTheOptions" defaultMessage="Please select from the following options:" /></p>
                  </>
                )}
              </>
            )}           
            { this.props.status === "DECLINED" && (
              <>
                <p><FormattedMessage id="request.next.circumstancesToDecline" defaultMessage="There are certain circumstances where an organization is legally permitted to decline to erase your data." /></p>
                {requestItem.regulationType.S === "GDPR" && (
                  <FormattedMessage
                    id="request.next.declineGDPR"
                    defaultMessage="<ul><li>When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes).</li><li>When the organization is legally obliged to keep hold of your data.</li><li>When keeping hold of your data is necessary for reasons of public health.</li><li>When keeping your data is necessary for establishing, exercising or defending legal claims.</li><li>When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest.</li><li>If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the DPA, or through the courts.</li></ul>"
                    values={{
                      ul: txt => (<ul>{txt}</ul>),
                      li: txt => (<li>{txt}</li>),
                    }}
                  />
                )}
                {requestItem.regulationType.S === "CCPA" && (
                  <FormattedMessage
                    id="request.next.declineCCPA"
                    defaultMessage="<ul><li>Free speech or another right provided by law.</li><li>Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research.</li><li>Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity.</li><li>For complying with a legal obligation.</li><li>To perform a contract between the business and the consumer.</li><li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity.</li><li>Debug to identify and repair errors that impair existing intended functionality.</li><li>To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business.</li><li>Otherwise use the consumer’s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li></ul>"
                    values={{
                      ul: txt => (<ul>{txt}</ul>),
                      li: txt => (<li>{txt}</li>),
                    }}
                  />
                )}
                <p><a href={ Regulations[requestItem.regulationType.S].exceptionInfo } target="_blank"><FormattedMessage id="request.next.findOutMore" defaultMessage="Find out more about these exceptions" /></a></p>
                <p><FormattedMessage id="request.next.wrongfullyDeclined" defaultMessage="If you feel that the organization is wrong to have declined your request then you have the following options:" /></p>
              </>
            )}
            { this.props.status === "PARTIAL" && (
            <>
              <strong>
                <FormattedMessage
                  id="request.next.escalateToAuthority"
                  defaultMessage="We recommend that you escalate your request to the { authority }."
                  values={{
                    authority: Regulations[requestItem.regulationType.S].dpa.longName,
                  }}
                />
              </strong>
              <p><FormattedMessage id="request.next.selectTheOptions" defaultMessage="Please select from the following options:" /></p>
            </>
            )}
            { this.props.status === "SUCCESS" && (
              <FormattedMessage
                id="request.success"
                defaultMessage="Nothing at all. { companyName } successfully responded to your request."
                values={{
                  companyName: companyName,
                }}
              />
            )}          
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
