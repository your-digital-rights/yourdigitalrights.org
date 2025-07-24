import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import theme from '../styles/theme';
import React from "react";
import { DOMAIN } from "../utils/domain";
import Script from 'next/script';
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
            __html:
              "var _paq = _paq || [];_paq.push(['setDocumentTitle', document.domain + '/' + document.title]); _paq.push(['setCookieDomain', '*." +
              DOMAIN +
              "']); _paq.push(['setDomains', ['*." +
              DOMAIN +
              "']]); _paq.push(['alwaysUseSendBeacon']); _paq.push(['disableCookies']); _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u='https://optout.innocraft.cloud/'; _paq.push(['setTrackerUrl', u+'matomo.php']); _paq.push(['setSiteId', '2']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.innocraft.cloud/optout.innocraft.cloud/matomo.js'; s.parentNode.insertBefore(g,s); })();",
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