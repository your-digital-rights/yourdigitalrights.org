import aws from "aws-sdk";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";

import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const dynamodb = new aws.DynamoDB();

const Uuid = ({ data, classes, router }) => {
  const { uuid } = router.query;
  const Title = "Details for your CCPA or GDPR request";
  const Description = "View details about a CCPA or GDPR request submitted with this free service.";
  const BaseURL = "/request/" + uuid;

  // TODO REMOVE
  console.log('data', data)
  // END TODO

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
      <p><br /><br /><br /><br /><br /><br />

      TODO REMOVE<br />
      { uuid }<br />
      { data.item.regulationType.S }<br />
      { data.item.requestType.S }<br />
      { data.item.companyName.S }<br />
      { data.item.requestCreatedAt.S }<br />
      { data.item.name.S }<br />
      { data.item.identifyingInfo.S }<br />
      { data.item.emailTo.S }<br />
      { data.item.companyUrl.S }<br />
      <br />
      { data.item.emailSubject.S }<br />
      { data.item.emailBody.S }<br />
      </p>
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

  return {
    props: {
      data: {
        item: requestDetails.Item,
      },
    },
  }
}

export default withRouter(Uuid);
