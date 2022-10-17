import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import Button from "@material-ui/core/Button";

const handleSignUpClick = (e) => {
  e.preventDefault();
}

const Subscribe = ({ classes, children, page="thank-you"}) => {
  const trackSubscribe = () => {
    tracking.trackSubscribe(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.subscribe}>
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
                id="subscribe.alertsOneLiner1"
                defaultMessage="Improve your online privacy over time by opting out of 3 companies each month."
              />
              <br/>
              <FormattedMessage
                id="subscribe.alertsOneLiner2"
                defaultMessage="Our research team hand-picks the worst privacy offenders."
              />              
            </Typography> 
          </div>
          <div className={classes.substack}>
            <Button
              variant="contained"
              color="primary"
              className={classes.signUpButton}
              id="SubscribeMessageBtn"
              href="https://consciousdigital.substack.com/?showWelcome=true"
              onClick={() => trackSubscribe()}
            >
              <FormattedMessage id="subscribe.signup" defaultMessage="Sign up" />
            </Button>  
          </div>    
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Subscribe);