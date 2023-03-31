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
import TableRow from '@material-ui/core/TableRow';
import fetch from "isomorphic-fetch";
import { withRouter } from "next/router";
import useSwr from 'swr'
import CircularProgress from "@material-ui/core/CircularProgress";

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
    width: "100%",
    margin: "10px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },    
  },
  subscribeContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "-145px",
    paddingTop: "200px",
    paddingBottom: "30px",
  }, 
  table: {
    marginTop: "10px",
    fontSize: "16px"
  },
  progress: {
    width: "100%",
    height: "520px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      height: "200px",
    },     
  },
});

function getTable(data, bucket, classes, message) {
  if (bucket in data) {
    return (
      <div className={classes.column}>
        <Typography gutterBottom={true} variant="h7" className={classes.tableTitle}>
          {message}
        </Typography>
        <TableContainer component={Paper} className={classes.table} >
          <Table size="small" >
            <TableBody>           
              {data[bucket].map((row) => (
                <TableRow key={bucket}>
                  <TableCell style={{fontWeight: "500"}}>{row.requestCount.N}</TableCell>
                  <TableCell style={{fontWeight: "500"}}><a href={`/d/${row.companyUrl.S}`} target="_blank" rel="noreferrer noopener" >{row.companyUrl.S}</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      );
    } else {
      return;
    }
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
          <Typography gutterBottom={true}>
            <FormattedMessage
              id="stats.statsSubTitle"
              defaultMessage="Our mission is to help individuals regain control of their online privacy by empowering them to request that organizations delete or provide a copy of their personal information. The following statistics show which organizations have received the most requests for different time periods."
            />
          </Typography>
          { data && (
            <>
              <div className={classes.columns}>
                {getTable(
                  data, 
                  'week', 
                  classes,
                  <FormattedMessage 
                    id="stats.titleWeek" 
                    defaultMessage="Top requests this week" 
                  />
                )}
                {getTable(
                  data, 
                  'month', 
                  classes,
                  <FormattedMessage 
                    id="stats.titleMonth" 
                    defaultMessage="Top requests this month" 
                  />
                )}
                {getTable(
                  data, 
                  'year', 
                  classes,
                  <FormattedMessage 
                    id="stats.titleYear" 
                    defaultMessage="Top requests this year" 
                  />
                )}
                {getTable(
                  data, 
                  'alltime', 
                  classes,
                  <FormattedMessage 
                    id="stats.titleAlltime" 
                    defaultMessage="Top all-time requests" 
                  />
                )}                                                
              </div>
              <br/>
              <Typography gutterBottom={true} variant="h5">
                <FormattedMessage 
                  id="stats.total" 
                  defaultMessage="Total requests sent: {requestCount, number}" 
                  values={{ requestCount: data ? data['total'] : "..."}}
                />
              </Typography>
            </>
          )}
          { !data && (
            <div className={classes.progress}>
              <CircularProgress className={classes.progress} size={48} />
            </div>
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
