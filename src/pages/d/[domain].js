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
import tracking from "../../utils/tracking";
import { DOMAIN } from "../../utils/domain";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";
import { withRouter } from "next/router";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Org = ({ newOrg, organization, classes, router }) => {

  const Title = organization ? Capitalize(organization.url) + " - Delete Your Account or Get a Copy of Your Data" : "Send GDPR and CCPA Data Deletion and Access Requests";
  const Description = organization ? "Request account deletion or a copy of your personal data from " + Capitalize(organization.url) + " quickly and easily using this free service." :
    "Send CCPA and GDPR data deletion and access requests to any organization quickly and easily using this free service.";
  const BaseURL = organization ? "/d/" + organization.url : "/d/add";

  return (
    <div>
    <NextSeo
        title = {Title}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />       
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
          canonical={generateCanonical(BaseURL, 'en')}
        />
      )}
      <Donations />
      <Footer />
    </div>
  )
}


// Render all pages on first request (to reduce build time)
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
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
    notFound: typeof organization == 'undefined',
    props: {
      organization,
    },
    revalidate: 60*60
  }
}



export default withRouter(Org);