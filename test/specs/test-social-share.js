import { setupPageInDesktopView, setDataOpenUrlAttributeOnWindowOpen } from "../pageobjects/page";

describe("When I view social sharing", () => {
  it("should show facebook, twitter, email and linkedin share links", async () => {
    const page = await setupPageInDesktopView("/", true);
    await setDataOpenUrlAttributeOnWindowOpen();

    await page.socialShare.linkedIn.click();
    (await page.dataOpenUrlAttribute).should.be.equal(
      "https://linkedin.com/shareArticle?url=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dlinkedin%26pk_source%3Dhomepage"
    );

    await page.socialShare.twitter.click();
    (await page.dataOpenUrlAttribute).should.be.equal(
      "https://twitter.com/share?url=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dtwitter%26pk_source%3Dhomepage&text=Find%20out%20what%20personal%20data%20thousands%20of%20organizations%20have%20on%20you%2C%20and%20get%20them%20to%20delete%20it.%20Check%20out%20yourdigitalrights.org.&hashtags=GDPR%2CCCPA%2Cyourdigitalrights%2Crighttobeforgotten%2Coptout%2Cownyourdata"
    );

    await page.socialShare.email.click();
    (await page.dataOpenUrlAttribute).should.be.equal(
      "mailto:?body=Check%20out%20YourDigitalRights.org%2C%20a%20free%20service%20which%20makes%20it%20easy%20to%20find%20out%20what%20personal%20data%20thousands%20of%20organizations%20have%20on%20you%2C%20and%20get%20them%20to%20delete%20it.&subject=Find%20out%20what%20personal%20data%20thousands%20of%20organizations%20have%20on%20you%2C%20and%20get%20them%20to%20delete%20it%20%7C%20Your%20Digital%20Rights"
    );

    await page.socialShare.facebook.click();
    (await page.dataOpenUrlAttribute).should.be.equal(
      "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dfacebook%26pk_source%3Dhomepage&quote=Find%20out%20what%20personal%20data%20thousands%20of%20organizations%20have%20on%20you%2C%20and%20get%20them%20to%20delete%20it.%20Check%20out%20yourdigitalrights.org."
    );
  });
});
