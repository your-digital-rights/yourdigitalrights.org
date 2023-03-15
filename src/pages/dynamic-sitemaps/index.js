import { getServerSideSitemapIndex } from "next-sitemap";
import { fetchDomains } from "../../utils/domains";
import { DOMAIN_URL } from "../../utils/domain";

const URLS_PER_SITEMAP = 5000;

export const getServerSideProps = async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, stale-while-revalidate=600,  stale-if-error=600, max-age=86400, s-maxage=86400'
  );
  const data = await fetchDomains();
  const amountOfSitemapFiles = Math.ceil(data['Count'] / URLS_PER_SITEMAP);
  const sitemaps = Array(amountOfSitemapFiles)
    .fill('')
    .map((v, index) => `${DOMAIN_URL}/sitemaps-${index}.xml`);
  return getServerSideSitemapIndex(ctx, sitemaps);
};
export default function SitemapIndex() {}