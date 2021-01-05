module.exports = {
	target: 'serverless',
	async rewrites() {
  		return [
  			{ source: "/sitemap.xml", destination: "/api/sitemap" },
  		];
	},
};
