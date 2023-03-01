var DOMAIN = "yourdigitalrights.org";
var DOMAIN_URL = `https://${DOMAIN}`;
var API_DOMAIM = DOMAIN;
var DOMAINS_API_URL = `https://api.${API_DOMAIM}`;


if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'development') {
    DOMAIN = "localhost:3000";
    DOMAIN_URL = `http://${DOMAIN}`;
    DOMAINS_API_URL = `https://devapi.${API_DOMAIM}`;
} else if (process.env.VERCEL_ENV === 'preview') {
    DOMAIN = process.env.VERCEL_URL;
    DOMAIN_URL = `https://${DOMAIN}`;
    DOMAINS_API_URL = `https://devapi.${API_DOMAIM}`;
}

export {DOMAIN, DOMAIN_URL, DOMAINS_API_URL};
