import Page from "../pageobjects/page";
import { TIMEOUT } from "dns";

browser.addCommand("isInvalid", function() {
  return false;
});

describe("When I visit the home page", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/"
    });

    page.visit();

    browser.execute(function() {
      window.Date.prototype.toLocaleDateString = function() {
        return "23/05/2022";
      };
      window.open = function(url) {
        document.body.setAttribute("data-open-url", url);
      };

      if (!(window._paq instanceof Array)) {
        window._paq = [];
      }
    });
  });

  describe("and select a organisation", () => {
    beforeEach(() => {
      page.searchForm.fillIn("Search for an organisation", "Slack");
      browser.waitForExist("div=Slack", 3000);
      $("div=Slack").click();
    });

    it("updates the url to contain a query query paramter", () => {
      browser.getUrl().should.match(/\?company=slack.com/);
    });

    it("focuses the name field", () => {
      page.personalInfoForm.selectElementByLabel("Your full name").hasFocus()
        .should.be.true;

      page.hasTracked("trackSiteSearch", "Slack").should.be.true;
      page.hasTracked("trackEvent", "selectedCompany", "Slack").should.be.true;
    });

    describe("and fill in the form with invalid data and submit", () => {
      beforeEach(() => {
        page.personalInfoForm.fillIn("Your full name", "");
        page.personalInfoForm.fillIn("Additional identifying information", "");
        page.personalInfoForm.submit();
      });

      it("does not open a mailto url", () => {
        (page.mailTo === null).should.be.true;
      });
    });

    describe("and fill in the form with valid data and submit", () => {
      let mailTo;

      beforeEach(() => {
        page.personalInfoForm.fillIn("Your full name", "Rob");
        page.personalInfoForm.fillIn(
          "Additional identifying information",
          "10 Downing Street"
        );
        page.personalInfoForm.submit();
        mailTo = page.parsedMailTo;
      });

      it("opens a mailto url", () => {
        mailTo.to.should.be.equal("feedback@slack.com");
        mailTo.subject.should.be.equal("Erasure Request");
        mailTo.body.should.match(/Rob/, "Email body should contain users name");
        mailTo.body.should.match(
          /10 Downing Street/,
          "Email body should contain users home address"
        );
        mailTo.body.should.match(
          /23\/05\/2022/,
          "Email body should contain the formatted date"
        );
        mailTo.body.should.match(
          /I am writing to request that you erase all my personal information/,
          "Email body should contain expected content"
        );

        page.hasTracked(
          "trackEvent",
          "Send Erasure request",
          "complete",
          "Slack"
        ).should.be.true;
      });

      describe("thank you message", () => {
        it("shows a thank you message", () => {
          page.thanksMessage.isVisible.should.be.true;
          expect(page.thanksMessage.title).to.equal("Thank You");
          expect(page.thanksMessage.text).to.equal(
            "An Erasure Request email should have opened in your default email application. All you need to do is review and click Send. Organization have one calendar month to comply, and may ask you for additional information to help identify you in their systems. Check out our Frequently Asked Questions for information on what to do if you are unsatisfied with the way the organization has dealt with your request"
          );
          page.thanksMessage.btn.isVisible.should.be.true;

          page.thanksMessage.socialShare.exists.should.be.true;

          page.thanksMessage.socialShare.linkedIn.click();
          page.mailTo.should.contain("linkedin.com");
          page.hasTracked("trackEvent", "Social share", "linkedin").should.be
            .true;

          page.thanksMessage.socialShare.twitter.click();
          page.mailTo.should.contain("twitter.com");
          page.hasTracked("trackEvent", "Social share", "twitter").should.be
            .true;

          page.thanksMessage.socialShare.facebook.click();
          page.mailTo.should.contain("facebook.com");
          page.hasTracked("trackEvent", "Social share", "facebook").should.be
            .true;
        });

        it("should hide thanks message after clicking 'Find another company' and focus search form", () => {
          page.thanksMessage.isVisible.should.be.true;

          page.thanksMessage.btn.click();

          page.thanksMessage.isVisible.should.be.false;
          page.searchIsFocused.should.be.true;
          page.personalInfoForm.isVisible.should.be.false;
        });
      });
    });
  });

  describe("and perform a search with no results", () => {
    beforeEach(() => {
      page.searchForm.fillIn("Search for an organisation", "abcxyz123");
      $("li*=Can't find an organisation?").click();
    });

    describe("and fill in the form with valid data and submit", () => {
      let mailTo;

      beforeEach(() => {
        page.personalInfoForm.fillIn("Organisation name", "abcxyz123");
        page.personalInfoForm.fillIn("Organisation email", "dpo@abcxyz123");
        page.personalInfoForm.fillIn("Your full name", "Rob");
        page.personalInfoForm.fillIn(
          "Additional identifying information",
          "10 Downing Street"
        );
        page.personalInfoForm.submit();
        mailTo = page.parsedMailTo;
      });

      it("opens a mailto url", () => {
        mailTo.to.should.be.equal("dpo@abcxyz123");
        mailTo.subject.should.be.equal("Erasure Request");
        mailTo.body.should.match(/Rob/, "Email body should contain users name");
        mailTo.body.should.match(
          /10 Downing Street/,
          "Email body should contain users home address"
        );
        mailTo.body.should.match(
          /23\/05\/2022/,
          "Email body should contain the formatted date"
        );
        mailTo.body.should.match(
          /I am writing to request that you erase all my personal information/,
          "Email body should contain expected content"
        );
      });
    });
  });
});
