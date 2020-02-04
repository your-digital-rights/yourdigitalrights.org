import Page from "../pageobjects/page";

describe("When I visit the home page with a company parameter", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/?company=slack.com"
    });

    page.visit();
  });

  it("displays the company name in the page", () => {
    browser.isExisting("h1=Delete my data from Slack (slack.com)").should.be.true;
  });
});
