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
import styles from "./styles";
import tracking from "../../utils/tracking";
import { styled } from '@mui/material/styles';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { v4 as uuidv4 } from 'uuid';
import {getRegulationbyGeolocation} from "../../utils/geolocation";
import Regulations from "../../utils/regulations";
import EmailSendButton from "../EmailSendButton";
import { withRouter } from 'next/router'
import isEmail from 'validator/lib/isEmail';


const screenHeightBreakpoint = 560;

const StyledPaper = styled(Paper)(styles().formContainer);
const StyledFormControl = styled(FormControl)(styles().formControl);
const StyledRadioGroup = styled(RadioGroup)(styles().group);
const StyledFormButton = styled('div')(styles().formButton);

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
    this.companyEmail = React.createRef();
    this.form = React.createRef();
  }

  async componentDidMount() {
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
      const companyEmailError = isEmail(inputValue)
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
  };

  handleEmailSendClick = (generateEmailFields) => {

    const status  = this.form.current.reportValidity();
    if (!status) return;
    

    const uuid = uuidv4();
    this.setState({ uuid: uuid });
    const { selectedCompany } = this.props;
    const requestType = this.state.requestType;
    const regulationType = this.state.regulationType;
    const followUp = this.state.followUp;

    const companyEmail = selectedCompany
      ? selectedCompany.email
      : this.state.companyEmail;

    const companyName = selectedCompany
      ? selectedCompany.name
      : this.state.companyName;

    console.log('selectedCompany', selectedCompany);
    console.log('this.state.companyUrl', this.state.companyUrl);
    console.log('this.props.selectedCompany', this.props.selectedCompany);
    console.log('this.state.companyDomain', this.state.companyDomain);
    const companyUrl = selectedCompany
      ? selectedCompany.url
      : this.state.companyUrl;

    const reference = followUp === "YES" ? `(ref: ${uuid.split("-")[0]})` : "";

    const identifyingInfo = this.state.identifyingInfo;
    const name = this.state.name;
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

    this.saveRequest(data);
    this.setState({ selectedActionName: selectedAction.name });
    this.setState({ hasSubmit: true });
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
    let thankYouUrl = `/thankyou?regulationType=${this.state.regulationType}&requestType=${this.state.requestType}&selectedActionName=${selectedAction.name}`
    this.props.router.push(thankYouUrl, "/thankyou");
  }

  saveRequest = (data) => {
    fetch(
      "/api/save",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

/*  onSupportButtonClick = (e) => {
    tracking.trackSupportClick(
      this.state.companyUrl,
    );
    window.location = "/support";
  }
*/
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
    const { selectedCompany } = this.props;

    return (
      <div data-nosnippet id="Form">
        <StyledPaper
          component="form"
          onSubmit={this.handleFormSubmit}
          id="personalInfoForm"
          elevation={10}
          ref={this.form}
        >
          <Typography gutterBottom variant="body1">
            <span>
              {Headline}
            </span>
          </Typography>
          <StyledFormControl
            required
            component="fieldset"
          >
            <FormLabel>{RequestTypeLabelText}</FormLabel>
            <StyledRadioGroup
              name="request1"
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
            </StyledRadioGroup>
          </StyledFormControl>

          {!selectedCompany && (
            <Fragment>
              <TextField
                fullWidth
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
                fullWidth
                id="companyDomain"
                label={CompanyDomainLabelText}
                value={this.state.companyDomain}
                onChange={this.handleInput("companyDomain")}
                margin="normal"
                required
                helperText={CompanyDomainHelperText}
              />              
              <TextField
                fullWidth
                inputRef={this.companyEmail}
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
            fullWidth
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
            fullWidth
            id="regulationType"
            select
            label={RegulationTypeText}
            onChange={this.handleInput("regulationType")}
            required
            value={this.state.regulationType}
            SelectProps={{
              native: true,
              MenuProps: {
                className: styles().menu,
              },
            }}
            helperText={RegulationTypeHelperText}
            margin="normal"
          >
            { Object.keys(Regulations).sort().map((key) => 
              <option key={key} value={key}>{`${Regulations[key].gepgraphy} (${Regulations[key].displayName})`}</option>
            )}
          </TextField>
          <TextField
            fullWidth
            id="identifyingInfo"
            label={IdentifyingInfoLabelText}
            value={this.state.identifyingInfo}
            onChange={this.handleInput("identifyingInfo")}
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
          <StyledFormControl
            component="fieldset"
          >
            <FormLabel>{FollowUpLabelText}</FormLabel>
            <StyledRadioGroup
              name="followup1"
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
            </StyledRadioGroup>
            <FormHelperText>
              {FollowUpDetailsText}
              <br/>
              <br/>
              {FollowUpDetailsTextWarning}
            </FormHelperText>
          </StyledFormControl>
          <StyledFormButton>
            <EmailSendButton
              id="EmailSendButton"
              emailType={this.state.requestType}
              onClick={this.handleEmailSendClick}
            >
              {SubmitButtonText}
            </EmailSendButton>
          </StyledFormButton>
        </StyledPaper>
      </div>
    )
  }
}

export default withRouter(injectIntl(Form));
