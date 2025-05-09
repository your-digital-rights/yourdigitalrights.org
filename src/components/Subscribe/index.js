import Typography from "@mui/material/Typography";
import styles from "./styles";
import tracking from "../../utils/tracking";
import { FormattedMessage } from "react-intl";
import { useEffect } from "react";
import { useScript } from "../../utils/hooks";

const Subscribe = ({ children, page="thank-you"}) => {
  useScript("https://substackapi.com/widget.js");

  const trackSubscribe = () => {
    tracking.trackSubscribe(page);
  };
  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "newsletter.yourdigitalrights.org",
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
      <div style={styles.container}>
        <div style={styles.subscribe}>
          <div id="subscribe" style={styles.heading}>
            <div style={styles.text}>
              <Typography
                color="inherit" 
                variant="h3"
                component="h3"
                sx={styles.intro}
                gutterBottom={true}
              >
                <FormattedMessage id="subscribe.title" defaultMessage="Subscribe To Privacy Alerts!" />
              </Typography>          
              <Typography 
                color="inherit" 
                sx={styles.intro} 
                gutterBottom={true}
              >
                <FormattedMessage
                  id="subscribe.alertsOneLiner1"
                  defaultMessage="Stay ahead of online threats and take control of your personal data with Privacy Alerts! Our newsletter provides the latest expert advice, tips, and tricks to safeguard your privacy in the digital world. Subscribe now to stay informed and empowered!"
                />
              </Typography> 
            </div>
            <div id="custom-substack-embed" style={styles.substack}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;