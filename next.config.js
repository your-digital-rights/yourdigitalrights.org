module.exports = {
	target: 'serverless',
	trailingSlash: true,
	async rewrites() {
  		return [
  			{ source: "/sitemap.xml", destination: "/api/sitemap" },
  		];
	},
};
