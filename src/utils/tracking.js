
export default {
  get tracker() {
    return window._paq;
  },

  track(...args) {
    let tracker = this.tracker;

    if (tracker) {
      tracker.push(args);
    }
  },

  trackEvent(...args) {
    this.track('trackEvent', ...args);
  },

  trackSearch(term) {
    this.track('trackSiteSearch', term);
  },

  trackSelectedCompany(company) {
    this.trackEvent('selectedCompany', company);
  },

  trackRequestComplete(company) {
    this.trackEvent('Send Erasure request', 'complete', company);
  },

  trackSocialShare(network) {
    this.trackEvent('Social share', network);
  }
};
