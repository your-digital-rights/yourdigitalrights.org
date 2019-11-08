import Head from 'next/head';
import { Component } from "react";
import Donations from "../components/Donations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SearchForm from "../components/SearchForm";
import Social from "../components/Social";
import fetchSheetData from "../utils/sheets";
import pageWithIntl from "../components/PageWithIntl";
import tracking from "../utils/tracking";
import withRoot from "../withRoot";
import { DOMAIN } from "../utils/domain";

class Index extends Component {
  static async getInitialProps({ query }) {
    if (query.company) {
      const companies = await fetchSheetData();
      const deeplinkedCompany = companies.find(
        ({ url }) => query.company === url
      );
      return { deeplinkedCompany };
    }
  }

  state = {
    selectedCompany: null,
    manualCompanyEntryEnabled: false
  };

  onCompanySelected = selectedCompany => {
    if (selectedCompany.name) {
      this.updateQueryParams(selectedCompany.url);
      this.setState({
        selectedCompany,
        manualCompanyEntryEnabled: false
      });
      tracking.trackSelectedCompany(selectedCompany.name);
    } else {
      this.setState({
        selectedCompany: null,
        manualCompanyEntryEnabled: true
      });
    }
  };

  updateQueryParams(companyName) {
    if ("URLSearchParams" in window) {
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("company", companyName);
      history.pushState(null, null, "?" + searchParams.toString());
    }
  }

  constructor(props) {
    super(props);
    this.searchForm = React.createRef();

    if (typeof window !== "undefined" && window.location.hash !== "") {
      let hash = window.location.hash;

      setTimeout(() => {
        window.location.hash = "";
        window.location.hash = hash;
      }, 500);
    }
  }

  focusSearch() {
    let state = Object.assign({}, this.state);
    state.selectedCompany = null;
    this.setState(state);
    window.location.hash = "hero";
    this.searchForm.current.focus();
  }

  render() {
    const { deeplinkedCompany } = this.props;
    const { selectedCompany } = this.state;
    const company = deeplinkedCompany || selectedCompany;

    // TODO: Make these string translatable
    const Title = deeplinkedCompany ? "Opt-out of " + deeplinkedCompany.name + " | Your Digital Rights" : "Your Digital Rights";
    const Description = deeplinkedCompany ? "Get " + deeplinkedCompany.name + " to erase your personal data." :
      "Get thousands of organizations to erase your personal data.";
    const Canonical = deeplinkedCompany ? "https://" + DOMAIN + "/?company=" + deeplinkedCompany.url : "https://" + DOMAIN + "/";

    return (
      <div>
        <Head>
          <title>{Title}</title>
          <link rel="canonical" href={Canonical} />
          <meta name="description" content={Description} />
          <meta property="og:description" content={Description} />
          <meta
            property="og:title"
            content={Title}
          />
          <meta
            name="twitter:title"
            content={Title}
          />
          <meta
            name="twitter:description"
            content={Description}
          />
        </Head>
        <Hero>
          <SearchForm
            onCompanySelected={this.onCompanySelected}
            innerRef={this.searchForm}
          />
        </Hero>
        <Nav />
        {(company || this.state.manualCompanyEntryEnabled) && (
          <PersonalInfoForm
            selectedCompany={company}
            focusSearch={this.focusSearch.bind(this)}
          />
        )}
        <HowItWorks />
        <FAQ />
        <Social offset={true} sourcePage='homepage' />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
