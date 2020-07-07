export default {
  get tracker() {
    if (window._paq) {
      return window._paq;
    } else {
      return (window._paq = []);
    }
  },

  track(...args) {
    let tracker = this.tracker;

    if (tracker) {
      tracker.push(args);
    }
  },

  trackEvent(...args) {
    this.track("trackEvent", ...args);
  },

  trackSearch(term) {
    this.track("trackSiteSearch", term);
  },

  trackSelectedCompany(domain) {
    this.trackEvent("Selected Domain", domain);
  },

  trackRequestComplete(domain, regulationType, requestType) {
    let requestTypeText = (requestType == "s") ? "Erasure Request" : "Access Request"
    this.trackEvent(
      requestTypeText,
      "Send " + regulationType + " Request",
      domain
    );
  },

  trackSocialShare(network, sourcePage) {
    this.trackEvent("Social Share", "Social Share From " + sourcePage, network);
  },

  trackWebExtension(browser, sourcePage) {
    this.trackEvent(
      "Click Web Extension",
      "Click Web Extension From " + sourcePage,
      browser
    );
  },

  trackSearchButtonLinkClick(device) {
    this.trackEvent("Search Button Link Click", device);
  },
};
