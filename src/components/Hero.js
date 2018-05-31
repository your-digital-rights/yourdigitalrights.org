import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
    color: "white",
    padding: "100px 0 80px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    maxWidth: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0 20px"
  },
  heading: {
    maxWidth: "400px"
  }
});

const Hero = ({ classes, onCompanySelected }) => {
  return (
    <div className={classNames(classes.hero)}>
      <div container className={classes.container}>
        <div className={classNames(classes.heading)}>
          <FormattedMessage
            id="heading"
            defaultMessage="Erase your {strong} made simple"
            values={{ strong: <strong>personal data</strong> }}
          >
            {(...formattedMessage) => (
              <Typography
                variant="display1"
                color="inherit"
                gutterBottom={true}
              >
                {formattedMessage}
              </Typography>
            )}
          </FormattedMessage>
          <Typography color="inherit">
            <FormattedMessage
              id="intro"
              defaultMessage="The 25th of May 2018, the GDPR took action and  developed a set of legislations that will help you protect and manage your data. We’ve developed a tool for you to be able to reach out to companies that you know they may have your data and take action over it. Please select a company and add your data for us to provide you with a template for your request."
            />
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
