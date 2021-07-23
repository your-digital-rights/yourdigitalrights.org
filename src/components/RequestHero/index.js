import aws from "aws-sdk";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import capitalize from "../../utils/capitalize";
import daysSince from "../../utils/days-since";
import styles from "./styles";

const Hero = ({ classes, selectedCompany, requestItem }) => {
  const updateStatus = (newStatus) => {
    // async call to /api/update
  };

  const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;
  const status = requestItem.status ? requestItem.status.S : "NO_REPLY";

  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h1>Your data {requestItem.requestType.S.toLowerCase()} to {selectedCompany.name}</h1>
        <p>
          The request was sent {daysSince(new Date(requestItem.requestCreatedAt.S))} days ago.  
          {requestItem.reminderCreatedAt && (
            <>
              A reminder was sent {daysSince(new Date(requestItem.reminderCreatedAt.S))} days ago.
            </>
          )}
          {requestItem.escalationCreatedAt && (
            <>
              An escalation email was sent {daysSince(new Date(requestItem.escalationCreatedAt.S))} days ago.
            </>
          )}
        </p>
        <h2>
          <strong>Request Status: </strong>
          {selectedCompany.name}&nbsp;
          {status === "SUCCESS" ? (
            <>
              handled request
            </>
          ) : (
            status === "PARTIAL" ? (
              <>
                handled request partially
              </>
            ) : (
              status === "DECLINED" ? (
                <>
                  declined request
                </>
              ) : (
                <>
                  did not reply
                </>
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
                Handled successfully
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
                Handled partially
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
                Declined
              </Button>
            
          </li>
          <li>
            
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={status === "NO_REPLY" ? classes.primaryButton : classes.button}
                onClick={() => updateStatus()}
              >
                No reply
              </Button>
            
          </li>
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
