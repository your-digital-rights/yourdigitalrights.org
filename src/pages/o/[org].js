import Head from "next/head";
import { Component } from "react";
import Donations from "../components/Donations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import PersonalInfoForm from "../components/PersonalInfoForm";
import Social from "../components/Social";
import fetchSheetData from "../utils/sheets";
import pageWithIntl from "../components/PageWithIntl";
import tracking from "../utils/tracking";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import { DOMAIN } from "../utils/domain";

const styles = theme => ({
  topOfPagePlaceholder: {
    height: '72px',
  },
  mainContainer: {
    position: 'relative',
  },
  desktopSearchbar: {
    display: 'block',
  }
});

const tabletBreakpoint = 960;

class Org extends Component {
  constructor(props) {
    super(props);

  static async getInitialProps({ query }) {
    if (query.company) {
      const companies = await fetchSheetData();
      const deeplinkedCompany = companies.find(
        ({ url }) => query.company === url
      );
      return { deeplinkedCompany };
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ screenWidth: window.innerWidth });
      window.addEventListener('resize', this.onScreenResize);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onScreenResize);
    }
  }

  componentDidUpdate() {
    if (typeof window !== 'undefined' && this.infoForm) {
      let scrollTop = this.infoForm.getBoundingClientRect().top + window.pageYOffset - 122;
      window.scrollTo({ top: scrollTop });
    }
  }

  onScreenResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };


  render() {
    const { deeplinkedCompany, classes } = this.props;
    const { selectedCompany, screenWidth } = this.state;
    const company = deeplinkedCompany || selectedCompany;

    // TODO: Make these string translatable
    const Title = deeplinkedCompany ? "Opt-out of " + deeplinkedCompany.name + " | Your Digital Rights" : "Your Digital Rights";
    const Description = deeplinkedCompany ? "Get " + deeplinkedCompany.name + " to erase your personal data." :
      "Get thousands of organizations to erase your personal data.";
    const Canonical = deeplinkedCompany ? "https://" + DOMAIN + "/org/?company=" + deeplinkedCompany.url : "https://" + DOMAIN + "/";
    const URL = "https://" + DOMAIN + "/";
    const searchURL = "https://" + DOMAIN + "/org/?company={search_term_string}";


    return (
      <div>
        <Head>
          <title>{Title}</title>
          <link rel="canonical" href={Canonical} />
          <meta name="description" content={Description} />
          <meta property="og:description" content={Description} />
          <meta property="og:title" content={Title} />
          <meta name="twitter:title" content={Title} />
          <meta name="twitter:description" content={Description} />
        </Head>
        <Nav />
        <Hero>
          {screenWidth !== null && screenWidth >= tabletBreakpoint && (
            <div className={classes.desktopSearchbar}>
              <SearchForm
                onCompanySelected={this.onCompanySelected}
                innerRef={this.searchForm}
              />
            </div>
          )}
        </Hero>
        <PersonalInfoForm
          selectedCompany={company}
          focusSearch={this.focusSearch.bind(this)}
          containerRef={el => this.infoForm = el}
        />
        <Social offset={true} sourcePage="homepage" />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(withStyles(styles)(Org)));
