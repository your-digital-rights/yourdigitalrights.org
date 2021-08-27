import Page from "../pageobjects/page";

describe("When I visit an org page", () => {
  let page;

  beforeEach(async () => {
    page = new Page({
      path: "/d/slack.com",
    });

    await page.visit();
  });

  it("displays the org name in the page", async () => {
    const companyName = await page.companyName;
    const companyNameAnchor = await companyName.$("a");
    const companyNameAnchorText = await companyNameAnchor.getText();
    companyNameAnchorText.should.equal("Slack.com");

    const heading = await page.heading;
    const headingText = await heading.getText();
    headingText.should.equal(
      "Request account deletion or a copy of your personal data."
    );
  });
});
