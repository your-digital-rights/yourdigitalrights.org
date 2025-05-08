import { useRef, useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import Paper from "@mui/material/Paper";
import Regulations from "../../utils/regulations";
import {getCountryCode} from "../../utils/geolocation";
import TextField from "@mui/material/TextField";
import tracking from "../../utils/tracking";
import EmailSendButton from "../EmailSendButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RequestEscalation = ({ classes, intl, requestItem, status }) => {
  const form = useRef();
  const regulation = Regulations[requestItem.regulationType];
  const defaultDPAAction = regulation.dpa.defaultAction;
  const authority = regulation.dpa.longName;
  const geographies = regulation.dpa.geographies;
  const defaultGeographyCode = geographies[0].countryCode;
  const [geograpghy, setGeograpghy] = useState(defaultGeographyCode);
  const [complaintText, setcomplaintText] = useState("");

  useEffect(() => {
    const getGeoCode = async () => {
      let countryCode = await getCountryCode();
      if (geographies.filter(geo => geo.countryCode === countryCode).length > 0) {
        setGeograpghy(countryCode);
      }
      else {
        setGeograpghy(defaultGeographyCode);
      }
    }
    getGeoCode();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }


  const handleEscalationEmailClick = (generateEmailFields) => {
    const uuid = requestItem.id;
    const formStatus  = form.current.reportValidity();
    if (!formStatus) return;

    const geo = geographies.filter(geo => geo.countryCode === geograpghy)[0];  

    fetch(
      "/api/registerEscalation",
      {
        method: "POST",
        body: JSON.stringify({ 
          "uuid": uuid, 
          "dpaCountryCode":  geograpghy
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = {
      geo,
      requestItem,
      complaintText,
      status
    }
    const selectedAction = generateEmailFields(data);    
    selectedAction.run();

    tracking.trackEscalationRequest(
      geograpghy,
      requestItem.companyUrl,
    );
  }

  const handleEscalationFormClick = (e) => {
    const uuid = requestItem.id;
    const dpaCountryCode = regulation.dpa.geographies[0].countryCode;
    
    fetch(
      "/api/registerEscalation",
      {
        method: "POST",
        body: JSON.stringify({ 
          "uuid": uuid, 
          "dpaCountryCode":  dpaCountryCode
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    tracking.trackEscalationRequest(
      dpaCountryCode,
      requestItem.companyUrl,
    );
  }

  return (
    <div className={classes.root} id="escalationForm">
      <div className={classes.container}>
        { defaultDPAAction === "email" && (
          <Paper
            component="form"
            className={classes.formContainer}
            onSubmit={handleFormSubmit}
            elevation={10}
            ref={form}
          >
            <TextField
              variant="outlined"
              id="location"
              select
              label={intl.formatMessage({
                id: "requestEscalation.geography",
                defaultMessage: "Location",
              })}
              className={classes.textField}
              required
              value={geograpghy}
              onChange={e => setGeograpghy(e.target.value)}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText={intl.formatMessage({
                id: "requestEscalation.geographyText ",
                defaultMessage: "Please select your place of residence",
              })}
              margin="normal"
            >
              {regulation.dpa.geographies.map((geo) => (
                <option key={geo.countryCode} value={geo.countryCode}>{geo.name}</option>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              id="complaint"
              label={intl.formatMessage({
                id: "requestEscalation.complaint",
                defaultMessage: "Additional details",
              })}
              value={complaintText}
              onChange={e => setcomplaintText(e.target.value)}
              margin="normal"
              multiline
              rows={4}
              helperText={intl.formatMessage({
                id: "requestEscalation.complaintText",
                defaultMessage: "Please explain why you are not satisfied with how the organization has dealt with your request",
              })}
            />
            <div>
              <EmailSendButton
                emailType="ESCALATION"
                onClick={handleEscalationEmailClick}
                className={classes.formButton}
              >
                <FormattedMessage id="requestEscalation.submit" defaultMessage="Review and Send" /> 
              </EmailSendButton>            
            </div>
          </Paper>
        )}
        { defaultDPAAction === "form" && (
          <Paper
            component="form"
            className={classes.formContainer}
            onSubmit={handleFormSubmit}
            elevation={10}
            ref={form}
          >
            <Typography
                id="orgName"
                color="inherit"
                component="p"
                className={classes.disclamer}
            >
              <FormattedMessage
                id="requestEscalation.formDisclamer"
                defaultMessage="In order to escalate your request you will need to complete a form on the {authority} website. Click the button bellow to open the form in a new tab."
                values={{
                  authority: authority,
                }}
              />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
              href={regulation.dpa.requestFormURL}
              onClick={handleEscalationFormClick}
              target="_blank"
            >
              <FormattedMessage
                id="requestEscalation.esclateButtonForm"
                defaultMessage="Open Escalation Form"
              />
            </Button>
          </Paper>
        )}
        { defaultDPAAction === "phone" && (
          <Paper
            component="form"
            className={classes.formContainer}
            onSubmit={handleFormSubmit}
            elevation={10}
            ref={form}
          >
            <Typography
                id="orgName"
                color="inherit"
                component="p"
                className={classes.disclamer}
            >
              <FormattedMessage
                id="requestEscalation.phoneDisclamer"
                defaultMessage="In order to escalate your request please call the {authority} on {phone}."
                values={{
                  authority: authority,
                  phone: <a href={`tel:${regulation.dpa.phoneNumber}`}>{regulation.dpa.phoneNumber}</a>,
                }}
              />
            </Typography>
          </Paper>
        )}        
      </div>
    </div>
  );
};
export default withStyles(styles)(RequestEscalation);
