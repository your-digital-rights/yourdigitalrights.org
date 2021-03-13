import Page from "../pageobjects/page";

const setup = (path) => {
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
      page.navigationBar.linkButton.click();

      page.searchIsFocused.should.be.true;
    });
  });
});

describe("When I visit the About page", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", () => {
      const page = setupWithAboutPage();
      page.navigationBar.linkButton.click();

      page.searchIsFocused.should.be.true;
    });
  });
});
