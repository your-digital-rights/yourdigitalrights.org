import Form from "../components/Form";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import pageWithIntl from "../components/PageWithIntl";
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";

const Index = () => {
  return (
    <main>
      <Typography variant="display1">
        <FormattedMessage id="heading" defaultMessage="Opt out" />
      </Typography>
      <Form />
    </main>
  );
};

export default withRoot(withStyles()(pageWithIntl(Index)));
