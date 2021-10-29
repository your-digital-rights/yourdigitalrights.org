import { Component } from "react";
import { injectIntl } from "react-intl";
import aws from "aws-sdk";
import { NextSeo } from 'next-seo';
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Donations from "../../components/Donations";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import RequestDetails from "../../components/RequestDetails";
import RequestWhatsNext from "../../components/RequestWhatsNext";
import RequestHero from "../../components/RequestHero";
import RequestTimeline from "../../components/RequestTimeline";
import daysSince from "../../utils/days-since";
import {generateCanonical, generateLangLinks} from "../../utils/langUtils";
import fetchSheetData from "../../utils/sheets";

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
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

class Uuid extends Component {
  constructor(props) {
    super(props);
    this.setStatus = this.setStatus.bind(this);

    this.state = {
      status: props.data.item.status ? props.data.item.status.S : "NO_REPLY",
    };
  }

  async componentDidMount() {
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
  }

  setStatus(status) {
    this.setState({ status });
  }

  render() {
    const {classes, data, router, intl} = this.props;
    const { uuid } = router.query;
    const regulationType = data.item.regulationType.S;
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
    const BaseURL = "/request/" + uuid;
    const days = {
      sinceRequest: data.item.requestCreatedAt ? daysSince(new Date(data.item.requestCreatedAt.S)) : null,
      sinceReminder: data.item.reminderCreatedAt ? daysSince(new Date(data.item.reminderCreatedAt.S)) : null,
      sinceEscalation: data.item.escalationCreatedAt ? daysSince(new Date(data.item.escalationCreatedAt.S)) : null,
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
          requestItem={data.item}
          days={days}
          status={this.state.status}
          setStatus={this.setStatus}
        />
        <RequestTimeline
          requestItem={data.item}
          days={days}
        />
        <RequestWhatsNext 
          requestItem={data.item}
          days={days}
          selectedCompany={data.organization}
          intl={intl}
          status={this.state.status}
        >
          <RequestDetails
            selectedCompany={data.organization}
            requestItem={data.item}
            days={days}
            intl={intl}
            status={this.state.status}
          />
        </RequestWhatsNext>
        <Donations />
        <Footer />
      </div>
    )
  }
};

export async function getServerSideProps(context) {
  const { uuid } = context.params;
  const params = {
    Key: {
      "id": {
        S: uuid,
      },
    }, 
    TableName: "YDRFollowups",
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
