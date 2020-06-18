module.exports = {
  target: 'serverless',
  experimental: {
    async rewrites() {
      return [
      	{ source: "/sitemap.xml", destination: "/api/sitemap" },
      ];
    },
  },
};
