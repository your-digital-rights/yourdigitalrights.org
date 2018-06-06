import Button from "@material-ui/core/Button";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formContainer: {
    maxWidth: "777px",
    margin: "auto",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "60px",
      margin: "60px auto"
    }
  }
});

const IntroText = (
  <FormattedMessage
    id="formIntro"
    defaultMessage="To comply with your request the organization will need to locate your data on their systems. To help them do so, please enter the following information. Please note that all the information you enter will be erased from our systems as soon as the your session concludes."
  />
);

const NameLabelText = (
  <FormattedMessage id="nameLabel" defaultMessage="Your name" />
);

const NameHelperText = (
  <FormattedMessage
    id="nameHelper"
    defaultMessage="This will be used to by the company to identify you in their systems"
  />
);

const EmailLabelText = (
  <FormattedMessage id="emailLabel" defaultMessage="Your email address" />
);

const EmailHelperText = (
  <FormattedMessage
    id="emailHelper"
    defaultMessage="This will be used to by the company to identify you in their systems and to communicate with you"
  />
);

const AddressLabelText = (
  <FormattedMessage id="homeAddressLabel" defaultMessage="Your home address" />
);

const AddressHelperText = (
  <FormattedMessage
    id="addressHelper"
    defaultMessage="Your home address will be used to validate that you are a resident of the European Union"
  />
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
        className={classes.formContainer}
        onSubmit={this.handleFormSubmit}
        id="personalInfoForm"
        elevation={10}
      >
        <Typography variant="display1" gutterBottom={true}>
          {HeadingText}
        </Typography>
        <Typography gutterBottom={true} variant={"body2"}>
          {IntroText}
        </Typography>
        <TextField
          id="name"
          label={NameLabelText}
          value={this.state.name}
          onChange={this.handleInput("name")}
          margin="normal"
          required
          autoFocus
          helperText={NameHelperText}
        />
        <TextField
          id="email"
          label={EmailLabelText}
          value={this.state.email}
          onChange={this.handleInput("email")}
          margin="normal"
          type="email"
          required
          helperText={EmailHelperText}
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
          helperText={AddressHelperText}
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
