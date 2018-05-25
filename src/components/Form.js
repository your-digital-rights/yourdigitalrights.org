import Button from "@material-ui/core/Button";
import { Component } from "react";
import { FormattedMessage } from "react-intl";
import Head from "next/head";
import Select from "@material-ui/core/Select";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";

class Form extends Component {
  state = {};
  handlers = {};

  componentDidMount() {
    window.$location = window.location;
  }

  handleInput = name => {
    if (!this.handlers[name]) {
      this.handlers[name] = event => {
        this.setState({ [name]: event.target.value });
        return true;
      };
    }
    return this.handlers[name];
  };

  handleFormSubmit = e => {
    e.preventDefault();
    window.$location.href = this.renderMailTo();
  };

  renderMailTo() {
    return mailtoLink({
      to: this.state.companyEmail,
      subject: erasureEmail.subject,
      body: erasureEmail.formatBody(this.state)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.companyEmail && !prevState.companyEmail) {
      this.refs.name.focus();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {!this.state.companyEmail ? (
          <div>
            <label htmlFor="companyEmail">
              <FormattedMessage id="companyLabel" defaultMessage="Company" />
            </label>
            <Select
              name="companyEmail"
              id="companyEmail"
              required
              onChange={this.handleInput("companyEmail")}
              native={true}
            >
              <FormattedMessage
                id="unselectedCompany"
                defaultMessage="Choose a company"
              >
                {message => <option value="">{message}</option>}
              </FormattedMessage>
              <option value="test@mycompany.com">My test company</option>
            </Select>
          </div>
        ) : (
          <div>
            <p>
              <label htmlFor="name">
                <FormattedMessage id="nameLabel" defaultMessage="Name" />
              </label>
              <input
                name="name"
                id="name"
                required
                type="text"
                onInput={this.handleInput("name")}
                autoComplete="name"
                ref="name"
              />
            </p>
            <p>
              <label htmlFor="email">
                <FormattedMessage
                  id="emailAddressLabel"
                  defaultMessage="Email address"
                />
              </label>
              <input
                name="email"
                id="email"
                required
                type="email"
                onInput={this.handleInput("email")}
                autoComplete="email"
              />
            </p>
            <p>
              <label htmlFor="address">
                <FormattedMessage
                  id="homeAddressLabel"
                  defaultMessage="Home address"
                />
              </label>
              <textarea
                name="address"
                id="address"
                required
                onInput={this.handleInput("address")}
                autoComplete="street-address"
              />
            </p>
            <p>
              <Button variant="raised" color="primary" type="submit">
                <FormattedMessage id="sendButton" defaultMessage="Send" />
              </Button>
            </p>
          </div>
        )}
      </form>
    );
  }
}
export default Form;
