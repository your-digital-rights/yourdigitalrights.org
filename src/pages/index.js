import { Component } from "react";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
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
    this.setState({
      selectedCompany
    });
  };

  render() {
    return (
      <div>
        <Hero>
          <SearchForm onCompanySelected={this.onCompanySelected} />
        </Hero>
        <Nav />
        {this.state.selectedCompany && (
          <PersonalInfoForm selectedCompany={this.state.selectedCompany} />
        )}
        <FAQ />
        <Social />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
