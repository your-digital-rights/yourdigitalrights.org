import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";


const Donations = ({ classes, children }) => {

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Donation Component");
  };

  return (
    <div className={classes.donate}>
      <div className={classes.container}>
        <div id="donations" className={classes.heading}>
          <Typography
            variant="h4"
            component="h2"
            className={classes.title}
            gutterBottom={true}
          >
            <FormattedMessage id="donations.headingDonate" defaultMessage="We need your support" />
          </Typography>
          <Typography color="inherit" className={classes.intro} gutterBottom={true}>
            <FormattedMessage
              id="donations.donateIntro"
              defaultMessage="YourDigitalRights.org was created because we believe that privacy matters, and that exercising your right to privacy should be easy. That's why we've made it free. By donating, or becoming a supporting member you can help ensure our long-term financial stability and independence."
            />
          </Typography>          
          <div className={classes.buttons}>
            <Button
              variant="contained"
              href="https://opencollective.com/consciousdigital"
              color="primary"
              type="submit"
              target="_blank"
              className={classes.donateLPButton}
              onClick={() => trackDonate("Donation - Open Collective")}
            >
              <FormattedMessage id="donations.donate" defaultMessage="Donate" />
            </Button>                          
            {/* 
            <Button
              variant="contained"
              href="bitcoin:34kHDRPhrBmP15BZBYvx4gn5amwCwa6kGe"
              color="primary"
              type="submit"
              className={classes.donateBTCButton}
              onClick={() => trackDonate("Donation - BTC")}
            >
              <FormattedMessage id="donations.Bitcoin" defaultMessage="Donate Bitcoin" />
            </Button> 
            */}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Donations);
