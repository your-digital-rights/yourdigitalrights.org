import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: "linear-gradient(152deg, #0973be, #005ea5)",
    color: "white"
  },
  heroInput: {
    backgroundColor: "white"
  }
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
      <FormattedMessage
        id="heading"
        defaultMessage="Erasing {strong} made simple"
        values={{ strong: <strong>personal data</strong> }}
      >
        {(...formattedMessage) => (
          <Typography variant="display1" color="inherit">
            {formattedMessage}
          </Typography>
        )}
      </FormattedMessage>
    );

    const CompanyInput = !this.state.companyEmail && (
      <div>
        <TextField
          label={
            <FormattedMessage id="companyLabel" defaultMessage="Company" />
          }
          name="companyNameSearch"
          id="companyNameSearch"
          required
          onInput={this.handleInput}
          value={this.state.companyNameSearch}
          InputProps={{
            disableUnderline: true,
            className: classNames(classes.heroInput)
          }}
        />
      </div>
    );

    return (
      <div>
        <form className={classNames(classes.hero)} method="GET" id="searchForm">
          {Heading}
          {CompanyInput}
        </form>
        {this.state.searchResults.length ? (
          <ul>
            {this.state.searchResults.map((result, i) => (
              <li key={i}>
                <button
                  type="button"
                  className="search-result"
                  onClick={() => onSelected(result)}
                >
                  {result.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Form);
