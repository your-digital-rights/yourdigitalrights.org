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
import Button from "@material-ui/core/Button";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';


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
    padding: 30,
    flexGrow: 1,
  },
  startAgainBtn: {
    borderRadius: '24px 24px 24px 24px',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,50%)',
    color: 'white',
    fontWeight: 800
  },
  gridList: {
    padding: 30,
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});


const dataBrokers = [
  {domain: 'acxiom.com', name: 'Axiom'},
  {domain: 'epsilon.com', name: 'Epsilon'},
  {domain: 'equifax.com', name: 'Equifax'},
  {domain: 'experian.com', name: 'Experian'},
  {domain: 'idanalytics.com', name: 'ID Analytics'},
  {domain: 'nielsen.com', name: 'Nielsen'},
  {domain: 'oracle.com', name: 'Oracle'},
  {domain: 'peekyou.com', name: 'PeekYou'},
  {domain: 'towerdata.com', name: 'TowerData'},
  {domain: 'transunion.com', name: 'TransUnion'},
]


const Brokers = ({ classes }) => {
  return (
    <div>
      <Nav />
      <div className={classes.container}>
        <Paper className={classes.inner}>
          <Typography component="h1" variant="display1" gutterBottom={true}>
            <FormattedMessage
              id="aboutTitle"
              defaultMessage="Opt Out of Top Data Brokers"
            />
          </Typography>
          <br/>
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="brokersIntro"
              defaultMessage="Data Brokers are companies that collect and sell personal data—typically without your knowledge or consent—while providing zero value to you. These are the top 10 data brokers, click on each company to have them erase your data by sending a {gdpr} Erasure Request."
              values={{
                gdpr: <a href="/#faq">GDPR</a>
              }}
            />
          </Typography>
          <GridList className={classes.gridList} cols={4} spacing={16}>
            {dataBrokers.map(company => (
              <GridListTile button component="a" href={'/?company=' + company.domain+ '#nav'} key={company.domain}>
                <img src={'https://api.faviconkit.com/'+ company.domain + '/144'} alt={company.name} />
                <GridListTileBar title={company.name} />
              </GridListTile>
            ))}
          </GridList>            
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="brokerAfter"
              defaultMessage="While the top 10 data brokers are the worst offenders in terms of your personal data, there are many others. Opt Out is a free service which lets you get thousands of organisation to erase your personal data, hassle free. We automate the process of sending GDPR erasure (right to be forgotten) requests. Use the bottom below to search the entire database."
            />
          </Typography>        
          <Button variant="raised" color="secondary" type="submit" className={classes.startAgainBtn} id="startAgainBtn" href="/">
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

export default withRoot(pageWithIntl(withStyles(styles)(Brokers)));
