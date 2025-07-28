import { useIntl } from "react-intl";
import { useRef, useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import tracking from "../utils/tracking";
import { styled } from '@mui/material/styles';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import PressCoverage from "../components/PressCoverage";

const TopOfPagePlaceholder = styled('input')(() => ({
  height: "72px",
}));

const MainContainer = styled('div')(() => ({
  position: "relative",
}));

const DesktopSearchbar = styled('div')(() => ({
  display: "block",
}));

const Press = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: "none",
  },    
}));

const SubscribeContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: "-145px",
  paddingTop: "210px",
  paddingBottom: "30px",
}));

const tabletBreakpoint = 900;

const Index = ({ router }) => {
  const intl = useIntl();
  const [screenWidth, setScreenWidth] = useState(null);
  const BaseURL = "";
  const Description = intl.formatMessage({id: "index.description", defaultMessage: "Delete your account or access the personal data organizations have on you using this free service."});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", onScreenResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onScreenResize);
      }
    }
  }, []);

  const onScreenResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const renderSearchForm = () => {
    return (
      <SearchForm/>
    );
  }

  return (
    <div>
      <Nav>
        {screenWidth !== null &&
          screenWidth < tabletBreakpoint &&
          renderSearchForm()}
      </Nav>
      <MainContainer>
        <div></div>
        <NextSeo
          canonical = {generateCanonical(BaseURL, router.locale)}
          description = {Description}
          openGraph = {{
            description: Description,
          }}
          languageAlternates = {generateLangLinks(BaseURL)}
        />
        <TopOfPagePlaceholder />
        <Hero>
          {screenWidth !== null && screenWidth >= tabletBreakpoint && (
            <DesktopSearchbar>
              {renderSearchForm()}
            </DesktopSearchbar>
          )}
        </Hero>
        <Press>
          <PressCoverage />
        </Press>
        <HowItWorks />
        <FAQ />
        <SubscribeContainer>
          <Subscribe page="homepage" />
        </SubscribeContainer>
        <Footer />
      </MainContainer>
    </div>
  );
}

export default withRouter(Index);