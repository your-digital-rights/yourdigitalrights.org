import mailToParser from 'mailto-parser';
import {expect} from '@playwright/test';

class Page {
  constructor(page, {path}) {
    this.page = page;
    this.path = path;
    this.searchForm = new Form(page, '#searchForm');
    this.personalInfoForm = new Form(page, '#personalInfoForm');
    this._mailToParser = new mailToParser.Parser();
  }

  async visit() {
    await this.page.goto(`http://localhost:3001${this.path}`);
  }

  get acceptCookiesButton() {
    return this.page.getByRole('button', {name: 'Accept all'});
  }

  get ownYourData() {
    return this.page.locator('#hero-heading');
  }

  get companyName() {
    return this.page.locator('#orgName');
  }

  get heading() {
    return this.page.locator('h1');
  }

  get dataOpenUrlAttribute() {
    return this.page.locator('body').getAttribute('data-open-url');
  }

  get search() {
    return this.page.locator('#companyNameSearch');
  }

  async searchIsFocused() {
    await expect(this.search).toBeFocused({timeout: 10_000});
    return true;
  }

  async searchIsNotFocused() {
    await expect(this.search).not.toBeFocused({timeout: 10_000});
    return true;
  }

  get searchResults() {
    return this.page.locator('.search-result');
  }

  get redirectOverlay() {
    const page = this.page;
    const overlay = page.locator(
      `//*[contains(text(),'Great news')]/ancestor::div[@role="document"]`
    );

    return {
      isDisplayed: () => overlay.isVisible(),
      close: () => overlay.getByRole('button', {name: 'Continue'}).click(),
    };
  }

  get thanksMessage() {
    const thanks = this.page.locator('#ThanksMessage');

    return {
      get isVisible() {
        return thanks.isVisible();
      },
      get title() {
        return thanks.locator('#ThanksMessageTitle').textContent();
      },
      get text() {
        return thanks.locator('#ThanksMessageText').textContent();
      },
      get btn() {
        return thanks.locator('#SubscribeMessageBtn');
      },
      get socialShare() {
        return new SocialShare(thanks.locator('.ss'));
      },
    };
  }

  get socialShare() {
    return new SocialShare(this.page.locator('.ss'));
  }

  get navigationBar() {
    const page = this.page;

    return {
      get nav() {
        return page.locator('nav');
      },
      link(num) {
        return page.locator(`nav li:nth-child(${num})`);
      },
      linkText(num) {
        return this.link(num).textContent();
      },
      get linkLangSelect() {
        return page.locator('nav li:nth-child(7) > div > div').textContent();
      },
      get linkButton() {
        return page.locator('nav li:nth-child(8) a');
      },
      get linkButtonText() {
        return this.linkButton.textContent();
      },
      async triggerMobileMenuToggle() {
        await page.locator('nav ul + div').click();
        await page.locator('.mob-navbar ul li').first().waitFor({state: 'visible'});
      },
      mobLink(num) {
        return page.locator(`.mob-navbar ul li:nth-child(${num})`);
      },
      mobLinkText(num) {
        return this.mobLink(num).textContent();
      },
      get mobLangSelect() {
        return page.locator('.mob-navbar div > div').textContent();
      },
      get mobButton() {
        return page.locator('.mob-navbar ul > a');
      },
      get mobButtonText() {
        return this.mobButton.textContent();
      },
    };
  }

  async acceptCookies() {
    const button = this.acceptCookiesButton;
    if (await button.isVisible()) {
      await button.click();
    }
  }

  parsedMailTo(url) {
    const mailTo = this._mailToParser.parse(url);
    return {
      to: mailTo.to,
      subject: decodeURIComponent(mailTo.attributeKey.subject),
      body: decodeURIComponent(mailTo.attributeKey.body),
    };
  }

  parseMailToFromGmailUrl(gmailUrl) {
    const urlParameter = new URLSearchParams(gmailUrl).get('url');
    const mailTo = this._mailToParser.parse(urlParameter);
    return {
      to: mailTo.to,
      subject: decodeURIComponent(mailTo.attributeKey.subject),
      body: decodeURIComponent(mailTo.attributeKey.body),
    };
  }

