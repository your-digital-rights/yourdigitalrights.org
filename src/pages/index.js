import { injectIntl } from "react-intl";
import { createRef, Component } from "react";
import RedirectOverlay from "../components/RedirectOverlay";
import Donations from "../components/Donations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import Social from "../components/Social";
import tracking from "../utils/tracking";
import { withStyles } from "@material-ui/core/styles";
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import {
  searchOrganizationsUrlAnchor,
  heroUrlAnchor,
} from "../utils/urlAnchors";

const styles = (theme) => ({
  topOfPagePlaceholder: {
    height: "72px",
  },
  mainContainer: {
    position: "relative",
  },
  desktopSearchbar: {
    display: "block",
  },
});

const tabletBreakpoint = 960;

class Index extends Component {
  constructor(props) {
    super(props);

    this.searchFormRef = createRef();
    this.beforeFocusOnSearchForm = this.beforeFocusOnSearchForm.bind(this);

    this.state = {
      selectedCompany: null,
      screenWidth: null,
      showRedirectOverlay: false,
    };

    if (
      typeof window !== "undefined" &&
      window.location.search.includes("source=optouteu")
    ) {
      this.state.showRedirectOverlay = true;
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({ screenWidth: window.innerWidth });
      window.addEventListener("resize", this.onScreenResize);

      window.addEventListener("hashchange", this.onLocationHashChange);
      this.remapLocationHash();
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("hashchange", this.onLocationHashChange);
      window.removeEventListener("resize", this.onScreenResize);
    }
  }

  componentDidUpdate() {
    if (typeof window !== "undefined" && this.infoForm) {
      let scrollTop =
        this.infoForm.getBoundingClientRect().top + window.pageYOffset - 122;
      window.scrollTo({ top: scrollTop });
    }
  }

  onScreenResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  onCompanySelected = (selectedCompany) => {
    if (selectedCompany.name) {
      tracking.trackSelectedCompany(selectedCompany.url);
    }
  };

  onLocationHashChange = () => {
    this.remapLocationHash();
    this.triggerFocusOnSearchForm();
  };

  remapLocationHash = () => {
    if (!window) {
      return;
    }

    if (window.location.hash === `#${searchOrganizationsUrlAnchor}`) {
      window.location.hash = heroUrlAnchor;
    }
  };

  beforeFocusOnSearchForm() {
    const shouldFocus = window && window.location.hash === `#${heroUrlAnchor}`;
    if (!shouldFocus) {
      return false;
    }

    let state = Object.assign({}, this.state);
    state.selectedCompany = null;
    this.setState(state);

    return true;
  }

  triggerFocusOnSearchForm() {
    if (!this.beforeFocusOnSearchForm()) {
      return;
    }

    this.searchFormRef.current.focusInput();
  }

  closeRedirectOverlay() {
    window.history.replaceState("home", "Home", "/");
    this.setState({ ...this.state, showRedirectOverlay: false });
  }

  renderSearchForm() {
    return (
      <SearchForm
        innerRef={this.searchFormRef}
        beforeFocus={this.beforeFocusOnSearchForm}
      />
    );
  }

  render() {
    const { classes, intl } = this.props;
    const { screenWidth } = this.state;
    const BaseURL = "";
    const Description = intl.formatMessage({id: "index.description", defaultMessage: "Delete your account or access the personal data organizations have on you using this free service."});
    
    return (
      <div>
        <Nav>
          {screenWidth !== null &&
            screenWidth < tabletBreakpoint &&
            this.renderSearchForm()}
        </Nav>
        <div className={classes.mainContainer}>
          <div className={classes.scrollableContainer}></div>
          <NextSeo
            canonical = {generateCanonical(BaseURL, this.props.router.locale)}
            openGraph = {{
              description: Description,
            }}
            languageAlternates = {generateLangLinks(BaseURL)}
          />
          <input className={classes.topOfPagePlaceholder} />
          <Hero>
            {screenWidth !== null && screenWidth >= tabletBreakpoint && (
              <div className={classes.desktopSearchbar}>
                {this.renderSearchForm()}
              </div>
            )}
          </Hero>
          <HowItWorks />
          <FAQ />
          <Social offset={true} sourcePage="homepage" />
          <Donations />
          <Footer />
          {this.state.showRedirectOverlay && (
            <RedirectOverlay close={() => this.closeRedirectOverlay()} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(injectIntl(Index)));