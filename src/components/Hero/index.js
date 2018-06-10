import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const SubtitleText = (
  <FormattedMessage
    id="heading"
    defaultMessage="We help you {strong}"
    values={{ strong: <strong>own your data</strong> }}
  />
);

const IntroText = (
  <FormattedMessage
    id="intro"
    defaultMessage="Many companies collect, store and process your personal information, often without your consent. Now you can get any organisation to erase your personal data, hassle free. This is a free service. We are a not for profit organization, and do not collect your personal data."
  />
);

const Hero = ({ classes, onCompanySelected, children }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1 className={classes.title}>
            <img
              src="static/optout.svg"
              alt="Opt out"
              className={classes.titleImg}
            />
          </h1>

          <Typography
            variant="display1"
            color="inherit"
            gutterBottom={true}
            component="p"
          >
            {SubtitleText}
          </Typography>
          <Typography color="inherit" className={classes.intro}>
            {IntroText}
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
