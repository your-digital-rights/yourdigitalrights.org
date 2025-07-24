import { Component } from "react";
import { FormattedMessage } from "react-intl";
import fetch from "isomorphic-fetch";
import Button from "@mui/material/Button";
import * as S from "./styles";
import tracking from "../../utils/tracking";
import Regulations from "../../utils/regulations";

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  updateStatus(newStatus) {
    const oldStatus = this.props.status;
  
    // Optimistically assume the status update will succeed
    this.props.setStatus(newStatus);

    fetch(`/api/status?uuid=${this.props.requestItem.id}&status=${newStatus}`, {
    }).then((response) => {
      if (!response.ok) {
        // If the status didn't update, revert it back
        this.props.setStatus(oldStatus);
      } 
      else {
        tracking.trackRequestStatusChange(newStatus);
      }
    });
  }
  
  render() {
    const { requestItem, selectedCompany, status } = this.props;
    const requestType = Regulations[requestItem.regulationType].requestTypes[requestItem.requestType].name;
    return (
      <S.Root id="requestHero">
        <S.Container>
          <S.Header>
            <FormattedMessage
              id="request.hero.header"
              defaultMessage="Your data {requestType} request to {companyName} "
              values={{
                requestType: requestType,
                companyName: selectedCompany.name,
              }}
            />
          </S.Header>
          <S.Status>
          <strong>
            <FormattedMessage 
              id="request.hero.domainTitle" 
              defaultMessage="Domain:" 
            /> 
            </strong>
            {" "}
            <FormattedMessage 
              id="request.hero.reference" 
              defaultMessage="{ref}" 
              values={{
                ref: selectedCompany.url,
              }}
            />     
            <br />  
          <strong>
            <FormattedMessage 
              id="request.hero.referenceTitle" 
              defaultMessage="Reference:" 
            /> 
            </strong>
            {" "}
            <FormattedMessage 
              id="request.hero.reference" 
              defaultMessage="{ref}" 
              values={{
                ref: requestItem.id.split("-")[0],
              }}
            />     
            <br />            
            <strong><FormattedMessage id="request.hero.requestStatus" defaultMessage="Request Status:" /> </strong>
            { typeof requestItem.requestEmailSentAt === 'undefined'  ? (
              <FormattedMessage id="request.hero.requestNotSent" defaultMessage="please send the request email, then refresh this page." />
            ) : (
              status === "SUCCESS" ? (
                <FormattedMessage 
                  id="request.hero.handledRequest" 
                  defaultMessage="{companyName} handled your request successfuly." 
                  values={{
                    companyName: selectedCompany.name,
                  }}
                />
              ) : (
                status === "PARTIAL" ? (
                  <FormattedMessage 
                    id="request.hero.partiallyHandled" 
                    defaultMessage="{companyName} handled your request partially." 
                    values={{
                      companyName: selectedCompany.name,
                    }}
                  />
                ) : (
                  status === "DECLINED" ? (
                    <FormattedMessage 
                      id="request.hero.declinedRequest" 
                      defaultMessage="{companyName} declined your request." 
                      values={{
                        companyName: selectedCompany.name,
                      }}
                    />
                  ) : (
                    <FormattedMessage 
                      id="request.hero.didNotReply" 
                      defaultMessage="{companyName} did not reply yet." 
                      values={{
                        companyName: selectedCompany.name,
                      }}
                    />
                  )
                )
              )
            )}
          </S.Status>
          <S.Buttons>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={(theme) => status === "SUCCESS" ? {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#00ae8d",
                  "&:hover": {
                    background: "#00ae8d",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                } : {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#858585",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#e0e0e0",
                  "&:hover": {
                    background: "#fff",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                }}
                onClick={() => this.updateStatus('SUCCESS')}
              >
                <FormattedMessage id="request.hero.handledSuccessfully" defaultMessage="Handled successfully" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={(theme) => status === "PARTIAL" ? {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#00ae8d",
                  "&:hover": {
                    background: "#00ae8d",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                } : {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#858585",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#e0e0e0",
                  "&:hover": {
                    background: "#fff",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                }}
                onClick={() => this.updateStatus('PARTIAL')}
              >
                <FormattedMessage id="request.hero.handledPartially" defaultMessage="Handled partially" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={(theme) => status === "DECLINED" ? {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#00ae8d",
                  "&:hover": {
                    background: "#00ae8d",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                } : {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#858585",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#e0e0e0",
                  "&:hover": {
                    background: "#fff",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                }}
                onClick={() => this.updateStatus('DECLINED')}
              >
                <FormattedMessage id="request.hero.declined" defaultMessage="Declined" />
              </Button>
            </li>
            <li>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={(theme) => status === "NO_REPLY" ? {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#00ae8d",
                  "&:hover": {
                    background: "#00ae8d",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                } : {
                  margin: "0 10px 10px 0",
                  borderRadius: "24px 24px 24px 24px",
                  color: "#858585",
                  fontWeight: "600",
                  padding: "10px 20px",
                  background: "#e0e0e0",
                  "&:hover": {
                    background: "#fff",
                  },
                  [theme.breakpoints.down('md')]: {
                    padding: "10px",
                    fontSize: "12px",
                  },
                }}
                onClick={() => this.updateStatus('NO_REPLY')}
              >
                <FormattedMessage id="request.hero.noReply" defaultMessage="No reply" />
              </Button>
            </li>
          </S.Buttons>
        </S.Container>
      </S.Root>
    );
  }
};
export default Hero;
