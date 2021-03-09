import Page from "../pageobjects/page";

/*
browser.addCommand("isInvalid", function () {
  return false;
});
*/

describe("When I visit the home page", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/",
    });

    page.visit();

    browser.execute(function () {
      // window.Date.prototype.toLocaleDateString = function() {
      //   return "23/05/2022";
      // };

      window.open = function (url) {
        document.body.setAttribute("data-open-url", url);
      };

      if (!(window._paq instanceof Array)) {
        window._paq = [];
      }
    });

    page.acceptCookies();
  });

  describe("and select an organization", () => {
    beforeEach(() => {
      page.searchForm.fillIn("Search for an organization", "Slack");
      const searchResult = $("div=Slack (slack.com)");
      searchResult.waitForDisplayed();
      searchResult.click();
    });

    it("tracks site search", () => {
      page.hasTracked("trackSiteSearch", "slack.com").should.be.true;
    });

    it("updates the url", () => {
      browser.waitUntil(() => browser.getUrl().indexOf("slack") > 1);
      browser.getUrl().should.match(/d\/slack.com/);
    });

    it("focuses the name field", () => {
      page.personalInfoForm.selectElementByLabel("Full name").isFocused().should
        .be.true;
    });

    describe("and fill in the form with invalid data and submit", () => {
      beforeEach(() => {
        page.personalInfoForm.fillIn("Full name", "");
        page.personalInfoForm.fillIn("Additional identifying information", "");
        page.personalInfoForm.submit();
      });

      it("does not display the mail dialog", () => {
        page.mailDialog.isDisplayed().should.be.false;
      });
    });

    describe("and fill in the form with valid data and submit", () => {
      beforeEach(() => {
        page.personalInfoForm.fillIn("Full name", "Rob");
        page.personalInfoForm.fillIn(
          "Additional identifying information",
          "10 Downing Street"
        );
        page.personalInfoForm.select("Regulation", "GDPR (European Union)");

        page.personalInfoForm.submit();
      });

      it("displays the mail dialog", () => {
        page.mailDialog.isDisplayed().should.be.true;
      });

      describe("and click open in Gmail", () => {
        let mailTo;

        beforeEach(() => {
          page.mailDialogOpenInGmailLink.click();

          mailTo = page.parseMailToFromGmailUrl(page.dataOpenUrlAttribute);
        });

        it("opens a mailto url", () => {
          mailTo.to.should.be.equal("feedback@slack.com");
          mailTo.subject.should.be.equal(
            "Erasure Request (Article 17 of the GDPR)"
          );
          mailTo.body.should.match(
            /Rob/,
            "Email body should contain users name"
          );
          mailTo.body.should.match(
            /10 Downing Street/,
            "Email body should contain users home address"
          );
          mailTo.body.should.match(
            /To whom it may concern:\n\nI am writing to request that you erase all my personal information/,
            "Email body should contain expected content"
          );
          mailTo.body.should.contain(
            "General Data Protection Regulation (GDPR)",
            "Should contain GDPR"
          );

          page.hasTracked(
            "trackEvent",
            "Erasure Request",
            "Send GDPR Request",
            "slack.com"
          ).should.be.true;
        });

        describe("thank you message", () => {
          it("shows a thank you message", () => {
            page.thanksMessage.isVisible.should.be.true;
            expect(page.thanksMessage.title).to.equal("Thank You");
            expect(page.thanksMessage.text).to.equal(
              "A deletion request email should have opened in your email application. All you need to do is review it and click Send. Organization have one month to comply, and may ask you for additional information to help identify you in their systems."
            );
            page.thanksMessage.btn.isDisplayed().should.be.true;

            page.thanksMessage.socialShare.exists.should.be.true;
            expect(page.thanksMessage.extensionChromeButton).to.equal(
              "https://chrome.google.com/webstore/detail/opt-out-one-click-gdpr-er/dedldhojjkgbejnmmfpmbnbihmmpfbpd?hl=en-GB"
            );
            expect(page.thanksMessage.extensionFirefoxButton).to.equal(
              "https://addons.mozilla.org/en-GB/android/addon/opt-out/"
            );

            page.thanksMessage.socialShare.linkedIn.click();
            page.dataOpenUrlAttribute.should.contain("linkedin.com");
            page.hasTracked(
              "trackEvent",
              "Social Share",
              "Social Share From thankyou",
              "linkedin"
            ).should.be.true;

            page.thanksMessage.socialShare.twitter.click();
            page.dataOpenUrlAttribute.should.contain("twitter.com");
            page.hasTracked(
              "trackEvent",
              "Social Share",
              "Social Share From thankyou",
              "twitter"
            ).should.be.true;

            page.thanksMessage.socialShare.facebook.click();
            page.dataOpenUrlAttribute.should.contain("facebook.com");
            page.hasTracked(
              "trackEvent",
              "Social Share",
              "Social Share From thankyou",
              "facebook"
            ).should.be.true;
          });

          it("should hide thanks message after clicking 'Find another organization' and focus search form", () => {
            page.thanksMessage.isVisible.should.be.true;

            page.thanksMessage.btn.click();

            page.thanksMessage.isVisible.should.be.false;
            page.searchIsFocused.should.be.true;
            page.personalInfoForm.isVisible.should.be.false;
          });
        });
      });
    });
  });

  describe("and perform a search with no results", () => {
    beforeEach(() => {
      page.searchForm.fillIn("Search for an organization", "abcxyz123");
      $("li*=Can't find an organization?").click();
    });

    describe("and fill in the form with valid data and submit and click open in Gmail", () => {
      let mailTo;

      beforeEach(() => {
        page.personalInfoForm.fillIn("Organization name", "abcxyz123");
        page.personalInfoForm.fillIn("Organization email", "dpo@abcxyz123");
        page.personalInfoForm.fillIn("Full name", "Rob");
        page.personalInfoForm.select("Regulation", "CCPA (California)");
        page.personalInfoForm.fillIn(
          "Additional identifying information",
          "10 Downing Street"
        );
        page.personalInfoForm.submit();
        page.mailDialogOpenInGmailLink.click();
        mailTo = page.parseMailToFromGmailUrl(page.dataOpenUrlAttribute);
      });

      it("opens a mailto url", () => {
        mailTo.to.should.be.equal("dpo@abcxyz123");
        mailTo.subject.should.be.equal(
          "Deletion Request (Section 105 of The CCPA)"
        );
        mailTo.body.should.match(/Rob/, "Email body should contain users name");
        mailTo.body.should.match(
          /10 Downing Street/,
          "Email body should contain users home address"
        );
        mailTo.body.should.match(
          /I am writing to request that you delete all my personal information/,
          "Email body should contain expected content"
        );
      });
    });
  });

  describe("I see the navigation bar and all of the items", () => {
    it("shows the nav bar on desktop", () => {
      page.navigationBar.nav.should.exist;
      page.navigationBar.linkOneText.should.equal("How it works");
      page.navigationBar.linkTwoText.should.equal("FAQ");
      page.navigationBar.linkThreeText.should.equal("Data Brokers");
      page.navigationBar.linkFourText.should.equal("Browser Extension");
      page.navigationBar.linkFiveText.should.equal("About");
      page.navigationBar.linkButtonText.should.equal("SEARCH ORGANIZATIONS");
    });

    it("shows mobile navigation", () => {
      browser.setWindowSize(600, 823);
      page.navigationBar.triggerMobileMenuToggle;
      page.navigationBar.linkOneMobText.should.equal("How it works");
      page.navigationBar.linkTwoMobText.should.equal("FAQ");
      page.navigationBar.linkThreeMobText.should.equal("Data Brokers");
      page.navigationBar.linkFourMobText.should.equal("About");
      page.navigationBar.linkFiveMobText.should.equal("SEARCH ORGANIZATIONS");
      page.navigationBar.linkSixMobText.should.equal("Browser Extension");
      page.navigationBar.linkSevenMobText.should.equal("Make a Donation");
      page.navigationBar.linkEightMobText.should.equal("Privacy Policy");
      page.navigationBar.linkNineMobText.should.equal("Contact Us");
      page.navigationBar.linkTenMobText.should.equal("#ownyourdata");
    });

    // it('check the links are working as expected', () => {
    //   page.navigationBar.fifthNavItem.click();
    //   page.getCurrentUrl().should.equal('hello');

    // })

    it("takes me to correct part of the page", () => {});
  });
});
