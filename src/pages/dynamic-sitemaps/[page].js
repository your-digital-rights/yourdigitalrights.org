import { getServerSideSitemap } from "next-sitemap";
import { fetchDomains } from "../../utils/domains";
import { DOMAIN } from "../../utils/domain";
import { ALT_LANGUAGES } from "../../utils/langUtils";

const cacheMaxAgeUntilStaleSeconds =  60 * 60; // 1 hour
const cacheMaxAgeStaleDataReturnSeconds =  60 * 60; // 1 hour
const URLS_PER_SITEMAP = 10000;

export const getServerSideProps = async ctx => {
    ctx.res.setHeader(
        'Cache-Control',
        `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
    );

    if (!ctx.params?.page || isNaN(Number(ctx.params?.page))) {
        return { notFound: true };
    }
    const page = Number(ctx.params?.page);

    // this would load the items that make dynamic pages
    console.log("before fetch");
    const data = await fetchDomains();
    console.log("after fetch");
    const start = page*URLS_PER_SITEMAP;
    const end = (page+1)*URLS_PER_SITEMAP;

    if (start > data['Count']) {
        return { notFound: true };
    }

    console.log("before slice");
    const domains = data['Domains'].slice(start,end);
    console.log("after slice");
    const fields = domains.map((domain) => ({
            loc: `https://${DOMAIN}/d/${domain.url}`,
            changefreq: "weekly",
            priority: 0.5,
            alternateRefs: Object.keys(ALT_LANGUAGES).map((locale) => ({
                href: `https:/${DOMAIN}/${locale}/d/${domain.url}`,
                hreflang: locale,
            }))
    }));
    console.log("before return getServerSideSitemap");
    return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function SitemapPage() {}