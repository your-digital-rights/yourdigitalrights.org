import {
  IntroText,
  CompanyEmailHelperText,
  CompanyEmailLabelText,
  CompanyNameHelperText,
  CompanyNameLabelText,
  IdentifyingInfoHelperText,
  IdentifyingInfoLabelText,
  NameHelperText,
  NameLabelText,
  CcpaOrGdprText,
  CcpaOrGdprHelperText,
  SubmitButtonText
} from "./text";
import { injectIntl } from "react-intl";

import Button from "@material-ui/core/Button";
import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
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
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      identifyingInfo: "",
      companyName: "",
      companyEmail: "",
      hasSubmit: false,
      requestType: "GDPR"
    };

    this.handlers = {};
    this.container = React.createRef();
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
    window.open(this.renderMailTo());

    this.setState({ hasSubmit: true });
    window.location = "#Form";
    if (this.state.companyEmail) {
      this.addNewCompany();
    } else {
      tracking.trackRequestComplete(
        this.props.selectedCompany.url,
        this.state.requestType
      );
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
      subject: erasureEmail.subject({ ...this.state }),
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
        body: `emailAddress=${this.state.companyEmail}&entry.1191326521=${this.state.companyName}`,
        headers: {
          Accept: "application/xml, text/xml, */*; q=0.01",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      }
    );
  }

  render() {
    const { classes, selectedCompany } = this.props;

    const CcpaOptionText = this.props.intl.formatMessage({
      id: "ccpaOption",
      defaultMessage: "CCPA (California)"
    });
    const GdprOptionText = this.props.intl.formatMessage({
      id: "gdprOption",
      defaultMessage: "GDPR (European Union)"
    });


    let formToDisplay;
    if (this.state.hasSubmit) {
      formToDisplay = (
        <ThanksMessage
          id="ThanksMessageContainer"
          className="thanks-message"
          hideThanks={() => window.location = "/"}
        />
      );
    } else {
      formToDisplay = (
        <Paper
          component="form"
          className={classes.formContainer}
          onSubmit={this.handleFormSubmit}
          id="personalInfoForm"
          elevation={10}
        >
          <Typography gutterBottom={true} variant={"body1"}>
            {IntroText}
          </Typography>
          {!selectedCompany && (
            <Fragment>
              <TextField
                variant="outlined"
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
                variant="outlined"
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
            variant="outlined"
            id="name"
            label={NameLabelText}
            value={this.state.name}
            onChange={this.handleInput("name")}
            margin="normal"
            variant="outlined"
            required
            autoFocus={!!selectedCompany}
            helperText={NameHelperText}
          />
          <TextField
            variant="outlined"
            id="ccpaOrGdpr"
            select
            label={CcpaOrGdprText}
            className={classes.textField}
            onChange={this.handleInput("requestType")}
            required
            defaultValue="GDPR"
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText={CcpaOrGdprHelperText}
            margin="normal"
          >
            <option value="GDPR">{GdprOptionText}</option>
            <option value="CCPA">{CcpaOptionText}</option>
          </TextField>
          {/* <p>{GdprOptionText.text}</p> */}
          <TextField
            variant="outlined"
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
              variant="contained"
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

    return (
      <div id="Form">
        {formToDisplay}
      </div>
    );
  }
}
export default injectIntl(withStyles(styles)(Form));
