import { getServerSideSitemap } from "next-sitemap";
import { fetchDomains } from "../../utils/domains";
import { DOMAIN } from "../../utils/domain";
import { ALT_LANGUAGES } from "../../utils/langUtils";

const URLS_PER_SITEMAP = 5000;

export const getServerSideProps = async ctx => {
    ctx.res.setHeader(
        'Cache-Control',
        'public, stale-while-revalidate=600,  stale-if-error=600, max-age=86400, s-maxage=86400',
    );

    if (!ctx.params?.page || isNaN(Number(ctx.params?.page))) {
        return { notFound: true };
    }
    const page = Number(ctx.params?.page);

    // this would load the items that make dynamic pages
    const data = await fetchDomains();
    const start = page*URLS_PER_SITEMAP;
    const end = (page+1)*URLS_PER_SITEMAP;

    if (start > data['Count']) {
        return { notFound: true };
    }

    const domains = data['Domains'].slice(start,end);
    const fields = domains.map((domain) => ({
            loc: `https://${DOMAIN}/d/${domain.url}`,
            changefreq: "weekly",
            priority: 0.5,
            alternateRefs: Object.keys(ALT_LANGUAGES).map((locale) => ({
                href: `https:/${DOMAIN}/${locale}/d/${domain.url}`,
                hreflang: locale,
            }))
    }));
    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapPage() {}