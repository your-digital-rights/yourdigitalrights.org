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
  },
  btn: {
    borderRadius:"24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: '10px 20px',
    '&:hover': {
      background: '#04487B'
    }
  },
  startAgainBtn: {
    borderRadius: '24px 24px 24px 24px',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,50%)',
    color: 'white',
    fontWeight: 800
  }  
});


function ListItemCompany(props) {
  const Icon = "https://api.faviconkit.com/" + props.domain + "/24";
  const URL = "/?company=" + props.name;
  return (
  <ListItem button component="a" href={URL}>
   <ListItemIcon>
                <img
                  role="presentation"
                  src={Icon}
                  width={24}
                  height={24}
                />
    </ListItemIcon>
    <ListItemText primary={props.domain} />
  </ListItem>
  );
}


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
              defaultMessage="Data Brokers are companies that collect and sell personal data—typically without your knowledge or consent—while providing zero value to you. These are the top 10 data brokers, click each company to have them erase your data by sending a {gdpr} Erasure Request."
              values={{
                gdpr: <a href="/#faq">GDPR</a>
              }}
            />
          </Typography>
          <List>
            <ListItemCompany domain='acxiom.com' name='Axiom'/>
            <ListItemCompany domain='epsilon.com' name='Epsilon'/>
            <ListItemCompany domain='equifax.com' name='Equifax'/>
            <ListItemCompany domain='experian.com' name='BusinessIQ'/>
            <ListItemCompany domain='idanalytics.com' name='ID Analytics'/>
            <ListItemCompany domain='nielsen.com' name='Nielsen'/>
            <ListItemCompany domain='oracle.com' name='Oracle'/>
            <ListItemCompany domain='peekyou.com' name='PeekYou'/>
            <ListItemCompany domain='towerdata.com' name='TowerData'/>
            <ListItemCompany domain='transunion.com' name='TransUnion'/>
          </List>
          <Button variant="raised" color="secondary" type="submit" className={classes.startAgainBtn} id="startAgainBtn" href="/">
            Search for other companies
          </Button>    
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="brokerAfter"
              defaultMessage="While the top 10 data brokers are the worst offenders in terms of your personal data, there are many others. Opt Out is a free service which lets you get thousands of organisation to erase your personal data, hassle free. We automate the process of sending GDPR erasure (right to be forgotten) requests. Use the bottom below to search the entire database."
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

export default withRoot(pageWithIntl(withStyles(styles)(Brokers)));
