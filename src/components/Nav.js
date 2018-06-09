import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  nav: {
    borderBottom: "5px solid #005ea5"
  },
  container: {
    listStyle: "none",
    display: "flex",
    ...container
  },
  item: {
    padding: "26px 0",
    marginRight: "24px"
  },
  link: {
    color: "#005ea5",
    fontWeight: "bold",
    textDecoration: "none"
  }
});

const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.container}>
        {/* <li className={classes.item}>
          <Typography component="a" href="#howItWorks" className={classes.link}>
            <FormattedMessage id="howItWorks" defaultMessage="How it works" />
          </Typography>
        </li> */}
        <li className={classes.item}>
          <Typography component="a" href="#faq" className={classes.link}>
            <FormattedMessage id="faq" defaultMessage="FAQs" />
          </Typography>
        </li>
        {/* <li className={classes.item}>
          <Typography component="a" href="#privacy" className={classes.link}>
            <FormattedMessage id="privacy" defaultMessage="Privacy" />
          </Typography>
        </li> */}
      </ul>
    </nav>
  );
};
export default withStyles(styles)(Nav);
