module.exports = {
  experimental: {
    async rewrites() {
      return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
    },
  },
};
