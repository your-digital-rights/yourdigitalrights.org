import {
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
import { injectIntl } from "react-intl"

import Button from "@material-ui/core/Button";
import React, { Component, Fragment} from "react";
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

    if (this.state.companyEmail) {
      this.addNewCompany();
    } else {
      this.setState({hasSubmit: true});
      window.location ='#Form';
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
        defaultMessage="Delete {companyName} Data"
        values={{ companyName: <strong style={{color:'blueviolet'}}>{selectedCompany.name}</strong> }}
      />
    ) : (
      <FormattedMessage id="formHeadingNoCompany" defaultMessage="Delete my data from:" />
    );

    const CcpaOptionText = this.props.intl.formatMessage({ id: 'ccpaOption', defaultMessage: 'CCPA (California)' });
    const GdprOptionText = this.props.intl.formatMessage({ id: 'gdprOption', defaultMessage: 'GDPR (European Union)' });

    const IntroText = selectedCompany ? (
      <FormattedMessage
        id="IntroTextSelectedCompany"
        defaultMessage="In order to comply with your request the organization will need to locate your data on their systems. To help them do so, please enter the following information. All the information you enter will be erased from our systems as soon as you send your request."
      />
    ) : (
      <FormattedMessage
        id="IntroTextNotSelectedCompany"
        defaultMessage="To send an Erasure Request to an organization not on our list you will need to provide the organization's name and a relevant email address. In order to comply with your request the organization will need to locate your data on their systems. To help them do so, please enter the following information. All the information you enter will be erased from our systems as soon as you send your request."
      />
    );

    let formToDisplay;
    if (this.state.hasSubmit) {
      formToDisplay = (
        <ThanksMessage
          id="ThanksMessageContainer"
          className="thanks-message"
          hideThanks={this.props.focusSearch}
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

          <Typography variant="display1" component="h1" gutterBottom={true}>
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
          <p>{GdprOptionText.text}</p>
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

    return <div id='Form' ref={this.props.containerRef}>{formToDisplay}</div>


  }
}
export default injectIntl(withStyles(styles)(Form));
