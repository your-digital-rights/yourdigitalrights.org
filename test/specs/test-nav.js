import {
  setupPageInDesktopView,
  setupPageInMobileView,
} from "../pageobjects/page";

describe("When I visit the Home page in Desktop view", () => {
  it("shows the navigation bar and all of the items", () => {
    const page = setupPageInDesktopView("/", true);

    page.navigationBar.nav.should.exist;
    page.navigationBar.linkOneText.should.equal("How it works");
    page.navigationBar.linkTwoText.should.equal("FAQ");
    page.navigationBar.linkThreeText.should.equal("Data Brokers");
    page.navigationBar.linkFourText.should.equal("Browser Extension");
    page.navigationBar.linkFiveText.should.equal("About");
    page.navigationBar.linkButtonText.should.equal("SEARCH ORGANIZATIONS");
  });

  // it('check the links are working as expected', () => {
  //   const page = setupPageInDesktopView("/", true);
  //
  //   page.navigationBar.fifthNavItem.click();
  //   page.getCurrentUrl().should.equal('hello');
  //   ...
  // })

  it("takes me to correct part of the page", () => {});
});

describe("When I visit the Home page in Mobile view", () => {
  it("shows mobile navigation", () => {
    const page = setupPageInMobileView("/", true);

    page.navigationBar.triggerMobileMenuToggle;

    page.navigationBar.linkOneMobText.should.equal("How it works");
    page.navigationBar.linkTwoMobText.should.equal("FAQ");
    page.navigationBar.linkThreeMobText.should.equal("Data Brokers");
    page.navigationBar.linkFourMobText.should.equal("About");
    page.navigationBar.linkFiveMobText.should.equal("SEARCH ORGANIZATIONS");
    page.navigationBar.linkSixMobText.should.equal("Browser Extension");
    page.navigationBar.linkSevenMobText.should.equal("Make a Donation");
    page.navigationBar.linkEightMobText.should.equal("Privacy Policy");
    page.navigationBar.linkNineMobText.should.equal("Contact Us");
    page.navigationBar.linkTenMobText.should.equal("#ownyourdata");
  });
});

describe("When I visit the Home page in Desktop view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupPageInDesktopView("/", true);

      page.navigationBar.linkButton.click();

      page.searchIsFocused.should.be.true;
    });
  });
});

describe("When I visit the About page in Desktop view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupPageInDesktopView("/about", true);

      page.navigationBar.linkButton.click();

      page.searchIsFocused.should.be.true;
    });
  });
});

describe("When I visit the Home page in Mobile view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupPageInMobileView("/", true);

      page.navigationBar.triggerMobileMenuToggle;
      page.navigationBar.linkFiveMob.click();

      page.searchIsFocused.should.be.true;
    });
  });
});

describe("When I visit the About page in Mobile view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupPageInMobileView("/about", true);

      page.navigationBar.triggerMobileMenuToggle;
      page.navigationBar.linkFiveMob.click();

      page.searchIsFocused.should.be.true;
    });
  });
});
