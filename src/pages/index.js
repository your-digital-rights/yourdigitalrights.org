import { Component } from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import SearchForm from "../components/SearchForm";
import fetch from "universal-fetch";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";

const SHEET_ID = "1tBtKWcOnLOs2cwqs_EX0ldTCaG3gh_7neQpaIYHBvJE";

class Index extends Component {
  state = {};

  static async getInitialProps() {
    let data = await fetch(
      `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/od6/public/values?alt=json`
    );
    data = await data.json();
    data = data.feed.entry.map(company => {
      return {
        name: company["gsx$companyname"]["$t"],
        email: company["gsx$email"]["$t"]
      };
    });
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
        <SearchForm
          onCompanySelected={this.onCompanySelected}
          companies={this.props.companies}
        />
        {this.state.selectedCompany && (
          <PersonalInfoForm companyEmail={this.state.selectedCompany.email} />
        )}
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Index));
