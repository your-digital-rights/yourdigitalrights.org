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
    companies: null,
    companiesLoaded: false,
    loadingCompanies: false,
  };

  constructor(props) {
    super(props);
    this.searchTimeout = null;
    this.companiesPromise = null;
  }

  componentWillUnmount() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  }

  ensureCompaniesLoaded = async () => {
    if (this.state.companiesLoaded && this.state.companies) {
      return this.state.companies;
    }

    if (!this.companiesPromise) {
      this.setState({ loadingCompanies: true });
      this.companiesPromise = fetchDomains()
        .then(companies => {
          if (!companies || !companies.Domains) {
            return null;
          }

          const normalizedDomains = companies.Domains.map(company => ({
            ...company,
            searchTermsLower: String(company.searchTerms || '').toLowerCase(),
            urlLower: String(company.url || '').toLowerCase(),
          }));
          const normalizedCompanies = {
            ...companies,
            Domains: normalizedDomains,
          };

          this.setState({
            companies: normalizedCompanies,
            companiesLoaded: true,
            loadingCompanies: false,
          });
          return normalizedCompanies;
        })
        .catch(error => {
          console.error(error);
          this.setState({
            loadingCompanies: false,
          });
          this.companiesPromise = null;
          return null;
        });
    }

    return this.companiesPromise;
  };

  handleInput = async (e) => {
    const searchValue = e.target.value;
    this.setState({
      companyNameSearch: searchValue,
    });

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.searchCompanies(searchValue);
    }, 100);
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
    const normalizedSearch = search.trim().toLowerCase();
    if (!normalizedSearch) {
      this.setState({
        searchResults: [],
      });
      return;
    }

    const companies = this.state.companies || await this.ensureCompaniesLoaded();
    if (!companies || !companies.Domains) {
      this.setState({
        searchResults: [],
      });
      return;
    }

    const addResult = (result, collection, seenUrls) => {
      if (!seenUrls.has(result.url)) {
        seenUrls.add(result.url);
        collection.push(result);
      }
    };
    const searchResults = [];
    const seenUrls = new Set();

    for (const company of companies.Domains) {
      if (
        company.searchTermsLower.startsWith(normalizedSearch) ||
        company.searchTermsLower.includes(`, ${normalizedSearch}`)
      ) {
        addResult(company, searchResults, seenUrls);
      }
      if (searchResults.length === 5) {
        break;
      }
    }

    if (searchResults.length < 5) {
      for (const company of companies.Domains) {
        if (company.urlLower.startsWith(normalizedSearch)) {
          addResult(company, searchResults, seenUrls);
        }
        if (searchResults.length === 5) {
          break;
        }
      }
    }

    this.setState({
      searchResults,
    });
  }

  renderInput = (InputProps) => {
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
                <InputAdornment position="start" component={S.StyledSearchIcon}>
                  <Search/>
                </InputAdornment>
              }
              endAdornment={
                this.state.companyNameSearch && this.state.loadingCompanies ? (
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
              autoFocus
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
              sizes="24px"
              alt=""
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
