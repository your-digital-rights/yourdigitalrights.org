module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      { source: "/save", destination: "/api/save" },
      { source: "/sitemap.xml", destination: "/api/sitemap" },
    ];
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es"],
    defaultLocale: "en",
    domains: [
      {
        domain: 'en.yourdigitalrights.org',
        defaultLocale: 'en',
      },
      {
        domain: 'es.yourdigitalrights.org',
        defaultLocale: 'es',
      },
    ],
  },
};
