import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import capitalize from "../../utils/capitalize";
import daysSince from "../../utils/days-since";
import styles from "./styles";

const Hero = ({ classes, selectedCompany, requestItem }) => {
  const companyName = selectedCompany ? capitalize(selectedCompany.name) : null;
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
          {requestItem.status === "SUCCESS" ? (
            <>
              handled request
            </>
          ) : (
            requestItem.status === "PARTIAL" ? (
              <>
                handled request partially
              </>
            ) : (
              requestItem.status === "DECLINED" ? (
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
        <ul>
          <li>
            <form>
              <button type="submit">Handled successfully</button>
            </form>
          </li>
          <li>
            <form>
              <button type="submit">Handled partially</button>
            </form>
          </li>
          <li>
            <form>
              <button type="submit">Declined</button>
            </form>
          </li>
          <li>
            <form>
              <button type="submit">No reply</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
