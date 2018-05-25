import Document, { Head, Main, NextScript } from "next/document";

import JssProvider from "react-jss/lib/JssProvider";
import React from "react";
import flush from "styled-jsx/server";
import getPageContext from "../getPageContext";

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
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
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
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
