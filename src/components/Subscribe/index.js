import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import Script from 'next/script'
import { useEffect } from "react";
import { useScript } from "../../utils/hooks";

const handleSignUpClick = (e) => {
  e.preventDefault();
}

const Subscribe = ({ classes, children, page="thank-you"}) => {
  const trackSubscribe = () => {
    tracking.trackSubscribe(page);
  };
  
  useScript("https://substackapi.com/widget.js");

  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "consciousdigital.substack.com",
      placeholder: "you@example.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#005EA5",
        input: "#039277",
        email: "#000000",
        text: "#FFFFFF",
      }
    };
  }, []);

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
            <div id="custom-substack-embed" className={classes.substack}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default withStyles(styles)(Subscribe);