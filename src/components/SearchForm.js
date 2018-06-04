import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  searchInputWrapper: {
    padding: "6px 10px"
  },
  label: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px"
  },
  form: {
    position: "relative"
  },
  results: {
    position: "absolute",
    width: "100%",
    zIndex: 1000
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
    let searchResults = [];
    if (e.target.value) {
      searchResults = this.props.companies
        .filter(company => {
          return company.name.toLowerCase().match(e.target.value.toLowerCase());
        })
        .slice(0, 10);
    }

    this.setState({
      companyNameSearch: e.target.value,
      searchResults
    });
  };

  onSelected = company => {
    this.props.onCompanySelected(company);
    this.setState({
      searchResults: []
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form id="searchForm" className={classNames(classes.form)}>
        <FormattedMessage
          id="companyPlaceholder"
          defaultMessage="Search for a company"
        >
          {label => (
            <Paper>
              <InputLabel
                htmlFor="companyNameSearch"
                className={classNames(classes.label)}
              >
                {label}
              </InputLabel>
              <Input
                id="companyNameSearch"
                onInput={this.handleInput}
                value={this.state.companyNameSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>
                }
                disableUnderline={true}
                placeholder={label}
                fullWidth={true}
                className={classNames(classes.searchInputWrapper)}
                autoComplete="off"
              />
            </Paper>
          )}
        </FormattedMessage>
        {this.state.searchResults.length ? (
          <Paper className={classNames(classes.results)}>
            <List>
              {this.state.searchResults.map((result, i) => (
                <ListItem
                  button
                  key={i}
                  onClick={() => this.onSelected(result)}
                  dense={true}
                >
                  <img
                    role="presentation"
                    src={`https://www.google.com/s2/favicons?domain=${
                      result.email.split("@")[1]
                    }`}
                  />
                  <ListItemText primary={result.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          ""
        )}
      </form>
    );
  }
}
export default withStyles(styles)(Form);
