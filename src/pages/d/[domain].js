import { useIntl } from "react-intl";
import AboutOrg from "../../components/AboutOrg";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Hero from "../../components/OrgHero";
import Nav from "../../components/Nav";
import PersonalInfoForm from "../../components/PersonalInfoForm";
import { fetchDomainDetails } from "../../utils/domains";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";
import { withRouter } from "next/router";
import { styled } from '@mui/material/styles';

const SubscribeContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: "-145px",
  paddingTop: "150px",
  paddingBottom: "30px",
}));

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Org = ({ organization, router, newOrg }) => {
  const intl = useIntl();
  const Title = organization ? 
    intl.formatMessage({id: "org.titleExistingOrg", defaultMessage: "Delete Your {org} Account or Get a Copy of Your Data"},{org: Capitalize(organization.url)}) : 
    intl.formatMessage({id: "org.titleNewOrg", defaultMessage: "Send GDPR, CCPA and LGPD Data Deletion and Access Requests"});
  const Description = organization ? 
    intl.formatMessage({id: "org.descriptionExistingOrg", defaultMessage:"Request account deletion or a copy of your personal data from {org} quickly and easily."},{org: Capitalize(organization.url)}) : 
    intl.formatMessage({id: "org.DescriptionNewOrg", defaultMessage:"Send GDPR, CCPA and LGPD data deletion and access requests to any organization quickly and easily."});
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
      { !newOrg && (
        <AboutOrg  
          selectedCompany={organization}
        />
      )}
      <SubscribeContainer>
        <Subscribe page="org"/>
      </SubscribeContainer>
      <Footer/>
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
  
  const data = await fetchDomainDetails(params.domain); 
  
  if (typeof data == 'undefined') {
    return {
      notFound: true,
    }
  }

  return {
    notFound: data.statusCode > 400,
    props: {
      organization: data['Domain'],
    },
    revalidate: 60*60*24*7 // 7 days
  }
}

export default withRouter(Org);