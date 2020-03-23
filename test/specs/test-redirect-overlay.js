import Page from "../pageobjects/page";

describe("When I visit the home page with a optouteu redirect", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      // Redirect is setup from old domain to append this
      path: "/?source=optouteu",
    });

    page.visit();
  });

  it("it should show the redirect overlay", () => {
    page.redirectOverlay.isExisting().should.be.true;
  });

  it("should close when clicking continue and remove query param", () => {
    page.redirectOverlay.isExisting().should.be.true;

    page.redirectOverlay.close();

    page.redirectOverlay.isExisting().should.be.false;

    browser.getUrl().should.not.contain("?source=optouteu");
  });
});
