import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { TwitterShareButton } from 'react-share';

const styles = theme => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 60px',
    backgroundColor: '#005ea5',
    borderBottom: '4px solid #0a74be',
    height: '72px',
    width: '100%',
    zIndex: '11000',
    [theme.breakpoints.down('xs')]: {
      padding: '0 15px',
    },
    position: 'fixed',
    top: '0',
  },
  logoLink: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '90px',
    outlineColor: '#e8f4f8',

    [theme.breakpoints.down('xs')]: {
      width: '80px',
    },
  },
  container: {
    listStyle: 'none',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  item: {
    padding: '10px 0',
    marginRight: '24px',
    outlineColor: '#e8f4f8',
  },
  link: {
    color: '#f6f7fa',
    fontWeight: 'bolder',
    fontSize: '15px',
    textDecoration: 'none',
    outlineColor: '#e8f4f8',
  },
  subsectionLink: {
    color: '#bebebe',
    fontWeight: 'bolder',
    fontSize: '15px',
    textDecoration: 'none',
    outlineColor: '#e8f4f8',
  },
  hamburgerButton: {
    display: 'none',
    height: '50px',
    cursor: 'pointer',
    outlineColor: '#e8f4f8',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  navChildren: {
    position: 'fixed',
    height: '300px',
    width: '100%',
    top: '70px',
    zIndex: '9999',
  },
  mobileListContainer: {
    display: 'none',
    width: '216px',
    height: '100vh',
    position: 'fixed',
    right: '0',
    top: '0',
    float: 'right',
    color: '#ffffff',
    overflowX: 'hidden',
    zIndex: '10000',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  scrollOut: {
    position: 'absolute',
    right: '-216px',
    transition: ' right 0.5s',
  },
  scrollIn: {
    position: 'absolute',
    right: '0',
    transition: 'right 0.5s',
  },
  mobileList: {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#005ea5',
    position: 'absolute',
    right: '0',
    top: '0',
    margin: '0',
    width: '216px',
    height: '100vh',
    padding: '100px 25px',
    zIndex: '11000',
  },
  OptOutRedButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: '40px',
    backgroundColor: '#ef6a6e',
    fontSize: '14px',
    fontWeight: '800',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.15',
    letterSpacing: '1.25px',
    color: '#ffffff',
    borderRadius: '25px',
    margin: '25px 0',
    outlineColor: '#e8f4f8',
    cursor: 'pointer',
    paddingLeft: '20px',
    paddingRight: '20px',
    textDecoration: 'none',
  },
  OptOutRedButtonDesktop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: '40px',
    backgroundColor: '#ef6a6e',
    fontSize: '14px',
    fontWeight: '800',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.15',
    letterSpacing: '1.25px',
    color: '#ffffff',
    borderRadius: '25px',
    outlineColor: '#e8f4f8',
    cursor: 'pointer',
    marginRight: '24px',
    paddingLeft: '20px',
    paddingRight: '20px',
    textDecoration: 'none',
  },
  fadeBackground: {
    position: 'fixed',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    zIndex: '9999',
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  twitterHandle: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '120px',
    alignItems: 'center',
  },
});

const NavItem = ({
  href,
  text,
  classes,
  onClickHandler,
  subsection,
  dataTestId,
}) => {
  return (
    <li
      className={classes.item}
      onClick={onClickHandler}
      data-testid={dataTestId}
    >
      <Typography
        component="a"
        href={href}
        className={subsection ? classes.subsectionLink : classes.link}
      >
        {text}
      </Typography>
    </li>
  );
};

const NavListDesktop = ({ classes }) => {
  return (
    <ul className={classes.container}>
      <NavItem
        dataTestId="nav-desktop-howItWorks"
        href="/#howItWorks"
        text={
          <FormattedMessage id="howItWorks" defaultMessage="How it works" />
        }
        classes={classes}
      />
      <NavItem
        dataTestId="nav-desktop-faq"
        href="/#faq"
        text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
        classes={classes}
      />
      <NavItem
        dataTestId="nav-desktop-data-brokers"
        href="/data-brokers"
        text={
          <FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />
        }
        classes={classes}
      />
      <NavItem
        dataTestId="nav-desktop-extension"
        href="/#Extension"
        text={
          <FormattedMessage id="Extension" defaultMessage="Browser Extension" />
        }
        classes={classes}
      />

      <NavItem
        dataTestId="nav-desktop-about"
        href="/about"
        text={<FormattedMessage id="about" defaultMessage="About" />}
        classes={classes}
      />

      <a
        data-testId="nav-desktop-search-button"
        href="/#topOfPage"
        className={classes.OptOutRedButtonDesktop}
        tabIndex={0}
      >
        <Typography component="span" className={classes.link}>
          Search Company
        </Typography>
      </a>
    </ul>
  );
};

