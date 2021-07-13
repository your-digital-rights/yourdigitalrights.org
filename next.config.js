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
    locales: ["en", "es", "it", "pt"],
    defaultLocale: "en",   
  },
};


        // {
        //   source: '/specific/:path*',
        //   has: [
        //     {
        //       type: 'query',
        //       key: 'page',
        //       value: 'home',
        //     },
        //     {
        //       type: 'cookie',
        //       key: 'authorized',
        //       value: 'true',
        //     },
        //   ],
        //   destination: '/:path*/:page',
        // },