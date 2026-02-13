import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import theme from '../styles/theme';
import React from "react";
import { DOMAIN } from "../utils/domain";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';


export default function MyDocument(props) {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          content={theme.palette.primary.main}
        />   
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="me" href="https://twitter.com/ConsciousDigit" />
        <script
          id="matomo"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initMatomo() {
                  var _paq = (window._paq = window._paq || []);
                  _paq.push(['setDocumentTitle', document.domain + '/' + document.title]);
                  _paq.push(['setCookieDomain', '*.${DOMAIN}']);
                  _paq.push(['setDomains', ['*.${DOMAIN}']]);
                  _paq.push(['alwaysUseSendBeacon']);
                  _paq.push(['disableCookies']);
                  _paq.push(['HeatmapSessionRecording::disable']);
                  _paq.push(['trackPageView']);
                  _paq.push(['enableLinkTracking']);
                  var d = document;
                  var g = d.createElement('script');
                  var s = d.getElementsByTagName('script')[0];
                  g.type = 'text/javascript';
                  g.async = true;
                  g.defer = true;
                  g.src = 'https://cdn.innocraft.cloud/optout.innocraft.cloud/matomo.js';
                  s.parentNode.insertBefore(g, s);
                }

                if ('requestIdleCallback' in window) {
                  window.requestIdleCallback(initMatomo, {timeout: 3000});
                } else {
                  window.addEventListener('load', function() {
                    setTimeout(initMatomo, 1500);
                  }, {once: true});
                }
              })();
            `,
          }}
        />        
        <noscript>
          <p>
            <img
              src="https://optout.innocraft.cloud/matomo.php?idsite=2&amp;rec=1"
              style={{ border: 0 }}
              alt="matomo"
            />
          </p>
        </noscript>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />                        
      </body>
    </Html>
  );
}


MyDocument.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
