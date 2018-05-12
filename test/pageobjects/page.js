class Page {
  constructor({ path }) {
    this.path = path;
  }

  visit() {
    return browser.url(`http://localhost:3000${this.path}`);
  }

  get heading() {
    return browser.getText("h1");
  }
}

module.exports = Page;
