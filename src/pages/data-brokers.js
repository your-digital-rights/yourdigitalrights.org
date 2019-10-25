import Head from 'next/head';
import { FormattedDate, FormattedMessage } from 'react-intl';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Paper from '@material-ui/core/Paper';
import Social from '../components/Social';
import Typography from '@material-ui/core/Typography';
import { container } from '../styles/layout';
import pageWithIntl from '../components/PageWithIntl';
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core/styles';
import Donations from '../components/Donations';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  container: {
    position: 'relative',
    ...container,
    marginTop: 32,
    [theme.breakpoints.up('md')]: {
      marginTop: 60,
    },
  },
  inner: {
    padding: 30,
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  startAgainBtn: {
    borderRadius: '24px 24px 24px 24px',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,50%)',
    color: 'white',
    fontWeight: 800,
  },
  paper: {
    height: 170,
    width: 170,
  },
  grid: {
    padding: 30,
  },
  centerImg: {
    width: '40%',
    top: '40%',
    left: '30%',
  },
  tileBar: {
    textAlign: 'center',
    color: '#0070bf',
    backgroundColor: '#0070bf',
  },
});

const dataBrokers = [
  { domain: 'acxiom.com', name: 'Axiom' },
  { domain: 'epsilon.com', name: 'Epsilon' },
  { domain: 'equifax.com', name: 'Equifax' },
  { domain: 'experian.com', name: 'Experian' },
  { domain: 'oracle.com', name: 'Oracle' },
  { domain: 'peekyou.com', name: 'PeekYou' },
  { domain: 'tapad.com', name: 'Tapad' },
  { domain: 'towerdata.com', name: 'TowerData' },
  { domain: 'transunion.com', name: 'TransUnion' },
  { domain: 'quantcast.com', name: 'Quantcast' },
];

// TODO: Make these string translatable
const Title = 'Opt Out of the Top Data Brokers | Opt-out.eu';
const Description =
  'Get the top data brokers to erase your personal data, hassle free.';
const Canonical = 'https://opt-out.eu/data-brokers';

const Brokers = ({ classes }) => {
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
            <FormattedMessage
              id="aboutTitle"
              defaultMessage="Opt Out of Top Data Brokers"
            />
          </Typography>
          <br />
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="brokersIntro"
              defaultMessage="Data Brokers are companies that collect and sell personal data, typically without your knowledge or consent. These are some of the top data brokers, click on each company to have them erase your data by sending a {gdpr} Erasure Request."
              values={{
                gdpr: <a href="/#faq">GDPR</a>,
              }}
            />
          </Typography>
          <Grid container className={classes.grid} spacing={16}>
            <Grid item xs="auto">
              <Grid container justify="center" spacing={16}>
                {dataBrokers.map(company => (
                  <Grid key={company.domain} item>
                    <Paper className={classes.paper}>
                      <GridListTile
                        button
                        component="a"
                        href={'/?company=' + company.domain}
                        key={company.domain}
                      >
                        <img
                          className={classes.centerImg}
                          src={
                            'https://api.faviconkit.com/' +
                            company.domain +
                            '/170'
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
              id="brokerAfter"
              defaultMessage="These are some of the top data brokers but there are many more. Click the bottom below to search the entire database."
            />
          </Typography>
          <Button
            variant="raised"
            color="secondary"
            type="submit"
            className={classes.startAgainBtn}
            id="startAgainBtn"
            href="/"
          >
            Search for other companies
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

export default withRoot(pageWithIntl(withStyles(styles)(Brokers)));
