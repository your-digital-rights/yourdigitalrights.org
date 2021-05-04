import { useIntl } from "react-intl";
import AboutOrg from "../../components/AboutOrg";
import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Hero from "../../components/OrgHero";
import Nav from "../../components/Nav";
import PersonalInfoForm from "../../components/PersonalInfoForm";
import fetchSheetData from "../../utils/sheets";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";
import { withRouter } from "next/router";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Org = ({ organization, router }) => {
  const intl = useIntl();
  const Title = organization ? 
    intl.formatMessage({id: "org.titleExistingOrg", defaultMessage: "{org} - Delete Your Account or Get a Copy of Your Data"},{org: Capitalize(organization.url)}) : 
    intl.formatMessage({id: "org.titleNewOrg", defaultMessage: "Send GDPR and CCPA Data Deletion and Access Requests"});
  const Description = organization ? 
    intl.formatMessage({id: "org.descriptionExistingOrg", defaultMessage:"Request account deletion or a copy of your personal data from {org} quickly and easily using this free service."},{org: Capitalize(organization.url)}) : 
    intl.formatMessage({id: "org.DescriptionNewOrg", defaultMessage:"Send CCPA and GDPR data deletion and access requests to any organization quickly and easily using this free service."});
  const BaseURL = organization ? 
    "/d/" + organization.url : 
    "/d/add";

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