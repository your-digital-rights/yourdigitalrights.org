import Page from "../pageobjects/page";

describe("When I view social sharing", () => {
  let page;

  beforeEach(() => {
    page = new Page({
      path: "/"
    });

    page.visit();

    browser.execute(function() {
      window.open = function(url) {
        document.body.setAttribute("data-open-url", url);
      };
    });
  });

  it("should show facebook, twitter, email and linkedin share links", () => {
    page.socialShare.linkedIn.click();
    page.mailTo.should.be.equal('https://linkedin.com/shareArticle?url=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dlinkedin%26pk_source%3Dhomepage');

    page.socialShare.twitter.click();
    page.mailTo.should.be.equal('https://twitter.com/share?url=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dtwitter%26pk_source%3Dhomepage&text=Get%20thousands%20of%20organizations%20to%20erase%20your%20personal%20data%2C%20check%20out%20yourdigitalrights.org&hashtags=GDPR%2CCCPA%2Cyourdigitalrights%2Crighttobeforgotten%2Coptout%2Cownyourdata');

    page.socialShare.email.click();
    page.mailTo.should.be.equal('mailto:?body=You%20should%20check%20out%20yourdigitalrights.org%2C%20a%20free%20service%20which%20makes%20it%20easy%20to%20get%20organizations%20to%20erase%20your%20personal%20data%20by%20automating%20the%20process%20of%20sending%20GDPR%20and%20CCPA%20erasure%20%28right%20to%20be%20forgotten%29%20requests.&subject=Get%20thousands%20of%20organizations%20to%20erase%20your%20personal%20data%20%7C%20Your%20Digital%20Rights');

    page.socialShare.facebook.click();
    page.mailTo.should.be.equal('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyourdigitalrights.org%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dfacebook%26pk_source%3Dhomepage&quote=Get%20thousands%20of%20organizations%20to%20erase%20your%20personal%20data%2C%20check%20out%20yourdigitalrights.org');


  });
});
