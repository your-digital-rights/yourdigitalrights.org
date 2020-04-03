import Head from "next/head";
import { Component } from "react";
import AboutOrg from "../components/AboutOrg";
import Donations from "../components/Donations";
import Footer from "../components/Footer";
import Hero from "../components/OrgHero";
import Nav from "../components/Nav";
import PersonalInfoForm from "../components/PersonalInfoForm";
import Social from "../components/Social";
import fetchSheetData from "../utils/sheets";
import pageWithIntl from "../components/PageWithIntl";
import tracking from "../utils/tracking";
import withRoot from "../withRoot";
import { DOMAIN } from "../utils/domain";
import Error from "next/error";

class Org extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCompany: null,
    };
  }

  static async getInitialProps({ query, res }) {
    if (query.domain) {
      const companies = await fetchSheetData();
      const deeplinkedCompany = companies.find(
        ({ url }) => query.domain === url
      );
      if ({deeplinkedCompany}) {
        return { deeplinkedCompany };
      } else {
        res.statusCode = 404;
      }
    }
  }

  render() {
    const { deeplinkedCompany, classes } = this.props;

    if (!deeplinkedCompany) return <Error statusCode={404} />;

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
        <Hero 
          selectedCompany={deeplinkedCompany}
        />
        <PersonalInfoForm
          selectedCompany={deeplinkedCompany}
        />
        <AboutOrg 
          selectedCompany={deeplinkedCompany}
        />
        <Social />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Org));
