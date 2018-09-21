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

  get searchIsFocused() {
    return browser.hasFocus('#companyNameSearch');
  }

  get searchResults() {
    return $$(".search-result");
  }

  get thanksMessage() {
    let thanks = $('#ThanksMessage');

    return {
      get isVisible () { return thanks.type !== 'NoSuchElement' },
      get title() { return thanks.$('#ThanksMessageTitle').getText(); },
      get text() { return thanks.$('#ThanksMessageText').getText(); },
      get btn() {
        let btn = thanks.$('button');

        return {
          isVisible: btn.type !== 'NoSuchElement',
          click: btn.click
        };
      },
      get socialShare() {
        return new SocialShare('#ThanksMessage');
      }
    };
  }

  get socialShare() {
    let socialShare = $('#faq + .ss');

    return {
      linkedIn: socialShare.$('.SocialMediaShareButton--linkedin'),
      twitter: socialShare.$('.SocialMediaShareButton--twitter'),
      facebook: socialShare.$('.SocialMediaShareButton--facebook'),
      email: socialShare.$('a')
    };
  }
}

class SocialShare {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
    this.element = browser.element(`${this.baseSelector} .social-share`);
  }

  get exists() {
    return this.element.type !== 'NoSuchElement';
  }

  get linkedIn() {
    return this.element.$('.SocialMediaShareButton--linkedin');
  }

  get twitter() {
    return this.element.$('.SocialMediaShareButton--twitter');
  }

  get email() {
    return this.element.$('.SocialMediaShareButton--email');
  }

  get facebook() {
    return this.element.$('.SocialMediaShareButton--facebook');
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

  get isVisible() {
    return browser.isVisible(this.baseSelector);
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
