import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import withStyles from '@mui/styles/withStyles';
import React, { Component } from "react";
import tracking from "../../utils/tracking";
import classNames from "classnames";
import styles from "./styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ALT_LANGUAGES } from '../../utils/langUtils';
import { withRouter } from 'next/router';
import Link from 'next/link';
import cookieCutter from 'cookie-cutter';
import Image from 'next/image';
import TWGrey from "../../../public/images/sh/tw-grey.svg";
import Logo from "../../../public/images/type.svg";
import CloseIcon from "../../../public/images/close-icon.svg";
import HamburgerIcon from "../../../public/images/hamburgerIcon.svg";

const trackSearchButtonLinkClick = (device) => {
  tracking.trackSearchButtonLinkClick(device);
};

const trackDonateButtonLinkClick = (device) => {
  tracking.trackDonate(device);
};

const NavItem = ({
  href,
  text,
  classes,
  onClickHandler,
  subsection,
  target,
}) => {
  return (
    <li className={classes.item} onClick={onClickHandler}>
      <Link href={href} className={classes.link} passHref legacyBehavior>
        <Typography
          component="a"
          target={target}
          className={subsection ? classes.subsectionLink : classes.link}
        >
          {text}
        </Typography>
      </Link>
    </li>
  );
};


const NavListDesktop = ({ classes, router, handleLangChange }) => {
  return (
    <ul className={classes.container}>
      <NavItem
        href="/#howItWorks"
        text={
          <FormattedMessage id="nav.howItWorks" defaultMessage="How it works" />
        }
        classes={classes}
      />
      <NavItem
        href="/#faq"
        text={<FormattedMessage id="nav.faq" defaultMessage="FAQ" />}
        classes={classes}
      />
      <NavItem
        href="https://databrokerswatch.org/top-ten"
        text={
          <FormattedMessage id="nav.data-brokers" defaultMessage="Data Brokers" />
        }
        classes={classes}
      />

      <NavItem
        href="/contribute"
        text={<FormattedMessage id="nav.contribute" defaultMessage="Contribute" />}
        classes={classes} 
      />

      <NavItem
        href="/about"
        text={<FormattedMessage id="nav.about" defaultMessage="About" />}
        classes={classes} 
      />

      <li>
        <Select
          variant="standard"
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "100000"}}}
          className={classNames(classes.langSelect, classes.link)}
        >
          {Object.keys(ALT_LANGUAGES).map((locale) => (
            <MenuItem key={locale} value={locale}>
              {ALT_LANGUAGES[locale]}
            </MenuItem>
          ))}
          <hr/>
          <MenuItem key="help_translate" value="contribute">  
            <FormattedMessage id="nav.helpTranslate" defaultMessage="Help translate" />
          </MenuItem>          
        </Select>
      </li>

      <li>
        <a
          href="https://opencollective.com/consciousdigital"
          target="_blank"
          className={classes.DonateRedButtonDesktop}
          tabIndex={0}
          onClick={() => trackDonateButtonLinkClick("desktop")}
        >
          <Typography component="span" className={classes.linkButton}>
            <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
          </Typography>
        </a>
      </li>

    </ul>
  );
};

