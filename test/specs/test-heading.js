const Page = require("../pageobjects/page");

describe("Test to check for heading", function() {
  it("should check for heading GDPR", async function() {
    const page = new Page({
      path: "/"
    });
    await page.visit();
    return page.heading.should.eventually.be.equal("GDPR");
  });
});
