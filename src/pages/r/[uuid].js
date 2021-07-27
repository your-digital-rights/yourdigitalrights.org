import aws from "aws-sdk";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import AboutOrg from "../../components/AboutOrg";
import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import RequestDetails from "../../components/RequestDetails";
import RequestHero from "../../components/RequestHero";
import RequestTimeline from "../../components/RequestTimeline";
import daysSince from "../../utils/days-since";
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";
import fetchSheetData from "../../utils/sheets";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const dynamodb = new aws.DynamoDB();

const styles = (theme) => ({
  root: {
    maxWidth: "780px",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "30px",
    textAlign: "center",
    position: "relative",
  },

  content: {
    padding: "60px 77px 0 77px",

    [theme.breakpoints.down("sm")]: {
      padding: "60px 25px 0 25px",
    },
  },

  title: {
    marginBottom: "20px",
  },

  text: {
    marginBottom: "30px",
    textAlign: "left",
  },
});

const Uuid = ({ data, classes, router }) => {
  const { uuid } = router.query;
  const regulationType = data.item.regulationType.S;
  const Title = `Details for your ${regulationType} request`;
  const Description = "View details about a ${regulationType} request submitted with this free service.";
  const BaseURL = "/request/" + uuid;
  const days = {
    sinceRequest: data.item.requestCreatedAt ? daysSince(new Date(data.item.requestCreatedAt.S)) : null,
    sinceReminder: data.item.reminderCreatedAt ? daysSince(new Date(data.item.reminderCreatedAt.S)) : null,
    sinceEscalation: data.item.escalationCreatedAt ? daysSince(new Date(data.item.escalationCreatedAt.S)) : null,
  };

  const regulation = {};
  if (regulationType === 'GDPR') {
    regulation.timeLimit = 30;
    regulation.authority = 'EDPB';
    regulation.link = 'https://edpb.europa.eu/about-edpb/about-edpb/members_en';
    regulation.denyInfo = 'https://ico.org.uk/your-data-matters/your-right-to-get-your-data-deleted/';
  } else {
    regulation.timeLimit = 45;
    regulation.authority = 'CA AG';
    regulation.link = 'https://www.oag.ca.gov/contact/consumer-complaint-against-business-or-company';
    regulation.denyInfo = 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1798.105.&lawCode=CIV';
  }

  return (
    <div>
    <NextSeo
        title = {Title}
        canonical = {generateCanonical(BaseURL, router.locale)}
        description = {Description}
        openGraph = {{
          description: Description,
        }}
        languageAlternates = {generateLangLinks(BaseURL)}
      />       
      <Nav />
      <RequestHero
        selectedCompany={data.organization}
        requestItem={data.item}
        days={days}
      />
      <RequestTimeline
        requestItem={data.item}
        days={days}
        regulation={regulation}
      />
      <RequestDetails
        selectedCompany={data.organization}
        requestItem={data.item}
        days={days}
        regulation={regulation}
      />
      {data.organization && (
        <AboutOrg 
          selectedCompany={data.organization}
          canonical={generateCanonical(BaseURL, 'en')}
        />
      )}
      <Donations />
      <Footer />
    </div>
  )
};

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const params = {
    Key: {
      "id": {
        S: uuid,
      },
    }, 
    TableName: "YDRFollowUps",
  };
  const requestDetails = await dynamodb.getItem(params).promise();

  if (!requestDetails.Item) {
    return {
      notFound: true,
    }
  }

  const data = await fetchSheetData();
  const organization = data['Organizations'].find(
    ({ url }) => requestDetails.Item.companyUrl.S === url
  );  

  return {
    props: {
      data: {
        item: requestDetails.Item,
        organization,
      },
    },
  }
}

export default withStyles(styles)(withRouter(Uuid));
