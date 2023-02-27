import { getServerSideSitemapIndex } from "next-sitemap";
import { fetchDomains } from "../../utils/domains";
import { DOMAIN_URL } from "../../utils/domain";

const cacheMaxAgeUntilStaleSeconds =  60 * 60; // 1 hour
const cacheMaxAgeStaleDataReturnSeconds =  60 * 60; // 1 hour
const URLS_PER_SITEMAP = 1000;

export const getServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );
  const data = await fetchDomains();
  const amountOfSitemapFiles = Math.ceil(data['Count'] / URLS_PER_SITEMAP);
  const sitemaps = Array(amountOfSitemapFiles)
    .fill('')
    .map((v, index) => `${DOMAIN_URL}/sitemaps-${index}.xml`);
  return getServerSideSitemapIndex(ctx, sitemaps);
};
export default function SitemapIndex() {}