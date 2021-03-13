import Page from "../pageobjects/page";

const setup = (path) => {
  browser.setWindowSize(600, 823);

  const page = new Page({
    path: path,
  });

  page.visit();
  page.acceptCookies();

  return page;
};

const setupWithHomePage = () => {
  return setup("/");
};

const setupWithAboutPage = () => {
  return setup("/about");
};

describe("When I visit the Home page", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupWithHomePage();
      page.navigationBar.triggerMobileMenuToggle;
      page.navigationBar.linkFiveMob.click();

      page.searchIsFocused.should.be.true;
    });
  });
});

describe("When I visit the About page", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupWithAboutPage();
      page.navigationBar.triggerMobileMenuToggle;
      page.navigationBar.linkFiveMob.click();

      page.searchIsFocused.should.be.true;
    });
  });
});
