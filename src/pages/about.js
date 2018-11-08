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

const styles = theme => ({
  container: {
    position: "relative",
    ...container,
      marginTop: 32,
    [theme.breakpoints.up("md")]: {
      marginTop: 60
    },
  },
  inner: {
    padding: 30
  }
});

const About = ({ classes }) => {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner}>
          <Typography component="h1" variant="display1" gutterBottom={true}>
            <FormattedMessage
              id="aboutTitle"
              defaultMessage="Our mission"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody1"
              defaultMessage="Opt Out was created because we believe that you have the right to privacy, and that exercising your right to privacy should be easy. The European {gdpr} (GDPR) provides the legal infrastructure to protect the fundamental right of people to the protection of personal data."
              values={{
                gdpr: <a href="https://www.eugdpr.org">General Data Protection Regulations</a>
              }}
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody2"
              defaultMessage="We believe that although the GDPR is a step in the right direction, exercising your rights under the legislation is just enough of a hussle for most people not to bother with it. The situation is made worse due to the fact that many organisations make it hard to file GDPR requests (for example by not publishing any corporate email addresses on their website). The purpose of this service is to make the GDPR accessible to everyone."
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="missionBody3"
              defaultMessage="This is a free service. We are not a business and do not have a business model. We do not offer any services to the organizations on the list. We do not collect or trade any personal data. The service is {oss}."
              values={{
                oss: <a href="https://github.com/opt-out-eu/opt-out">Open Source</a>
              }}
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="createdBy"
              defaultMessage="Opt Out was created by:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody1"
              defaultMessage="{linkedin} - Entrepreneur, investor, independent academic, activist."
              values={{
                linkedin: <a href="https://www.linkedin.com/in/yoava">Yoav Aviram</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody2"
              defaultMessage="{linkedin} - Product designer, consultant and visiting lecturer at London College of Communication."
              values={{
                linkedin: <a href="https://www.linkedin.com/in/rafaprada">Rafa Prada</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="createdByBody3"
              defaultMessage="{linkedin} - Frontend web developer, mobile app developer and creator of Skyjacker, the AR flight tracking game."
              values={{
                linkedin: <a href="https://www.linkedin.com/in/robertchandler85">Rob Chandler</a>
              }}
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="contributors"
              defaultMessage="Contributors:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contributorsBody1"
              defaultMessage="{linkedin} - Frontend web developer."
              values={{
                linkedin: <a href="https://www.linkedin.com/in/mark-gerrard-56865012/">Mark Gerrard</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="contributorsBody2"
              defaultMessage="{linkedin} - Professor of Procedural Law at Pablo de Olavide University."
              values={{
                linkedin: <a href="https://www.linkedin.com/in/raúl-s-703b7033/">Raúl Sánchez</a>
              }}
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true} variant="body2">
            <FormattedMessage
              id="sponsors"
              defaultMessage="Sponsors:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="cookiesBody"
              defaultMessage="We’d like to thank the following organisations for supporting our open source effort buy providing a free or discounted version of their services:"
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody1"
              defaultMessage="{crunchbase} - for providing a snapshot of their company database which we use to enrich our list of organisations."
              values={{
                crunchbase: <a href="https://www.crunchbase.com">Crunchbase</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody2"
              defaultMessage="{innocraft} - for providing a hosted version of Matomo (Piwik), the open source and privacy minded web analytics platform."
              values={{
                innocraft: <a href="https://innocraft.cloud">Innocraft</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody3"
              defaultMessage="{featureupvote} - for providing an effective way to gather community feedback regarding our {roadmap}."
              values={{
                featureupvote: <a href="https://featureupvote.com">FeatureUpvote</a>,
                roadmap: <a href="https://wishlist.opt-out.eu">roadmap</a>
              }}
            />
          </Typography>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="sponsorsBody4"
              defaultMessage="{featureupvote} - for providing a platform which allows us to translate and localize this website."
              values={{
                featureupvote: <a href="https://www.bablic.com">Bablic</a>
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
