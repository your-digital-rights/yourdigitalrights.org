import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { container } from "../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import Subscribe from "../components/Subscribe";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import fetch from "isomorphic-fetch";
import { withRouter } from "next/router";
import useSwr from 'swr'
import { dark } from "@material-ui/core/styles/createPalette";

const styles = (theme) => ({
  container: {
    position: "relative",
    ...container,
    paddingTop: "50px",
    marginTop: "60px",
  },
  inner: {
    padding: 30,
  },
  columns: {
    marginTop: "2em",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  column: {
    width: "50%",
    margin: "10px",
    textAlign: "center",
  },
  subscribeContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "-145px",
    paddingTop: "200px",
    paddingBottom: "30px",
  }, 
});

function getTable(data, bucket, classes) {
  return (
    <TableContainer component={Paper} >
      <Table size="small" aria-label="regulation table" style={{fontSize: "16px"}}>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight: "600"}}><FormattedMessage id="stats.body.org-name" defaultMessage="Organization"/></TableCell>
            <TableCell style={{fontWeight: "600"}}><FormattedMessage id="stats.body.count" defaultMessage="Count"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>           
          {data[bucket].map((row) => (
            <TableRow key={bucket}>
              <TableCell style={{fontWeight: "500"}}><a href={`/d/${row.companyUrl.S}`} target="_blank" rel="noreferrer noopener" >{row.companyUrl.S}</a></TableCell>
              <TableCell style={{fontWeight: "500"}}>{row.requestCount.N}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

const fetcher = (url) => fetch(url).then((res) => res.json())

const Stats = ({ classes, router}) => {
  const intl = useIntl();
  const Description = intl.formatMessage({id: "stats.description", defaultMessage: "Data protection request statistics."});
  const BaseURL = "/stats";

  const { data, error } = useSwr('/api/statistics', fetcher);

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "stats.title", defaultMessage: "Request Statistics"})}
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
              id="stats.statsTitle"
              defaultMessage="Request Statistics"
            />
          </Typography>
          { data && (
            <>
              <div className={classes.columns}>
                <div className={classes.column}>
                  <Typography gutterBottom={true} variant="h5">
                    <FormattedMessage id="stats.week" defaultMessage="This Week" />
                  </Typography>
                  <div>{getTable(data, 'week', classes)}</div>
                </div>
                <div className={classes.column}>                
                  <Typography gutterBottom={true} variant="h5">
                    <FormattedMessage id="stats.month" defaultMessage="This Month" />
                  </Typography>
                  <div>{getTable(data, 'month', classes)}</div>
                </div> 
              </div>
              <div className={classes.columns}>
                <div className={classes.column}>
                  <Typography gutterBottom={true} variant="h5">
                    <FormattedMessage id="stats.year" defaultMessage="This Year" />
                  </Typography>
                  <div>{getTable(data, 'year', classes)}</div>
                </div>
                <div className={classes.column}>  
                  <Typography gutterBottom={true} variant="h5">
                    <FormattedMessage id="stats.alltime" defaultMessage="All Time" />
                  </Typography>
                  <div>{getTable(data, 'alltime', classes)}</div>
                </div> 
              </div>
              <br/>
              <Typography gutterBottom={true} variant="h5">
                <FormattedMessage 
                  id="stats.total" 
                  defaultMessage="Total requests sent:  " 
                />
                {" "}{data['total']}
              </Typography>
            </>
          )}
          { !data && (
            <p>Loading...</p>
          )}
        </Paper>
      </div>
      <div className={classes.subscribeContainer}>
            <Subscribe page="org"/>
      </div>
      <Footer showRoadmap={false} />
    </div>
  );
};

export default withStyles(styles)(withRouter(Stats));