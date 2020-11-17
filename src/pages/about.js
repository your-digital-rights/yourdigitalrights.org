import Head from "next/head";
import { FormattedDate, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Donations from "../components/Donations";

const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  inner: {
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
});

// TODO: Make these string translatable
const Title = "About Us | Your Digital Rights";
const Description =
  "Your Digital Rights was created because we believe that you have the right to privacy, and that exercising your right to privacy should be easy.";
const Canonical = "https://yourdigitalrights.org/about";

const About = ({ classes }) => {
  return (
    <div>
      <Head>
        <title>{Title}</title>
        <link rel="canonical" href={Canonical} />
        <meta name="description" content={Description} />
        <meta property="og:description" content={Description} />
        <meta property="og:title" content={Title} />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
      </Head>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner}>
          <Typography component="h1" variant="display1" gutterBottom={true}>
            <FormattedMessage id="aboutTitle" defaultMessage="Our mission" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody1"
              defaultMessage="YourDigitalRights.org was created because we believe that privacy is a basic human right, and that exercising this right should be easy. The European {gdpr} (GDPR) and the {ccpa} (CCPA) provide the legal infrastructure to protect people’s fundamental right of privacy online."
              values={{
                gdpr: (
                  <a href="https://www.eugdpr.org">
                    General Data Protection Regulations
                  </a>
                ),
                ccpa: (
                  <a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
                    California Consumer Privacy Act
                  </a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody2"
              defaultMessage="Privacy regulations such as the GDPR and the CCPA are a step in the right direction, but exercising your rights under these legislations is still hard enough for most people not to bother with it. The situation is made worse because many organizations make it hard to file data requests (for example by not publishing any corporate email addresses on their website). The purpose of this service is to make the rights granted by these legislations accessible to everyone."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody3"
              defaultMessage="This is a free service. We are not a business and do not have a business model. We do not offer any services to the organizations on the list. We do not collect or trade any personal data. This service is {oss}."
              values={{
                oss: (
                  <a href="https://github.com/opt-out-eu/opt-out">
                    Open Source
                  </a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="display2">
            <FormattedMessage id="helpUs" defaultMessage="Interested in joining us?" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="helpUsBody1"
              defaultMessage="If you are concerned about the loss of privacy, rampant surveillance capitalism, micro-targeting and misinformation and the addictive nature of digital services then we’d love for you to join us! We’re looking for volunteers, particularly React devs and data scientists, but anyone is welcome. Please contact us at {email}."
              values= {{
                email: <a href="mailto:info@opt-out.eu">info@opt-out.eu</a>,
              }}
            />
          </Typography>
          <br />          
          <br />
          <Typography gutterBottom={true} component="h2" variant="display2">
            <FormattedMessage id="funding" defaultMessage="Funding" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="fundingBody1"
              defaultMessage="This project is self funded by it’s creators, and with the help of your donations."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="display2">
            <FormattedMessage id="createdBy" defaultMessage="Created by" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody1"
              defaultMessage="{linkedin} - Entrepreneur, investor, independent academic, digital activist."
              values={{
                linkedin: (
                  <a href="https://www.linkedin.com/in/yoava">Yoav Aviram</a>
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody2"
              defaultMessage="{linkedin} - Product designer, consultant and visiting lecturer at London College of Communication."
              values={{
                linkedin: (
                  <a href="https://www.linkedin.com/in/rafaprada">Rafa Prada</a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="display2">
            <FormattedMessage id="contributors" defaultMessage="Contributors" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contributorsBody1"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: (
                  <a href="https://www.linkedin.com/in/mark-gerrard-56865012/">
                    Mark Gerrard
                  </a>
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody3"
              defaultMessage="{linkedin} - Frontend web developer, mobile app developer and creator of Skyjacker, the AR flight tracking game."
              values={{
                linkedin: (
                  <a href="https://www.linkedin.com/in/robertchandler85">
                    Rob Chandler
                  </a>
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contributorsBody2"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: (
                  <a href="https://www.linkedin.com/in/steeve-george-vadakkumchery-2319878a/">
                    Steeve George Vadakkumchery
                  </a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="display2">
            <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="cookiesBody"
              defaultMessage="We’d like to thank the following organizations for supporting our open source effort buy providing a free or discounted version of their services:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody1"
              defaultMessage="{crunchbase} - for providing a snapshot of their company database which we use to enrich our list of organizations."
              values={{
                crunchbase: <a href="https://www.crunchbase.com">Crunchbase</a>,
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody2"
              defaultMessage="{innocraft} - for providing a hosted version of Matomo (Piwik), the open source and privacy minded web analytics platform."
              values={{
                innocraft: <a href="https://innocraft.cloud">Innocraft</a>,
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody3"
              defaultMessage="{featureupvote} - for providing an effective way to gather community feedback regarding our {roadmap}."
              values={{
                featureupvote: (
                  <a href="https://featureupvote.com">FeatureUpvote</a>
                ),
                roadmap: <a href="https://wishlist.opt-out.eu">roadmap</a>,
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody4"
              defaultMessage="{bablic} - for providing a platform which allows us to translate and localize this website."
              values={{
                bablic: <a href="https://www.bablic.com">Bablic</a>,
              }}
            />
          </Typography>
        </Paper>
      </div>
      <Social />
      <Donations />
      <Footer />
    </div>
  );
};

export default withRoot(pageWithIntl(withStyles(styles)(About)));
