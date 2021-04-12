export default {
  get tracker() {
    if (typeof window === 'undefined') {
      return null;
    }
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
    let requestTypeText = (requestType == "DELETION") ? "Erasure Request" : "Access Request"
    this.trackEvent(
      requestTypeText,
      "Send " + regulationType + " Request",
      domain
    );
  },

  trackAddNewOrg(domain, name) {
    this.trackEvent(
      "Add New Organization",
      name
    );
  },

  trackSocialShare(network, sourcePage) {
    this.trackEvent("Social Share", "Social Share From " + sourcePage, network);
  },

  trackDonate(type, source) {
    this.trackEvent("Donation Click", type, "Donation From " + source);
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

  trackWishlist() {
    this.trackEvent("Wishlist Click");
  },

  trackAdditionalData(org) {
    this.trackEvent("Additional Data", "Additional data for: " + org);
  },

};
