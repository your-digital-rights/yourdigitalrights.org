import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import { container } from "../styles/layout";
import { styled } from '@mui/material/styles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { withRouter } from "next/router";
import ThanksMessage from "../components/ThanksMessage";
import PropTypes from 'prop-types';

const StyledContainer = styled('div')(({ theme }) => ({
  position: "relative",
  ...container,
  paddingTop: "50px",
  marginTop: "60px",
  [theme.breakpoints.down('sm')]: {
    marginTop: "160px",
  },   
}));

const Title = styled('div')(() => ({
  color: "white",
}));


const PrivacyAlerts = ({ router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "thankyou.description", defaultMessage: "Thank you"});
  const BaseURL = "/thankyou";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "thankyou.seotitle", defaultMessage: "Thank You"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <StyledContainer>
          <ThanksMessage
            id="ThanksMessageContainer"
            className="thanks-message"
            requestType={router.query.requestType}
            regulationType={router.query.regulationType}
            selectedActionName={router.query.selectedActionName}
          />
      </StyledContainer>
      <Footer showRoadmap={false} />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const { getLocaleMessages } = await import('../utils/localeMessages');
  return {
    props: {
      messages: await getLocaleMessages(locale),
    },
  };
}

export default withRouter(PrivacyAlerts);
