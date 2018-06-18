import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...container
  },
  inner: {
    borderTop: "2px solid #005ea5",
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      paddingRight: 90,
      paddingLeft: 90
    }
  }
});

const DisclaimerText = (
  <FormattedMessage
    id="disclaimer"
    defaultMessage="Disclaimer: This service is provided as is, without warranty of any kind. Use of this service is entirely at your own risk. We cannot take responsibility for any direct or indirect damages resulting from the use of this service. The information provided by this service along with the content on our website related to legal matters is provided for your private use and does not constitute legal advice. If you need legal advice for a specific problem, you should consult with a licensed attorney. Please read our full Terms of Service and Privacy Policy for further information."
  />
);

const QueryText = (
  <FormattedMessage
    id="query"
    defaultMessage="© Copyright 2018 Opt-out.eu. Contact us at {mail}."
    values={{
      mail: (
        <a href="mailto:info@opt-out.eu" style={{ fontWeight: "bold" }}>
          info@opt-out.eu
        </a>
      )
    }}
  />
);

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Typography gutterBottom={true} color="textSecondary">
          {DisclaimerText}
        </Typography>
        <Typography color="textSecondary">{QueryText}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
