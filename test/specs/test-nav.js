import {
  setupPageInDesktopView,
  setupPageInMobileView,
} from "../pageobjects/page";

describe("When I visit the Home page in Desktop view", () => {
  it("shows the navigation bar and all of the items", async () => {
    const page = await setupPageInDesktopView("/", true);

    (await page.navigationBar.nav).should.exist;
    (await page.navigationBar.linkOneText).should.equal("How it works");
    (await page.navigationBar.linkTwoText).should.equal("FAQ");
    (await page.navigationBar.linkThreeText).should.equal("Data Brokers");
    (await page.navigationBar.linkFourText).should.equal("Contribute");
    (await page.navigationBar.linkFiveText).should.equal("Stats");
    (await page.navigationBar.linkSixText).should.equal("About");
    (await page.navigationBar.linkLangSelect).should.equal("English");
    (await page.navigationBar.linkButtonText).should.equal("SEARCH ORGANIZATIONS");
  });

  // it('check the links are working as expected', () => {
  //   const page = setupPageInDesktopView("/", true);
  //
  //   page.navigationBar.fifthNavItem.click();
  //   page.getCurrentUrl().should.equal('hello');
  //   ...
  // })

  // it("takes me to correct part of the page", () => {});

  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", async () => {
      const page = await setupPageInDesktopView("/", true);

      await page.navigationBar.linkButton.click();

      (await page.searchIsFocused()).should.be.true;
    });

    describe("and double-click on the Own Your Data text", () => {
      it("removes focus from the Search input field", async () => {
        const page = await setupPageInDesktopView("/", true);

        await page.navigationBar.linkButton.click();
        await page.ownYourData.doubleClick();

        (await page.searchIsNotFocused()).should.be.true;
      });

      describe("and click the Search button on the navigation bar", () => {
        it("focuses the Search input field", async () => {
          const page = await setupPageInDesktopView("/", true);

          await page.navigationBar.linkButton.click();
          await page.ownYourData.doubleClick();
          await page.navigationBar.linkButton.click();

          (await page.searchIsFocused()).should.be.true;
        });
      });
    });
  });
});

describe("When I visit the Home page with #hero hash in Desktop view", () => {
  it("focuses the Search input field", async () => {
    const page = await setupPageInDesktopView("/#hero", false);

    (await page.searchIsFocused()).should.be.true;
  });
});

describe("When I visit the Home page in Mobile view", () => {
  it("shows mobile navigation", async () => {
    const page = await setupPageInMobileView("/", true);

    await page.navigationBar.triggerMobileMenuToggle();

    (await page.navigationBar.linkOneMobText).should.equal("How it works");
    (await page.navigationBar.linkTwoMobText).should.equal("FAQ");
    (await page.navigationBar.linkThreeMobText).should.equal("Data Brokers");
    (await page.navigationBar.linkFourMobText).should.equal("About");
    (await page.navigationBar.linkFiveMobText).should.equal("English");
    (await page.navigationBar.linkSixMobText).should.equal("SEARCH ORGANIZATIONS");
    (await page.navigationBar.linkSevenMobText).should.equal("Contribute");
    (await page.navigationBar.linkEightMobText).should.equal("Stats");
    (await page.navigationBar.linkNineMobText).should.equal("Make a Donation");
    (await page.navigationBar.linkTenMobText).should.equal("Privacy Policy");
    (await page.navigationBar.linkElevenMobText).should.equal("Contact Us");
    (await page.navigationBar.linkTwelveMobText).should.equal("#ownyourdata");
  });

  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", async () => {
      const page = await setupPageInMobileView("/", true);

      await page.navigationBar.triggerMobileMenuToggle();
      await page.navigationBar.linkSixMob.click();

      (await page.searchIsFocused()).should.be.true;
    });

    describe("and double-click on the Own Your Data text", () => {
      it("removes focus from the Search input field", async () => {
        const page = await setupPageInMobileView("/", true);

        await page.navigationBar.triggerMobileMenuToggle();
        await page.navigationBar.linkSixMob.click();
        await page.ownYourData.scrollIntoView();
        await page.ownYourData.doubleClick();

        (await page.searchIsNotFocused()).should.be.true;
      });

      describe("and click the Search button on the navigation bar", () => {
        it("focuses the Search input field", async () => {
          const page = await setupPageInMobileView("/", true);

          await page.navigationBar.triggerMobileMenuToggle();
          await page.navigationBar.linkSixMob.click();
          await page.ownYourData.scrollIntoView();
          await page.ownYourData.doubleClick();
          await page.navigationBar.triggerMobileMenuToggle();
          await page.navigationBar.linkSixMob.click();

          (await page.searchIsFocused()).should.be.true;
        });
      });
    });
  });
});

describe("When I visit the Home page with #hero hash in Mobile view", () => {
  it("focuses the Search input field", async () => {
    const page = await setupPageInMobileView("/#hero", false);

    (await page.searchIsFocused()).should.be.true;
  });
});

describe("When I visit the About page in Desktop view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", async () => {
      const page = await setupPageInDesktopView("/about", true);

      await page.navigationBar.linkButton.click();

      (await page.searchIsFocused()).should.be.true;
    });
  });
});

describe("When I visit the About page in Mobile view", () => {
  describe("and click the Search button on the navigation bar", () => {
    it("focuses the Search input field", async () => {
      const page = await setupPageInMobileView("/about", true);

      await page.navigationBar.triggerMobileMenuToggle();
      await page.navigationBar.linkSixMob.click();

      (await page.searchIsFocused()).should.be.true;
    });
  });
});
