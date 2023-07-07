import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import withStyles from '@mui/styles/withStyles';
import { heroUrlAnchor } from "../../utils/urlAnchors";

const Hero = ({ classes, children }) => {
  return (
    <div className={classes.hero} id={heroUrlAnchor}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <Typography
            variant="h4"
            color="inherit"
            gutterBottom={true}
            component="p"
            id="hero-heading"
          >
            <FormattedMessage
              id="hero.heading"
              defaultMessage="Own Your Data"
            />
          </Typography>
          <Typography
            color="inherit"
            className={classes.intro}
            component="h1"
            variant="h3"
            gutterBottom={true}
          >  
            <FormattedMessage
              id="hero.headerText"
              defaultMessage="Get organizations to delete your account or provide a copy of your personal information."
            />
          </Typography>
          <Typography
            color="inherit"
            className={classes.introEnd}
            component="h2"
          >
            <FormattedMessage
              id="hero.intro"
              defaultMessage="Many organizations collect and sell your personal data, often without your consent. Use this free service to send them a data deletion or access request. Start by searching for an organization below."
            />            
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
