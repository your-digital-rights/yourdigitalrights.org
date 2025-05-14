import { FormattedMessage } from "react-intl";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
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
import Button from "@mui/material/Button";

const trackSearchButtonLinkClick = (device) => {
  tracking.trackSearchButtonLinkClick(device);
};

const trackDonateButtonLinkClick = (device) => {
  tracking.trackDonate(device);
};

const StyledNav = styled('nav')(styles.nav);
const StyledLogoLink = styled('a')(styles.logoLink);
const StyledLogo = styled(Image)(styles.logo);
const StyledHamburgerButton = styled(Image)(styles.hamburgerButton);
const StyledNavChildren = styled('div')(styles.navChildren);
const StyledMobileListContainer = styled('div')(({ mobileNavOpen }) => ({
  ...styles.mobileListContainer,
  ...(mobileNavOpen ? styles.showMobContainer : styles.hideMobContainer)
}));
const StyledFadeBackground = styled('div')(styles.fadeBackground);
const StyledNavItem = styled('li')(styles.item);
const StyledNavLink = styled(Typography)(({ subsection }) => ({
  ...(subsection ? styles.subsectionLink : styles.link)
}));
const StyledContainer = styled('ul')(styles.container);
const StyledMobileList = styled('ul')(styles.mobileList);
const StyledLangSelect = styled(Select)(styles.langSelect);
const StyledDonateButton = styled(Button)(styles.DonateRedButton);
const StyledDonateButtonDesktop = styled(Button)(styles.DonateRedButtonDesktop);
const StyledLinkButton = styled(Typography)(styles.linkButton);
const StyledTwitterHandle = styled('div')(styles.twitterHandle);

const NavItem = ({
  href,
  text,
  onClickHandler,
  subsection,
  target,
}) => {
  return (
    <StyledNavItem onClick={onClickHandler}>
      <Link href={href} passHref>
        <StyledNavLink
          component="span"
          target={target}
          subsection={subsection ? "true" : undefined}
        >
          {text}
        </StyledNavLink>
      </Link>
    </StyledNavItem>
  );
};

const NavListDesktop = ({ router, handleLangChange }) => {
  return (
    <StyledContainer>
      <NavItem
        href="/#howItWorks"
        text={
          <FormattedMessage id="nav.howItWorks" defaultMessage="How it works" />
        }
      />
      <NavItem
        href="/#faq"
        text={<FormattedMessage id="nav.faq" defaultMessage="FAQ" />}
      />
      <NavItem
        href="https://databrokerswatch.org/top-ten"
        text={
          <FormattedMessage id="nav.data-brokers" defaultMessage="Data Brokers" />
        }
      />
      <NavItem
        href="https://consciousdigital.org/blog"
        text={<FormattedMessage id="nav.blog" defaultMessage="Blog" />}
      />
      <NavItem
        href="/contribute"
        text={<FormattedMessage id="nav.contribute" defaultMessage="Contribute" />}
      />
      <NavItem
        href="/about"
        text={<FormattedMessage id="nav.about" defaultMessage="About" />}
      />
      <li>
        <StyledLangSelect
          variant="standard"
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "100000"}}}
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
        </StyledLangSelect>
      </li>
      <li>
        <StyledDonateButtonDesktop
          onClick={() => trackDonateButtonLinkClick("nav desktop")}
          href="https://opencollective.com/consciousdigital"
          target="_blank"
        >
          <StyledLinkButton>
            <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
          </StyledLinkButton>
        </StyledDonateButtonDesktop>        
      </li>
    </StyledContainer>
  );
};

const NavListMobile = ({ mobileNavOpen, toggleMobileNav, router, handleLangChange }) => {
  return (
    <div
      className={classNames(
        mobileNavOpen ? styles.scrollIn : styles.scrollOut,
        "mob-navbar"
      )}
    >
      <StyledMobileList>
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/#howItWorks"
          text={
            <FormattedMessage id="nav.howItWorks" defaultMessage="How it works" />
          }
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/#faq"
          text={<FormattedMessage id="nav.faq" defaultMessage="FAQ" />}
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="https://databrokerswatch.org/top-ten"
          text={
            <FormattedMessage id="nav.data-brokers" defaultMessage="Data Brokers" />
          }
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="https://consciousdigital.org/blog"
          text={
            <FormattedMessage id="nav.blog" defaultMessage="Blog" />
          }
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/about"
          text={<FormattedMessage id="nav.about" defaultMessage="About" />}
        />
        <StyledLangSelect
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "10000"}}}
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
        </StyledLangSelect>
        <StyledDonateButton
          onClick={() => {
            toggleMobileNav();
            trackDonateButtonLinkClick("nav mobile");
          }}
          variant="contained"
          color="secondary"
          href="https://opencollective.com/consciousdigital"
          target="_blank"
          tabIndex={0}
        >
          <StyledLinkButton component="span">
            <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
          </StyledLinkButton>
        </StyledDonateButton>
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/contribute"
          subsection={true}
          text={<FormattedMessage id="nav.contribute" defaultMessage="Contribute" />}
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="/stats"
          subsection={true}
          text={<FormattedMessage id="nav.stats" defaultMessage="Stats" />}
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="https://opencollective.com/consciousdigital"
          subsection={true}
          text={
            <FormattedMessage id="nav.donation" defaultMessage="Make a Donation" />
          }
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
        />
        <NavItem
          onClickHandler={toggleMobileNav}
          href="mailto:info@yourdigitalrights.org"
          subsection={true}
          text={<FormattedMessage id="nav.contact" defaultMessage="Contact Us" />}
        />
        <NavItem
          subsection={true}
          target="_blank"
          href="https://twitter.com/search?q=ownyourdata&src=typeahead_click"
          text={
            <StyledTwitterHandle>
              <Image src={TWGrey} />
              <FormattedMessage
                id="nav.twitterHastag"
                defaultMessage="#ownyourdata"
              />
            </StyledTwitterHandle>
          }
        />
      </StyledMobileList>
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
    const { children } = this.props;
    const { mobileNavOpen } = this.state;
    const menuIcon = mobileNavOpen ? CloseIcon : HamburgerIcon;
    return (
      <div data-nosnippet>
        <StyledNav ref={this.toggleMenu}>
          <StyledLogoLink href="/">
            <StyledLogo alt="YourDigitalRights.org" src={Logo} tabIndex={0} />
          </StyledLogoLink>
          <NavListDesktop 
            router={this.props.router} 
            handleLangChange={this.handleLangChange}
          />
          <StyledHamburgerButton
            src={menuIcon}
            onClick={this.toggleMobileNav}
            tabIndex={0}
          />
        </StyledNav>
        <StyledNavChildren>{children}</StyledNavChildren>

        <StyledMobileListContainer
          ref={this.hamburgerButton}
          mobileNavOpen={mobileNavOpen}
        >
          <NavListMobile
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={this.toggleMobileNav}
            router={this.props.router}
            handleLangChange={this.handleLangChange}
          />
        </StyledMobileListContainer>
        {mobileNavOpen && <StyledFadeBackground />}
      </div>
    );
  }
}

export default withRouter(Nav);
