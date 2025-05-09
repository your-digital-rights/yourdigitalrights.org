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
import styles from "./styles";
import tracker from "../../utils/tracking";
import { styled } from '@mui/material/styles';
import Link from "next/link";
import Router from "next/router";
import ImageWithFallback from '../../utils/image';

const StyledForm = styled('form')(styles().form);
const StyledPaper = styled(Paper)(styles().results);
const StyledMenuList = styled(MenuList)(styles().list);
const StyledInput = styled(Input)(styles().searchInputWrapper);
const StyledInputAdornment = styled(InputAdornment)(styles().searchIcon);
const StyledListItemText = styled(ListItemText)(styles().searchItem);

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
    const { intl } = this.props;
    const label = this.props.intl.formatMessage({
      id: "search.companyPlaceholder",
      defaultMessage: "Search for an organization"
    });
    return (
          <div>
            <StyledInput
              autoFocus
              {...InputProps}
              id="companyNameSearch"
              onInput={this.handleInput}
              value={this.state.companyNameSearch}
              startAdornment={
                <StyledInputAdornment position="start">
                  <Search/>
                </StyledInputAdornment>
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
        <Link href="/d/[domain]" as="/d/result.url" legacyBehavior>
          <>
            <ImageWithFallback
              role="presentation"
              src={src}
              width={24}
              height={24}
              fallbackSrc="/images/Keep-it-private.png"
            />
            <StyledListItemText
              disableTypography={true}
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
      <StyledForm id="searchForm">
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
              <StyledPaper elevation={2}>
                {this.renderInput(getInputProps())}
                {isOpen && (
                  <StyledMenuList>
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
                  </StyledMenuList>
                )}
              </StyledPaper>
            </div>
          )}
        </Downshift>
      </StyledForm>
    );
  }
}

export default injectIntl(Form);
