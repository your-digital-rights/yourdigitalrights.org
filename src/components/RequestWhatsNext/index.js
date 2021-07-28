import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import capitalize from "../../utils/capitalize";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.requestItem.status ? props.requestItem.status.S : "NO_REPLY",
    };
  }

  buttons(classes, regulation) {
    return (
      <ul className={classes.buttons}>
        <li>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Send a reminder email
          </Button>
        </li>
        <li>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            href={ regulation.link }
            target="_blank"
          >
            Escalate to the { regulation.authority }
          </Button>
        </li>
      </ul>
    )
  }

  render() {
    const { classes, requestItem, days, regulation, selectedCompany } = this.props;

    if (this.state.status === "NO_REPLY") {
      return (
        <div className={classes.container}>
          <h2 className={classes.header}>What's next</h2>
          <p>According to the {requestItem.regulationType.S} organizations have { regulation.timeLimit } days to reply to your request.</p>
          {days.sinceRequest < regulation.timeLimit && (
            <>
              <p><strong>We recommend you wait until { regulation.timeLimit } days have passed.</strong></p>
              <p>If you would rather not wait then you have the following options:</p>
            </>
          )}
          {days.sinceRequest >= regulation.timeLimit && (
            <>
              <p><strong>We recommend that you send them a reminder email.</strong></p>
              <p>Please select from the following options:</p>
            </>
          )}
          {this.buttons(classes, regulation)}
        </div>
      );
    }

    if (this.state.status === "DECLINED") {
      return (
        <div className={classes.container}>
          <h2 className={classes.header}>What's next</h2>
          <p>There are certain circumstances where an organization is legally permitted to decline to erase your data.</p>
          {requestItem.regulationType.S === "GDPR" && (
            <ul>
              <li>When keeping your data is necessary for reasons of freedom of expression and information (this includes journalism and academic, artistic and literary purposes).</li>
              <li>When the organization is legally obliged to keep hold of your data.</li>
              <li>When keeping hold of your data is necessary for reasons of public health.</li>
              <li>When keeping your data is necessary for establishing, exercising or defending legal claims.</li>
              <li>When erasing your data would prejudice scientific or historical research, or archiving that is in the public interest.</li>
              <li>If, having considered your request, the organization decides it does not need to erase your data, it must still respond to you. It should explain to you why it believes it does not have to erase your data, and let you know about your right to complain about this decision to the DPA, or through the courts.</li>
            </ul>
          )}
          {requestItem.regulationType.S === "CCPA" && (
            <ul>
              <li>Free speech or another right provided by law.</li>
              <li>Processing for research purposes, if the deletion of personal information would render impossible or seriously impair the achievement of such research.</li>
              <li>Processing of that personal information is necessary to protect against illegal activity or prosecute those responsible for the activity.</li>
              <li>For complying with a legal obligation.</li>
              <li>To perform a contract between the business and the consumer.</li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for that activity.</li>
              <li>Debug to identify and repair errors that impair existing intended functionality.</li>
              <li>To enable solely internal uses that are reasonably aligned with the expectations of the consumer based on the consumer’s relationship with the business.</li>
              <li>Otherwise use the consumer’s personal information, internally, in a lawful manner that is compatible with the context in which the consumer provided the information.</li>
            </ul>
          )}
          <p><a href={ regulation.denyInfo } target="_blank">Find out more about these exceptions</a></p>
          <p>If you feel that the organization is wrong to have declined your request then you have the following options:</p>
          {this.buttons(classes, regulation)}
        </div>
      );
    }

    if (this.state.status === "PARTIAL") {
      return (
        <div className={classes.container}>
          <h2 className={classes.header}>What's next</h2>
          <p><strong>We recommend that you escalate your request to the { regulation.authority }.</strong></p>
          <p>Please select from the following options:</p>
          {this.buttons(classes, regulation)}
        </div>
      );
    }

    const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;
    return (
      <div className={classes.container}>
        <h2 className={classes.header}>What's next</h2>
        <p>Nothing at all. { companyName } successfully responded to your request.</p>
      </div>
    )
  }
};
export default withStyles(styles)(Details);