const NavListMobile = ({ classes, mobileNavOpen, toggleMobileNav }) => {
  return (
    <div className={mobileNavOpen ? classes.scrollIn : classes.scrollOut}>
      <ul className={classes.mobileList}>
        <NavItem
          dataTestId="nav-mob-howItWorks"
          onClickHandler={toggleMobileNav}
          href="/#howItWorks"
          text={
            <FormattedMessage id="howItWorks" defaultMessage="How it works" />
          }
          classes={classes}
        />
        <NavItem
          dataTestId="nav-mob-faq"
          onClickHandler={toggleMobileNav}
          href="/#faq"
          text={<FormattedMessage id="faq" defaultMessage="FAQ" />}
          classes={classes}
        />
        <NavItem
          dataTestId="nav-mob-data-brokers"
          onClickHandler={toggleMobileNav}
          href="/data-brokers"
          text={
            <FormattedMessage id="data-brokers" defaultMessage="Data Brokers" />
          }
          classes={classes}
        />
        <NavItem
          dataTestId="nav-mob-about"
          onClickHandler={toggleMobileNav}
          href="/about"
          text={<FormattedMessage id="about" defaultMessage="About" />}
          classes={classes}
        />
        <a
          dataTestId="nav-mob-search-button"
          href="/#topOfPage"
          className={classes.OptOutRedButton}
          tabIndex={0}
          onClick={toggleMobileNav}
        >
          <Typography component="span" className={classes.link}>
            Search Company
          </Typography>
        </a>

        <NavItem
          dataTestId="nav-mob-extension"
          onClickHandler={toggleMobileNav}
          href="/#Extension"
          subsection={true}
          text={
            <FormattedMessage
              id="extension"
              defaultMessage="Browser Extension"
            />
          }
          classes={classes}
        />

        <NavItem
          dataTestId="nav-mob-donations"
          onClickHandler={toggleMobileNav}
          href="/#donations"
          subsection={true}
          text={
            <FormattedMessage id="donation" defaultMessage="Make a Donation" />
          }
          classes={classes}
        />

        <NavItem
          dataTestId="nav-mob-privacy"
          onClickHandler={toggleMobileNav}
          href="/privacy"
          subsection={true}
          text={
            <FormattedMessage
              id="privacyPoilcy"
              defaultMessage="Privacy Policy"
            />
          }
          classes={classes}
        />

        <NavItem
          dataTestId="nav-mob-contact"
          onClickHandler={toggleMobileNav}
          href="/#Extension"
          subsection={true}
          text={<FormattedMessage id="contact" defaultMessage="Contact Us" />}
          classes={classes}
        />

        <NavItem
          dataTestId="nav-mob-twitterHastag"
          subsection={true}
          text={
            <div className={classes.twitterHandle}>
              <img src="static/sh/tw-grey.svg" />
              <FormattedMessage
                id="twitterHastag"
                defaultMessage="#ownyourdata"
              />
            </div>
          }
          classes={classes}
        />
      </ul>
    </div>
  );
};
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false,
    };
    this.toggleMenu = React.createRef();
    this.hamburgerButton = React.createRef();
    this.menuItem = React.createRef();

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.handleCloseNav = this.handleCloseNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleCloseNav);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseNav);
  }

  toggleMobileNav() {
    this.setState(currentState => {
      return {
        mobileNavOpen: !currentState.mobileNavOpen,
      };
    });
  }

  handleCloseNav(event) {
    if (
      this.state.mobileNavOpen &&
      !this.toggleMenu.current.contains(event.target) &&
      !this.hamburgerButton.current.contains(event.target)
    ) {
      this.setState({ mobileNavOpen: false });
    }
  }

  render() {
    const { classes, children } = this.props;
    const { mobileNavOpen } = this.state;

    return (
      <div>
        <nav ref={this.toggleMenu} className={classes.nav} data-testid="nav">
          <a className={classes.logoLink} href="/">
            <img
              className={classes.logo}
              src="static/type.svg"
              tabIndex={0}
            />
          </a>
          <NavListDesktop classes={classes} />
          <img
            className={classes.hamburgerButton}
            src={
              mobileNavOpen
                ? 'static/close-icon.svg'
                : 'static/hamburgerIcon.svg'
            }
            onBlur={this.onBlurHandler}
            onClick={this.toggleMobileNav}
            tabIndex={0}
          />
        </nav>
        <div className={classes.navChildren}>{children}</div>

        <div
          ref={this.hamburgerButton}
          className={classes.mobileListContainer}
          onFocus={this.onFocusHandler}
        >
          <NavListMobile
            classes={classes}
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={this.toggleMobileNav}
          />
        </div>
        {mobileNavOpen && <div className={classes.fadeBackground} />}
      </div>
    );
  }
}
export default withStyles(styles)(Nav);
