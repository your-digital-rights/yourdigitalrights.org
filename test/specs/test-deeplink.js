import Page from "../pageobjects/page";

describe("When I visit an org page", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/d/slack.com",
    });

    page.visit();
  });

  it("displays the org name in the page", () => {
    page.companyName.waitForExist(5000);
    page.companyName.$("a").getText().should.equal("Slack.com");
    page.headingText.should.equal(
      "Request account deletion or a copy of your personal data."
    );
  });
});
