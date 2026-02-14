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
} from '@mui/material-nextjs/v16-pagesRouter';


export default function MyDocument(props) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          content={theme.palette.primary.main}
        />   
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="me" href="https://twitter.com/ConsciousDigit" />
        {isProduction && (
          <>
            <script
              id="matomo"
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var initialized = false;
                    var idleHandle = null;
                    var timeoutHandle = null;
                    var interactionEvents = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
                    var trackerBaseUrl = 'https://optout.innocraft.cloud/';
                    var trackerSiteId = '2';

                    function initMatomo() {
                      if (initialized) {
                        return;
                      }
                      initialized = true;

                      if (idleHandle && 'cancelIdleCallback' in window) {
                        window.cancelIdleCallback(idleHandle);
                      }
                      if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                      }

                      var _paq = (window._paq = window._paq || []);
                      _paq.push(['setTrackerUrl', trackerBaseUrl + 'matomo.php']);
                      _paq.push(['setSiteId', trackerSiteId]);
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

                    interactionEvents.forEach(function(eventName) {
                      window.addEventListener(eventName, initMatomo, { once: true, passive: true });
                    });

                    if ('requestIdleCallback' in window) {
                      idleHandle = window.requestIdleCallback(initMatomo, { timeout: 15000 });
                    }

                    timeoutHandle = window.setTimeout(initMatomo, 15000);
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
          </>
        )}
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
