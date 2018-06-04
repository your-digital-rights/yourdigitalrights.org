import { Component } from "react";
import Hero from "../components/Hero";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SearchForm from "../components/SearchForm";
import fetchSheetData from "../utils/sheets";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";

class Index extends Component {
  state = {};

  static async getInitialProps() {
    let data = await fetchSheetData();
    return { companies: data };
  }

  componentDidMount() {
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
          <SearchForm
            onCompanySelected={this.onCompanySelected}
            companies={this.props.companies}
          />
        </Hero>
        {this.state.selectedCompany && (
          <PersonalInfoForm selectedCompany={this.state.selectedCompany} />
        )}
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
