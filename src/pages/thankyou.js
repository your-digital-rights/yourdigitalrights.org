import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { withRouter } from "next/router";
import ThanksMessage from "../components/ThanksMessage";

const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  title: {
    color: "white",
  },
});


const PrivacyAlerts = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "thankyou.description", defaultMessage: "Thank you"});
  const BaseURL = "/thankyou";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "thankyou.title", defaultMessage: "Thank You"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <div className={classes.container}>
          <ThanksMessage
            id="ThanksMessageContainer"
            className="thanks-message"
            requestType={router.query.requestType}
            regulationType={router.query.regulationType}
            selectedActionName={router.query.selectedActionName}
          />
      </div>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(withRouter(PrivacyAlerts));