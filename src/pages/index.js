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
import withRoot from "../withRoot";

class Index extends Component {
  static async getInitialProps({ query }) {
    if (query.company) {
      const companies = await fetchSheetData();
      const deeplinkedCompany = companies.find(({ name }) => query.company);
      return { deeplinkedCompany };
    }
  }

  state = {
    selectedCompany: null,
    manualCompanyEntryEnabled: false
  };

  onCompanySelected = selectedCompany => {
    if (selectedCompany.name) {
      this.updateQueryParams(selectedCompany.name);
      this.setState({
        selectedCompany,
        manualCompanyEntryEnabled: false
      });
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

  render() {
    const { deeplinkedCompany } = this.props;
    const { selectedCompany } = this.state;
    const company = deeplinkedCompany || selectedCompany;
    return (
      <div>
        <Hero>
          <SearchForm onCompanySelected={this.onCompanySelected} />
        </Hero>
        <Nav />
        {(company || this.state.manualCompanyEntryEnabled) && (
          <PersonalInfoForm selectedCompany={company} />
        )}
        <HowItWorks />
        <FAQ />
        <Social />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
