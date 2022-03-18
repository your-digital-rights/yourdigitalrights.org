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
  RegulationTypeText,
  RegulationTypeHelperText,
  FollowUpLabelText,
  YesFollowUpLabelText,
  NoFollowUpLabelText,
  FollowUpDetailsText,
  SubmitButtonText,
  FollowUpDetailsTextWarning,
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
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { isMobile } from "react-device-detect";
import { searchOrganizationsUrlAnchor } from "../../utils/urlAnchors";
import { v4 as uuidv4 } from 'uuid';
import {getRegulationbyGeolocation} from "../../utils/geolocation";
import getInboundEmailAddress from "../../utils/email";
import Regulations from "../../utils/regulations";

const screenHeightBreakpoint = 560;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: null,
      name: "",
      email: "",
      identifyingInfo: "",
      companyName: "",
      companyDomain: "",
      companyEmail: "",
      companyUrl: "",
      hasSubmit: false,
      regulationType: "GDPR",
      requestType: "DELETION",
      followUp: "NO",
      screenHeight: typeof window !== "undefined" ? window.innerHeight : null,
    };

    this.handlers = {};
    this.container = React.createRef();
    this.companyEmail = React.createRef();
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
    const regulation = await getRegulationbyGeolocation();
    this.setState({ regulationType: regulation });
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

        this.validateInput(name, event.target.value);

        return true;
      };
    }
    return this.handlers[name];
  };

  validateInput(inputName, inputValue) {
    if (inputName === "companyEmail") {
      const companyEmailError = mailgoValidateEmail(inputValue)
        ? ""
        : this.props.intl.formatMessage({
          id: "personalInfoForm.validEmail",
          defaultMessage: "Please enter a valid email.",
        });

      this.companyEmail.current.setCustomValidity(companyEmailError);
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const mailTo = this.renderMailTo();
    if (isMobile) {
      window.open(mailTo);
    } else {
      mailgoDirectRender(mailTo);
    }

    this.setState({ hasSubmit: true });
    window.location = "#Form";
    if (this.state.followUp === "YES") {
      tracking.trackFollwups(
        this.state.regulationType,
        this.state.requestType
      );
    }
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
    const uuid = uuidv4();
    this.setState({ uuid: uuid });
    const { selectedCompany } = this.props;
    const requestType = this.state.requestType;
    const regulationType = this.state.regulationType;
    const followUp = this.state.followUp;

    const to = selectedCompany
      ? selectedCompany.email
      : this.state.companyEmail;

    const bcc =
      followUp === "YES"  
        ? getInboundEmailAddress(uuid, 'request')
        : null;

    const companyName = selectedCompany
      ? selectedCompany.name
      : this.state.companyName;

    const companyUrl = selectedCompany
      ? selectedCompany.url
      : this.state.companyUrl;

    const reference = followUp === "YES" ? `(ref: ${uuid.split("-")[0]})` : "";

    const subject =
      requestType == "DELETION"
        ? erasureEmail.subject({ ...this.state, reference})
        : sarEmail.subject({ ...this.state, reference });

    const body =
      requestType == "DELETION"
        ? erasureEmail.formatBody({ ...this.state, companyName })
        : sarEmail.formatBody({ ...this.state, companyName });

    const requestParams = {
      uuid,
      requestType,
      regulationType,
      companyName,
      companyUrl,
    };

    if (followUp === "YES") {
      requestParams.name = this.state.name;
      requestParams.identifyingInfo = this.state.identifyingInfo;
      requestParams.emailTo = to;
      requestParams.emailSubject = subject;
      requestParams.emailBody = body;
      requestParams.lang = this.props.intl.locale;
    }

    fetch(
      "/api/save",
      {
        method: "POST",
        body: JSON.stringify(requestParams),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return mailtoLink({
      to,
      bcc,
      subject,
      body,
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
          uuid={this.state.uuid}
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
                inputRef={this.companyEmail}
                variant="outlined"
                id="companyEmail"
                label={CompanyEmailLabelText}
                value={this.state.companyEmail}
                onChange={this.handleInput("companyEmail")}
                margin="normal"
                required
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
            id="regulationType"
            select
            label={RegulationTypeText}
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
            helperText={RegulationTypeHelperText}
            margin="normal"
          >
            { Object.keys(Regulations).map((key) => 
              <option key={key} value={key}>{`${Regulations[key].displayName} (${Regulations[key].gepgraphy})`}</option>
            )}
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
          <FormControl
            variant="outlined"
            focused={true}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel>{FollowUpLabelText}</FormLabel>
            <RadioGroup
              name="followup1"
              className={classes.group}
              onChange={this.handleInput("followUp")}
              value={this.state.followUp}
            >
              <FormControlLabel
                value="YES"
                control={<Radio />}
                label={YesFollowUpLabelText}
              />
              <FormControlLabel
                value="NO"
                control={<Radio />}
                label={NoFollowUpLabelText}
              />
            </RadioGroup>
            <FormHelperText>
              {FollowUpDetailsText}
              <br/>
              <br/>
              {FollowUpDetailsTextWarning}
            </FormHelperText>
          </FormControl>
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
