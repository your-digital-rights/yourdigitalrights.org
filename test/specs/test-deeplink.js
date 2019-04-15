import Page from "../pageobjects/page";

describe("When I visit the home page with a company parameter", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/?company=amazon.co.uk"
    });

    page.visit();
  });

  it("displays the company name in the page", () => {
    browser.isExisting("h2=Opting out of Amazon UK").should.be.true;
  });
});
