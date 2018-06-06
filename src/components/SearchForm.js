import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
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

  handleSubmit = e => {
    if (this.state.searchResults.length) {
      this.onSelected(this.state.searchResults[0]);
    }
    e.preventDefault();
  };

  onSelected = company => {
    this.props.onCompanySelected(company);
    this.setState({
      searchResults: []
    });
  };

  render() {
    const { classes } = this.props;
    const focusTextInput = this.focusTextInput;

    return (
      <form
        id="searchForm"
        className={classes.form}
        onSubmit={this.handleSubmit}
      >
        <FormattedMessage
          id="companyPlaceholder"
          defaultMessage="Search for a company"
        >
          {label => (
            <Paper>
              <InputLabel htmlFor="companyNameSearch" className={classes.label}>
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
                className={classes.searchInputWrapper}
                autoComplete="off"
                inputRef={this.setTextInputRef}
              />
            </Paper>
          )}
        </FormattedMessage>
        {this.state.searchResults.length ? (
          <Paper className={classes.results}>
            <MenuList>
              {this.state.searchResults.map((result, i) => (
                <MenuItem
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
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        ) : (
          ""
        )}
      </form>
    );
  }
}
export default withStyles(styles)(Form);
