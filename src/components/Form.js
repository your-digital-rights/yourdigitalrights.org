import Button from "@material-ui/core/Button";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
    color: "white"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column"
  }
});

class Form extends Component {
  state = {};
  handlers = {};

  componentDidMount() {
    window.$location = window.location;
  }

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
      to: this.state.companyEmail,
      subject: erasureEmail.subject,
      body: erasureEmail.formatBody(this.state)
    });
  }

  render() {
    const { classes } = this.props;

    const Heading = (
      <FormattedMessage
        id="heading"
        defaultMessage="Erasing {strong} made simple"
        values={{ strong: <strong>personal data</strong> }}
      >
        {(...formattedMessage) => (
          <Typography variant="display1" color="inherit">
            {formattedMessage}
          </Typography>
        )}
      </FormattedMessage>
    );

    const CompanyInput = !this.state.companyEmail && (
      <div>
        <TextField
          select
          label={
            <FormattedMessage id="companyLabel" defaultMessage="Company" />
          }
          name="companyEmail"
          id="companyEmail"
          required
          onChange={this.handleInput("companyEmail")}
          SelectProps={{
            native: true
          }}
          value={this.state.companyEmail}
        >
          <FormattedMessage
            id="unselectedCompany"
            defaultMessage="I'd like to opt out of…"
          >
            {message => <option>{message}</option>}
          </FormattedMessage>
          <option value="test@mycompany.com">My test company</option>
        </TextField>
      </div>
    );

    const PersonalInfoInput = this.state.companyEmail && (
      <div className={classNames(classes.formContainer)}>
        <TextField
          id="name"
          label={<FormattedMessage id="nameLabel" defaultMessage="Your name" />}
          value={this.state.name}
          onChange={this.handleInput("name")}
          margin="normal"
          required
          autoFocus
        />
        <TextField
          id="email"
          label={
            <FormattedMessage
              id="emailLabel"
              defaultMessage="Your email address"
            />
          }
          value={this.state.email}
          onChange={this.handleInput("email")}
          margin="normal"
          type="email"
          required
        />
        <TextField
          id="address"
          label={
            <FormattedMessage
              id="homeAddressLabel"
              defaultMessage="Your home address"
            />
          }
          value={this.state.address}
          onChange={this.handleInput("address")}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <div>
          <Button variant="raised" color="primary" type="submit">
            <FormattedMessage
              id="sendButton"
              defaultMessage="Send your request"
            />
          </Button>
        </div>
      </div>
    );

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className={classNames(classes.hero)}>
          {Heading}
          {CompanyInput}
        </div>
        {PersonalInfoInput}
      </form>
    );
  }
}
export default withStyles(styles)(Form);
