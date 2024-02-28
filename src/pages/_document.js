import Document, { Html, Head, Main, NextScript } from "next/document";
import ServerStyleSheets from '@mui/styles/ServerStyleSheets';
import theme from '../styles/theme';
import React from "react";
import { DOMAIN } from "../utils/domain";
import Script from 'next/script';


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
          />   
          <link rel="icon" href="/images/favicon.ico" />
          <link rel="me" href="https://twitter.com/ConsciousDigit" />
          <Script id="matomo" strategy="lazyOnload">
            {`var _paq = _paq || [];_paq.push(['setDocumentTitle', document.domain + '/' + document.title]); _paq.push(['setCookieDomain', '*.${DOMAIN}']); _paq.push(['setDomains', ['*.${DOMAIN}']]); _paq.push(['alwaysUseSendBeacon']); _paq.push(['disableCookies']); _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u='https://optout.innocraft.cloud/'; _paq.push(['setTrackerUrl', u+'matomo.php']); _paq.push(['setSiteId', '2']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.innocraft.cloud/optout.innocraft.cloud/matomo.js'; s.parentNode.insertBefore(g,s); })();`}
          </Script>
          <noscript>
            <p>
              <img
                src="https://optout.innocraft.cloud/matomo.php?idsite=2&amp;rec=1"
                style={{ border: 0 }}
                alt="matomo"
              />
            </p>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />                        
        </body>
      </Html>
    );
  }
}


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};