const NavListMobile = ({ classes, mobileNavOpen, toggleMobileNav, router, handleLangChange }) => {
  return (
    <div
      className={classNames(
        mobileNavOpen ? classes.scrollIn : classes.scrollOut,
        "mob-navbar"
      )}
    >
      <ul className={classes.mobileList}>
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/#howItWorks"
          text={
            <FormattedMessage id="nav.howItWorks" defaultMessage="How it works" />
          }
          classes={classes}
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/#faq"
          text={<FormattedMessage id="nav.faq" defaultMessage="FAQ" />}
          classes={classes}
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="https://databrokerswatch.org/top-ten"
          text={
            <FormattedMessage id="nav.data-brokers" defaultMessage="Data Brokers" />
          }
          classes={classes}
        />

        <NavItem
          onClickHandler={toggleMobileNav}
          href="/about"
          text={<FormattedMessage id="nav.about" defaultMessage="About" />}
          classes={classes}
        />
        <Select
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "10000"}}}
          className={classNames(classes.langSelect, classes.link)}
        >
          {Object.keys(ALT_LANGUAGES).map((locale) => (
            <MenuItem key={locale} value={locale}>
              {ALT_LANGUAGES[locale]}
            </MenuItem>
          ))}
          <hr/>
          <MenuItem key="help_translate" value="contribute">  
            <FormattedMessage id="nav.helpTranslate" defaultMessage="Help translate" />
          </MenuItem>             
        </Select>
        <a
          href="/"
          className={classes.DonateRedButton}
          tabIndex={0}
          onClick={() => {
            toggleMobileNav();
            trackDonateButtonLinkClick("mobile");
          }}
        >
          <Typography component="span" className={classes.linkButton}>
            <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
          </Typography>
        </a>

        <NavItem
          onClickHandler={toggleMobileNav}
          href="/contribute"
          subsection={true}
          text={<FormattedMessage id="nav.contribute" defaultMessage="Contribute" />}
          classes={classes}
        />        

        <NavItem
          onClickHandler={toggleMobileNav}
          href="/stats"
          subsection={true}
          text={<FormattedMessage id="nav.stats" defaultMessage="Stats" />}
          classes={classes}
        />     

        <NavItem
          onClickHandler={toggleMobileNav}
          href="https://opencollective.com/consciousdigital"
          subsection={true}
          text={
            <FormattedMessage id="nav.donation" defaultMessage="Make a Donation" />
          }
          classes={classes}
        />

        <NavItem
          onClickHandler={toggleMobileNav}
          href="/privacy"
          subsection={true}
          text={
            <FormattedMessage
              id="nav.privacyPoilcy"
              defaultMessage="Privacy Policy"
            />
          }
          classes={classes}
        />

        <NavItem
          onClickHandler={toggleMobileNav}
          href="mailto:info@yourdigitalrights.org"
          subsection={true}
          text={<FormattedMessage id="nav.contact" defaultMessage="Contact Us" />}
          classes={classes}
        />

        <NavItem
          subsection={true}
          target="_blank"
          href="https://twitter.com/search?q=ownyourdata&src=typeahead_click"
          text={
            <div className={classes.twitterHandle}>
              <Image src={TWGrey} />
              <FormattedMessage
                id="nav.twitterHastag"
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
    window.addEventListener("click", this.handleCloseNav);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleCloseNav);
  }

  toggleMobileNav() {
    this.setState((currentState) => {
      return {
        mobileNavOpen: !currentState.mobileNavOpen,
      };
    });
  }

  handleLangChange = (event, router) => {
    cookieCutter.set('NEXT_LOCALE', event.target.value);
    router.push(router.asPath, router.asPath, {locale: event.target.value});
  };

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
    const menuIcon = mobileNavOpen ? CloseIcon : HamburgerIcon;
    return (
      <div>
        <nav ref={this.toggleMenu} className={classes.nav}>
          <a className={classes.logoLink} href="/">
            <Image className={classes.logo} src={Logo} tabIndex={0} />
          </a>
          <NavListDesktop 
            classes={classes} 
            router={this.props.router} 
            handleLangChange={this.handleLangChange} 
          />
          <Image
            className={classes.hamburgerButton}
            src={menuIcon}
            onBlur={this.onBlurHandler}
            onClick={this.toggleMobileNav}
            tabIndex={0}
          />
        </nav>
        <div className={classes.navChildren}>{children}</div>

        <div
          ref={this.hamburgerButton}
          className={classNames(
            classes.mobileListContainer,
            mobileNavOpen ? classes.showMobContainer : classes.hideMobContainer
          )}
          onFocus={this.onFocusHandler}
        >
          <NavListMobile
            classes={classes}
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={this.toggleMobileNav}
            router={this.props.router}
            handleLangChange={this.handleLangChange}
          />
        </div>
        {mobileNavOpen && <div className={classes.fadeBackground} />}
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(Nav));
