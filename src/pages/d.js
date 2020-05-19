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
  }

  static async getInitialProps({ query, res }) {
    if (query.domain) {
      const organizations = await fetchSheetData();
      const organization = organizations.find(
        ({ url }) => query.domain === url
      );
      if ({organization}) {
        return { organization };
      }
    } else {
      return { newOrg: true }
    }
  }

  render() {
    const { newOrg, organization, classes } = this.props;

    if (!newOrg && !organization) return <Error statusCode={404} />;

    const Title = organization ? "Opt-out of " + organization.name + " | Your Digital Rights" : "Add new organzation | Your Digital Rights";
    const Description = organization ? "Get " + organization.name + " to erase your personal data, send a GDPR or a CCPA request." :
      "Get thousands of organizations to erase your personal data, send a GDPR or a CCPA request.";
    const Canonical = organization ? "https://" + DOMAIN + "/d/" + organization.url + "/": "https://" + DOMAIN + "/";

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
          selectedCompany={organization}
        />
        <PersonalInfoForm
          selectedCompany={organization}
        />
        {organization && (
          <AboutOrg 
            selectedCompany={organization}
          />
        )}
        <Social offset={false} sourcePage="org" />
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Org));
