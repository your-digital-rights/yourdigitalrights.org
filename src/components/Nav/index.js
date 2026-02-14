import { FormattedMessage } from "react-intl";
import React, { Component } from "react";
import tracking from "../../utils/tracking";
import classNames from "classnames";
import * as S from "./styles";
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

const NavItem = ({
  href,
  text,
  onClickHandler,
  subsection,
  target,
}) => {
  return (
    <S.StyledItem onClick={onClickHandler}>
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        <S.StyledLink
          as="span"
          $subsection={subsection}
        >
          {text}
        </S.StyledLink>
      </Link>
    </S.StyledItem>
  );
};


const NavListDesktop = ({ router, handleLangChange }) => {
  return (
    <S.StyledContainer>
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
        <Select
          variant="standard"
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "100000"}}}
          sx={{
            margin: "15px 24px 0px 0px",
            color: "#f6f7fa",
            fontWeight: "bolder",
            fontSize: "15px",
            textDecoration: "none",
            outlineColor: "#e8f4f8",
          }}
        >
          {Object.keys(ALT_LANGUAGES)
            .sort((a, b) => ALT_LANGUAGES[a].localeCompare(ALT_LANGUAGES[b]))
            .map((locale) => (
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
        <S.StyledDonateRedButtonDesktop
          onClick={() => trackDonateButtonLinkClick("nav desktop")}
          href="/donate"
        >
          <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
        </S.StyledDonateRedButtonDesktop>
      </li>

    </S.StyledContainer>
  );
};

const NavListMobile = ({ mobileNavOpen, toggleMobileNav, router, handleLangChange }) => {
  return (
    <S.StyledScrollContainer
      $mobileNavOpen={mobileNavOpen}
      className="mob-navbar"
    >
      <S.StyledMobileList>
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
        <Select
          value={router.locale}
          onChange={event => handleLangChange(event, router)}
          MenuProps={{style: {zIndex: "10000"}}}
          sx={{
            margin: "15px 24px 0px 0px",
            color: "#f6f7fa",
            fontWeight: "bolder",
            fontSize: "15px",
            textDecoration: "none",
            outlineColor: "#e8f4f8",
          }}
        >
          {Object.keys(ALT_LANGUAGES)
            .sort((a, b) => ALT_LANGUAGES[a].localeCompare(ALT_LANGUAGES[b]))
            .map((locale) => (
              <MenuItem key={locale} value={locale}>
                {ALT_LANGUAGES[locale]}
              </MenuItem>
            ))}
          <hr/>
          <MenuItem key="help_translate" value="contribute">  
            <FormattedMessage id="nav.helpTranslate" defaultMessage="Help translate" />
          </MenuItem>             
        </Select>

        <Button
          onClick={() => {
            toggleMobileNav();
            trackDonateButtonLinkClick("nav mobile");
          }}
          variant="contained"
          color="secondary"
          href="/donate"
          sx={{
            backgroundColor: "#ef6a6e",
            fontSize: "14px",
            fontWeight: "400",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "1.15",
            color: "#ffffff",
            borderRadius: "25px",
            margin: "20px 0",
          }}
          tabIndex={0}
        >
          <S.StyledLinkButton>
            <FormattedMessage id="nav.donate" defaultMessage="Make a Donation"/>
          </S.StyledLinkButton>
        </Button>  

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
          href="/donate"
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
            <S.StyledTwitterHandle>
              <Image src={TWGrey} alt="" aria-hidden="true" />
              <FormattedMessage
                id="nav.twitterHastag"
                defaultMessage="#ownyourdata"
              />
            </S.StyledTwitterHandle>
          }
        />
      </S.StyledMobileList>
    </S.StyledScrollContainer>
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
        <S.StyledNav ref={this.toggleMenu}>
          <S.StyledLogoLink href="/">
            <S.StyledLogo tabIndex={0}>
              <img
                alt="YourDigitalRights.org"
                src={Logo.src}
                width={90}
                height={30}
              />
            </S.StyledLogo>
          </S.StyledLogoLink>
          <NavListDesktop 
            router={this.props.router} 
            handleLangChange={this.handleLangChange} 
          />
          <S.StyledHamburgerButton
            onBlur={this.onBlurHandler}
            onClick={this.toggleMobileNav}
            tabIndex={0}
          >
            <Image
              src={menuIcon}
              alt="Menu"
              width={50}
              height={50}
            />
          </S.StyledHamburgerButton>
        </S.StyledNav>
        <S.StyledNavChildren>{children}</S.StyledNavChildren>

        <S.StyledMobileListContainer
          ref={this.hamburgerButton}
          $mobileNavOpen={mobileNavOpen}
          onFocus={this.onFocusHandler}
        >
          <NavListMobile
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={this.toggleMobileNav}
            router={this.props.router}
            handleLangChange={this.handleLangChange}
          />
        </S.StyledMobileListContainer>
        {mobileNavOpen && <S.StyledFadeBackground />}
      </div>
    );
  }
}
export default withRouter(Nav);
