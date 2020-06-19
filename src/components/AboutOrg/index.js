import Fragment from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DiscussionEmbed } from 'disqus-react';

const AboutOrg = ({ classes, selectedCompany, canonical }) => {
  const disqusShortName = "your-digital-rights";
  const disqusConfig = {
    url: canonical,
    identifier: selectedCompany.url,
    title: selectedCompany.name,
  };

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

          <DiscussionEmbed className={classes.disqusComments} shortname={disqusShortName} config={disqusConfig} />
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutOrg);
