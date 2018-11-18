import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  nav: {
    backgroundColor: "#005ea5",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1001",
    borderBottom: "4px solid #0973be"
  },
  container: {
    listStyle: "none",
    display: "flex",
    justifyContent: "flexEnd",
    ...container
  },
  item: {
    padding: "20px 0",
    marginRight: "24px",
    alignSelf: "center",
  },
  link: {
    color: "#f2f2f2",
    fontWeight: "600",
    textDecoration: "none",
  },
  OOButton: {
    margin: "20px 0 20px 20px",
    borderRadius:"24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    '&:hover': {
      background: '#cf8600'
    }
  },
  OO: {
    textAlign: "center",
  },
  logoImg: {
    width: "100px",
    maxWidth: "75%",
  },
  logo: {
    left: "0px",
    margin: "31px 0 20px ",
    alignSelf: "flexStart",
  },
  NavItem: {
    alignSelf: "flexEnd",
  },
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

const OOButtonText = (
  <FormattedMessage
    id="WishList"
    defaultMessage="Search"
  />
);

const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav} id="nav">
      <ul className={classes.container}>
        <div className={classes.logo}>
          <img
            src="static/optout.svg"
            alt="Opt out"
            className={classes.logoImg}
            role="presentation"
          />
        </div>
        <NavItem
          href="/#howItWorks"
          className={classes.NavItem}
          text={
            <FormattedMessage id="howItWorks" defaultMessage="How it works" />
          }
          classes={classes}
        />
        <NavItem
          href="/data-brokers"
          text={<FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />}
          classes={classes}
        />
        <NavItem
          href="/#faq"
          text={<FormattedMessage id="faq" defaultMessage="FAQs" />}
          classes={classes}
        />
        <NavItem
          href="/data-brokers"
          text={<FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />}
          classes={classes}
        />        
        <NavItem
          href="/about"
          text={<FormattedMessage id="about" defaultMessage="About Us" />}
          classes={classes}
        />
        <div className={classes.OO}>
          <Button variant="raised" href="javascript:document.getElementById('companyNameSearch').focus()" color="secondary" type="submit" className={classes.OOButton}>
            {OOButtonText}
          </Button>
        </div>
      </ul>
    </nav>
  );
};
export default withStyles(styles)(Nav);
