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

  trackSendReminderEmail(domain, regulationType) {
    this.trackEvent(
      "Send reminder email",
      domain,
      regulationType,
    );
  },

  trackEscalationRequest(dpaCountryCode, domain) {
    this.trackEvent(
      "Escalation request",
      "Escalation to DPA of " + dpaCountryCode,
      "Escalation regarding " + domain,
    );
  },

  trackRequestComplete(domain, regulationType, requestType) {
    let requestTypeText = (requestType == "DELETION") ? "Erasure Request" : "Access Request"
    this.trackEvent(
      requestTypeText,
      "Send " + regulationType + " Request",
      domain
    );
  },

  trackFollwups(regulationType, requestType) {
    let requestTypeText = (requestType == "DELETION") ? "Erasure Request" : "Access Request"
    this.trackEvent(
      "Followups Request",
      regulationType + " " + requestTypeText
    );
  },

  trackAddNewOrg(domain, name) {
    this.trackEvent("Add New Organization", domain, name);
  },

  trackSocialShare(network, sourcePage) {
    this.trackEvent("Social Share", "Social Share From " + sourcePage, network);
  },

  trackDonate(type, source) {
    this.trackEvent("Donation Click", type, "Donation From " + source);
  },

  trackSubscribe(source) {
    this.trackEvent("Subscribe Click", "Subscribe From " + source);
  },

  trackDeletePII(type) {
    this.trackEvent("Delete PII", type);
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

  trackFindAnotherOrg() {
    this.trackEvent("Find Another Organization Click");
  },

  trackRequestStatusChange(status) {
    this.trackEvent("Request Status Change", status);
  },
};
