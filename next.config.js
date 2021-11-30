module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'company',
            value: '(?<company>.*)',
          },
        ],
        destination: '/d/:company',
        permanent: true,
      },
    ]
  },
	async rewrites() {
			return [
        {
          source: "/save",
          destination: "/api/save",
        },        
				{ 
          source: "/sitemap.xml", 
          destination: "/api/sitemap", 
        }
			];
	},
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es", "it", "pt", "az"],
    defaultLocale: "en",   
  },
};