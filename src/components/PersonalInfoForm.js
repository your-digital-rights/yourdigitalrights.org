import Button from "@material-ui/core/Button";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formContainer: {
    maxWidth: "777px",
    margin: "60px auto",
    padding: "60px",
    display: "flex",
    flexDirection: "column"
  }
});

const IntroText = (
  <FormattedMessage
    id="formIntro"
    defaultMessage="To comply with your request the organization will need to locate your data on their systems. To help them do so, please enter the following information. Please note that all the information you enter will be erased from our systems as soon as the your session concludes. Your home address will be used to validate that you are a resident of the European Union."
  />
);

const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Your name" />
);
const EmailLabelText = (
  <FormattedMessage id="emailLabel" defaultMessage="Your email address" />
);

const AddressLabelText = (
  <FormattedMessage id="homeAddressLabel" defaultMessage="Your home address" />
);

const SubmitButtonText = (
  <FormattedMessage id="sendButton" defaultMessage="Send your request" />
);

class Form extends Component {
  state = {};
  handlers = {};

  handleInput = name => {
    if (!this.handlers[name]) {
      this.handlers[name] = event => {
        this.setState({ [name]: event.target.value });
        return true;
      };
    }
    return this.handlers[name];
  };

  handleFormSubmit = e => {
    e.preventDefault();
    window.$location.href = this.renderMailTo();
  };

  renderMailTo() {
    return mailtoLink({
      to: this.props.selectedCompany.email,
      subject: erasureEmail.subject,
      body: erasureEmail.formatBody(this.state)
    });
  }

  render() {
    const { classes, selectedCompany } = this.props;

    const HeadingText = (
      <FormattedMessage
        id="formHeading"
        defaultMessage="Opting out of {companyName}"
        values={{ companyName: selectedCompany.name }}
      />
    );

    return (
      <Paper
        component="form"
        className={classNames(classes.formContainer)}
        onSubmit={this.handleFormSubmit}
        id="personalInfoForm"
        elevation={10}
      >
        <Typography variant="display1" gutterBottom={true}>
          {HeadingText}
        </Typography>
        <Typography gutterBottom={true}>{IntroText}</Typography>
        <TextField
          id="name"
          label={NameLabelText}
          value={this.state.name}
          onChange={this.handleInput("name")}
          margin="normal"
          required
          autoFocus
        />
        <TextField
          id="email"
          label={EmailLabelText}
          value={this.state.email}
          onChange={this.handleInput("email")}
          margin="normal"
          type="email"
          required
        />
        <TextField
          id="address"
          label={AddressLabelText}
          value={this.state.address}
          onChange={this.handleInput("address")}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <div>
          <Button variant="raised" color="primary" type="submit">
            {SubmitButtonText}
          </Button>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(Form);
