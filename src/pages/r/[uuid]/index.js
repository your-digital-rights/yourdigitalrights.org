import React from "react";
import { injectIntl } from "react-intl";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import { styled } from '@mui/material/styles';
import Subscribe from "../../../components/Subscribe";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import RequestDetails from "../../../components/RequestDetails";
import RequestWhatsNext from "../../../components/RequestWhatsNext";
import RequestHero from "../../../components/RequestHero";
import RequestTimeline from "../../../components/RequestTimeline";
import {generateCanonical, generateLangLinks} from "../../../utils/langUtils";
import { fetchDomainDetails } from "../../../utils/domains";
import Regulations from "../../../utils/regulations";
import { DateTime } from "luxon";

async function getRequest(id) {
  const client = new DynamoDBClient({
    region: process.env.REGION,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  });

  const dynamodb = DynamoDBDocumentClient.from(client);

  const params = {
    Key: {
      id: id,
    },
    TableName: "YDRFollowups",
  };
  return await dynamodb.send(new GetCommand(params));
}

const StyledSubscribeContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: "-145px",
  paddingTop: "150px",
  paddingBottom: "30px",
}));

const Uuid = ({data, router, intl}) => {
  const requestItem = data.item;
  const [status, setStatus] = React.useState(requestItem.status || "NO_REPLY");
  const { uuid } = router.query;
  const regulationType = requestItem.regulationType;
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
  const requestSentDate = requestItem.requestEmailSentAt || requestItem.requestCreatedAt;
  const regulation = Regulations[requestItem.regulationType];
  const reminderTimeLimit = regulation.timeLimit;
  const escalationTimeLimit = regulation.escalation_timeLimit;
  const days = {
    reminderTimeLimit,
    sinceRequest: Math.abs(DateTime.now().diff(DateTime.fromISO(requestSentDate), ['days', 'hours']).toObject().days),
    sinceReminder: requestItem.reminderEmailSentAt ? Math.abs(DateTime.fromISO(requestItem.reminderEmailSentAt).diff(DateTime.now(), ['days', 'hours']).toObject().days) : null,
    sinceEscalation: requestItem.escalationEmailSentAt ? Math.abs(DateTime.fromISO(requestItem.escalationEmailSentAt).diff(DateTime.now(), ['days', 'hours']).toObject().days) : null,
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
          <StyledSubscribeContainer>
            <Subscribe page="requests"/>
          </StyledSubscribeContainer>
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

  const data = await fetchDomainDetails(requestDetails.Item.companyUrl);

  if (typeof data == 'undefined') {
    return {
      notFound: true,
    }
  }
  
  return {
    notFound: data.statusCode >= 400,
    props: {
      data: {
        item: requestDetails.Item,
        organization: data['Domain'],
      },
    },
  }
}

export default withRouter(injectIntl(Uuid));
