import Page from "../pageobjects/page";
import { shouldUpdate } from "recompose";

browser.addCommand("isInvalid", function() {
  return false;
});

describe("When I visit the home page with a company parameter", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/?company=Slack"
    });

    page.visit();
  });

  it("display the comany name in the page", () => {
    $("h2=Opting out of Slack").should.exist;
  });
});
