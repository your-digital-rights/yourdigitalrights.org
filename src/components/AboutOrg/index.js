import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";


function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const AboutOrg = ({ classes, selectedCompany, canonical }) => {
  var rb_owner_key = "e91628b9-67ed-11eb-8f71-040140774501";
  var thread_title = "Privacy at " + selectedCompany.url;
  var rb_src = "https://my.remarkbox.com/embed" + 
      "?rb_owner_key=" + rb_owner_key +
      "&thread_title=" + encodeURI(thread_title) +
      "&thread_uri=" + encodeURIComponent(canonical);
  return (
    <div className={classes.about}>
      <div id="about-org" className={classes.container}>
        <div id="about-org-text" className={classes.aboutText}>
          <div id="about-org-heading" className={classes.heading}>
            <Typography
              variant={"h4"}
              className={classes.title}
              gutterBottom={true}
              component={"h3"}
            >
              Privacy at {selectedCompany.name}
            </Typography>
          </div>
          <div id="about-detail-text" className={classes.detailText}>
            Email:{" "}
            <strong>
              <a
                target="new"
                href={`mailto:${selectedCompany.email}`}
                className={classes.link}
              >
                {selectedCompany.email}
              </a>
            </strong>
            {selectedCompany.privacyPolicyUrl && (
              <span>
                <br />
                <FormattedMessage id="aboutOrg.privacyPolicy" defaultMessage="Privacy Policy:" />{" "}
                <a
                  target="new"
                  href={`${selectedCompany.privacyPolicyUrl}`}
                  className={classes.link}
                >
                  {selectedCompany.privacyPolicyUrl}
                </a>
              </span>
            )}
            <br />
            <FormattedMessage id="aboutOrg.numRequests" defaultMessage="Number of request sent:"/>{" "}
            <strong>{selectedCompany.emailsSent}</strong>
          </div>
        </div>
        <div id="discussion" className={classes.discussion}>
          <Typography color="inherit" className={classes.discussionHeading}>
            <FormattedMessage 
              id="aboutOrg.commentBoxDescription" 
              defaultMessage="Read what others have to say about privacy at {org}, and share your own comments:"
              values={{ org: (Capitalize(selectedCompany.url))}}
            />
          </Typography>
          <Typography color="inherit" className={classes.discussionSubHeading} >
            <FormattedMessage 
              id="aboutOrg.commentBoxDisclamer" 
              defaultMessage="Remember: this is an independent website which is not affiliated with {org}."
              values={{ org: (Capitalize(selectedCompany.url))}}
            />
          </Typography>
          <div id="remarkbox-div">
              <iframe id="remarkbox-iframe" src={rb_src} style={{ width: '100%', overflow: 'hidden' }} tabIndex={0} scrolling="no" frameBorder={0} title="Remarkbox"  ></iframe>
          </div>
          <script src="https://my.remarkbox.com/static/js/iframe-resizer/iframeResizer.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                'var thread_fragment = window.location.hash; iFrameResize( { checkOrigin: ["https://my.remarkbox.com"], inPageLinks: true, initCallback: function(e) {e.iFrameResizer.moveToAnchor(thread_fragment)} }, document.getElementById("remarkbox-iframe"));',
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
