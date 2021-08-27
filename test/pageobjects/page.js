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
      async nav() {
        return await $("#nav");
      },
      async linkOne() {
        return await $("nav li:nth-child(1)");
      },
      async linkOneText() {
        return await (await this.linkOne()).getText();
      },
      async linkTwoText() {
        return await (await $("nav li:nth-child(2)")).getText();
      },
      async linkThreeText() {
        return await (await $("nav li:nth-child(3)")).getText();
      },
      async linkFourText() {
        return await (await $("nav li:nth-child(4)")).getText();
      },
      async linkFiveText() {
        return await (await $("nav li:nth-child(5)")).getText();
      },
      async linkSixText() {
        return await (await $("nav li:nth-child(6)")).getText();
      },
      async linkLangSelect() {
        return await (await $("nav  li:nth-child(7) > div > div")).getText();
      },
      async linkButton() {
        return await $("nav  li:nth-child(8) a");
      },
      async linkButtonText() {
        return await (await this.linkButton()).getText();
      },
      async triggerMobileMenuToggle() {
        await (await $("nav ul + img")).click();
        await (await $(".mob-navbar ul li")).waitForClickable();
      },
      async linkOneMob() {
        return await $(".mob-navbar ul li:nth-child(1)");
      },
      async linkOneMobText() {
        return await (await this.linkOneMob()).getText();
      },
      async linkTwoMobText() {
        return await (await $(".mob-navbar ul li:nth-child(2)")).getText();
      },
      async linkThreeMobText() {
        return await (await $(".mob-navbar ul li:nth-child(3)")).getText();
      },
      async linkFourMobText() {
        return await (await $(".mob-navbar ul li:nth-child(4)")).getText();
      },
      async linkFiveMobText() {
        return await (await $(".mob-navbar div > div")).getText();
      },
      async linkSixMob() {
        return await $(".mob-navbar ul > a");
      },
      async linkSixMobText() {
        return await (await this.linkSixMob()).getText();
      },
      async linkSevenMobText() {
        return await (await $(".mob-navbar ul li:nth-child(7)")).getText();
      },
      async linkEightMobText() {
        return await (await $(".mob-navbar ul li:nth-child(8)")).getText();
      },
      async linkNineMobText() {
        return await (await $(".mob-navbar ul li:nth-child(9)")).getText();
      },
      async linkTenMobText() {
        return await (await $(".mob-navbar ul li:nth-child(10)")).getText();
      },
      async linkElevenMobText() {
        return await (await $(".mob-navbar ul li:nth-child(11)")).getText();
      },
      async linkTwelvMobText() {
        return await (await $(".mob-navbar ul li:nth-child(12)")).getText();
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

  fillInSearch(value) {
    return $("#searchForm input").setValue(value);
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

export default Page;
export { setupPageInDesktopView, setupPageInMobileView };
