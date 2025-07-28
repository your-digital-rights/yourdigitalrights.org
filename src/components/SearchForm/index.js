import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Component } from "react";
import Downshift from "downshift";
import { FormattedMessage, injectIntl } from "react-intl";
import Search from '@mui/icons-material/Search';
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { fetchDomains } from "../../utils/domains";
import tracker from "../../utils/tracking";
import Link from "next/link";
import Router from "next/router";
import ImageWithFallback from '../../utils/image';
import * as S from "./styles";


class Form extends Component {
  state = {
    searchResults: [],
    companyNameSearch: "",
    companiesLoaded: false,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const companies = fetchDomains();
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
      searchResults = companies['Domains']
        .filter((company) => {
          return company.searchTerms
            .toLowerCase()
            .match("^" + search.toLowerCase() + "|, *" + search.toLowerCase());
        }).concat(
          companies['Domains'].filter((company) => {
            return company.url
              .toLowerCase()
              .match("^" + search.toLowerCase());
          }
        )).filter(
          (v, i, a) => a.indexOf(v) === i
        ).slice(0, 5);
    } else {
      searchResults = [];
    }
    this.setState({
      searchResults,
    });
  }

  renderInput = (InputProps) => {
    const { companies, intl } = this.props;
    const label = this.props.intl.formatMessage({
      id: "search.companyPlaceholder",
      defaultMessage: "Search for an organization"
    });
    return (
          <div>
            <Input
              autoFocus
              {...InputProps}
              id="companyNameSearch"
              onInput={this.handleInput}
              value={this.state.companyNameSearch}
              startAdornment={
                <InputAdornment position="start" component={S.StyledSearchIcon}>
                  <Search/>
                </InputAdornment>
              }
              endAdornment={
                this.state.companyNameSearch && !this.state.companiesLoaded ? (
                  <CircularProgress size={24} />
                ) : null
              }
              disableUnderline={true}
              placeholder={label}
              label={label}
              fullWidth={true}
              sx={{
                padding: "6px 16px",
              }}
              autoComplete="off"
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
  }) => {
    const isHighlighted = highlightedIndex === i;
    var src = `https://logo.uplead.com/${result.url}`;
    return (
      <MenuItem
        button="true"
        key={result.url}
        selected={isHighlighted}
        dense={true}
        {...itemProps}
      >
        <Link href="/d/[domain]" as={`/d/${result.url}`} legacyBehavior>
          <>
            <ImageWithFallback
              role="presentation"
              src={src}
              width={24}
              height={24}
              fallbackSrc="/images/Keep-it-private.png"
            />
            <ListItemText
              disableTypography={true}
              component={S.StyledSearchItem}
              primary={`${result.name} (${result.url})`}
              id={`search-result-${result.url}`}
            />
          </>
        </Link>
      </MenuItem>
    );
  };

  render() {
    return (
      <S.StyledForm id="searchForm">
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
              <Paper component={S.StyledResults} elevation={2} >
                {this.renderInput(getInputProps())}
                {isOpen && (
                  <MenuList component={S.StyledList}>
                    {!!this.state.searchResults.length &&
                      this.state.searchResults.map((result, i) =>
                        this.renderSuggestion({
                          result,
                          i,
                          itemProps: getItemProps({ item: result }),
                          highlightedIndex,
                          selectedItem,
                        })
                      )}
                    <MenuItem
                      button="true"
                      selected={
                        highlightedIndex === this.state.searchResults.length
                      }
                      {...getItemProps({ item: {} })}
                    >
                      <Link href="/d/[domain]" as="/d/add/" legacyBehavior>
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
      </S.StyledForm>
    );
  }
}
export default injectIntl(Form);
