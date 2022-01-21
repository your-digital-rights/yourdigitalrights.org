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
      {
        source: '/data-brokers',
        destination: 'https://databrokerswatch.org/top-ten',
        permanent: false,
      },      
    ]
  },
	async rewrites() {
			return [
				{ 
          source: "/sitemap.xml", 
          destination: "/api/sitemap", 
        }
			];
	},
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["de", "en", "es", "fr", "it", "pt", "az"],
    defaultLocale: "en",   
  },
};