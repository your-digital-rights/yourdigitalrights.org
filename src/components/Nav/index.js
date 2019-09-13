import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    backgroundColor: "#005ea5",
    height: "72px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 15px",
    }
  },
  logo: {
    width: "149px",

    [theme.breakpoints.down("xs")]: {
      width: "100px",
    }
  },
  container: {
    listStyle: "none",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    }
  },
  item: {
    padding: "26px 0",
    marginRight: "24px"
  },
  link: {
    color: '#f6f7fa',
    fontWeight: "bolder",
    fontSize: "15px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  hamburgerButton: {
    display: "none",
    height: "50px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
});

const NavItem = ({ href, text, classes }) => {
  return (
    <li className={classes.item}>
      <Typography component="a" href={href} className={classes.link}>
        {text}
      </Typography>
    </li>
  );
};

const NavList = ({classes}) => {
  return (
    <ul className={classes.container}>
      <NavItem
        href="/#howItWorks"
        text={
          <FormattedMessage id="howItWorks" defaultMessage="How it works" />
        }
        classes={classes}
      />
      <NavItem
        href="/#faq"
        text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
        classes={classes}
      />
      <NavItem
        href="/data-brokers"
        text={<FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />}
        classes={classes}
      />
      <NavItem
        href="/#Extension"
        text={<FormattedMessage id="Extension" defaultMessage="Browser Extension" />}
        classes={classes}
      />
      <NavItem
        href="/about"
        text={<FormattedMessage id="about" defaultMessage="About" />}
        classes={classes}
      />
    </ul>
  )
 
};

const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav} id="nav">
      <img className={classes.logo} src="static/optout.svg" />
      <NavList classes={classes}/>
      <img className={classes.hamburgerButton} src="static/hamburgerIcon.svg" />
    </nav>
  );
};
export default withStyles(styles)(Nav);
