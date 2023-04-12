import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";


const handleSignUpClick = (e) => {
  e.preventDefault();
}

const Subscribe = ({ classes, children, page="thank-you"}) => {
  const trackSubscribe = () => {
    tracking.trackSubscribe(page);
  };

  return (
    <>
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
                <FormattedMessage id="subscribe.title" defaultMessage="Subscribe To Our Privacy Alerts!" />
              </Typography>          
              <Typography 
                color="inherit" 
                className={classes.intro} 
                gutterBottom={true}
              >
                <FormattedMessage
                  id="subscribe.alertsOneLiner1"
                  defaultMessage="A monthly email listing the three worst privacy-offending companies identified by our research team. Improve your privacy and take back control of your personal information by spending five minutes a month opting out of these companies."
                />

              </Typography> 
            </div>
            <div className={classes.substack}>
              <iframe src="https://newsletter.yourdigitalrights.org/embed" width="350" height="100" frameborder="0" ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withStyles(styles)(Subscribe);