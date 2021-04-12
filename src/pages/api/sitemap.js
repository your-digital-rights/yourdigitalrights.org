import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { createGzip } from "zlib";
import fetch from "universal-fetch";
import { DOMAIN } from "../../utils/domain";

const ALT_LANGUAGES = ['es', 'it'];

function generateLangUrls(base_url) {
  return ALT_LANGUAGES.map(lang => ({'lang': lang, 'url': "https://" + lang + "." + DOMAIN + base_url}))
}

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
      links: [
        { lang: 'es', url: 'https://es.yourdigitalrights.org/about' },
        { lang: 'it', url: 'https://it.yourdigitalrights.org/about' }
      ],
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
    companies.map((company) =>
      smStream.write({
        url: `https://yourdigitalrights.org/d/${company.url}`,
        changefreq: "weekly",
        priority: 0.5,
      })
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
