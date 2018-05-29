import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Grid from "@material-ui/core/Grid";
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
  centeredRow: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    maxWidth: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  containerFill: {
    alignItems: "stretch"
  },
  heading: {
    maxWidth: "400px"
  },
  searchResult: {}
});

class Form extends Component {
  state = {
    searchResults: [],
    companyNameSearch: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    const searchResults = this.props.companies.filter(company => {
      return company.name.toLowerCase().match(e.target.value.toLowerCase());
    });

    this.setState({
      companyNameSearch: e.target.value,
      searchResults
    });
  };

  render() {
    const { classes, onCompanySelected } = this.props;

    const onSelected = company => {
      onCompanySelected(company);
      this.setState({
        searchResults: []
      });
    };

    const Heading = (
      <div className={classNames(classes.heading)}>
        <FormattedMessage
          id="heading"
          defaultMessage="Erase your {strong} made simple"
          values={{ strong: <strong>personal data</strong> }}
        >
          {(...formattedMessage) => (
            <Typography variant="display1" color="inherit" gutterBottom={true}>
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
    );

    const CompanyInput = !this.state.companyEmail && (
      <div>
        <TextField
          label={
            <FormattedMessage
              id="companyLabel"
              defaultMessage="Search for a company"
            />
          }
          name="companyNameSearch"
          id="companyNameSearch"
          onInput={this.handleInput}
          value={this.state.companyNameSearch}
          InputProps={{
            disableUnderline: true
          }}
          fullWidth={true}
        />
      </div>
    );

    return (
      <div>
        <div className={classNames(classes.hero)}>
          <Grid container className={classes.container} spacing={16}>
            {Heading}
          </Grid>
        </div>
        <form
          method="GET"
          id="searchForm"
          className={classNames(classes.centeredRow)}
        >
          <Grid
            container
            className={classNames(classes.container, classes.containerFill)}
            spacing={16}
          >
            <Paper>{CompanyInput}</Paper>
            {this.state.searchResults.length ? (
              <ul>
                {this.state.searchResults.map((result, i) => (
                  <li key={i}>
                    <Paper>
                      <button
                        type="button"
                        className={classNames(classes.searchResult)}
                        onClick={() => onSelected(result)}
                      >
                        {result.name}
                      </button>
                    </Paper>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </Grid>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(Form);
