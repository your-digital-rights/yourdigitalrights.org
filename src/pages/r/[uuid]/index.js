import React from "react";
import { injectIntl } from "react-intl";
import aws from "aws-sdk";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import Subscribe from "../../../components/Subscribe";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import RequestDetails from "../../../components/RequestDetails";
import RequestWhatsNext from "../../../components/RequestWhatsNext";
import RequestHero from "../../../components/RequestHero";
import RequestTimeline from "../../../components/RequestTimeline";
import {generateCanonical, generateLangLinks} from "../../../utils/langUtils";
import fetchSheetData from "../../../utils/sheets";
import Regulations from "../../../utils/regulations";
import { DateTime } from "luxon";


async function getRequest(id) {
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });
  
  const dynamodb = new aws.DynamoDB();

  const params = {
    Key: {
      "id": {
        S: id,
      },
    }, 
    TableName: "YDRFollowups",
  };
  return await dynamodb.getItem(params).promise();
};

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
  subscribeContainer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: "-145px",
    paddingTop: "150px",
    paddingBottom: "30px",
  },  
});

const Uuid = ({classes, data, router, intl}) => {
  const requestItem = data.item;
  const [status, setStatus] = React.useState(requestItem.status ? requestItem.status.S : "NO_REPLY");

  React.useEffect(() => {
    window.mailgoConfig = {
      dark: true,
      showFooter: false,
      tel: false,
      sms: false,
      actions: {
        telegram: false,
        whatsapp: false,
        skype: false,
        copy: false,
      },
      details: {
        subject: false,
        body: false,
        to: false,
        cc: false,
        bcc: false,
      },
    };
  }, []);

  const { uuid } = router.query;
  const regulationType = requestItem.regulationType.S;
  const Title = intl.formatMessage(
    {
      id: "request.title",
      defaultMessage: "Details for your {regulationType} request",
    },
    {
      regulationType,
    },
  );
  const Description = intl.formatMessage(
    {
      id: "request.description",
      defaultMessage: "View details about a {regulationType} request submitted with this free service.",
    },
    {
      regulationType: regulationType,
    },
  );
  const BaseURL = "/r/" + uuid;
  const requestSentDate = requestItem.requestEmailSentAt ? requestItem.requestEmailSentAt.S : requestItem.requestCreatedAt.S;
  const regulation = Regulations[requestItem.regulationType.S];
  const reminderTimeLimit = regulation.timeLimit;
  const escalationTimeLimit = regulation.escalation_timeLimit;
  const days = {
    reminderTimeLimit,
    sinceRequest: Math.abs(DateTime.now().diff(DateTime.fromISO(requestSentDate), ['days', 'hours']).toObject().days),
    sinceReminder: requestItem.reminderEmailSentAt ? Math.abs(DateTime.fromISO(requestItem.reminderEmailSentAt.S).diff(DateTime.now(), ['days', 'hours']).toObject().days) : null,
    sinceEscalation: requestItem.escalationEmailSentAt ? Math.abs(DateTime.fromISO(requestItem.escalationEmailSentAt.S).diff(DateTime.now(), ['days', 'hours']).toObject().days) : null,
    toReminder: !requestItem.reminderEmailSentAt ? DateTime.fromISO(requestSentDate).plus({days: reminderTimeLimit+1}).diff(DateTime.now(), ['days', 'hours']).toObject().days : null,
    toEscalation: !requestItem.escalationEmailSentAt ? DateTime.fromISO(requestSentDate).plus({days: escalationTimeLimit+1}).diff(DateTime.now(), ['days', 'hours']).toObject().days : null,
  };

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
        requestItem={requestItem}
        days={days}
        status={status}
        setStatus={setStatus}
      />
      <RequestTimeline
        requestItem={requestItem}
        days={days}
      />
      { requestItem.requestEmailSentAt && (
        <>
          <RequestWhatsNext 
            requestItem={requestItem}
            days={days}
            selectedCompany={data.organization}
            intl={intl}
            status={status}
          >
            <RequestDetails
              selectedCompany={data.organization}
              requestItem={requestItem}
              days={days}
              intl={intl}
              status={status}
            />
          </RequestWhatsNext>
          <div className={classes.subscribeContainer}>
            <Subscribe page="requests"/>
          </div>
        </>
      )}
      <Footer showRoadmap={false}/>
    </div>
  )
};

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const requestDetails = await getRequest(uuid);

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
    notFound: typeof organization == 'undefined',
    props: {
      data: {
        item: requestDetails.Item,
        organization,
      },
    },
  }
}

export default withStyles(styles)(withRouter(injectIntl(Uuid)));
