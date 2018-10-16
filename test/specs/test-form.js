import Page from "../pageobjects/page";

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
    });
  });

  describe("and select a organisation", () => {
    beforeEach(() => {
      page.searchForm.fillIn("Search for an organisation", "Slack");
      browser.waitForExist("div=Slack", 3000);
      $("div=Slack").click();
    });

    it("updates the url to contain a query query paramter", () => {
      browser.getUrl().should.match(/\?company=Slack/);
    });

    it("focuses the name field", () => {
      page.personalInfoForm.selectElementByLabel("Your name").hasFocus().should
        .be.true;
    });

    describe("and fill in the form with invalid data and submit", () => {
      beforeEach(() => {
        page.personalInfoForm.fillIn("Your name", "");
        page.personalInfoForm.fillIn("Your home address", "");
        page.personalInfoForm.submit();
      });

      it("does not open a mailto url", () => {
        (page.mailTo === null).should.be.true;
      });
    });

    describe("and fill in the form with valid data and submit", () => {
      let mailTo;

      beforeEach(() => {
        page.personalInfoForm.fillIn("Your name", "Rob");
        page.personalInfoForm.fillIn("Your home address", "10 Downing Street");
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
        page.personalInfoForm.fillIn("Your name", "Rob");
        page.personalInfoForm.fillIn("Your home address", "10 Downing Street");
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
