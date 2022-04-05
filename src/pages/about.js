import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import Donations from "../components/Donations";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import { withRouter } from "next/router";


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


const About = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "about.description", defaultMessage: "Your Digital Rights was created because we believe that you have the right to privacy, and that exercising your right to privacy should be easy."});
  const BaseURL = "/about";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "about.title", defaultMessage: "About Us"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner} elevation={2} >
          <Typography component="h1" variant="h4" gutterBottom={true}>
            <FormattedMessage id="about.aboutTitle" defaultMessage="Our mission" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.missionBody1"
              defaultMessage="YourDigitalRights.org was created because we believe that privacy is a basic human right, and that exercising this right should be easy. The European {gdpr} (GDPR) and the {ccpa} (CCPA) provide the legal infrastructure to protect people’s fundamental right of privacy online."
              values={{
                gdpr: (
                  <a target="_blank" href="https://gdpr.eu/tag/gdpr/">
                    General Data Protection Regulations
                  </a>
                ),
                ccpa: (
                  <a target="_blank" href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
                    California Consumer Privacy Act
                  </a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.missionBody2"
              defaultMessage="Privacy regulations such as the GDPR and the CCPA are a step in the right direction, but exercising your rights under these legislations is still hard enough for most people not to bother with it. The situation is made worse because many organizations make it hard to file data requests (for example by not publishing any corporate email addresses on their website). The purpose of this service is to make the rights granted by these legislations accessible to everyone."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.missionBody3"
              defaultMessage="This is a free service. We are not a business and do not have a business model. We do not offer any services to organizations. We do not collect or trade any personal data. This service is <a>Open Source</a>."
              values={{
                a: chunks =>  (
                  <a 
                    href='https://github.com/your-digital-rights/yourdigitalrights.org'
                    target="_blank"
                  >
                    {chunks}
                  </a>
                ),
              }}
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="h3">
            <FormattedMessage id="about.consciousDigital" defaultMessage="Who we are" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.consciousDigital1"
              defaultMessage="YourDigitalRights.org is a production of {cd}, a registered charity creating people centred digital initiatives which promote and advance Digital Human Rights."
              values= {{
                cd: <a target="_blank" href="https://consciousdigital.org/">Conscious Digital</a>
              }}
            />
          </Typography>
          <br />    
          <Typography gutterBottom={true} component="h2" variant="h3">
            <FormattedMessage id="about.funding" defaultMessage="Funding" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.fundingBody1"
              defaultMessage="This project is self funded by it’s creators, and with the help of your donations."
            />
          </Typography>
          <br />
          <Typography gutterBottom={true} component="h2" variant="h3">
            <FormattedMessage id="about.contributors" defaultMessage="Contributors" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.contributorsBody4"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: (
                  <a target="_blank" href="https://www.linkedin.com/in/hanssprecher/">
                    Hans Sprecher
                  </a>
                ),
              }}
            />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.contributorsBody1"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: (
                  <a target="_blank" href="https://www.linkedin.com/in/mark-gerrard-56865012/">
                    Mark Gerrard
                  </a>
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.contributorsBody5"
              defaultMessage="{linkedin} - Infrastructure Engineer."
              values={{
                linkedin: (
                  <a target="_blank" href="https://www.linkedin.com/in/richerve/">
                    Ricardo Hernandez
                  </a>
                ),
              }}
            />
          </Typography>            
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.createdByBody2"
              defaultMessage="{linkedin} - Frontend web developer, mobile app developer and creator of Skyjacker, the AR flight tracking game."
              values={{
                linkedin: (
                  <a target="_blank" href="https://www.linkedin.com/in/robertchandler85">
                    Rob Chandler
                  </a>
                ),
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.contributorsBody3"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: (
                  <a target="_blank" href="https://www.linkedin.com/in/steeve-george-vadakkumchery-2319878a/">
                    Steeve George Vadakkumchery
                  </a>
                ),
              }}
            />
          </Typography>                  
          <br />
          <Typography gutterBottom={true} component="h2" variant="h3">
            <FormattedMessage id="about.sponsors" defaultMessage="Supporters" />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsTitle"
              defaultMessage="We'd like to thank the following organizations for supporting our open source effort by providing a free or discounted version of their services:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody2"
              defaultMessage="{crunchbase} - for providing a snapshot of their company database which we use to enrich our list of organizations."
              values={{
                crunchbase: <a target="_blank" href="https://www.crunchbase.com">Crunchbase</a>,
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody3"
              defaultMessage="{featureupvote} - for providing an effective way to gather community feedback regarding our {roadmap}."
              values={{
                featureupvote: (
                  <a target="_blank" href="https://featureupvote.com">FeatureUpvote</a>
                ),
                roadmap: <a target="_blank" href="https://wishlist.opt-out.eu">roadmap</a>,
              }}
            />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody4"
              defaultMessage="{innocraft} - for providing a hosted version of Matomo (Piwik), the open source and privacy minded web analytics platform."
              values={{
                innocraft: <a target="_blank" href="https://innocraft.cloud">Innocraft</a>,
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody5"
              defaultMessage="{mailgo} - for creating an awesome open source library which makes 'mailto' links user friendly, and for being super responsive to our requests."
              values={{
                mailgo: <a target="_blank" href="https://mailgo.dev/">Mailgo</a>,
              }}
            />
          </Typography>          
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody6"
              defaultMessage="{sws} - for helping us implement an SEO strategy."
              values={{
                sws: <a target="_blank" href="https://smoothwebsites.net/">Smooth Websites</a>,
              }}
            />
          </Typography>           
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="about.sponsorsBody7"
              defaultMessage="{ama} - for helping us understand, and support the Brazilian data privacy regulation, Lei Geral de Proteção de Dados Pessoais (LGPD)."
              values={{
                ama: <a target="_blank" href="https://assisemendes.com.br/">Assis e Mendes Advogados</a>,
              }}
            />
          </Typography>             
        </Paper>
      </div>
      <Social offset={true} sourcePage="about" />
      <Donations />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(withRouter(About));