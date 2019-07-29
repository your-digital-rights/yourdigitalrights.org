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
    page.mailTo.should.be.equal('https://linkedin.com/shareArticle?url=https%3A%2F%2Fopt-out.eu%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dlinkedin%26pk_source%3Dhomepage');

    page.socialShare.twitter.click();
    page.mailTo.should.be.equal('https://twitter.com/share?url=https%3A%2F%2Fopt-out.eu%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dtwitter%26pk_source%3Dhomepage&text=Get%20any%20organisation%20to%20erase%20your%20personal%20data%20-%20automated%20GDPR%20requests&hashtags=privacy%2Cprivacy%2CGDPR%2Cownyourdata%2Crighttobeforgotten%2Coptout');

    page.socialShare.email.click();
    page.mailTo.should.be.equal('mailto:?body=Hey%20there%2C%0A%0ADid%20you%20know%20that%20you%20can%20get%20any%20organisation%20to%20erase%20your%20personal%20data%20for%20free%3F%20Check%20out%20https%3A%2F%2Fopt-out.eu%20to%20know%20more.%0A%0AI%20hope%20you%20find%20it%20useful.&subject=Opt-out%20-%20automated%20GDPR%20requests');

    page.socialShare.facebook.click();
    page.mailTo.should.be.equal('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopt-out.eu%2F%3Fpk_campaign%3Dsiteshare%26pk_kwd%3Dfacebook%26pk_source%3Dhomepage&quote=Get%20any%20organisation%20to%20erase%20your%20personal%20data%20-%20automated%20GDPR%20requests%20-%20http%3A%2F%2Fopt-out.eu');

  });
});
