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

  get ownYourData() {
    return $("#hero-heading");
  }

  get companyName() {
    return $("#orgName");
  }

  get heading() {
    return $("h1");
  }

  get dataOpenUrlAttribute() {
    return $("<body>").getAttribute("data-open-url");
  }

  get search() {
    return $("#companyNameSearch");
  }

  async searchIsFocused() {
    const element = await this.search;
    return await element.waitUntil(async () => {
      return await element.isFocused();
    });
  }

  async searchIsNotFocused() {
    const element = await this.search;
    return await element.waitUntil(async () => {
      return !(await element.isFocused());
    });
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

  get mailDialog() {
    return new MailDialog("[role=dialog]");
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
      get linkOne() {
        return $("nav li:nth-child(1)");
      },
      get linkOneText() {
        return this.linkOne.getText();
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
      get linkSixText() {
        return $("nav li:nth-child(6)").getText();
      },
      get linkLangSelect() {
        return $("nav  li:nth-child(7) > div > div").getText();
      },
      get linkButton() {
        return $("nav  li:nth-child(8) a");
      },
      get linkButtonText() {
        return this.linkButton.getText();
      },
      async triggerMobileMenuToggle() {
        await $("nav ul + img").click();
        await $(".mob-navbar ul li").waitForClickable();
      },
      get linkOneMob() {
        return $(".mob-navbar ul li:nth-child(1)");
      },
      get linkOneMobText() {
        return this.linkOneMob.getText();
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
        return $(".mob-navbar div > div").getText();
      },
      get linkSixMob() {
        return $(".mob-navbar ul > a");
      },
      get linkSixMobText() {
        return this.linkSixMob.getText();
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
      get linkElevenMobText() {
        return $(".mob-navbar ul li:nth-child(11)").getText();
      },
      get linkTwelvMobText() {
        return $(".mob-navbar ul li:nth-child(12)").getText();
      },
    };
  }

  async acceptCookies() {
    const button = await this.acceptCookiesButton;
    const buttonIsDisplayed = await button.isDisplayed();
    if (!buttonIsDisplayed) {
      return;
    }

    await button.click();
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

  async hasTracked(...row) {
    const result = await browser.execute(function (row) {
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
    return this.element.isExisting();
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

  get isVisible() {
    return $(this.baseSelector).isDisplayed();
  }

  fillInSearch(value) {
    return $("#searchForm input").setValue(value);
  }

  async selectElementByLabel(labelText) {
    const id = await $(this.baseSelector)
      .$(`label*=${labelText}`)
      .getAttribute("for");
    return $(this.baseSelector).$(`#${id}`);
  }

  async fillIn(labelText, value) {
    return (await this.selectElementByLabel(labelText)).setValue(value);
  }

  async select(labelText, text) {
    const select = await this.selectElementByLabel(labelText);
    return select.selectByVisibleText(text);
  }

  submit() {
    return this.submitButton.click();
  }

  get submitButton() {
    return $("button");
  }
}

class MailDialog {
  constructor(baseSelector) {
    this.baseSelector = baseSelector;
  }

  get isVisible() {
    return $(this.baseSelector).isDisplayed();
  }

  get openInGmail() {
    return $(this.baseSelector).$("a=open in Gmail");
  }

  get openInOutlook() {
    return $(this.baseSelector).$("a=open in Outlook");
  }

  get openInYahooMail() {
    return $(this.baseSelector).$("a=open in Yahoo Mail");
  }

  get openDefault() {
    return $(this.baseSelector).$("a=open default");
  }

  get copy() {
    return $(this.baseSelector).$("a=copy");
  }
}

const setupPage = async (path, acceptCookies) => {
  const page = new Page({
    path: path,
  });

  await page.visit();

  if (acceptCookies) {
    await page.acceptCookies();
  }

  return page;
};

const setupPageInDesktopView = async (path, acceptCookies) => {
  await browser.setWindowSize(1200, 823);

  const page = await setupPage(path, acceptCookies);

  return page;
};

const setupPageInMobileView = async (path, acceptCookies) => {
  await browser.setWindowSize(600, 823);

  const page = await setupPage(path, acceptCookies);

  return page;
};

const setDataOpenUrlAttributeOnWindowOpen = async () => {
  await browser.execute(function () {
    window.open = function (url) {
      document.body.setAttribute("data-open-url", url);
    };
  });
};

const initializeWindowPaqArray = async () => {
  await browser.execute(function () {
    if (!(window._paq instanceof Array)) {
      window._paq = [];
    }
  });
};

export default Page;
export { setupPageInDesktopView, setupPageInMobileView, setDataOpenUrlAttributeOnWindowOpen, initializeWindowPaqArray };
