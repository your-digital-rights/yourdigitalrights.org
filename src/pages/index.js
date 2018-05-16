import { Component } from "react";
import Head from "next/head";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";

export default class App extends Component {
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
      this.refs.personalInfo.focus();
    }
  }

  render() {
    return (
      <main>
        <Head>
          <title>Opt-out</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <h1>Opt-out</h1>
        <form onSubmit={this.handleFormSubmit}>
          {!this.state.companyEmail ? (
            <fieldset>
              <legend>Company</legend>
              <label htmlFor="companyEmail">Company</label>
              <select
                name="companyEmail"
                id="companyEmail"
                required
                onChange={this.handleInput("companyEmail")}
              >
                <option value="">Choose a company</option>
                <option value="test@mycompany.com">My test company</option>
              </select>
            </fieldset>
          ) : (
            <div>
              <fieldset>
                <legend tabIndex="-1" ref="personalInfo">
                  Personal information
                </legend>
                <p>
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    id="name"
                    required
                    type="text"
                    onInput={this.handleInput("name")}
                    autoComplete="name"
                  />
                </p>
                <p>
                  <label htmlFor="email">Email address</label>
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
                  <label htmlFor="address">Home address</label>
                  <textarea
                    name="address"
                    id="address"
                    required
                    onInput={this.handleInput("address")}
                    autoComplete="street-address"
                  />
                </p>
              </fieldset>
              <p>
                <button type="submit">Send</button>
              </p>
            </div>
          )}
        </form>
      </main>
    );
  }
}
