import Head from "next/head";
import { Component } from "react";
import AboutOrg from "../../components/AboutOrg";
import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Hero from "../../components/OrgHero";
import Nav from "../../components/Nav";
import PersonalInfoForm from "../../components/PersonalInfoForm";
import Social from "../../components/Social";
import fetchSheetData from "../../utils/sheets";
import pageWithIntl from "../../components/PageWithIntl";
import tracking from "../../utils/tracking";
import withRoot from "../../withRoot";
import { DOMAIN } from "../../utils/domain";
import Error from "next/error";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


class Org extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query, res }) {
    if (query.domain) {
      if (query.domain == 'add') {
        return { newOrg: true }
      }
      const organizations = await fetchSheetData();
      const organization = organizations.find(
        ({ url }) => query.domain === url
      );
      if ({organization}) {
        return { organization };
      }
    } 
  }

  render() {
    const { newOrg, organization, classes } = this.props;

    if (!newOrg && !organization) return <Error statusCode={404} />;

    const Title = organization ? Capitalize(organization.url) + " - Delete Your Account or Access Your Personal Data | YourDigitalRight.org" : "Send GDPR and CCPA Data Deletion and Access Requests | YourDigitalRight.org";
    const Description = organization ? "Request deletion of your account or access your personal data from " + Capitalize(organization.url) + " quickly and easily with YourDigitalRight.org - a FREE service which makes exercising your right to privacy easy." :
      "Send CCPA and GDPR data deletion and access requests to any organization quickly and easily with YourDigitalRight.org - a FREE service which makes exercising your right to privacy easy.";
    const Canonical = organization ? "https://" + DOMAIN + "/d/" + organization.url + "/": "https://" + DOMAIN + "/d/add/";

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
            canonical={Canonical}
          />
        )}
        <Donations />
        <Footer />
      </div>
    );
  }
}

export default withRoot(pageWithIntl(Org));
