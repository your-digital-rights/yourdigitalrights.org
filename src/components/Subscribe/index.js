import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";


const Subscribe = ({ classes, children }) => {

  const trackDonate = (type) => {
    tracking.trackDonate(type, "Donation Component");
  };

  return (
    <div className={classes.subscribe}>
      <div className={classes.container}>
        <div id="subscribe" className={classes.heading}>
        <div className={classes.text}>
          <Typography
              color="inherit" 
              variant="h3"
              component="h3"
              className={classes.intro}
              gutterBottom={true}
            >
              <FormattedMessage id="subscribe.title" defaultMessage="Sign up to our privacy alerts!" />
            </Typography>          
            <Typography 
              color="inherit" 
              className={classes.intro} 
              gutterBottom={true}
            >
              <FormattedMessage
                id="subscribe.alertsOneLiner"
                defaultMessage="Improve your privacy posture over time by opting out of 3 companies each month. Our research team hand picks the worst privacy offenders."
              />
            </Typography> 
          </div>
          <div className={classes.substack}>
              <img className={classes.image} src="/images/Keep-it-private.png" alt="a card with a sad face" />
            <iframe src="https://consciousdigital.substack.com/embed" width="350" height="100"  frameborder="0" scrolling="no" ></iframe>
          </div>    
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Subscribe);