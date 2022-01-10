import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Component } from "react";
import Downshift from "downshift";
import { FormattedMessage, injectIntl } from "react-intl";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import fetchSheetData from "../../utils/sheets";
import styles from "./styles";
import tracker from "../../utils/tracking";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Router from "next/router";
import InputLabel from "@material-ui/core/InputLabel";

class Form extends Component {
  state = {
    searchResults: [],
    companyNameSearch: "",
    companiesLoaded: false,
  };

  constructor(props) {
    super(props);

    this.searchRef = React.createRef();
  }

  focusInput() {
    let state = Object.assign({}, this.state);
    state.companyNameSearch = "";
    this.setState(state);
    this.searchRef.current.focus();
  }

  async componentDidMount() {
    if (this.props.beforeFocus()) {
      this.focusInput();
    }

    const companies = fetchSheetData();
    this.setState({ companies });
    await companies;
    this.setState({ companiesLoaded: true });
  }

  handleInput = (e) => {
    this.searchCompanies(e.target.value);
    this.setState({
      companyNameSearch: e.target.value,
    });
  };

  onItemSelected = (org) => {
    if (org.url) {
      tracker.trackSearch(org.url);
      Router.push("/d/[domain]/", "/d/" + org.url + "/");
    } else {
      Router.push("/d/[domain]/", "/d/add/");
    }
  };

  async searchCompanies(search) {
    let searchResults = [];

    if (search) {
      const companies = await this.state.companies;
      searchResults = companies['Organizations']
        .filter((company) => {
          return company.searchTerms
            .toLowerCase()
            .match("^" + search.toLowerCase() + "|, *" + search.toLowerCase());
        })
        .slice(0, 5);
    } else {
      searchResults = [];
    }
    this.setState({
      searchResults,
    });
  }

  renderInput = (InputProps) => {
    const { classes, companies, intl } = this.props;
    const label = this.props.intl.formatMessage({
      id: "search.companyPlaceholder",
      defaultMessage: "Search for an organization"
    });
    return (
          <div>
            <Input
              {...InputProps}
              id="companyNameSearch"
              onInput={this.handleInput}
              value={this.state.companyNameSearch}
              startAdornment={
                <InputAdornment position="start" className={classes.searchIcon}>
                  <Icon>search</Icon>
                </InputAdornment>
              }
              endAdornment={
                this.state.companyNameSearch && !this.state.companiesLoaded ? (
                  <CircularProgress className={classes.progress} size={24} />
                ) : null
              }
              disableUnderline={true}
              placeholder={label}
              label={label}
              fullWidth={true}
              className={classes.searchInputWrapper}
              autoComplete="off"
              inputRef={this.searchRef}
            />
          </div>
    );
  };

  renderSuggestion = ({
    result,
    i,
    highlightedIndex,
    selectedItem,
    itemProps,
    classes,
  }) => {
    const isHighlighted = highlightedIndex === i;
    return (
      <MenuItem
        button
        key={result.url}
        selected={isHighlighted}
        dense={true}
        {...itemProps}
      >
        <Link href="/d/[domain]" as="/d/result.url">
          <>
            <img
              role="presentation"
              src={`//logo.uplead.com/${result.url}`}
              width={24}
              height={24}
            />
            <ListItemText
              disableTypography={true}
              className={classes.searchItem}
              primary={`${result.name} (${result.url})`}
              id={`search-result-${result.url}`}
            />
          </>
        </Link>
      </MenuItem>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <form id="searchForm" className={classes.form}>
        <Downshift
          onSelect={this.onItemSelected}
          itemToString={(result) => result && result.name}
          defaultHighlightedIndex={0}
        >
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex,
          }) => (
            <div>
              <Paper className={classes.results} elevation={2} >
                {this.renderInput(getInputProps())}
                {isOpen && (
                  <MenuList className={classes.list}>
                    {!!this.state.searchResults.length &&
                      this.state.searchResults.map((result, i) =>
                        this.renderSuggestion({
                          result,
                          i,
                          itemProps: getItemProps({ item: result }),
                          highlightedIndex,
                          selectedItem,
                          classes,
                        })
                      )}
                    <MenuItem
                      button
                      selected={
                        highlightedIndex === this.state.searchResults.length
                      }
                      {...getItemProps({ item: {} })}
                    >
                      <Link href="/d/[domain]" as="/d/add/">
                        <ListItemText>
                          <strong>
                            <FormattedMessage
                              id="search.noResults"
                              defaultMessage="Can't find an organization?"
                            />
                          </strong>{" "}
                          <FormattedMessage
                            id="search.noResultsMore"
                            defaultMessage="Click here to add one"
                          />
                        </ListItemText>
                      </Link>
                    </MenuItem>
                  </MenuList>
                )}
              </Paper>
            </div>
          )}
        </Downshift>
      </form>
    );
  }
}
export default injectIntl(withStyles(styles)(Form));
