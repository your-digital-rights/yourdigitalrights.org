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
  YourDataTitle,
} from "./text";

import LowerSection from "./LowerSection";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UpperSection from "./UpperSection";
import { indexStyles as styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

const HowItWorks = ({ classes }) => {
  return (
    <div className={classes.root} id="howItWorks">
      <div className={classes.upperContainer}>
        <img
          src="static/img-howto.svg"
          alt={TitleImgAlt}
          className={classes.titleImg}
        />
        <div className={classes.upperContent}>
          <Typography
            variant="display1"
            component="h2"
            className={classes.title}
            gutterBottom={true}
          >
            {Title}
          </Typography>
          <UpperSection title={SearchTitle} body={SearchBody} />
          <UpperSection title={FillInTitle} body={FillInBody} />
          <UpperSection title={SendTitle} body={SendBody} />
        </div>
      </div>
      <div className={classes.lowerContainer}>
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
    </div>
  );
};
export default withStyles(styles)(HowItWorks);
