var DOMAIN = "yourdigitalrights.org";
var DOMAIN_URL = `https://${DOMAIN}`;

if (process.env.VERCEL_ENV === 'development') {
    DOMAIN = "localhost:3000";
    DOMAIN_URL = `http://${DOMAIN}`;
} else if (process.env.VERCEL_ENV === 'preview') {
    DOMAIN = process.env.VERCEL_URL;
    DOMAIN_URL = `https://${DOMAIN}`;
}

export {DOMAIN, DOMAIN_URL};