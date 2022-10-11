import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { heroUrlAnchor } from "../../utils/urlAnchors";
import Link from 'next/link'

const Hero = ({ classes, onCompanySelected, children }) => {
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
              defaultMessage="Get organizations to delete your account or send you a copy of your personal data."
            />
          </Typography>
          <Typography
            color="inherit"
            className={classes.introEnd}
            component="h2"
          >
            <FormattedMessage
              id="hero.intro"
              defaultMessage="Many organizations collect and sell your personal data, often without your consent. Use this free service to send them a data deletion or access request. Start by searching for an organization below. Don't know where to start? Opt out of these top <a>Data Brokers</a>."
              values={{
                br: <br />,
                a: txt => (<Link href="/data-brokers"><a className={classes.introLink}>{txt}</a></Link>),
              }}
            />            
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
