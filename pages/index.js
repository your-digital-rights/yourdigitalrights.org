import { Component } from "react";
import erasureEmail from "../email-templates/erasure";
import mailtoLink from "mailto-link";

export default class App extends Component {
  state = {};
  handlers = {};

  handleFormInput = e => {
    const formIsValid = e.currentTarget.checkValidity();
    this.setState({ formIsValid });
  };

  handleInput = name => {
    if (!this.handlers[name]) {
      this.handlers[name] = event => {
        this.setState({ [name]: event.target.value });
        return true;
      };
    }
    return this.handlers[name];
  };

  renderMailTo() {
    return mailtoLink({
      to: this.state.companyEmail,
      subject: erasureEmail.subject,
      body: erasureEmail.formatBody(this.state)
    });
  }

  render() {
    return (
      <main>
        <h1>Opt-out</h1>
        <form onInput={this.handleFormInput}>
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
          <fieldset>
            <legend>Personal information</legend>
            <p>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                required
                type="text"
                onInput={this.handleInput("name")}
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
              />
            </p>
            <p>
              <label htmlFor="address">Home address</label>
              <textarea
                name="address"
                id="address"
                required
                onInput={this.handleInput("address")}
              />
            </p>
          </fieldset>
          {this.state.formIsValid && (
            <p>
              <a href={this.renderMailTo()}>Send</a>
            </p>
          )}
        </form>
      </main>
    );
  }
}
