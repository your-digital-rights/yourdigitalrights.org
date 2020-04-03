import { IntroText, SubtitleText, MoreInfo} from "./text";

import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { visuallyHidden } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const Hero = ({ classes, selectedCompany }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <div className={classes.heading}>
          <a className={classes.logoLink} href="/#org-info">
            <img className={classes.logo} src={`https://api.faviconkit.com/${selectedCompany.url}/24`} />
          </a>
          <Typography
              variant="display1"
              color="inherit"
              gutterBottom={true}
              component="p"
          >
            {selectedCompany.name}
          </Typography>

          <Typography color="inherit" className={classes.intro}>
            Request deletion, or a copy of your data. <a href="#org-info" >Read more about {selectedCompany.name}</a>
          </Typography>
          
          <Typography color="inherit" className={classes.domain}>
            <strong>Domain</strong>: {selectedCompany.url}
          </Typography>  
          
          <Typography color="inherit" className={classes.info}>
            Fill in the form below to send an email to {selectedCompany.name} requesting a deletition, or a copy of your data. This is a free service. We do not collect any personal information.
            <br />
            <br />
            {MoreInfo}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
