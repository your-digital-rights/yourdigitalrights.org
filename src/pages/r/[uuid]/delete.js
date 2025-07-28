import { useIntl, FormattedMessage } from "react-intl";
import Footer from "../../../components/Footer";
import DeletePII from "../../../components/DeletePII";
import Nav from "../../../components/Nav";
import Paper from "@mui/material/Paper";
import { container } from "../../../styles/layout";
import { styled } from '@mui/material/styles';
import { NextSeo } from 'next-seo';
import {generateCanonical, generateLangLinks} from "../../../utils/langUtils";
import { useRouter } from 'next/router'


const Hero = styled('div')(() => ({
  position: "relative",
  with: "100%",
  height: "200px",
  backgroundColor: "#0973BE",
}));

const StyledContainer = styled('div')(() => ({
  position: "relative",
  ...container,
  marginTop: "-80px",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingLeft: 120,
  paddingRight: 120,
  paddingTop: 50,
  paddingBottom: 50,
  [theme.breakpoints.down('md')]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

const DeleteComponent = styled('div')(() => ({
  width: "100%",
}));


const DeleteData = () => {
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
      <Hero>
      </Hero>
      <StyledContainer>
        <StyledPaper elevation={2} >
          <DeletePII uuid={uuid} sx={{ width: "100%" }} />
        </StyledPaper>
      </StyledContainer>  
      <Footer showRoadmap={false} />
    </div>
  );
};

export default DeleteData;