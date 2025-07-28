import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { container } from "../styles/layout";
import { styled } from '@mui/material/styles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { useRouter } from 'next/router'
import Social from "../components/Social";
import tracking from "../utils/tracking";
import Script from 'next/script'

const StyledContainer = styled('div')(({ theme }) => ({
  position: "relative",
  ...container,
  paddingTop: "50px",
  marginTop: "60px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "20px",
  color: "black",
  backgroundColor: "white",
  paddingLeft: 120,
  paddingRight: 120,
  paddingTop: 30,
  paddingBottom: 50,
  [theme.breakpoints.down('md')]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

const StyledColumns = styled('div')(({ theme }) => ({
  marginTop: "2em",
  display: "flex",
  [theme.breakpoints.down('md')]: {
    flexDirection: "column",
  },
}));

const StyledDescriptionColumn = styled('div')(({ theme }) => ({
  width: "60%",   
  [theme.breakpoints.down('md')]: {
    width: "100%",    
  }
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.65rem",
  marginBottom: "15px",
  [theme.breakpoints.down('md')]: {
    fontSize: "20px",
  }
}));

const StyledMainDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.35rem",
  [theme.breakpoints.down('md')]: {
    marginBottom: "35px",
    fontSize: "18px",
  }
}));

const StyledPricing = styled('div')(({ theme }) => ({
  marginTop: "-30px",    
  [theme.breakpoints.up('md')]: {
    marginLeft: "70px",
  }      
}));


const Support = () => {
  const router = useRouter();
  const postPayment = (router.query.status === 'paid');
  const intl = useIntl();
  const Description = intl.formatMessage({id: "support.seoDescription", defaultMessage: "Paid support service gives you direct access to one of our staff members"});
  const BaseURL = "/support";

  const trackSubscribe = () => {
    tracking.trackSubscribe('Privacy Alerts Page');
  };

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "support.seoTitle", defaultMessage: "Support"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <StyledContainer>
        <StyledPaper elevation={2} >
        { postPayment ? (
          <>
            <Typography component="h1" variant="h4" gutterBottom={true}>
              <FormattedMessage
                id="support.posPaidtitle"
                defaultMessage="Thank you!"
              />
            </Typography>     
            <StyledMainDescription component="p" variant="h6">
              <FormattedMessage 
                id="support.postPaidDescription1" 
                defaultMessage="Please contact us via the following email address to access paid support:" 
              />
              <br/>
              <FormattedMessage 
                id="support.postPaidDescription2" 
                defaultMessage="{email}." 
                values={{
                  email: <a 
                            target="_blank" 
                            rel="noreferrer noopener"
                            href="mailto:support@yourdigitalrights.org"
                          >
                            support@yourdigitalrights.org
                          </a>
                }}
              />              
            </StyledMainDescription>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h4" gutterBottom={true}>
              <FormattedMessage
                id="support.title"
                defaultMessage="Paid Support"
              />
            </Typography>     
            <StyledColumns>
              <StyledDescriptionColumn>
              <StyledSubtitle component="h2" variant="h4">
                <FormattedMessage id="support.description1" defaultMessage="We understand that getting companies to delete your data can sometimes be frustrating." />
              </StyledSubtitle>
              <StyledMainDescription component="p" variant="h6"> 
                <FormattedMessage id="support.description2" defaultMessage="Our paid support service gives you direct access to one of our staff members, who will be happy to assist you with your data deletion or access request." />
              </StyledMainDescription>
              </StyledDescriptionColumn>
              <StyledPricing>
                <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                <stripe-pricing-table 
                  pricing-table-id="prctbl_1O6vggL6744XdVfOWc48gZU5"
                  publishable-key="pk_live_51Lhpu4L6744XdVfOEOM0kOeRaOaag73Lo9wbjnXqU4G9kfniyJf8aeQw8exGhu6yZwaPkJMHH6fQbB64Yx42JKR5008umYBaAw"
                >
                </stripe-pricing-table>
              </StyledPricing>    
              </StyledColumns> 
          </>       
        )}          
        </StyledPaper>
      </StyledContainer>
      <Social sourcePage="priceAlerts"/>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default Support;