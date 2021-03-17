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


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Org = ({ newOrg, organization, classes }) => {

  const Title = organization ? Capitalize(organization.url) + " - Delete Your Account or Get a Copy of Your Data | YourDigitalRight.org" : "Send GDPR and CCPA Data Deletion and Access Requests | YourDigitalRight.org";
  const Description = organization ? "Request account deletion or a copy of your personal data from  " + Capitalize(organization.url) + " quickly and easily with YourDigitalRight.org - a FREE service which makes exercising your right to privacy easy." :
    "Send CCPA and GDPR data deletion and access requests to any organization quickly and easily with YourDigitalRight.org - a FREE service which makes exercising your right to privacy easy.";
  const Canonical = organization ? "https://" + DOMAIN + "/d/" + organization.url : "https://" + DOMAIN + "/d/add";

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
  )
}

export async function getStaticPaths() {
  const organizations = await fetchSheetData();

  const paths = organizations.map((org) => ({
    params: { domain: org.url },
  }))
  
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  if (params.domain == 'add') {
    return {
      props: {
        newOrg: true,   
      }
    }
  }  

  const organizations = await fetchSheetData();
  const organization = organizations.find(
    ({ url }) => params.domain === url
  );

  return {
    notFound: organization.length == 0,
    props: {
      organizations,
    },
    revalidate: 60*60
  }
}


export default withRoot(pageWithIntl(Org));
