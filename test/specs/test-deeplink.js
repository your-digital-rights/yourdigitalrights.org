import { setupPageInDesktopView } from "../pageobjects/page";

describe("When I visit an org page", () => {
  it("displays the org name in the page", async () => {
    const page = await setupPageInDesktopView("/d/slack.com", false);

    const companyName = await page.companyName;
    const companyNameText = await companyName.getText();
    companyNameText.should.equal("Slack.com");

    const heading = await page.heading;
    const headingText = await heading.getText();
    headingText.should.equal(
      "Delete your slack.com account or request your data."
    );
  });
});
