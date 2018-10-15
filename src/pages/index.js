import { Component } from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SearchForm from "../components/SearchForm";
import Social from "../components/Social";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";
import Donations from "../components/Donations";
import tracking from '../utils/tracking';

class Index extends Component {
  state = {
    selectedCompany: null,
    manualCompanyEntryEnabled: false
  };

  onCompanySelected = selectedCompany => {
    if (selectedCompany.name) {
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

  constructor(props) {
    super(props);
    this.searchForm = React.createRef();

    if (typeof window !== 'undefined' && window.location.hash !== '') {
      let hash = window.location.hash;

      setTimeout(() => {
        window.location.hash = '';
        window.location.hash = hash;
      }, 500);
    }
  }

  focusSearch() {
    let state = Object.assign({}, this.state);
    state.selectedCompany = null;
    this.setState(state);
    window.location.hash = 'hero';
    this.searchForm.current.focus();
  }

  render() {
    return (
      <div>
        <Hero>
          <SearchForm onCompanySelected={this.onCompanySelected} innerRef={this.searchForm} />
        </Hero>
        <Nav />
        {(this.state.selectedCompany ||
          this.state.manualCompanyEntryEnabled) && (
          <PersonalInfoForm selectedCompany={this.state.selectedCompany} focusSearch={this.focusSearch.bind(this)} />
        )}
        <HowItWorks />
        <FAQ />
        <Social offset={true} />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
