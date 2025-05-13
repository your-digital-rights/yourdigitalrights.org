import { FormattedMessage } from "react-intl";
import fetch from "isomorphic-fetch";
import Button from "@mui/material/Button";
import { makeStyles } from '@mui/styles';
import styles from "./styles";
import tracking from "../../utils/tracking";
import Regulations from "../../utils/regulations";

const useStyles = makeStyles(styles);

const Hero = ({ requestItem, selectedCompany, status, setStatus }) => {
  const classes = useStyles();
  
  const updateStatus = (newStatus) => {
    const oldStatus = status;
  
    // Optimistically assume the status update will succeed
    setStatus(newStatus);

    fetch(`/api/status?uuid=${requestItem.id}&status=${newStatus}`, {
    }).then((response) => {
      if (!response.ok) {
        // If the status didn't update, revert it back
        setStatus(oldStatus);
      } 
      else {
        tracking.trackRequestStatusChange(newStatus);
      }
    });
  };

  const requestType = Regulations[requestItem.regulationType].requestTypes[requestItem.requestType].name;
  
  return (
    <div className={classes.root} id="requestHero">
      <div className={classes.container}>
        <h1 className={classes.header}>
          <FormattedMessage
            id="request.hero.header"
            defaultMessage="Your data {requestType} request to {companyName} "
            values={{
              requestType: requestType,
              companyName: selectedCompany.name,
            }}
          />
        </h1>
        <h2 className={classes.status}>
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
        </h2>
        <ul className={classes.buttons}>
          <li>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={status === "SUCCESS" ? classes.primaryButton : classes.button}
              onClick={() => updateStatus('SUCCESS')}
            >
              <FormattedMessage id="request.hero.handledSuccessfully" defaultMessage="Handled successfully" />
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={status === "PARTIAL" ? classes.primaryButton : classes.button}
              onClick={() => updateStatus('PARTIAL')}
            >
              <FormattedMessage id="request.hero.handledPartially" defaultMessage="Handled partially" />
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={status === "DECLINED" ? classes.primaryButton : classes.button}
              onClick={() => updateStatus('DECLINED')}
            >
              <FormattedMessage id="request.hero.declined" defaultMessage="Declined" />
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={status === "NO_REPLY" ? classes.primaryButton : classes.button}
              onClick={() => updateStatus('NO_REPLY')}
            >
              <FormattedMessage id="request.hero.noReply" defaultMessage="No reply" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
