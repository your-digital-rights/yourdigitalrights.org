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
          source: "/save",
          destination: "/api/save",
        },        
				{ 
          source: "/sitemap.xml", 
          destination: "/api/sitemap", 
        },
        { 
          source: "/companies", 
          destination: "/api/companies",
        }
			];
	},
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["de", "en", "es", "fr", "it", "pt", "az"],
    defaultLocale: "en",   
  },
  images: {
    domains: ['logo.uplead.com'],
  },  
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'same-origin'
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; img-src *;"
          },               
        ],
      },
    ]
  },
};