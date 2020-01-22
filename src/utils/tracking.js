
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

  trackSelectedCompany(domain) {
    this.trackEvent('Selected Domain', domain);
  },

  trackRequestComplete(domain, requestType) {
    this.trackEvent('Send Erasure Request - ' + domain + ' - ' + requestType , 'Send Erasure Request - ' + domain, 'Send Erasure Request - ' + requestType);
  },

  trackSocialShare(network, sourcePage) {
    this.trackEvent('Social Share - ' + network + ' - ' + sourcePage, 'Social Share - ' + network);
  },

  trackWebExtension(browser, sourcePage) {
    this.trackEvent('Click Web Extension - ' + browser + ' - ' + sourcePage, 'Click Web Extension - ' + browser);
  },

  trackSearchButtonLinkClick(device) {
    this.trackEvent('Search Button link click on ', device);
  }
};
