
export default {
  get tracker() {
    if (window._paq) {
      return window._paq;
    } else {
      return window._paq = [];
    }
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
  },

  trackWebExtension(browser) {
    this.trackEvent('Click Web Extension', browser);
  }
};
