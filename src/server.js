// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require("react-intl");
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require("fs");
const { basename } = require("path");
const express = require("express");
const accepts = require("accepts");
const glob = require("glob");
const next = require("next");
const { create } = require("bablic");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: "./src", dev });
const handle = app.getRequestHandler();
const url = require("url");

// Get the supported languages by looking for translations in the `lang/` dir.
const supportedLanguages = glob
  .sync("./src/lang/*.json")
  .map((f) => basename(f, ".json"));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split("-")[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, "utf8");
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = (locale) => {
  return require(`./lang/${locale}.json`);
};

app.prepare().then(() => {
  const server = express();

  server.use(
    create({
      siteId: "5b7e74c02615ef00013b76b9",
      rootUrl: "http://yourdigitalrights.org",
      subDir: true, // if you want to use sub dir for languages like /es/ /fr/
    })
  );

  server.get('/d/:domain/', (req, res) => {
    return app.render(req, res, '/d', { domain: req.params.domain })
  })
  
  server.get('*', (req, res) => {
      if (req.hostname.includes('opt-out.eu')) {
          var newQuery = req.query;
          newQuery.source = "optouteu";
          res.redirect(url.format({
            pathname:"https://yourdigitalrights.org" + req.path,
            query:newQuery,
          }));
      }

      if (req.path == '/' && req.query.company) {
        res.redirect(url.format({
            pathname:"/d/" + req.query.company + "/"
          }));
      }

      const accept = accepts(req)
      const locale = accept.language(accept.languages(supportedLanguages)) || 'en'
      req.locale = locale
      req.localeDataScript = getLocaleDataScript(locale)
      req.messages = dev ? {} : getMessages(locale)
      handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
