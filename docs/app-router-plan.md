# App Router Migration Plan (SEO-Safe)

Date: February 13, 2026  
Project: `yourdigitalrights.org`  
Primary route: `/{locale?}/d/[domain]` (40k+ variants)  
Top priority: preserve and improve SEO across all locales.

## 1. Objectives

1. Migrate `/d/[domain]` from Pages Router to App Router without URL churn.
2. Preserve localized indexing, canonicalization, and hreflang integrity.
3. Improve Core Web Vitals (especially mobile LCP/INP/TBT).
4. Reduce third-party impact on the critical path.
5. Keep rollback fast and low risk.

## 2. Non-Negotiable SEO Constraints

1. Keep public URL patterns unchanged:
   - default locale: `/d/[domain]`
   - localized: `/{locale}/d/[domain]`
2. Keep canonical rules equivalent to current production behavior.
3. Keep complete hreflang clusters for all supported locales.
4. Keep sitemap discoverability and localized alternates.
5. Never rely on locale-adaptive-only rendering (IP/Accept-Language) for crawlable content.
6. Maintain current indexing directives (`robots`, status codes, notFound behavior).

## 3. Current State (Relevant)

1. Routing currently uses Pages Router with `next.config.js` i18n.
2. `/d/[domain]` is SSG with `fallback: 'blocking'` and long revalidate.
3. Dynamic sitemap routes are Pages Router:
   - `src/pages/dynamic-sitemaps/index.js`
   - `src/pages/dynamic-sitemaps/[page].js`
4. App Router probe showed locale behavior differences; migration must explicitly handle locale routing.

## 4. Latest Docs and Standards to Follow

1. Next.js App Router docs (updated Feb 11, 2026): https://nextjs.org/docs/app
2. App Router migration guide: https://nextjs.org/docs/app/guides/migrating/app-router-migration
3. App Router internationalization: https://nextjs.org/docs/app/guides/internationalization
4. `generateMetadata`: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
5. Sitemap metadata files and `generateSitemaps`:
   - https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
   - https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
6. `proxy.ts` file convention: https://nextjs.org/docs/app/api-reference/file-conventions/middleware
7. App Router script optimization caveats: https://nextjs.org/docs/pages/building-your-application/optimizing/scripts
8. Google multilingual SEO:
   - https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
   - https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages
9. Core Web Vitals thresholds: https://web.dev/articles/vitals

## 5. Target Architecture (SEO-First)

1. Hybrid phase: run Pages + App routers together during migration.
2. App Router route structure:
   - `src/app/d/[domain]/page.js` (default locale URL preservation)
   - `src/app/[locale]/d/[domain]/page.js` (explicit localized route)
3. Shared server-only domain data module with cache + revalidation tags.
4. Metadata API used for title, description, canonical, and language alternates.
5. Sitemap migrated to App Router metadata handlers with chunking.
6. Client components limited to interactive form sections only.

## 6. Execution Plan (PR-by-PR)

## PR0 - Baseline, Guardrails, and Test Harness

Checklist:
- [ ] Create a URL sample set:
  - [ ] 500 high-traffic domains
  - [ ] 500 random domains
  - [ ] all locales x representative domains
- [ ] Capture current prod baseline for each sample URL:
  - [ ] status code
  - [ ] canonical URL
  - [ ] hreflang set completeness
  - [ ] robots directives
  - [ ] title/description parity
- [ ] Add automated parity tests (CI job) for these signals.
- [ ] Add Lighthouse script profile for `/d/[domain]` desktop + mobile.

Acceptance gate:
- [ ] Baseline artifacts committed under `docs/migration-baseline/`.
- [ ] CI fails on SEO parity regressions.

## PR1 - Locale Routing Skeleton in App Router (No Cutover Yet)

Checklist:
- [ ] Add App Router root layout compatible with existing global concerns.
- [ ] Implement explicit locale param validation against `ydr-config.json`.
- [ ] Add both route shapes in App Router:
  - [ ] `/d/[domain]`
  - [ ] `/{locale}/d/[domain]`
- [ ] Add `src/proxy.ts` only for safe locale normalization rules.
- [ ] Keep Pages route active and app route behind feature flag/header for shadow validation.

Acceptance gate:
- [ ] No public URL behavior changes.
- [ ] Locale route matching parity verified in automated checks.

## PR2 - Server Data Layer and Caching Semantics

Checklist:
- [ ] Create `src/lib/domains.server.js` with:
  - [ ] domain normalization/validation
  - [ ] fetch wrapper to API with robust error mapping
  - [ ] cache tagging and revalidate policy matching current intent
- [ ] Implement deterministic notFound mapping for invalid/missing domains.
- [ ] Preserve fallback semantics for long-tail domains.

