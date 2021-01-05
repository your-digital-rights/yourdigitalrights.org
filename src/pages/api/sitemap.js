import sm from "sitemap";
import fetch from "universal-fetch";

async function fetchData() {
  let data = await fetch(`https://api.yourdigitalrights.org/companies`);
  data = await data.json();
  return data;
}

export default async (req, res) => {
  const sitemap = sm.createSitemap({
    hostname: "https://yourdigitalrights.org/",
    cacheTime: 1000 * 60 * 60, // 1 hour - cache purge period
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

  const companies = await fetchData();
  companies.map((company) =>
    sitemap.add({
      url: `https://yourdigitalrights.org/d/${company.url}`,
      changefreq: "weekly",
      priority: 0.5,
    })
  );

  return new Promise((resolve) => {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        resolve();
        return;
      }

      res.setHeader("Content-Type", "application/xml");
      res.send(xml);
      resolve();
    });
  });
};
