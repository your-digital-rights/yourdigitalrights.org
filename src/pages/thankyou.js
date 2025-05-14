import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import { container } from "../styles/layout";
import { styled } from '@mui/material/styles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { useRouter } from "next/router";
import ThanksMessage from "../components/ThanksMessage";
import PropTypes from 'prop-types';

const Container = styled('div')(({ theme }) => ({
  position: "relative",
  ...container,
  paddingTop: "50px",
  marginTop: "60px",
  [theme.breakpoints.down('sm')]: {
    marginTop: "160px",
  },   
}));

const Title = styled('div')({
  color: "white",
});

const ThankYou = () => {
  const router = useRouter();
  const intl = useIntl();
  const Description = intl.formatMessage({id: "thankyou.description", defaultMessage: "Thank you"});
  const BaseURL = "/thankyou";

  // Only generate SEO data if we have a router
  const seoProps = router ? {
    title: intl.formatMessage({id: "thankyou.seotitle", defaultMessage: "Thank You"}),
    canonical: generateCanonical(BaseURL, router.locale),
    description: Description,
    openGraph: {
      description: Description,
    },
    languageAlternates: generateLangLinks(BaseURL)
  } : {};

  return (
    <div>
      <NextSeo {...seoProps} />
      <Nav />
      <Container>
          <ThanksMessage
            id="ThanksMessageContainer"
            className="thanks-message"
            requestType={router?.query?.requestType}
            regulationType={router?.query?.regulationType}
            selectedActionName={router?.query?.selectedActionName}
          />
      </Container>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default ThankYou;