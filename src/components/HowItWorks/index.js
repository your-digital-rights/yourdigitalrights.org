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
import Typography from "@mui/material/Typography";
import UpperSection from "./UpperSection";
import { indexStyles as styles } from "./styles";
import withStyles from '@mui/styles/withStyles';

const HowItWorks = ({ classes }) => {
  return (
    <div className={classes.root} id="howItWorks">
      <div className={classes.upperContainer}>
        <img
          src="images/img-howto.svg"
          alt={TitleImgAlt}
          className={classes.titleImg}
        />
        <div className={classes.upperContent}>
          <Typography
            variant="h4"
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
          imgSrc="images/ic-happy.svg"
        />
        <LowerSection
          title={WhyTitle}
          body={WhyBody}
          imgSrc="images/ic-verified-user.svg"
        />
      </div>
    </div>
  );
};
export default withStyles(styles)(HowItWorks);
