import {
  setupPageInDesktopView,
  setupPageInMobileView,
} from "../pageobjects/page";

describe("When I visit the Home page in Desktop view", () => {
  it("shows the navigation bar and all of the items", async () => {
    const page = await setupPageInDesktopView("/", false);

    (await page.navigationBar.nav).should.exist;
    (await page.navigationBar.linkText(1)).should.equal("How it works");
    (await page.navigationBar.linkText(2)).should.equal("FAQ");
    (await page.navigationBar.linkText(3)).should.equal("Data Brokers");
    (await page.navigationBar.linkText(4)).should.equal("Blog");
    (await page.navigationBar.linkText(5)).should.equal("Contribute");
    (await page.navigationBar.linkText(6)).should.equal("About");
    (await page.navigationBar.linkLangSelect).should.equal("English");
    (await page.navigationBar.linkButtonText).should.equal("MAKE A DONATION");
  });
});

describe("When I visit the Home page in Desktop view", () => {
  it("focuses the Search input field", async () => {
    const page = await setupPageInDesktopView("/", false);

    (await page.searchIsFocused()).should.be.true;
  });
});

describe("When I visit the Home page in Mobile view", function() {
  this.timeout(90000); // Mobile tests can be slower in CI

  it("shows mobile navigation", async () => {
    const page = await setupPageInMobileView("/", true);

    await page.navigationBar.triggerMobileMenuToggle();

    (await page.navigationBar.mobLinkText(1)).should.equal("How it works");
    (await page.navigationBar.mobLinkText(2)).should.equal("FAQ");
    (await page.navigationBar.mobLinkText(3)).should.equal("Data Brokers");
    (await page.navigationBar.mobLinkText(4)).should.equal("Blog");
    (await page.navigationBar.mobLinkText(5)).should.equal("About");
    (await page.navigationBar.mobLangSelect).should.equal("English");
    (await page.navigationBar.mobButtonText).should.equal("MAKE A DONATION");
    (await page.navigationBar.mobLinkText(8)).should.equal("Contribute");
    (await page.navigationBar.mobLinkText(9)).should.equal("Stats");
    (await page.navigationBar.mobLinkText(10)).should.equal("Make a Donation");
    (await page.navigationBar.mobLinkText(11)).should.equal("Privacy Policy");
    (await page.navigationBar.mobLinkText(12)).should.equal("Contact Us");
    (await page.navigationBar.mobLinkText(13)).should.equal("#ownyourdata");
  });

    describe("and double-click on the FAQ text", () => {
      it("removes focus from the Search input field", async () => {
        const page = await setupPageInMobileView("/", true);

        await page.navigationBar.triggerMobileMenuToggle();
        await page.navigationBar.mobLink(2).click();
        await page.ownYourData.scrollIntoView();
        await page.ownYourData.doubleClick();

        (await page.searchIsNotFocused()).should.be.true;
      });
  });
});

describe("When I visit the Home page in Mobile view", function() {
  this.timeout(90000); // Mobile tests can be slower in CI

  it("focuses the Search input field", async () => {
    const page = await setupPageInMobileView("/", false);

    (await page.searchIsFocused()).should.be.true;
  });
});
