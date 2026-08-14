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
  marginTop: "0px",
  paddingTop: "30px",
  paddingBottom: "0px",
  "& #subscribe": {
    marginTop: "0px",
    marginBottom: "30px",
  },
}));

const DeferredSection = styled('section')(() => ({
  contentVisibility: "auto",
  containIntrinsicSize: "1px 900px",
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
        <DeferredSection>
          <AboutOrg  
            selectedCompany={organization}
          />
        </DeferredSection>
      )}
      <DeferredSection>
        <SubscribeContainer>
          <Subscribe page="org"/>
        </SubscribeContainer>
        <Footer/>
      </DeferredSection>
    </div>
  )
}


// Render all pages on first request (to reduce build time)
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params, locale }) {
  const { getLocaleMessages } = await import('../../utils/localeMessages');
  const messages = await getLocaleMessages(locale);

  if (params.domain == 'add') {
    return {
      props: {
        newOrg: true,
        messages,
      }
    }
  } 
  
  // A lookup failure is deliberately left to propagate. With a one year
  // revalidate window, caching a notFound for a domain we simply could not
  // reach would hide it for a year; failing lets the next request retry.
  const data = await fetchDomainDetails(params.domain);

  if (typeof data == 'undefined') {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      organization: data['Domain'],
      messages,
    },
    // Domain profiles change infrequently. Refresh them explicitly when the
    // source data changes instead of letting crawler traffic drive regeneration.
    revalidate: 365 * 24 * 60 * 60, // 1 year
  }
}

export default withRouter(Org);
