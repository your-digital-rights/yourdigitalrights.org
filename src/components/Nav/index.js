import { Component } from 'react';
import Link from 'next/link';
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
    borderBottom: "4px solid #0973be",
    padding: "0 8%"
  },
  containerDektop: {
    listStyle: "none",
    display: "flex",
    justifyContent: "flexEnd",
    float: "right",

    '@media (max-width: 768px)': {
      display: "none",
    },

    ...container
  },
  containerMobile: {
    display: "none",

    '@media (max-width: 768px)': {
      display: "block",
      paddingTop: "12px",
    }
  },
  containerMobileNavlistOpen: {
      display: "block",
      listStyle: "none",
      textAlign: "center",
  },
  containerMobileNavlist: {
      display: "none",
  },
  burger: {
    float: "right",
    width: "50px",
    height: "50px",
  },

  item: {
    padding: "20px 0",
    marginRight: "24px",
    alignSelf: "center",
  },
  itemMob: {
    padding: "10px 0",
    alignSelf: "center",
    margin: "auto"
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
    float: "left",
  },
  NavItem: {
    alignSelf: "flexEnd",
  },
  NavMobile: {
    fontWeight: "bold",
    'link': {
      color: "#fff",
    },
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

const NavItemMob = ({ href, text, classes }) => {
  return (
    <li className={classes.itemMob}>
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

class Nav extends Component  {
  constructor(props) {
    super(props);
    this.toggleMainNav = this.toggleMainNav.bind(this);
    this.state = {
      showMobileMenu: false
    }
  }

  toggleMainNav() {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  }

  render() {
    const { classes } = this.props;
    const { showMobileMenu } = this.state;
    return (
      <nav className={classes.nav} id="nav">
        <div className={classes.logo}>
          <Link href="/">
            <img
              src="static/optout.svg"
              alt="Opt out"
              className={classes.logoImg}
              role="presentation"
            />
          </Link>
        </div>
        <ul className={classes.containerDektop}>
          <NavItem
            href="/data-brokers"
            text={<FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />}
            classes={classes}
          />
          <NavItem
            href="/#howItWorks"
            className={classes.NavItem}
            text={
              <FormattedMessage id="howItWorks" defaultMessage="How it Works" />
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
            text={<FormattedMessage id="about" defaultMessage="About Us" />}
            classes={classes}
          />
          <div className={classes.OO}>
            <Button variant="raised" href="javascript:document.getElementById('companyNameSearch').focus()" color="secondary" type="submit" className={classes.OOButton}>
              {OOButtonText}
            </Button>
          </div>
        </ul>
        <div className={classes.containerMobile}>
          <div className={classes.burger} onClick={this.toggleMainNav}>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="#fff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
          <ul className={showMobileMenu ? classes.containerMobileNavlistOpen : classes.containerMobileNavlist}>
            <NavItemMob
              href="/#howItWorks"
              className={classes}
              text={
                <FormattedMessage id="howItWorks" defaultMessage="How it Works" />
              }
              classes={classes}
            />
            <NavItemMob
              href="/#faq"
              text={<FormattedMessage id="faq" defaultMessage="FAQs" />}
              classes={classes}
            />
            <NavItemMob
              href="/data-brokers"
              text={<FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />}
              classes={classes}
            />
            <div className={classes.OO}>
                <Button variant="raised" href="javascript:document.getElementById('companyNameSearch').focus()" color="secondary" type="submit" className={classes.OOButton}>
                  Opt out
                </Button>
            </div>
            <NavItemMob
              href="/privacy"
              text={<FormattedMessage id="Privacy-policy" defaultMessage="Privacy Policy" />}
              classes={classes}
            />
            <NavItemMob
              href="/about"
              className={classes}
              text={
                <FormattedMessage id="Mission" defaultMessage="Mission" />
              }
              classes={classes}
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Nav);
