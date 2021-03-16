import Head from "next/head";
import { Component } from "react";
import RedirectOverlay from "../components/RedirectOverlay";
import Donations from "../components/Donations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import Social from "../components/Social";
import pageWithIntl from "../components/PageWithIntl";
import tracking from "../utils/tracking";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import { DOMAIN } from "../utils/domain";
import Router from "next/router";

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

    this.searchForm = React.createRef();
    this.onSearchFormInputFocus = this.onSearchFormInputFocus.bind(this);

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

  searchFormWithProps = () => {
    return (
      <SearchForm
        innerRef={this.searchForm}
        inputFocusCondition={this.searchFormInputFocusCondition}
        onInputFocus={this.onSearchFormInputFocus}
      />
    );
  };

  componentDidMount() {
    if (Router.pathname == "/" && Router.query.company) {
      Router.push("/d/[domain]", "/d/" + Router.query.company + "/");
    }
    if (typeof window !== "undefined") {
      this.setState({ screenWidth: window.innerWidth });
      window.addEventListener("resize", this.onScreenResize);
      window.addEventListener("hashchange", this.handleHashChange);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onScreenResize);
      window.removeEventListener("hashchange", this.handleHashChange);
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

  searchFormInputFocusCondition = () => {
    const result = window.location.hash === "#hero";
    return result;
  };

  onSearchFormInputFocus() {
    let state = Object.assign({}, this.state);
    state.selectedCompany = null;
    this.setState(state);
  }

  handleHashChange = () => {
    this.searchForm.current.triggerInputFocus();
  };

  closeRedirectOverlay() {
    window.history.replaceState("home", "Home", "/");
    this.setState({ ...this.state, showRedirectOverlay: false });
  }

  render() {
    const { classes } = this.props;
    const { selectedCompany, screenWidth } = this.state;

    // TODO: Make these string translatable
    const Title = "Own Your Data | YourDigitalRights.org";
    const Description =
      "Delete your account or access the personal data organizations have on you quickly and easily with YourDigitalRight.org - a FREE service which makes exercising your right to privacy easy.";
    const Canonical = "https://" + DOMAIN;
    const searchURL = "https://" + DOMAIN + "/d/{search_term_string}/";

    return (
      <div>
        <Nav>
          {screenWidth !== null && screenWidth < tabletBreakpoint && (
            <this.searchFormWithProps />
          )}
        </Nav>
        <div className={classes.mainContainer}>
          <div className={classes.scrollableContainer}></div>
          <Head>
            <title>{Title}</title>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html:
                  '{"@context": "https://schema.org", "@type": "WebSite", "url": "' +
                  Canonical +
                  '", "potentialAction": { "@type": "SearchAction", "target": "' +
                  searchURL +
                  '", "query-input": "required name=search_term_string" }}',
              }}
            />
            <link rel="canonical" href={Canonical} />
            <meta name="description" content={Description} />
            <meta property="og:description" content={Description} />
            <meta property="og:title" content={Title} />
            <meta name="twitter:title" content={Title} />
            <meta name="twitter:description" content={Description} />
          </Head>
          <input className={classes.topOfPagePlaceholder} />
          <Hero>
            {screenWidth !== null && screenWidth >= tabletBreakpoint && (
              <div className={classes.desktopSearchbar}>
                <this.searchFormWithProps />
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

export default withRoot(pageWithIntl(withStyles(styles)(Index)));
