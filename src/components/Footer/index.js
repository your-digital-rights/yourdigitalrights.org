import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { container } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";
import tracking from "../../utils/tracking";
import Link from 'next/link'

const styles = (theme) => ({
  root: {
    ...container,
  },
  inner: {
    // borderTop: "2px solid #005ea5",
    marginTop: 30,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.up("md")]: {
      paddingRight: 30,
      paddingLeft: 30,
    },
  },
  innerLeft: {
    // borderTop: "2px solid #005ea5",
    width: "20%",
    float: "left",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  innerRight: {
    // borderTop: "2px solid #005ea5",
    width: "75%",
    float: "right",
    marginBottom: 60,
    fontSize: '14px',
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: '10px',
    },
  },
  Copyright: {
    textAlign: "center",
  },
  WishList: {
    textAlign: "center",
  },
  wishButton: {
    marginTop: "-25px",
    borderRadius: "24px 24px 24px 24px",
    color: "white",
    fontWeight: "600",
    padding: "10px 20px",
    "&:hover": {
      background: "#cf8600",
    },
  },
  DisclaimerLink: {
    color: "#005ea5",
    fontWeight: "600",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  VercelLogo: {
    height: "2.4em",
    marginTop: "15px",
  }  
});

const WishButtonText = (
  <FormattedMessage id="footer.wishList" defaultMessage="make a wish on our roadmap" />
);

const PoweredBy = (
  <FormattedMessage id="footer.poweredBy" defaultMessage="Powered by Vercel" />
);

const DisclaimerText = (
  <FormattedMessage
    id="footer.disclaimer"
    defaultMessage="<span>Disclaimer:</span> This service is provided as is, without warranty of any kind. Use of this service is entirely at your own risk. We cannot take responsibility for any direct or indirect damages resulting from the use of this service. The information provided by this service along with the content on our website related to legal matters is provided for your private use and does not constitute legal advice. If you need legal advice for a specific problem, you should consult with a licensed attorney."
    values={{
      span: txt => (<span style={{ fontWeight: "bold", color: "black" }}>{txt}</span>)
    }}
  />
);

const QueryText = (
  <FormattedMessage
    id="footer.contact"
    defaultMessage="For more information please <a>contact us</a>. © Copyright 2019"
    values={{
      a: txt => (
        <a target="_blank" href="mailto:info@yourdigitalrights.org" style={{ textDecoration: "none" }}>
          {txt}
        </a>
      ),
    }}
  />
);

const Footer = ({ classes }) => {

  const trackWishlist = () => {
    tracking.trackWishlist();
  };

  return (
    <div className={classes.root}>
      <div className={classes.WishList}>
        <Button
          onClick={() => trackWishlist()}
          variant="contained"
          href="https://wishlist.yourdigitalrights.org/"
          color="secondary"
          type="submit"
          className={classes.wishButton}
        >
          {WishButtonText}
        </Button>
      </div>
      <div className={classes.inner}>
        <div className={classes.innerLeft}>
          <Typography component="p" variant="body3">
            <FormattedMessage
              id="footer.madeBy"
              defaultMessage="<a>Made by Conscious Digital</a>"
              values={{
                a: txt=> (<a target="_blank" href="https://consciousdigital.org" className={classes.DisclaimerLink}>{txt}</a>)
              }}
            />
          </Typography>          
          <Typography component="p" variant="body3">
            <FormattedMessage
              id="footer.privacyPolicy"
              defaultMessage="<a>Privacy Policy</a>"
              values={{
                a: txt=> (<Link href="/privacy" ><a href="/privacy" className={classes.DisclaimerLink}>{txt}</a></Link>)
              }}
            />
          </Typography>
          <Typography component="p" variant="body3">
            <FormattedMessage
              id="footer.mission"
              defaultMessage="<a>Mission</a>"
              values={{
                a: txt=> (<Link href="/about" ><a href="/about" className={classes.DisclaimerLink}>{txt}</a></Link>)
              }}
            />
          </Typography> 
          <a            
            href="https://vercel.com?utm_source=Conscious%20Digital&utm_campaign=oss"
          >
            <img 
              src="/images/powered-by-vercel.svg" 
              alt={PoweredBy}
              className={classes.VercelLogo}
            />
          </a>
        </div>
        <div className={classes.innerRight}>
          <Typography gutterBottom={true} color="textSecondary" variant="body3">
            {DisclaimerText}
          </Typography>
          <Typography color="textSecondary" variant="body3">
            {QueryText}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
