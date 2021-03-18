import Fragment from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import { DOMAIN } from "../../utils/domain";
import { withStyles } from '@material-ui/core/styles';

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
                Privacy Policy:{" "}
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
            Number of request sent:{" "}
            <strong>{selectedCompany.emailsSent}</strong>
          </div>
        </div>
        <div id="discussion" className={classes.discussion}>
          <Typography color="inherit" className={classes.discussionHeading}>
            Do you have something to say about privacy at {selectedCompany.name}?
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
