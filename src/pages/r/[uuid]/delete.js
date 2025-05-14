import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../../../components/Footer";
import DeletePII from "../../../components/DeletePII";
import Nav from "../../../components/Nav";
import Paper from "@mui/material/Paper";
import { container } from "../../../styles/layout";
import { makeStyles } from '@mui/styles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../../../utils/langUtils";
import { useRouter } from 'next/router'

const styles = (theme) => ({
  hero: {
    position: "relative",
    with: "100%",
    height: "200px",
    backgroundColor: "#0973BE",
  },
  container: {
    position: "relative",
    ...container,
    marginTop: "-80px",
  },
  inner: {
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  deleteComponent: {
    width: "100%",
  }
});

const useStyles = makeStyles(styles);

const DeleteData = () => {
  const classes = useStyles();
  const router = useRouter();
  const { uuid } = router.query;
  const intl = useIntl();
  const Description = intl.formatMessage({id: "deletemydata.description", defaultMessage: "Delete my data"});
  const BaseURL = "/r/" + uuid + "/delete";

  return (
    <div>
      <NextSeo
        title = {intl.formatMessage({id: "deletemydata.title", defaultMessage: "Delete my data"})}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />   
      <Nav />
      <div className={classes.hero}>
      </div>
      <div className={classes.container}>
        <Paper className={classes.inner} elevation={2} >
          <DeletePII uuid={uuid} className={classes.deleteComponent} />
        </Paper>
      </div>  
      <Footer showRoadmap={false} />
    </div>
  );
};

export default DeleteData;