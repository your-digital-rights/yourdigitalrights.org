import mailToParser from "mailto-parser";

class Page {
  constructor({ path }) {
    this.path = path;
    this.searchForm = new Form("#searchForm");
    this.personalInfoForm = new Form("#personalInfoForm");
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

  get searchResults() {
    return $$(".search-result");
  }

  get thanksMessage() {
    let thanks = $('#ThanksMessage');

    return {
      isVisible: thanks.type !== 'NoSuchElement',
      title: thanks.$('#ThanksMessageTitle').getText(),
      text: thanks.$('#ThanksMessageText').getText(),
      btn: thanks.$('[class*=ThanksMessage-btn')
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
      .getAttribute(`label*=${labelText}`, "for");
    return $(`#${id}`);
  }

  fillIn(labelText, value) {
    return this.selectElementByLabel(labelText).setValue(value);
  }

  submit() {
    return this.submitButton.click();
  }

  get submitButton() {
    return $("button=Send your request");
  }
}

export default Page;
