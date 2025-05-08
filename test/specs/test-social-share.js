import { setupPageInDesktopView, setDataOpenUrlAttributeOnWindowOpen } from "../pageobjects/page";

describe("When I view social sharing", () => {
  it("should show facebook, twitter, email and linkedin share links", async () => {
    const page = await setupPageInDesktopView("/about", true);
    await setDataOpenUrlAttributeOnWindowOpen();

    await page.socialShare.linkedIn.click();
    (await page.dataOpenUrlAttribute).should.include("https://linkedin.com/shareArticle?url=https%3A%2F%2Fyourdigitalrights.org");

    await page.socialShare.twitter.click();
    (await page.dataOpenUrlAttribute).should.include("https://twitter.com/intent/tweet?url=https%3A%2F%2Fyourdigitalrights.org");

    await page.socialShare.email.click();
    (await page.dataOpenUrlAttribute).should.include("mailto:?body=Check%20out%20YourDigitalRights.org");

    await page.socialShare.facebook.click();
    (await page.dataOpenUrlAttribute).should.include("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyourdigitalrights.org");
  });
});
