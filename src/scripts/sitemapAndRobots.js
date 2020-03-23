const sm = require("sitemap");
const path = require("path");
const fetch = require("universal-fetch");

async function fetchData() {
  let data = await fetch(`https://api.opt-out.eu/companies`);
  data = await data.json();
  return data;
}

const sitemap = sm.createSitemap({
  hostname: "https://yourdigitalrights.org/",
  cacheTime: 1000 * 60 * 60, // 1 hour - cache purge period
});

const setup = ({ server }) => {
  fetchData().then(function (companies) {
    companies.map((company) =>
      sitemap.add({
        url: `https://yourdigitalrights.org/?company=${company.url}`,
        changefreq: "weekly",
        priority: 0.5,
      })
    );
  });

  sitemap.add({
    url: "/about",
    changefreq: "weekly",
    priority: 1,
  });

  sitemap.add({
    url: "/privacy",
    changefreq: "weekly",
    priority: 1,
  });

  sitemap.add({
    url: "/data-brokers",
    changefreq: "daily",
    priority: 1,
  });

  server.get("/sitemap.xml", (req, res) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header("Content-Type", "application/xml");
      res.send(xml);
    });
  });

  server.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "../static", "robots.txt"));
  });
};

module.exports = setup;
