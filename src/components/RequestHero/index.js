import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Hero = ({ classes, selectedCompany, requestItem }) => {
  const companyName = selectedCompany ? Capitalize(selectedCompany.name) : null;
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        <h1>Your data {requestItem.requestType.S} to {selectedCompany.name}</h1>
        <p>
          The request was sent [DAYS SINCE REQUEST] days ago.
          [IF REMINDER]
            A reminder was sent [DAYS SINCE REMINDER] days ago.
          [END]
          [IF ESCALATION]
            An escalation email was sent [DAYS SINCE ESCALATION] days ago.
          [END]
        </p>
        <h2>
          <strong>Request Status:</strong>
          {selectedCompany.name}
          [IF SUCCESS]
            handled request
          [ELSE IF PARTIAL]
            handled request partially
          [ELSE IF DECLINED]
            declined request
          [ELSE]
            did not reply
          [END]
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
