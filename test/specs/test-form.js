import Page from "../pageobjects/page";

browser.addCommand("isInvalid", function() {
  return false;
});

describe("When visiting the home page", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/"
    });
    page.visit();
    browser.execute(function() {
      const OldDate = window.Date;
      window.Date = function() {
        return new OldDate(2022, 4, 23);
      };
    });
  });

  it("does not show a send link", () => {
    page.send.isExisting().should.not.be.true;
  });

  describe("When filling in the form with invalid data", () => {
    beforeEach(() => {
      page.form.fillIn("Name", "Rob");
      page.form.fillIn("Email address", "rob");
      page.form.fillIn("Home address", "10 Downing Street");
    });

    it("does not show a send link", () => {
      page.send.isExisting().should.not.be.true;
    });
  });

  describe("When filling in the form with valid data", () => {
    let mailTo;

    beforeEach(() => {
      page.form.selectOption("Company", "My test company");
      page.form.fillIn("Name", "Rob");
      page.form.fillIn("Email address", "rob@test.com");
      page.form.fillIn("Home address", "10 Downing Street");
      mailTo = page.mailTo;
    });

    it("shows a send link", () => {
      page.send.isExisting().should.be.true;
      mailTo.to.should.be.equal("test@mycompany.com");
      mailTo.subject.should.be.equal("Erasure Request");
      mailTo.body.should.match(/Rob/, "Email body should contain users name");
      mailTo.body.should.match(
        /10 Downing Street/,
        "Email body should contain users home address"
      );

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
