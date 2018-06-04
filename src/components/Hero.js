import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
    color: "white"
  },
  container: {
    padding: "76px 30px",
    boxSizing: "border-box",
    ...container,
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url('static/logo.svg')",
      backgroundPosition: "right 50px top 100px",
      backgroundRepeat: "no-repeat"
    }
  },
  intro: {
    marginBottom: "50px",
    maxWidth: "530px"
  }
});

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
    defaultMessage="Many companies collect, store and process your personal information, often without your consent. Now you can get any organisation to erase your personal data, hassle free. This is a free service. We are a not for profit organization, and do not collect your personal data.
"
  />
);

const Hero = ({ classes, onCompanySelected, children }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <Typography variant="display3" color="inherit" gutterBottom={true}>
            opt<strong>out</strong>
          </Typography>

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