  async hasTracked(...row) {
    try {
      await expect
        .poll(
          async () => {
            return await this.page.evaluate(row => {
              var valuesMatch = function (expected, actual) {
                if (expected === actual) return true;
                if (typeof expected === 'string' && typeof actual === 'string') {
                  return (
                    actual.indexOf(expected) !== -1 ||
                    expected.indexOf(actual) !== -1
                  );
                }
                return false;
              };
              var trackedEvents = [];
              var appendEvents = function (sourceEvents) {
                if (!(sourceEvents instanceof Array)) return;
                for (var n = 0; n < sourceEvents.length; n++) {
                  trackedEvents.push(sourceEvents[n]);
                }
              };
              appendEvents(window.__ydrTrackedEvents);
              appendEvents(window._paq);
              try {
                var serializedEvents =
                  window.sessionStorage.getItem('__ydrTrackedEvents');
                if (serializedEvents) {
                  appendEvents(JSON.parse(serializedEvents));
                }
              } catch (e) {}
              for (var i = 0; i < trackedEvents.length; i++) {
                var tracked = trackedEvents[i];
                if (!(tracked instanceof Array)) continue;
                var rowMatch = true;
                for (var j = 0; j < row.length; j++) {
                  var rowValueFound = false;
                  for (var k = 0; k < tracked.length; k++) {
                    if (valuesMatch(row[j], tracked[k])) {
                      rowValueFound = true;
                      break;
                    }
                  }
                  if (!rowValueFound) {
                    rowMatch = false;
                    break;
                  }
                }
                if (rowMatch) return true;
              }
              return false;
            }, row);
          },
          {timeout: 8000, intervals: [150]}
        )
        .toBe(true);
      return true;
    } catch (e) {
      return false;
    }
  }
}

class SocialShare {
  constructor(element) {
    this.element = element;
  }

  get exists() {
    return this.element.isVisible();
  }

  get linkedIn() {
    return this.element.locator('.SocialMediaShareButton--linkedin');
  }

  get twitter() {
    return this.element.locator('.SocialMediaShareButton--twitter');
  }

  get email() {
    return this.element.locator('.SocialMediaShareButton--email');
  }

  get github() {
    return this.element.locator('.SocialMediaShareButton--github');
  }

  get facebook() {
    return this.element.locator('.SocialMediaShareButton--facebook');
  }
}

class Form {
  constructor(page, baseSelector) {
    this.page = page;
    this.baseSelector = baseSelector;
  }

  get isVisible() {
    return this.page.locator(this.baseSelector).isVisible();
  }

  async fillInSearch(value) {
    await this.page.locator('#searchForm input').fill(value);
  }

  async selectElementByLabel(labelText) {
    const base = this.page.locator(this.baseSelector);
    const id = await base.locator(`label:has-text("${labelText}")`).getAttribute('for');
    return base.locator(`#${id}`);
  }

  async fillIn(labelText, value) {
    const el = await this.selectElementByLabel(labelText);
    await el.fill(value);
  }

  async select(labelText, text) {
    const el = await this.selectElementByLabel(labelText);
    await el.selectOption({label: text});
  }

  async selectRadio(text) {
    await this.page.locator(`label:has-text("${text}")`).click();
  }

  async submit() {
    await this.page.locator('button.MuiButtonGroup-grouped:nth-child(1)').click();
  }

  get submitButton() {
    return this.page.locator('button.MuiButtonGroup-grouped:nth-child(1)');
  }

  get dropdownButton() {
    return this.page.locator('button.MuiButtonGroup-grouped:nth-child(2)');
  }

  async openGmailDropdown() {
    const button = this.dropdownButton;
    await button.waitFor({state: 'visible', timeout: 60_000});
    await button.click();

    await this.page.waitForTimeout(1000);

    const menuItem = this.page.locator("//li[contains(., 'Open in Gmail')]");
    await menuItem.waitFor({state: 'visible', timeout: 60_000});
    await menuItem.click();
  }
}

const setupPage = async (page, path, acceptCookies) => {
  const p = new Page(page, {path});
  await p.visit();
  if (acceptCookies) {
    await p.acceptCookies();
  }
  return p;
};

const setupPageInDesktopView = async (page, path, acceptCookies) => {
  await page.setViewportSize({width: 1200, height: 823});
  return setupPage(page, path, acceptCookies);
};

const setupPageInMobileView = async (page, path, acceptCookies) => {
  await page.setViewportSize({width: 600, height: 823});
  return setupPage(page, path, acceptCookies);
};

const setDataOpenUrlAttributeOnWindowOpen = async page => {
  await page.evaluate(() => {
    window.open = function (url) {
      document.body.setAttribute('data-open-url', url);
    };
  });
};

const initializeWindowPaqArray = async page => {
  await page.evaluate(() => {
    if (!(window._paq instanceof Array)) {
      window._paq = [];
    }
    window.__ydrTrackedEvents = [];
    try {
      window.sessionStorage.removeItem('__ydrTrackedEvents');
    } catch (e) {}
  });
};

export default Page;
export {
  setupPageInDesktopView,
  setupPageInMobileView,
  setDataOpenUrlAttributeOnWindowOpen,
  initializeWindowPaqArray,
};
