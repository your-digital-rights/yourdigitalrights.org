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
  root: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    ...container
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    }
  },
  titleImg: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  upperContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      margin: "60px 0"
    }
  },
  upperContent: {
    [theme.breakpoints.up("md")]: {
      flex: 1,
      marginLeft: 64
    }
  },
  lowerContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "top"
    }
  }
});

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
