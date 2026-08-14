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
import React, { Component, Fragment } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import fetch from "isomorphic-fetch";
import tracking from "../../utils/tracking";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {getRegulationbyGeolocation} from "../../utils/geolocation";
import { normalizeDomainInput } from "../../utils/domains";
import Regulations from "../../utils/regulations";
import EmailSendButton from "../EmailSendButton";
import { withRouter } from 'next/router'
import isEmail from 'validator/lib/isEmail';
import * as S from "./styles";


const GEOLOCATION_IDLE_TIMEOUT_MS = 2000;
const REGULATION_OPTIONS = Object.entries(Regulations)
  .sort((a, b) => a[1].geography.localeCompare(b[1].geography))
  .map(([value, regulation]) => ({
    value,
    label: `${regulation.geography} (${regulation.displayName})`,
  }));

function createRequestUuid() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    // Generate a RFC4122-compliant v4 UUID from secure random bytes.
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const hex = Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
  }

  throw new Error("Secure random UUID API is unavailable");
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: null,
      hasSubmit: false,
      regulationType: "GDPR",
      requestType: "DELETION",
      followUp: "NO",
    };

    this.handlers = {};
    this.nameRef = React.createRef();
    this.identifyingInfoRef = React.createRef();
    this.companyNameRef = React.createRef();
    this.companyDomainRef = React.createRef();
    this.companyEmail = React.createRef();
    this.form = React.createRef();
    this.geolocationIdleHandle = null;
    this.geolocationTimeoutHandle = null;
    this.companyEmailValidationTimeout = null;
    this.isUnmounted = false;
  }

  componentDidMount() {
    const setRegulationFromGeolocation = async () => {
      const regulation = await getRegulationbyGeolocation();
      if (!this.isUnmounted && regulation) {
        this.setState({ regulationType: regulation });
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      this.geolocationIdleHandle = window.requestIdleCallback(() => {
        void setRegulationFromGeolocation();
      }, { timeout: GEOLOCATION_IDLE_TIMEOUT_MS });
      return;
    }

    this.geolocationTimeoutHandle = window.setTimeout(() => {
      void setRegulationFromGeolocation();
    }, 0);
  }

  componentWillUnmount() {
    this.isUnmounted = true;
    if (typeof window !== "undefined" && this.geolocationIdleHandle && "cancelIdleCallback" in window) {
      window.cancelIdleCallback(this.geolocationIdleHandle);
    }
    if (this.geolocationTimeoutHandle) {
      window.clearTimeout(this.geolocationTimeoutHandle);
    }
    if (this.companyEmailValidationTimeout) {
      clearTimeout(this.companyEmailValidationTimeout);
    }
  }

  handleInput = (name) => {
    if (!this.handlers[name]) {
      this.handlers[name] = (event) => {
        this.setState({ [name]: event.target.value });
        return true;
      };
    }
    return this.handlers[name];
  };

  handleCompanyEmailInput = (event) => {
    const value = event.target.value;
    if (this.companyEmailValidationTimeout) {
      clearTimeout(this.companyEmailValidationTimeout);
    }
    this.companyEmailValidationTimeout = setTimeout(() => {
      const companyEmailError = isEmail(value)
        ? ""
        : this.props.intl.formatMessage({
          id: "personalInfoForm.validEmail",
          defaultMessage: "Please enter a valid email.",
        });
      this.companyEmail.current.setCustomValidity(companyEmailError);
    }, 300);
  };

  invalidDomainMessage = () =>
    this.props.intl.formatMessage({
      id: "personalInfoForm.validDomain",
      defaultMessage: "Please enter a domain only, for example example.com",
    });

  handleCompanyDomainInput = (event) => {
    const value = event.target.value;
    if (this.companyDomainValidationTimeout) {
      clearTimeout(this.companyDomainValidationTimeout);
    }
    this.companyDomainValidationTimeout = setTimeout(() => {
      // An empty field is left to the browser's own "required" handling, so that
      // typing does not immediately complain before anything has been entered.
      const companyDomainError = !value.trim() || normalizeDomainInput(value)
        ? ""
        : this.invalidDomainMessage();
      this.companyDomainRef.current.setCustomValidity(companyDomainError);
    }, 300);
  };

  // Rewrite the field to the bare hostname once the visitor moves on, so that a
  // pasted "https://www.example.com/" becomes the "example.com" we will store
  // and submit, and they can see exactly what is being recorded.
  handleCompanyDomainBlur = () => {
    const field = this.companyDomainRef.current;
    if (!field || !field.value.trim()) {
      return;
    }

    const normalized = normalizeDomainInput(field.value);
    if (normalized) {
      field.value = normalized;
      field.setCustomValidity("");
    } else {
      field.setCustomValidity(this.invalidDomainMessage());
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  handleEmailSendClick = async (generateEmailFields) => {

    const status  = this.form.current.reportValidity();
    if (!status) return;
    

    const uuid = createRequestUuid();
    this.setState({ uuid });
    const { selectedCompany } = this.props;
    const requestType = this.state.requestType;
    const regulationType = this.state.regulationType;
    const followUp = this.state.followUp;

    const companyEmail = selectedCompany
      ? selectedCompany.email
      : this.companyEmail.current.value;

    const companyName = selectedCompany
      ? selectedCompany.name
      : this.companyNameRef.current.value;

    // A company picked from search carries the dataset's own key. A company
    // typed on the "add a company" form arrives as anything from a bare
    // hostname to a pasted "https://www.example.com/" address bar, so store the
    // normalised hostname instead: that is the form the dataset is keyed on, so
    // the request page will resolve it once the company has been catalogued.
    // Keep the raw entry if it cannot be parsed, rather than losing it.
    const companyUrl = selectedCompany
      ? selectedCompany.url
      : normalizeDomainInput(this.companyDomainRef.current.value)
        || this.companyDomainRef.current.value.trim();

    const reference = followUp === "YES" ? `(ref: ${uuid.split("-")[0]})` : "";

    const identifyingInfo = this.identifyingInfoRef.current.value;
    const name = this.nameRef.current.value;
    const lang = this.props.intl.locale;

    const data = { 
      identifyingInfo, 
      name, 
      uuid, 
      regulationType, 
      followUp, 
      companyEmail, 
      reference, 
      requestType, 
      companyName, 
      companyUrl, 
      lang 
    }
    
    const selectedAction = generateEmailFields(data);    
    selectedAction.run();

    void this.saveRequest(data);
    this.setState({ selectedActionName: selectedAction.name, hasSubmit: true });
    if (followUp === "YES") {
      tracking.trackFollwups(
        regulationType,
        requestType
      );
    }
    if (!selectedCompany && this.companyEmail.current.value) {
      this.addNewCompany();
    } else if (selectedCompany) {
      tracking.trackRequestComplete(
        selectedCompany.url,
        regulationType,
        requestType
      );
    }
    const thankYouUrl = `/thankyou?regulationType=${regulationType}&requestType=${requestType}&selectedActionName=${selectedAction.name}`;
    this.props.router.push(thankYouUrl, "/thankyou");
  }

  saveRequest = async (data) => {
    try {
      await fetch(
        "/api/save",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
          keepalive: true,
        }
      );
    } catch (error) {
      console.error("Failed to persist request record", error);
    }
  }

/*  onSupportButtonClick = (e) => {
    tracking.trackSupportClick(
      this.state.companyUrl,
    );
    window.location = "/support";
  }
*/
  async addNewCompany() {
    const companyEmail = this.companyEmail.current.value;
    const companyName = this.companyNameRef.current.value;
    // Submit the same normalised hostname that was stored on the request, so the
    // key that gets catalogued matches the key the request refers to.
    const rawDomain = this.companyDomainRef.current.value;
    const companyDomain = normalizeDomainInput(rawDomain) || rawDomain.trim();
    try {
      await fetch(
        "https://docs.google.com/forms/d/1hEsB-dmoqeS6pUbG-ODFxX1vOE__9-z2F5DHb94Dd3s/formResponse",
        {
          method: "POST",
          body: `emailAddress=${companyEmail}&entry.1191326521=${companyName}&entry.215439629=${companyDomain}`,
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
    tracking.trackAddNewOrg(companyDomain, companyName);
  }

  render() {
    const { selectedCompany } = this.props;

    return (
      <div data-nosnippet id="Form">
        <Paper
          component={S.StyledFormContainer}
          onSubmit={this.handleFormSubmit}
          id="personalInfoForm"
          elevation={10}
          ref={this.form}
        >
{/*
          <S.Support>
              <S.SupportButton 
                variant="contained" 
                startIcon={<SupportAgentIcon />} 
                onClick={this.onSupportButtonClick}
              >
                {supportButtonCTA}
              </S.SupportButton>
          </S.Support>
*/}          
          <Typography gutterBottom={true} variant={"body1"}>
            <span>
              {Headline}
            </span>
          </Typography>
          <FormControl
            variant="outlined"
            required={true}
            focused={true}
            component={S.StyledFormControl}
          >
            <FormLabel>{RequestTypeLabelText}</FormLabel>
            <RadioGroup
              name="request1"
              sx={{
                margin: (theme) => theme.spacing(1),
                flexDirection: "row",
              }}
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
                inputRef={this.companyNameRef}
                variant="outlined"
                id="companyName"
                label={CompanyNameLabelText}
                defaultValue=""
                margin="normal"
                required
                helperText={CompanyNameHelperText}
                autoFocus={!selectedCompany}
              />
              <TextField
                inputRef={this.companyDomainRef}
                variant="outlined"
                id="companyDomain"
                label={CompanyDomainLabelText}
                defaultValue=""
                onChange={this.handleCompanyDomainInput}
                onBlur={this.handleCompanyDomainBlur}
                margin="normal"
                required
                helperText={CompanyDomainHelperText}
              />
              <TextField
                inputRef={this.companyEmail}
                variant="outlined"
                id="companyEmail"
                label={CompanyEmailLabelText}
                defaultValue=""
                onChange={this.handleCompanyEmailInput}
                margin="normal"
                required
                helperText={CompanyEmailHelperText}
              />
            </Fragment>
          )}
          <TextField
            inputRef={this.nameRef}
            variant="outlined"
            id="name"
            label={NameLabelText}
            defaultValue=""
            margin="normal"
            required
            helperText={NameHelperText}
            autoFocus={!!selectedCompany}
          />
          <TextField
            variant="outlined"
            id="regulationType"
            select
            label={RegulationTypeText}
            onChange={this.handleInput("regulationType")}
            required
            value = {this.state.regulationType}
            SelectProps={{
              native: true,
            }}
            helperText={RegulationTypeHelperText}
            margin="normal"
          >
            {REGULATION_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            inputRef={this.identifyingInfoRef}
            variant="outlined"
            id="identifyingInfo"
            label={IdentifyingInfoLabelText}
            defaultValue=""
            margin="normal"
            multiline
            minRows={4}
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
            component={S.StyledFormControl}
          >
            <FormLabel>{FollowUpLabelText}</FormLabel>
            <RadioGroup
              name="followup1"
              sx={{
                margin: (theme) => theme.spacing(1),
                flexDirection: "row",
              }}
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
          <S.StyledFormButton>
            <EmailSendButton
              id="EmailSendButton"
              emailType={this.state.requestType}
              onClick={this.handleEmailSendClick}
            >
              {SubmitButtonText}
            </EmailSendButton>
          </S.StyledFormButton>
        </Paper>
      </div>
    )
  }
}
export default withRouter(injectIntl(Form));
