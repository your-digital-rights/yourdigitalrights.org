import { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Regulations from "../../utils/regulations";
import { isMobile } from "react-device-detect";
import mailtoLink from "mailto-link";
import { mailgoDirectRender } from "mailgo";
import escalationEmail from "../../email-templates/escalation";
import getInboundEmailAddress from "../../utils/email";
import {getCountryCode} from "../../utils/geolocation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import tracking from "../../utils/tracking";

const mailgoConfig = {
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

function renderMailTo(requestItem, complaintText, countryCode, status) {
  const geographies = Regulations[requestItem.regulationType.S].dpa.geographies;
  console.log("countryCode",countryCode);
  console.log("geographies",geographies);
  const geo = geographies.filter(geo => geo.countryCode === countryCode);  
  const to = geo[0].email;
  const cc = requestItem.requestEmailTo.S;
  const bcc = getInboundEmailAddress(requestItem.id.S, 'escalation');
  const subject = escalationEmail.subject(requestItem);
  const body = escalationEmail.body(requestItem, complaintText, status);

  return mailtoLink({
    to,
    cc,
    bcc,
    subject,
    body,
  });
};

const handleFormSubmit = (requestItem, complaintText, geograpghy, status) => e => {
  e.preventDefault();
  const mailTo = renderMailTo(requestItem, complaintText, geograpghy, status);
  if (isMobile) {
    window.open(mailTo);
  } else {
    mailgoDirectRender(mailTo);
  }
  tracking.trackEscalationRequest(
    requestItem.companyUrl.S,
    requestItem.regulationType.S
  );
}

const RequestEscalation = ({ classes, intl, requestItem, status }) => {
  const defaultGeographyCode = Regulations[requestItem.regulationType.S].dpa.geographies[0].countryCode;
  const [geograpghy, setGeograpghy] = useState(defaultGeographyCode);
  const [complaintText, setcomplaintText] = useState("");

  useEffect(() => {
    const getGeo = async () => {
      let geo = await getCountryCode();
      geo = geo ? geo : defaultGeographyCode;
      setGeograpghy(geo);
    }
    getGeo();
  }, []);


  return (
    <div className={classes.root} id="escalationForm">
      <div className={classes.container}>
        <Paper
          component="form"
          className={classes.formContainer}
          onSubmit={handleFormSubmit(requestItem, complaintText, geograpghy, status)}
          elevation={10}
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.formButton}
            >
              <FormattedMessage id="requestEscalation.submit" defaultMessage="Review & Send" />
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
};
export default withStyles(styles)(RequestEscalation);
