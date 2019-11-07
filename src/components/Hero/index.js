import { IntroText, SubtitleText, DataBrokers} from "./text";

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

        <h1 className={classes.title}>
          <img
            src="static/type.svg"
            alt="Your Digital Rights"
            className={classes.titleImg}
            role="presentation"
          />
          <span style={visuallyHidden}>Your Digital Rights</span>
        </h1>

          <Typography color="inherit" className={classes.intro}>
            {IntroText}
          </Typography>
          <Typography color="inherit" className={classes.introEnd} component="span">
            <p>Don't know where to start? Opt out of these <a className={classes.introLink} href="/data-brokers">Data Brokers</a>.</p>
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
