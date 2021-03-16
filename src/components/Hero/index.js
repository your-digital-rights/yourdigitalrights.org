import { IntroText, headerText, titleText } from "./text";
import Link from "next/link";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { visuallyHidden } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const Hero = ({ classes, onCompanySelected, children }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <div className={classes.heading}>
          <Typography
            variant="display1"
            color="inherit"
            gutterBottom={true}
            component="p"
          >
            {titleText}
          </Typography>
          <Typography
            color="inherit"
            className={classes.intro}
            component="h1"
            variant="display2"
            gutterBottom={true}
          >
            {headerText}
          </Typography>
          <Typography
            color="inherit"
            className={classes.introEnd}
            component="h2"
          >
            Many organizations collect and sell your personal data, often without your consent. Use this free service to send them a data deletion or access request. Start by searching for an organization below. Don't know where to start? Opt out of these top <a className={classes.introLink} href="/data-brokers">Data Brokers</a>.
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
