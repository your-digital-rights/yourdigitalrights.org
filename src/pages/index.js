import { injectIntl } from "react-intl";
import { useRef, useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import tracking from "../utils/tracking";
import withStyles from '@mui/styles/withStyles';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import PressCoverage from "../components/PressCoverage";

const styles = (theme) => ({
  topOfPagePlaceholder: {
    height: "72px",
  },
  mainContainer: {
    position: "relative",
  },
  desktopSearchbar: {
    display: "block",
  },
  press: {
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },    
  },
  subscribeContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "-145px",
    paddingTop: "210px",
    paddingBottom: "30px",
  },  
});

const tabletBreakpoint = 900;

const Index = ({ classes, intl, router }) => {
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
      <div className={classes.mainContainer}>
        <div className={classes.scrollableContainer}></div>
        <NextSeo
          canonical = {generateCanonical(BaseURL, router.locale)}
          description = {Description}
          openGraph = {{
            description: Description,
          }}
          languageAlternates = {generateLangLinks(BaseURL)}
        />
        <input className={classes.topOfPagePlaceholder} />
        <Hero>
          {screenWidth !== null && screenWidth >= tabletBreakpoint && (
            <div className={classes.desktopSearchbar}>
              {renderSearchForm()}
            </div>
          )}
        </Hero>
        <div className={classes.press}>
          <PressCoverage />
        </div>
        <HowItWorks />
        <FAQ />
        <div className={classes.subscribeContainer}>
          <Subscribe page="homepage" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default withStyles(styles)(withRouter(injectIntl(Index)));