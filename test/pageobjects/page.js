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

  get acceptCookiesButton() {
    return $("button=Accept all");
  }

  get companyName() {
    return $("#orgName");
  }

  get headingText() {
    return $("h1").getText();
  }

  get mailDialog() {
    return $("[role=dialog]");
  }

  get mailDialogOpenInGmailLink() {
    return this.mailDialog.$("a=open in Gmail");
  }

  get dataOpenUrlAttribute() {
    return $("<body>").getAttribute("data-open-url");
  }

  get searchIsFocused() {
    return $("#companyNameSearch").isFocused();
  }

  get searchResults() {
    return $$(".search-result");
  }

  get redirectOverlay() {
    const overlay = $(
      `//*[contains(text(),'Great news')]/ancestor::div[@role="document"]`
    );

    return {
      isDisplayed: () => overlay.isDisplayed(),
      close: () => overlay.$("button=Continue").click(),
    };
  }

  get thanksMessage() {
    const thanks = $("#ThanksMessage");

    return {
      get isVisible() {
        return thanks.isDisplayed();
      },
      get title() {
        return thanks.$("#ThanksMessageTitle").getText();
      },
      get text() {
        return thanks.$("#ThanksMessageText").getText();
      },
      get btn() {
        return thanks.$("button");
      },
      get extensionChromeButton() {
        return thanks.$("#chromeExtension").getAttribute("href");
      },
      get extensionFirefoxButton() {
        return thanks.$("#firefoxExtension").getAttribute("href");
      },
      get socialShare() {
        return new SocialShare("#ThanksMessage");
      },
    };
  }

  get socialShare() {
    return new SocialShare("#faq +");
  }

  get navigationBar() {
    return {
      get nav() {
        return $("#nav");
      },
      get linkOneText() {
        return $("nav li:nth-child(1)").getText();
      },
      get linkTwoText() {
        return $("nav li:nth-child(2)").getText();
      },
      get linkThreeText() {
        return $("nav li:nth-child(3)").getText();
      },
      get linkFourText() {
        return $("nav li:nth-child(4)").getText();
      },
      get linkFiveText() {
        return $("nav li:nth-child(5)").getText();
      },
      get linkButtonText() {
        return $("nav > ul > a").getText();
      },
      get triggerMobileMenuToggle() {
        $("nav ul + img").click();
        $(".mob-navbar ul li").waitForClickable();
      },
      get linkOneMobText() {
        return $(".mob-navbar ul li:nth-child(1)").getText();
      },
      get linkTwoMobText() {
        return $(".mob-navbar ul li:nth-child(2)").getText();
      },
      get linkThreeMobText() {
        return $(".mob-navbar ul li:nth-child(3)").getText();
      },
      get linkFourMobText() {
        return $(".mob-navbar ul li:nth-child(4)").getText();
      },
      get linkFiveMobText() {
        return $(".mob-navbar ul > a > span").getText();
      },
      get linkSixMobText() {
        return $(".mob-navbar ul li:nth-child(6)").getText();
      },
      get linkSevenMobText() {
        return $(".mob-navbar ul li:nth-child(7)").getText();
      },
      get linkEightMobText() {
        return $(".mob-navbar ul li:nth-child(8)").getText();
      },
      get linkNineMobText() {
        return $(".mob-navbar ul li:nth-child(9)").getText();
      },
      get linkTenMobText() {
        return $(".mob-navbar ul li:nth-child(10)").getText();
      },
    };
  }

  acceptCookies() {
    if (!this.acceptCookiesButton.isDisplayed()) {
      return;
    }

    this.acceptCookiesButton.click();
  }

  parseMailToFromGmailUrl(gmailUrl) {
    const urlParameter = new URLSearchParams(gmailUrl).get("url");

    const mailTo = this.mailToParser.parse(urlParameter);
    return {
      to: mailTo.to,
      subject: decodeURIComponent(mailTo.attributeKey.subject),
      body: decodeURIComponent(mailTo.attributeKey.body),
    };
  }

  hasTracked(...row) {
    const result = browser.execute(function (row) {
      const paq = window._paq;

      return {
        result: paq.some(function (tracked) {
          return row.every(function (r) {
            return tracked.includes(r);
          });
        }),
        paq,
      };
    }, row);

    return result.result;
  }
}

class SocialShare {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
    this.element = $(`${this.baseSelector} .ss`);
  }

  get exists() {
    return this.element.type !== "NoSuchElement";
  }

  get linkedIn() {
    return this.element.$(".SocialMediaShareButton--linkedin");
  }

  get twitter() {
    return this.element.$(".SocialMediaShareButton--twitter");
  }

  get email() {
    return this.element.$(".SocialMediaShareButton--email");
  }

  get github() {
    return this.element.$(".SocialMediaShareButton--github");
  }

  get facebook() {
    return this.element.$(".SocialMediaShareButton--facebook");
  }
}

class Form {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
  }

  get isInvalid() {
    const exists = $(`${this.baseSelector}:invalid`).value;
    return !!exists;
  }

  get isValid() {
    return !this.isInvalid;
  }

  get isVisible() {
    return $(this.baseSelector).isDisplayed();
  }

  selectElementByLabel(labelText) {
    const id = $(this.baseSelector)
      .$(`label*=${labelText}`)
      .getAttribute("for");
    return $(this.baseSelector).$(`#${id}`);
  }

  fillIn(labelText, value) {
    return this.selectElementByLabel(labelText).setValue(value);
  }

  select(labelText, text) {
    const select = this.selectElementByLabel(labelText);
    return select.selectByVisibleText(text);
  }

  submit() {
    return this.submitButton.click();
  }

  get submitButton() {
    return $("button");
  }
}

export default Page;
