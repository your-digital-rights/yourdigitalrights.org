import Page from "../pageobjects/page";

describe("When I visit the home page with a company parameter", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/?company=Google"
    });

    page.visit();
  });

  it("displays the company name in the page", () => {
    browser.isExisting("h2=Opting out of Google").should.be.true;
  });
});
