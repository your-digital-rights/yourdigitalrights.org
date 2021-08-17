import {
  CompanyEmailHelperText,
  CompanyEmailLabelText,
  CompanyNameHelperText,
  CompanyNameLabelText,
  CompanyDomainLabelText,
  CompanyDomainHelperText,
  IdentifyingInfoHelperText,
  IdentifyingInfoLabelText,
  NameHelperText,
  NameLabelText,
  CcpaOrGdprText,
  CcpaOrGdprHelperText,
  SubmitButtonText,
  Headline,
  RequestTypeLabelText,
  AccessRequestLabelText,
  DeletionRequestLabelText,
} from "./text";
import { injectIntl } from "react-intl";
import Button from "@material-ui/core/Button";
import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ThanksMessage from "../ThanksMessage";
import Typography from "@material-ui/core/Typography";
import erasureEmail from "../../email-templates/erasure";
import sarEmail from "../../email-templates/sar";
import fetch from "isomorphic-fetch";
import mailtoLink from "mailto-link";
import { mailgoDirectRender, mailgoValidateEmail } from "mailgo";
import styles from "./styles";
import tracking from "../../utils/tracking";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { isMobile } from "react-device-detect";
import { searchOrganizationsUrlAnchor } from "../../utils/urlAnchors";
import getGeolocation from "../../utils/geolocation";


const screenHeightBreakpoint = 560;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      identifyingInfo: "",
      companyName: "",
      companyDomain: "",
      companyEmail: "",
      companyEmailError: "",
      hasSubmit: false,
      regulationType: "GDPR",
      requestType: "DELETION",
      screenHeight: typeof window !== "undefined" ? window.innerHeight : null,
    };

    this.handlers = {};
    this.container = React.createRef();
  }

  async componentDidMount() {
    window.mailgoConfig = {
      dark: true,
      showFooter: false,
      tel: false,
      sms: false,
      actions: {
        telegram: false,
        whatsapp: false,
        skype: false,
        copy: false,
      },
      details: {
        subject: false,
        body: false,
        to: false,
        cc: false,
        bcc: false,
      },
    };
    if (typeof window !== "undefined") {
      this.setState({ screenHeight: window.innerHeight });
      window.addEventListener("resize", this.onScreenResize);
    }
    const geo = await getGeolocation();
    this.setState({ regulationType: geo });
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onScreenResize);
    }
  }

  onScreenResize = () => {
    this.setState({ screenHeight: window.innerHeight });
  };

  handleInput = (name) => {
    if (!this.handlers[name]) {
      this.handlers[name] = (event) => {
        this.setState({ [name]: event.target.value });

        if (name === "companyEmail") {
          const companyEmailError = mailgoValidateEmail(event.target.value)
            ? ""
            : "Enter a valid email";
          this.setState({ companyEmailError: companyEmailError });
        }

        return true;
      };
    }
    return this.handlers[name];
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.companyEmailError) {
      return;
    }

    const mailTo = this.renderMailTo();
    if (isMobile) {
      window.open(mailTo);
    } else {
      mailgoDirectRender(mailTo);
    }

    this.setState({ hasSubmit: true });
    window.location = "#Form";
    if (this.state.companyEmail) {
      this.addNewCompany();
    } else {
      tracking.trackRequestComplete(
        this.props.selectedCompany.url,
        this.state.regulationType,
        this.state.requestType
      );
    }
  };

  renderMailTo() {
    const { selectedCompany } = this.props;
    const requestType = this.state.requestType;

    const to = selectedCompany
      ? selectedCompany.email
      : this.state.companyEmail;

    const companyName = selectedCompany
      ? selectedCompany.name
      : this.state.companyName;

    const subject =
      requestType == "DELETION"
        ? erasureEmail.subject({ ...this.state })
        : sarEmail.subject({ ...this.state });

    const body =
      requestType == "DELETION"
        ? erasureEmail.formatBody({ ...this.state, companyName })
        : sarEmail.formatBody({ ...this.state, companyName });

    return mailtoLink({
      to,
      subject: subject,
      body: body,
    });
  }

  async addNewCompany() {
    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/1hEsB-dmoqeS6pUbG-ODFxX1vOE__9-z2F5DHb94Dd3s/formResponse",
        {
          method: "POST",
          body: `emailAddress=${this.state.companyEmail}&entry.1191326521=${this.state.companyName}&entry.215439629=${this.state.companyDomain}`,
          headers: {
            Accept: "application/xml, text/xml, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );
    }
    catch (e) {
      console.error(e)
    }
    tracking.trackAddNewOrg(this.state.companyDomain, this.state.companyName);  
  }

  render() {
    const { screenHeight } = this.state;
    const { classes, selectedCompany } = this.props;
    const CcpaOptionText = this.props.intl.formatMessage({
      id: "personalInfoForm.ccpaOption",
      defaultMessage: "CCPA (California)",
    });
    const GdprOptionText = this.props.intl.formatMessage({
      id: "personalInfoForm.gdprOption",
      defaultMessage: "GDPR (European Union)",
    });
    const UKGdprOptionText = this.props.intl.formatMessage({
      id: "UKgdprOption",
      defaultMessage: "GDPR (UK)",
    });    

    let formToDisplay;
    if (this.state.hasSubmit) {
      formToDisplay = (
        <ThanksMessage
          id="ThanksMessageContainer"
          className="thanks-message"
          requestType={this.state.requestType}
          regulationType={this.state.regulationType}
          hideThanks={() =>
            (window.location = `/#${searchOrganizationsUrlAnchor}`)
          }
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
            <span data-nosnippet>
              {Headline}
            </span>
          </Typography>
          <FormControl
            variant="outlined"
            required={true}
            focused={true}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel>{RequestTypeLabelText}</FormLabel>
            <RadioGroup
              name="request1"
              className={classes.group}
              onChange={this.handleInput("requestType")}
              value={this.state.requestType}
            >
              <FormControlLabel
                value="DELETION"
                control={<Radio />}
                label={DeletionRequestLabelText}
              />
              <FormControlLabel
                value="ACCESS"
                control={<Radio />}
                label={AccessRequestLabelText}
              />
            </RadioGroup>
          </FormControl>

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
                helperText={CompanyNameHelperText}
                autoFocus={screenHeight > screenHeightBreakpoint}
              />
              <TextField
                variant="outlined"
                id="companyDomain"
                label={CompanyDomainLabelText}
                value={this.state.companyDomain}
                onChange={this.handleInput("companyDomain")}
                margin="normal"
                required
                helperText={CompanyDomainHelperText}
              />              
              <TextField
                error={!!this.state.companyEmailError}
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
            required
            helperText={NameHelperText}
            autoFocus={
              !!selectedCompany && screenHeight > screenHeightBreakpoint
            }
          />
          <TextField
            variant="outlined"
            id="ccpaOrGdpr"
            select
            label={CcpaOrGdprText}
            className={classes.textField}
            onChange={this.handleInput("regulationType")}
            required
            value = {this.state.regulationType}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText={CcpaOrGdprHelperText}
            margin="normal"
          >
            <option value="GDPR">{GdprOptionText}</option>
            <option value="GDPRUK">{UKGdprOptionText}</option>
            <option value="CCPA">{CcpaOptionText}</option>
          </TextField>
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

    return <div id="Form">{formToDisplay}</div>;
  }
}
export default injectIntl(withStyles(styles)(Form));
