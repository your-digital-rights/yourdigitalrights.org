import Page from "../pageobjects/page";

describe("When I visit the home page with a company parameter", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/?company=slack.com",
    });

    page.visit();
  });

  it("displays the company name in the page", () => {
    page.companyName.waitForExist();
    page.companyName.$("a").getText().should.equal("Slack.com");
    page.headingText.should.equal(
      "Request account deletion or a copy of your personal data."
    );
  });
});
