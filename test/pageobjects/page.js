import mailToParser from "mailto-parser";

class Page {
  constructor({ path }) {
    this.path = path;
    this.searchForm = new Form("#searchForm");
    this.personalInfoForm = new Form("#personalInfoForm");
    this.mailToParser = new mailToParser.Parser();
  }

  visit() {
    return browser.url(`http://localhost:3000${this.path}`);
  }

  get headingText() {
    return browser.getText("h1");
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
      get extensionChromeButton() {
        return thanks.$('#chromeExtension').getAttribute('href');
      },
      get extensionFirefoxButton() {
        return thanks.$('#firefoxExtension').getAttribute('href');
      },
      get socialShare() {
        return new SocialShare('#ThanksMessage');
      }
    };
  }

  get socialShare() {
    return new SocialShare('#faq +');
  }

  get navigationBar() {
    return {
      get nav() {
        return $('#nav');
      },
      get linkOneText() {
        return browser.getText('nav li:nth-child(1)');
      },
      get linkTwoText() {
        return browser.getText('nav li:nth-child(2)');
      },
      get linkThreeText() {
        return browser.getText('nav li:nth-child(3)');
      },
      get linkFourText() {
        return browser.getText('nav li:nth-child(4)');
      },
      get linkFiveText() {
        return browser.getText('nav li:nth-child(5)');
      },
      get linkButtonText() {
        return browser.getText('nav > ul > a');
      },
      get linkOneMobText() {
        browser.setWindowSize(753, 700);
        let linkText = browser.getText('.mob-navbar ul li:nth-child(1)');
        // browser.manage().window().setSize(x, y);
        return linkText;
      }
    }
  }

  hasTracked(...row) {
    let { value: result } = browser.execute(function(row) {
      let paq = window._paq;

      return {
        result: paq.some(function(tracked) {
          return row.every(function (r) {
            return tracked.includes(r);
          });
        }),
        paq
      };

    }, row);

    return result.result;
  }
}

class SocialShare {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
    this.element = browser.element(`${this.baseSelector} .ss`);
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

  get github() {
    return this.element.$('.SocialMediaShareButton--github');
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

  select(labelText, text) {
    let select = this.selectElementByLabel(labelText);
    return select.selectByAttribute('value', text);
  }

  submit() {
    return this.submitButton.click();
  }

  get submitButton() {
    return $("button");
  }
  
}

export default Page;
