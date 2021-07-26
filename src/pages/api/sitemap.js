import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { createGzip } from "zlib";
import fetch from "universal-fetch";
import { DOMAIN } from "../../utils/domain";
import { ALT_LANGUAGES } from "../../utils/langUtils";

let sitemap;

async function fetchData() {
  let url = 'https://api.' + DOMAIN + "/companies";
  let data = await fetch(url);
  data = await data.json();
  return data;
}

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Content-Encoding', 'gzip');
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=3600');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }

  try {
    const smStream = new SitemapStream()
    const pipeline = smStream.pipe(createGzip())

    smStream.write({
      url: "https://yourdigitalrights.org",
      changefreq: "weekly",
      priority: 1,  
    });

    smStream.write({
      url: "https://yourdigitalrights.org/about",
      changefreq: "weekly",
      priority: 1,
    });

    smStream.write({
      url: "https://yourdigitalrights.org/contribute",
      changefreq: "weekly",
      priority: 1,
    });

    smStream.write({
      url: "https://yourdigitalrights.org/privacy",
      changefreq: "weekly",
      priority: 1,
    });

    smStream.write({
      url: "https://yourdigitalrights.org/data-brokers",
      changefreq: "daily",
      priority: 1,
    });

    const companies = await fetchData();
    companies['Organizations'].map((company) =>
      ALT_LANGUAGES.forEach((locale) =>
        smStream.write({
          url: (locale === 'en') ? `https://${DOMAIN}/d/${company.url}` : `https:/${locale}.${DOMAIN}/d/${company.url}`,
          changefreq: "weekly",
          priority: 0.5,
        })
      )
    );

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // make sure to attach a write stream such as streamToPromise before ending
    smStream.end()
    // stream write the response
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
};
