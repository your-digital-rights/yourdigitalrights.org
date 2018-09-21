import Document, { Head, Main, NextScript } from "next/document";

import { FormattedMessage } from "react-intl";
import JssProvider from "react-jss/lib/JssProvider";
import React from "react";
import flush from "styled-jsx/server";
import getPageContext from "../getPageContext";

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.

// TODO: Make these string translatable
const Description =
  "Own your data - get any organisation to erase your personal data, hassle free | Opt-out.eu";
/* global: window */
  const OgDescription =
  "Opt-out - Own your data. Get any organisation to erase your personal data, hassle free";

export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const pageContext = getPageContext();
    const props = await super.getInitialProps(context);
    const {
      req: { locale, localeDataScript }
    } = context;

    const page = context.renderPage(Component => props => (
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
              __html: pageContext.sheetsRegistry.toString()
            }}
          />
          {flush() || null}
        </React.Fragment>
      )
    };
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${
      this.props.locale
    }`;
    const { pageContext } = this.props;

    return (
      <html>
        <Head>
          <title>Opt-out</title>
          <meta name="description" content={Description} />
          <meta property="og:description" content={OgDescription} />
          <meta
            property="og:image"
            content="https://opt-out.eu/static/opt-out-share.jpg"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="stylesheet" href="/static/mobile.css" />
          <link rel="stylesheet" media="only screen and (min-width: 600px)" href="/static/desktop.css" />
          <link rel="icon" href="/static/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "var _paq = _paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function() {var u='https://optout.innocraft.cloud/';_paq.push(['setTrackerUrl', u+'piwik.php']);_paq.push(['setSiteId', '1']);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);})();"
            }}
          />
          <script
            data-cfasync="false" 
            type="text/javascript" 
            data-bablic="5b7e74c02615ef00013b76b9" 
            data-bablic-m="[0,'en','en',1,['es'],0,0,0,0,0,0,0,0,[],'opt-out.eu/',['wishlist.opt-out.eu'],['_v',2]]" 
            src="//cdn2.bablic.com/js/bablic.3.9.js"
          />
        </Head>
        <body>
          <style dangerouslySetInnerHTML={{ __html: "a { color: #005ea5;}" }} />
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
