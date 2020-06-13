import Fragment from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const AboutOrg = ({ classes, selectedCompany }) => {
  return (
    <div className={classes.about}>
      <div id="about-org" className={classes.container}>
        <div id="about-org-text" className={classes.aboutText}>
          <div id="about-org-heading" className={classes.heading}>
            <Typography
              variant={"display1"}
              className={classes.title}
              gutterBottom={true}
              component={"h2"}
            >
              About {selectedCompany.name}
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
          <div
            id="discourse-comments"
            className={classes.discourseComments}
          ></div>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "DiscourseEmbed = { discourseUrl: 'https://optout.discourse.group/', discourseEmbedUrl: 'https://opt-out-eu.now.sh/?company=" +
                selectedCompany.url +
                "'}; (function() {var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true; d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js'; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d); })();",
            }}
          />
          {/* <div>
            <Button
              className={classes.Continue}
              variant="contained"
              href=""
              color="primary"
              type="submit"
            >
              Continue the conversation on Discourse
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
