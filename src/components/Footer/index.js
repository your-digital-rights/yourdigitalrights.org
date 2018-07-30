import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...container
  },
  inner: {
    // borderTop: "2px solid #005ea5",
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      paddingRight: 30,
      paddingLeft: 30
    }
  },
  innerLeft: {
    // borderTop: "2px solid #005ea5",
    width: "20%",
    float: "left",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  innerRight: {
    // borderTop: "2px solid #005ea5",
    width: "80%",
    float: "right",
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  WishList: {
    textAlign: "center",
  },
  wishButton: {
    marginTop: "-25px",
    borderRadius:"24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: '10px 20px',
    '&:hover': {
      background: '#cf8600'
    }
  },
  DisclaimerLink: {
    color: "#f2f2f2",
    fontWeight: "600",
    textDecoration: "none",
    '&:hover': {
      textDecoration: "underline",
    }
  }
});

const WishButtonText = (
  <FormattedMessage
    id="WishList"
    defaultMessage="make a wish on our roadmap"
  />
);

const PrivacyLink = (
  <FormattedMessage
    id="Privacy"
    defaultMessage="{ToPrivacy}"
    values={{
      ToPrivacy: (
        <a href="/privacy" style={{ textDecoration: "none", fontWeight: "600"}}>
          Privacy Policy
        </a>
      )
    }}
  />
);

const MissionLink = (
  <FormattedMessage
    id="Mission"
    defaultMessage="{ToMission}"
    values={{
      ToMission: (
        <a href="/about" style={{ textDecoration: "none", fontWeight: "600"}}>
          Mission
        </a>
      )
    }}
  />
);

const DisclaimerText = (
  <FormattedMessage
    id="disclaimer"
    defaultMessage="{title} This service is provided as is, without warranty of any kind. Use of this service is entirely at your own risk. We cannot take responsibility for any direct or indirect damages resulting from the use of this service. The information provided by this service along with the content on our website related to legal matters is provided for your private use and does not constitute legal advice. If you need legal advice for a specific problem, you should consult with a licensed attorney."
    values={{
      title: (
        <span style={{ fontWeight: "bold", color: "black" }}>
          Disclaimer:
        </span>
      ),
    }}
  />
);

const QueryText = (
  <FormattedMessage
    id="query"
    defaultMessage="For more information please contact us at {mail}."
    values={{
      privacy: (
        <a href="/privacy" style={{ textDecoration: "none", color: "black" }}>
          Privacy Policy
        </a>
      ),
      mail: (
        <a href="mailto:info@opt-out.eu" style={{ textDecoration: "none" }}>
          info@opt-out.eu
        </a>
      )
    }}
  />
);


const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.WishList}>
        <Button variant="raised" href="https://wishlist.opt-out.eu/" color="secondary" type="submit" className={classes.wishButton}>
          {WishButtonText}
        </Button>
      </div>
      <div className={classes.inner}>
        <div className={classes.innerLeft}>
          <Typography gutterBottom={true} className={classes.DisclaimerLink}>
            {PrivacyLink}
          </Typography>
          <Typography gutterBottom={true} className={classes.DisclaimerLink}>
            {MissionLink}
          </Typography>
        </div>
        <div className={classes.innerRight}>
          <Typography gutterBottom={true} color="textSecondary">
            {DisclaimerText}
          </Typography>
          <Typography color="textSecondary">{QueryText}</Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
