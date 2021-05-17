import { DOMAIN } from "./utils/domain";

export default {
  titleTemplate: '%s | YourDigitalRights.org',
  defaultTitle: 'Own Your Data',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: "https://" + DOMAIN,
    site_name: 'YourDigitalRights.org',
    images: [
      {
        url: "https://" + DOMAIN + "/images/opt-out-share.jpg?v=2",
        width: 898,
        height: 680,
        alt: 'YourDigitalRights.org',
      },
    ],
  },
  twitter: {
    handle: '@ConsciousDigit',
    site: '@ConsciousDigit',
    cardType: 'summary_large_image',
  },
};

