var DOMAIN = "yourdigitalrights.org";
var DOMAIN_URL = `https://${DOMAIN}`;
var API_DOMAIM = DOMAIN;
var DOMAINS_API_URL = `https://api.${API_DOMAIM}`;
const RUNTIME_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.VERCEL_ENV;


if (RUNTIME_ENV === 'development') {
    DOMAIN = "localhost:3000";
    DOMAIN_URL = `http://${DOMAIN}`;
    DOMAINS_API_URL = `https://devapi.${API_DOMAIM}`;
} else if (RUNTIME_ENV === 'preview') {
    const previewHost = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL;
    if (previewHost) {
      DOMAIN = previewHost;
    }
    DOMAIN_URL = `https://${DOMAIN}`;
    DOMAINS_API_URL = `https://devapi.${API_DOMAIM}`;
}

export {DOMAIN, DOMAIN_URL, DOMAINS_API_URL};
