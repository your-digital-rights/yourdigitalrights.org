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
const OgDescription =
  "Own your data. Get any organisation to erase your personal data, hassle free";

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
          <script
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M9LPCR2');"
            }}
          />
          <title>Opt-out</title>
          <meta name="description" content={Description} />
          <meta property="og:description" content={OgDescription} />
          <meta
            property="og:image"
            content="https://opt-out.eu/static/img-howto.svg"
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
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src=“https://www.googletagmanager.com/ns.html?id=GTM-M9LPCR2” height=“0" width=“0” style=“display:none;visibility:hidden”></iframe>'
            }}
          />
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
