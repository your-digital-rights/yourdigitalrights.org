export var DOMAIN = "yourdigitalrights.org";
export var DOMAIN_URL = "https://yourdigitalrights.org"; 

if (process.env.VERCEL_ENV == 'test') {
    DOMAIN = "localhost:3000";
    DOMAIN_URL = "https://localhost:3000";
}