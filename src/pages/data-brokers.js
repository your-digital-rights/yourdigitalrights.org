import Head from "next/head";
import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Social from "../components/Social";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import Donations from "../components/Donations";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
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
    flexGrow: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  startAgainBtn: {
    borderRadius: "24px 24px 24px 24px",
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%,50%)",
    color: "white",
    fontWeight: 800,
  },
  paper: {
    height: 170,
    width: 170,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  grid: {
    padding: 30,
  },
  centerImg: {
    width: "40%",
    top: "40%",
    left: "30%",
  },
  tileBar: {
    textAlign: "center",
    color: "#0070bf",
    backgroundColor: "#0070bf",
  },
});

const dataBrokers = [
  { domain: "acxiom.com", name: "Acxiom" },
  { domain: "epsilon.com", name: "Epsilon" },
  { domain: "equifax.com", name: "Equifax" },
  { domain: "experian.com", name: "Experian" },
  { domain: "oracle.com", name: "Oracle" },
  { domain: "peekyou.com", name: "PeekYou" },
  { domain: "tapad.com", name: "Tapad" },
  { domain: "towerdata.com", name: "TowerData" },
  { domain: "transunion.com", name: "TransUnion" },
  { domain: "quantcast.com", name: "Quantcast" },
];


const Brokers = ({ classes, router }) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "data-brokers.description", defaultMessage: "Get the top data brokers to erase your personal data"});
  const BaseURL = "/data-brokers";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "data-brokers.title", defaultMessage: "Opt Out of the Top Data Brokers"})}
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
            <FormattedMessage
              id="data-brokers.DBAboutTitle"
              defaultMessage="Opt Out of the Top Data Brokers"
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="data-brokers.brokersIntro"
              defaultMessage="Data Brokers are companies which collect and sell personal data, typically without your knowledge or consent. These are some of the top data brokers, click on each company to have them erase your data by sending a {faq} Erasure Request."
              values={{
                faq: <a href="/#faq">GDPR or CCPA</a>,
              }}
            />
          </Typography>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs="auto">
              <Grid container justify="center" spacing={2}>
                {dataBrokers.map((company) => (
                  <Grid key={company.domain} item>
                    <Paper className={classes.paper} elevation={2} >
                      <GridListTile
                        button
                        component="a"
                        href={"/d/" + company.domain}
                        key={company.domain}
                      >
                        <img
                          className={classes.centerImg}
                          src={
                            "https://api.faviconkit.com/" +
                            company.domain +
                            "/170"
                          }
                          alt={company.name}
                        />
                        <GridListTileBar
                          className={classes.tileBar}
                          title={company.name}
                        />
                      </GridListTile>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="data-brokers.brokerAfter"
              defaultMessage="These are some of the top data brokers but there are many more. Click the button below to search the entire database."
            />
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.startAgainBtn}
            id="startAgainBtn"
            href="/"
          >
            <FormattedMessage
              id="data-brokers.searchButton"
              defaultMessage="Search for other organizations"
            />
          </Button>
        </Paper>
      </div>
      <Social />
      <Donations />
      <Footer />
    </div>
  );
};

Brokers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Brokers));
