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
          <Typography
            variant="h4"
            component="h2"
            className={classes.title}
            gutterBottom={true}
          >
            <FormattedMessage id="subscribe.title" defaultMessage="Keep it private!" />
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            className={classes.subtitle}
            gutterBottom={true}
          >
            <FormattedMessage id="subscribe.subtitle" defaultMessage="Subscribe to our monthly privacy alerts." />
          </Typography>
          <Typography color="inherit" className={classes.intro} gutterBottom={true}>
            <FormattedMessage
              id="subscribe.description1"
              defaultMessage="Keep your information private by sending 3 data deletion requests a month to build up your privacy posture over time. Each month our research team identifies the worst offending organizations based on:"
            />
          </Typography> 
          <ul className={classes.list}>
            <li>
              <FormattedMessage
                id="subscribe.bullit1"
                defaultMessage="New data brokers (companies selling personal information including location, and facial recognition data)"
              />
            </li>
            <li>
              <FormattedMessage
                id="subscribe.bullit2"
                defaultMessage="Recent data breaches"
              />
            </li>
            <li>
              <FormattedMessage
                id="subscribe.bullit3"
                defaultMessage="Bed privacy practices"
              />
            </li>
          </ul>     
          <Typography color="inherit" className={classes.intro} gutterBottom={true}>
            <FormattedMessage
              id="subscribe.description2"
              defaultMessage="Each email also includes new privacy best practices we have identified, which you can implement straight away. This is a paid service which helps ensure our long-term financial stability and independence."
            />
          </Typography>            
          <div className={classes.substack}>
            <iframe src="https://consciousdigital.substack.com/embed" width="480" height="100"  frameborder="0" scrolling="no" ></iframe>
          </div>    
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Subscribe);