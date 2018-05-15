import mailToParser from "mailto-parser";

class Page {
  constructor({ path }) {
    this.path = path;
    this.form = new Form("form");
    this.mailToParser = new mailToParser.Parser();
  }

  visit() {
    return browser.url(`http://localhost:3001${this.path}`);
  }

  get mailTo() {
    return browser.getAttribute("body", "data-open-url");
  }

  get parsedMailTo() {
    const mailTo = this.mailToParser.parse(this.mailTo);
    return {
      to: mailTo.to,
      subject: decodeURIComponent(mailTo.attributeKey.subject),
      body: decodeURIComponent(mailTo.attributeKey.body)
    };
  }
}

class Form {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
  }

  get isInvalid() {
    const exists = browser.element(`${this.baseSelector}:invalid`).value;
    return !!exists;
  }

  get isValid() {
    return !this.isInvalid;
  }

  selectElementByLabel(labelText) {
    const id = browser
      .element(this.baseSelector)
      .getAttribute(`label=${labelText}`, "for");
    return $(`#${id}`);
  }

  fillIn(labelText, value) {
    return this.selectElementByLabel(labelText).setValue(value);
  }

  selectOption(labelText, optionText) {
    return this.selectElementByLabel(labelText).selectByVisibleText(optionText);
  }

  submit() {
    return browser.click("button=Send");
  }
}

export default Page;
