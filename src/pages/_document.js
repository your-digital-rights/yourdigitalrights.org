import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheets as JSSServerStyleSheets } from '@mui/styles';
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


// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc
let prefixer;
let cleanCSS;
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  const postcss = require('postcss');
  const autoprefixer = require('autoprefixer');
  const CleanCSS = require('clean-css');
  /* eslint-enable global-require */

  prefixer = postcss([autoprefixer]);
  cleanCSS = new CleanCSS();
}

MyDocument.getInitialProps = async (ctx) => {
  const jssSheets = new JSSServerStyleSheets();

  const finalProps = await documentGetInitialProps(ctx, {
    plugins: [
      {
        enhanceApp: (App) =>
          function EnhanceApp(props) {
            return jssSheets.collect(<App {...props} />);
          },
        resolveProps: async (initialProps) => {
          // Generate the css string for the styles coming from jss
          let css = jssSheets.toString();
          // It might be undefined, e.g. after an error.
          if (css && process.env.NODE_ENV === 'production') {
            const result1 = await prefixer.process(css, { from: undefined });
            css = result1.css;
            css = cleanCSS.minify(css).styles;
          }

          return {
            ...initialProps,
            styles: [
              ...(Array.isArray(initialProps.styles) ? initialProps.styles : [initialProps.styles]),
              <style
                id="jss-server-side"
                key="jss-server-side"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: css }}
              />,
              ...React.Children.toArray(initialProps.styles),
            ],
          };
        },
      },
    ],
  });

  return finalProps;
};