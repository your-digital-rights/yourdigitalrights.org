import { FormattedMessage } from "react-intl";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Regulations from "../../utils/regulations";
import { isMobile } from "react-device-detect";
import mailtoLink from "mailto-link";
import { mailgoDirectRender } from "mailgo";
import reminderEmail from "../../email-templates/reminder";

function renderMailTo(to, id) {
  const to = requestItem.emailTo.S; // DPA
  const cc = requestItem.emailTo.S; // company
  const bcc = `${requestItem.id.S}@inbound.yourdigitalrights.org`;
  const subject = reminderEmail.subject({ ...this.state });
  const body = reminderEmail.body({ ...this.state });

  return mailtoLink({
    to,
    bcc,
    subject,
    body,
  });
};

function handleFormSubmit(e, to, id) {
  e.preventDefault();
  if (isMobile) {
    window.open(this.renderMailTo());
  } else {
    mailgoDirectRender(this.renderMailTo());
  }
};

const RequestEscalation = ({ classes, intl, requestItem, regulation, selectedCompany, status }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <Paper
          component="form"
          className={classes.details}
          onSubmit={this.handleFormSubmit}
          elevation={10}
        >
          <TextField
            variant="outlined"
            id="location"
            select
            label={intl.formatMessage({
              id: "requestEscalation.geography",
              defaultMessage: "Country selection",
            })}
            className={classes.textField}
            required
            value = {this.state.regulationType}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText={intl.formatMessage({
              id: "requestEscalation.geographyText ",
              defaultMessage: "Please select your country of residence",
            })}
            margin="normal"
          >
            {Regulations[requestItem.regulationType].dpa.geographies.map((geo) => (
              <option value={geo.email}>{geo.name}</option>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            id="complaint"
            label={intl.formatMessage({
              id: "requestEscalation.complaint",
              defaultMessage: "Additional details",
            })}
            value={this.state.identifyingInfo}
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
