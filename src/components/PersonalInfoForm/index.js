import {
  CompanyEmailHelperText,
  CompanyEmailLabelText,
  CompanyNameHelperText,
  CompanyNameLabelText,
  EmailHelperText,
  EmailLabelText,
  IdentifyingInfoHelperText,
  IdentifyingInfoLabelText,
  NameHelperText,
  NameLabelText,
  SubmitButtonText
} from "./text";

import Button from "@material-ui/core/Button";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ThanksMessage from "../ThanksMessage";
import Typography from "@material-ui/core/Typography";
import erasureEmail from "../../email-templates/erasure";
import fetch from "isomorphic-fetch";
import mailtoLink from "mailto-link";
import styles from "./styles";
import tracking from "../../utils/tracking";
import { withStyles } from "@material-ui/core/styles";

class Form extends Component {
  state = {
    name: "",
    email: "",
    identifyingInfo: "",
    companyName: "",
    companyEmail: "",
    hasSubmit: false
  };

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
    window.open(this.renderMailTo());

    let state = Object.assign({}, this.state);

    this.setState(state);

    if (this.state.companyEmail) {
      this.addNewCompany();
    } else {
      state.hasSubmit = true;

      tracking.trackRequestComplete(this.props.selectedCompany.name);
    }
  };

  renderMailTo() {
    const { selectedCompany } = this.props;

    const to = selectedCompany
      ? selectedCompany.email
      : this.state.companyEmail;

    const companyName = selectedCompany
      ? selectedCompany.name
      : this.state.companyName;

    return mailtoLink({
      to,
      subject: erasureEmail.subject,
      body: erasureEmail.formatBody({
        ...this.state,
        companyName
      })
    });
  }

  async addNewCompany() {
    const response = await fetch(
      "https://docs.google.com/forms/d/1hEsB-dmoqeS6pUbG-ODFxX1vOE__9-z2F5DHb94Dd3s/formResponse",
      {
        method: "POST",
        body: `emailAddress=${this.state.companyEmail}&entry.1191326521=${
          this.state.companyName
        }`,
        headers: {
          Accept: "application/xml, text/xml, */*; q=0.01",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      }
    );
  }

  render() {
    const { classes, selectedCompany } = this.props;

    const HeadingText = selectedCompany ? (
      <FormattedMessage
        id="formHeading"
        defaultMessage="Opting out of {companyName}"
        values={{ companyName: selectedCompany.name }}
      />
    ) : (
      <FormattedMessage id="formHeadingNoCompany" defaultMessage="Opting out" />
    );

    const IntroText = selectedCompany ? (
      <FormattedMessage
        id="IntroTextSelectedCompany"
        defaultMessage="In order to comply with your request the organisation will need to locate your data on their systems. To help them do so, please enter the following information. All the information you enter will be erased from our systems as soon as your session concludes."
      />
    ) : (
      <FormattedMessage
        id="IntroTextNotSelectedCompany"
        defaultMessage="To send an Erasure Request to an organisation not on our list you will need to provide the organisation name and a relevant email address. In order to comply with your request the organization will need to locate your data on their systems. To help them do so please enter your name and address. All the information you enter will be erased from our systems as soon as your session concludes."
      />
    );

    if (this.state.hasSubmit) {
      return (
        <ThanksMessage
          className="thanks-message"
          hideThanks={this.props.focusSearch}
        />
      );
    }

    return (
      <Paper
        component="form"
        className={classes.formContainer}
        onSubmit={this.handleFormSubmit}
        id="personalInfoForm"
        elevation={10}
      >
        <Typography variant="display1" component="h2" gutterBottom={true}>
          {HeadingText}
        </Typography>
        <Typography gutterBottom={true} variant={"body2"}>
          {IntroText}
        </Typography>
        {!selectedCompany && (
          <Fragment>
            <TextField
              id="companyName"
              label={CompanyNameLabelText}
              value={this.state.companyName}
              onChange={this.handleInput("companyName")}
              margin="normal"
              required
              autoFocus
              helperText={CompanyNameHelperText}
            />
            <TextField
              id="companyEmail"
              label={CompanyEmailLabelText}
              value={this.state.companyEmail}
              onChange={this.handleInput("companyEmail")}
              margin="normal"
              required
              type="email"
              helperText={CompanyEmailHelperText}
            />
          </Fragment>
        )}
        <TextField
          id="name"
          label={NameLabelText}
          value={this.state.name}
          onChange={this.handleInput("name")}
          margin="normal"
          required
          autoFocus={!!selectedCompany}
          helperText={NameHelperText}
        />
        <TextField
          id="identifyingInfo"
          label={IdentifyingInfoLabelText}
          value={this.state.identifyingInfo}
          onChange={this.handleInput("identifyingInfo")}
          margin="normal"
          multiline
          rows={4}
          helperText={IdentifyingInfoHelperText}
        />
        {this.props.selectedCompany && (
          <input
            type="hidden"
            name="companyUrl"
            value={this.props.selectedCompany.url}
          />
        )}
        <div>
          <Button
            variant="raised"
            color="primary"
            type="submit"
            className={classes.formButton}
          >
            {SubmitButtonText}
          </Button>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(Form);
