import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { container } from "../styles/layout";
import { styled } from '@mui/material/styles';
import Subscribe from "../components/Subscribe";
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../utils/langUtils";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import fetch from "isomorphic-fetch";
import { withRouter } from "next/router";
import useSwr from 'swr'
import CircularProgress from "@mui/material/CircularProgress";

const StyledContainer = styled('div')(({ theme }) => ({
  position: "relative",
  ...container,
  paddingTop: "50px",
  marginTop: "60px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: 30,
}));

const StyledColumns = styled('div')(({ theme }) => ({
  marginTop: "2em",
  display: "flex",
  [theme.breakpoints.down('md')]: {
    flexDirection: "column",
  },
}));

const StyledColumn = styled('div')(({ theme }) => ({
  width: "100%",
  margin: "10px",
  textAlign: "center",
  [theme.breakpoints.down('md')]: {
    width: "100%",
  },    
}));

const StyledSubscribeContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: "-145px",
  paddingTop: "200px",
  paddingBottom: "30px",
}));

const StyledTable = styled(TableContainer)(({ theme }) => ({
  marginTop: "10px",
  fontSize: "16px"
}));

const StyledProgress = styled('div')(({ theme }) => ({
  width: "100%",
  height: "520px",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down('md')]: {
    height: "200px",
  },     
}));

function getTable(data, bucket, message) {
  if (bucket in data) {
    return (
      <StyledColumn>
        <Typography gutterBottom={true} variant="h7">
          {message}
        </Typography>
        <StyledTable component={Paper} >
          <Table size="small" >
            <TableBody>           
              {data[bucket].map((row) => (
                <TableRow key={bucket}>
                  <TableCell style={{fontWeight: "500"}}>{row.requestCount}</TableCell>
                  <TableCell style={{fontWeight: "500"}}><a href={`/d/${row.companyUrl}`} target="_blank" rel="noreferrer noopener" >{row.companyUrl}</a></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTable>
      </StyledColumn>
      );
    } else {
      return;
    }
}

const fetcher = (url) => fetch(url).then((res) => res.json())

const Stats = ({ router}) => {
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
      <StyledContainer>
        <StyledPaper elevation={2} >
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
              <StyledColumns>
                {getTable(
                  data, 
                  'week', 
                  <FormattedMessage 
                    id="stats.titleWeek" 
                    defaultMessage="Top requests this week" 
                  />
                )}
                {getTable(
                  data, 
                  'month', 
                  <FormattedMessage 
                    id="stats.titleMonth" 
                    defaultMessage="Top requests this month" 
                  />
                )}
                {getTable(
                  data, 
                  'year', 
                  <FormattedMessage 
                    id="stats.titleYear" 
                    defaultMessage="Top requests this year" 
                  />
                )}
                {getTable(
                  data, 
                  'alltime', 
                  <FormattedMessage 
                    id="stats.titleAlltime" 
                    defaultMessage="Top all-time requests" 
                  />
                )}                                                
              </StyledColumns>
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
            <StyledProgress>
              <CircularProgress size={48} />
            </StyledProgress>
          )}
        </StyledPaper>
      </StyledContainer>
      <StyledSubscribeContainer>
            <Subscribe page="org"/>
      </StyledSubscribeContainer>
      <Footer showRoadmap={false} />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const { getLocaleMessages } = await import('../utils/localeMessages');
  return {
    props: {
      messages: await getLocaleMessages(locale),
    },
  };
}

export default withRouter(Stats);
