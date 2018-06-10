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

class Index extends Component {
  state = {};

  async componentDidMount() {
    window.$location = window.location;
  }

  onCompanySelected = selectedCompany => {
    if (selectedCompany.name) {
      this.setState({
        selectedCompany
      });
    } else {
      this.setState({
        noCompanySelected: true
      });
    }
  };

  render() {
    return (
      <div>
        <Hero>
          <SearchForm onCompanySelected={this.onCompanySelected} />
        </Hero>
        <Nav />
        {(this.state.selectedCompany || this.state.noCompanySelected) && (
          <PersonalInfoForm selectedCompany={this.state.selectedCompany} />
        )}
        <HowItWorks />
        <FAQ />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
