import Document, { Html, Head, Main, NextScript } from "next/document";
import { FormattedMessage } from "react-intl";
import JssProvider from "react-jss/lib/JssProvider";
import React from "react";
import flush from "styled-jsx/server";
import getPageContext from "../getPageContext";
import { DOMAIN } from "../utils/domain";

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const pageContext = getPageContext();
    const props = await super.getInitialProps(context);
    const {
      req: { locale, localeDataScript },
    } = context;

    const page = context.renderPage((Component) => (props) => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}
      >
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ));

    return {
      ...props,
      ...page,
      locale,
      localeDataScript,
      pageContext,

      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString(),
            }}
          />
          {flush() || null}
        </React.Fragment>
      ),
    };
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${this.props.locale}`;
    const { pageContext } = this.props;
    const { deeplinkedCompany } = this.props;

    return (
      <Html>
        <Head>
          <meta
            property="og:image"
            content={"https://" + DOMAIN + "/images/opt-out-share.jpg?v=2"}
          />
          <meta property="og:image:width" content="898" />
          <meta property="og:image:height" content="680" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@OptoutEU" />

          <meta
            name="twitter:image"
            content={"https://" + DOMAIN + "/images/opt-out-share.jpg?v=2"}
          />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="stylesheet" href="/images/mobile.css" />
          <link
            rel="stylesheet"
            media="only screen and (min-width: 600px)"
            href="/images/desktop.css"
          />
          <link rel="icon" href="/images/favicon.ico" />
          <link rel="me" href="https://twitter.com/ConsciousDigit" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "var _paq = _paq || [];_paq.push(['setDocumentTitle', document.domain + '/' + document.title]); _paq.push(['setCookieDomain', '*." +
                DOMAIN +
                "']); _paq.push(['setDomains', ['*." +
                DOMAIN +
                "']]); _paq.push(['trackPageView']); _paq.push(['enableLinkTracking']); (function() { var u='https://optout.innocraft.cloud/'; _paq.push(['setTrackerUrl', u+'matomo.php']); _paq.push(['setSiteId', '2']); var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.innocraft.cloud/optout.innocraft.cloud/matomo.js'; s.parentNode.insertBefore(g,s); })();",
            }}
          />
          <noscript>
            <p>
              <img
                src="https://optout.innocraft.cloud/matomo.php?idsite=2&amp;rec=1"
                style={{ border: 0 }}
                alt=""
              />
            </p>
          </noscript>
          <script src="//d.bablic.com/snippet/5b7e74c02615ef00013b76b9.js?version=3.9" />
        </Head>
        <body>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}
