import { IntroText, SubtitleText, DonateBTCButtonText, DonateLiberapayButtonText } from "./text";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import tracking from "../../utils/tracking";

const Donations = ({ classes, children }) => {

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Donation Component");
  };

  return (
    <div className={classes.donate}>
      <div className={classes.container}>
        <div id="donations" className={classes.heading}>
          <Typography
            variant="display1"
            component="h2"
            className={classes.title}
            gutterBottom={true}
          >
            {SubtitleText}
          </Typography>
          <Typography color="inherit" className={classes.intro}>
            {IntroText}
          </Typography>          
          <div className={classes.buttons}>
            <Button
              variant="raised"
              href="https://liberapay.com/YourDigitalRights.org/donate"
              color="primary"
              type="submit"
              className={classes.donateLPButton}
              onClick={() => trackDonate("Donation - Librapay")}
            >
              {DonateLiberapayButtonText}
            </Button>                          
            <Button
              variant="raised"
              href="bitcoin:34kHDRPhrBmP15BZBYvx4gn5amwCwa6kGe"
              color="primary"
              type="submit"
              className={classes.donateBTCButton}
              onClick={() => trackDonate("Donation - BTC")}
            >
              {DonateBTCButtonText}
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Donations);
