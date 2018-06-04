import { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  centeredRow: {
    display: "flex",
    alignItems: "center",
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
  containerFill: {
    alignItems: "stretch",
    flex: "1 1 800px"
  },
  searchResult: {},
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
      searchResults = this.props.companies.filter(company => {
        return company.name.toLowerCase().match(e.target.value.toLowerCase());
      });
    }

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

    return (
      <form
        method="GET"
        id="searchForm"
        className={classNames(classes.centeredRow)}
      >
        <div className={classNames(classes.container, classes.containerFill)}>
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
            <Paper>
              <List>
                {this.state.searchResults.map((result, i) => (
                  <ListItem
                    button
                    key={i}
                    onClick={() => onSelected(result)}
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
        </div>
      </form>
    );
  }
}
export default withStyles(styles)(Form);
