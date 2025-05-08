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
        return thanks.$("#SubscribeMessageBtn");
      },
      get socialShare() {
        return new SocialShare("#ThanksMessage");
      },
    };
  }

  get socialShare() {
    return new SocialShare("");
  }

  get navigationBar() {
    return {
      get nav() {
        return $("#nav");
      },
      link(num) {
        return $(`nav li:nth-child(${num})`);
      },
      linkText(num) {
        return this.link(num).getText();
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
      mobLink(num) {
        return $(`.mob-navbar ul li:nth-child(${num})`);
      },
      mobLinkText(num) {
        return this.mobLink(num).getText();
      },
      get mobLangSelect() {
        return $(".mob-navbar div > div").getText();
      },
      get mobButton() {
        return $(".mob-navbar ul > a");
      },
      get mobButtonText() {
        return this.mobButton.getText();
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

  parsedMailTo(url) {
    const mailTo = this.mailToParser.parse(url);
    return {
      to: mailTo.to,
      subject: decodeURIComponent(mailTo.attributeKey.subject),
      body: decodeURIComponent(mailTo.attributeKey.body)
    };
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

  async selectRadio(text) {
    const label = await $(`label=${text}`);
    await label.click();
  }

  submit() {
    return this.submitButton.click();
  }

  get submitButton() {
    return $("button.MuiButtonGroup-grouped:nth-child(1)");
  }

  get dropdownButton() {
    return $("button.MuiButtonGroup-grouped:nth-child(2)");
  }

  async openGmailDropdown() {
    const button = await this.dropdownButton;
    await button.waitForDisplayed();
    await button.waitForClickable();
    await button.click();

    const menuItem = await $("li.MuiButtonBase-root:nth-child(2)");
    await menuItem.waitForDisplayed();
    await menuItem.waitForClickable();
    await menuItem.click();
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
