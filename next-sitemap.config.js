const ALT_LANGUAGES = require("./ydr-config.json").altLanguages;
const LOCALES = Object.keys(ALT_LANGUAGES);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    sourceDir: '.next',
    siteUrl: 'https://yourdigitalrights.org',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { 
                userAgent: '*', 
                allow: '/',
                disallow: '/r/'
            }
        ],
        additionalSitemaps: [
            "https://yourdigitalrights.org/sitemaps.xml"
        ],
    },
    sitemapSize: 10000,
    generateIndexSitemap: false,
    exclude: [
        "/sitemaps",
        "/privacy-alerts",
        "/thankyou"
    ],
    alternateRefs: LOCALES.map((locale) => ({
          href: `https://yourdigitalrights.org/${locale}`,
          hreflang: locale,
        })
    ),
  }