import { FormattedMessage } from "react-intl";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
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
    fontWeight: "600",
    textDecoration: "none"
  }
});

const NavItem = ({ href, text, classes }) => {
  return (
    <li className={classes.item}>
      <Link href={href} prefetch>
        <Typography component="a" href={href} className={classes.link}>
          {text}
        </Typography>
      </Link>
    </li>
  );
};

const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav}>
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
          text={<FormattedMessage id="faq" defaultMessage="FAQs" />}
          classes={classes}
        />
        <NavItem
          href="/about"
          text={
            <FormattedMessage id="about" defaultMessage="About Us" />
          }
          classes={classes}
        />
      </ul>
    </nav>
  );
};
export default withStyles(styles)(Nav);
