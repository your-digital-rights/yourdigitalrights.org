import {
  FillInBody,
  FillInTitle,
  SearchBody,
  SearchTitle,
  SendBody,
  SendTitle,
  Title,
  TitleImgAlt,
  WhyBody,
  WhyTitle,
  YourDataBody,
  YourDataTitle
} from "./text";

import LowerSection from "./LowerSection";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UpperSection from "./UpperSection";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: { ...container, display: "flex", flexDirection: "column" },
  title: {
    textAlign: "center"
  }
});

const HowItWorks = ({ classes }) => {
  return (
    <div className={classes.root} id="howItWorks">
      <Typography
        variant="display2"
        component="h2"
        className={classes.title}
        gutterBottom={true}
      >
        {Title}
      </Typography>
      <img src="static/img-howto.svg" alt={TitleImgAlt} />
      <UpperSection title={SearchTitle} body={SearchBody} />
      <UpperSection title={FillInTitle} body={FillInBody} />
      <UpperSection title={SendTitle} body={SendBody} />
      <LowerSection
        title={YourDataTitle}
        body={YourDataBody}
        imgSrc="static/ic-happy.svg"
      />
      <LowerSection
        title={WhyTitle}
        body={WhyBody}
        imgSrc="static/ic-verified-user.svg"
      />
    </div>
  );
};
export default withStyles(styles)(HowItWorks);