Acceptance gate:
- [ ] For sampled URLs, status and response intent match current prod.
- [ ] API error paths do not emit soft-200 pages.

## PR3 - Metadata Migration (Canonical + Hreflang)

Checklist:
- [ ] Replace `next-seo` logic on this route with `generateMetadata`.
- [ ] Emit canonical for each locale exactly matching current URL policy.
- [ ] Emit alternates/languages for all supported locales.
- [ ] Verify no duplicate/conflicting canonical tags.

Acceptance gate:
- [ ] 100% canonical parity on sampled URLs.
- [ ] 100% hreflang cluster completeness for sampled URLs.

## PR4 - Page Rendering Migration to Server Components

Checklist:
- [ ] Convert route shell + read-only sections to Server Components.
- [ ] Keep form and user interaction pieces as Client Components only.
- [ ] Preserve visible heading/content structure for SEO.
- [ ] Preserve `data-nosnippet` behavior where currently required.

Acceptance gate:
- [ ] HTML snapshots show no loss of crawlable content.
- [ ] Client bundle size reduced for route JS critical path.

## PR5 - Sitemaps and Robots Migration to App Router

Checklist:
- [ ] Replace legacy sitemap pages with App Router metadata sitemap handlers.
- [ ] Use `generateSitemaps` chunking (max 50k entries per file).
- [ ] Include localized alternate refs per domain URL.
- [ ] Keep robots policy and sitemap index discoverability equivalent.

Acceptance gate:
- [ ] `sitemaps.xml` and shard files validate and resolve correctly.
- [ ] Alternate refs in sitemap match on-page hreflang cluster.

## PR6 - Third-Party Critical Path Reduction

Checklist:
- [ ] Ensure non-essential third-party scripts remain idle/lazy/interaction-triggered.
- [ ] Keep heavy embeds click-to-load.
- [ ] Scope third-party scripts to route where possible.
- [ ] Audit third-party main-thread time in Lighthouse and WebPageTest.

Acceptance gate:
- [ ] Mobile TBT/INP improves vs baseline on representative URLs.
- [ ] No SEO metadata regressions from script movement.

## PR7 - Controlled Rollout and Monitoring

Checklist:
- [ ] Deploy shadow mode and run parity crawler against production.
- [ ] Roll out by deterministic domain hash (e.g., 1%, 10%, 50%, 100%).
- [ ] Monitor:
  - [ ] Google Search Console coverage and canonical selected
  - [ ] crawl stats and response distribution
  - [ ] CWV p75 by route and locale
  - [ ] error rates and 404 anomalies
- [ ] Keep fast rollback switch active throughout rollout.

Acceptance gate:
- [ ] No statistically significant SEO regressions over 2-4 weeks.
- [ ] CWV and runtime metrics improved or flat with no SEO harm.

## PR8 - Optional Phase: Cache Components

Checklist:
- [ ] Evaluate enabling Cache Components only after stable App Router rollout.
- [ ] Seed static params for known hot domains (traffic-heavy subset).
- [ ] Keep long-tail on-demand behavior with safe cache invalidation.
- [ ] Validate no build-time or route availability regressions.

Acceptance gate:
- [ ] Additional performance gain with no indexation/canonical regressions.

## 7. SEO Verification Matrix (Must Pass)

For each sampled URL and locale variant:

1. HTTP status code correctness.
2. Canonical exact match.
3. Full hreflang set and reciprocal links.
4. Robots directives unchanged unless intentional.
5. Rendered title/description locale correctness.
6. Sitemap inclusion and alternate entries.
7. `notFound` pages return correct non-indexable behavior.

## 8. Performance SLOs After Migration

Route scope: `/d/[domain]` (mobile p75 preferred).

1. LCP <= 2.5s target (or meaningful improvement if baseline worse).
2. INP <= 200ms target.
3. CLS <= 0.1 (current already strong; must remain).
4. Reduced third-party main-thread blocking time.
5. Lower route JS cost vs current Pages implementation.

## 9. Rollback Strategy

1. Maintain Pages Router implementation behind feature gate until full confidence.
2. Keep reversible rewrites/switch for route ownership (App vs Pages).
3. Rollback triggers:
   - canonical drift
   - hreflang omissions
   - index coverage drop
   - unexplained 404/soft-404 increase
4. Rollback action:
   - route switch back to Pages Router
   - invalidate CDN cache
   - rerun parity crawler and verify restoration.

## 10. Suggested Work Order

1. PR0
2. PR1
3. PR2
4. PR3
5. PR4
6. PR5
7. PR6
8. PR7
9. PR8 (optional)

## 11. Explicit Out-of-Scope Until Stable

1. URL structure changes.
2. Locale pruning or consolidation.
3. Aggressive cache modes that require broad static param enumeration.
4. Any experiments that alter canonical/hreflang semantics.

