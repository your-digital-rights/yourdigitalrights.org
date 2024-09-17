const ALT_LANGUAGES = require("./ydr-config.json").altLanguages;
const LOCALES = Array(...Object.keys(ALT_LANGUAGES), "az");

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
          source: "/companies", 
          destination: "/api/companies",
        },
        {
          source: '/sitemaps.xml',
          destination: '/dynamic-sitemaps',
        },
        {
          source: '/sitemaps-:page.xml',
          destination: '/dynamic-sitemaps/:page',
        },        
			];
	},
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: LOCALES,
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
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests ; default-src * 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.innocraft.cloud js.stripe.com substackapi.com static.cloudflareinsights.com ajax.cloudflare.com *.vercel-scripts.com; font-src 'self' fonts.gstatic.com fonts.googleapis.com; img-src 'self' data: logo.uplead.com; frame-src newsletter.yourdigitalrights.org 'self' js.stripe.com"
          },            
        ],
      },
    ]
  },
};