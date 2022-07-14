import { useRef, useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Regulations from "../../utils/regulations";
import {getCountryCode} from "../../utils/geolocation";
import TextField from "@material-ui/core/TextField";
import tracking from "../../utils/tracking";
import EmailSendButton from "../EmailSendButton";


const RequestEscalation = ({ classes, intl, requestItem, status }) => {
  const form = useRef();
  const geographies = Regulations[requestItem.regulationType.S].dpa.geographies;
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


  const handleEmailSendClick = (generateEmailFields) => {

    const formStatus  = form.current.reportValidity();
    if (!formStatus) return;

    const geo = geographies.filter(geo => geo.countryCode === geograpghy)[0];  

    const data = {
      geo,
      requestItem,
      complaintText,
      status
    }
    const selectedAction = generateEmailFields(data);    
    selectedAction.run();

    tracking.trackEscalationRequest(
      requestItem.companyUrl.S,
      requestItem.regulationType.S
    );
  }

  return (
    <div className={classes.root} id="escalationForm">
      <div className={classes.container}>
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
            {Regulations[requestItem.regulationType.S].dpa.geographies.map((geo) => (
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
              onClick={handleEmailSendClick}
              className={classes.formButton}
            >
              <FormattedMessage id="requestEscalation.submit" defaultMessage="Review and Send" /> 
            </EmailSendButton>            
          </div>
        </Paper>
      </div>
    </div>
  );
};
export default withStyles(styles)(RequestEscalation);
