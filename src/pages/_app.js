import { useEffect } from "react";
import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import * as locales from "../../compiled-lang";
import { TRANSLATION_PSEUDO_LOCAL } from '../utils/langUtils';
import { Analytics } from '@vercel/analytics/react';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import PropTypes from 'prop-types';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const messages = locales[locale];

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <AppCacheProvider {...props}>
        <DefaultSeo {...SEO} />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />  
          {locale == TRANSLATION_PSEUDO_LOCAL && (
            <>
              <Script id="crowdin">
                  {`var _jipt = []; 
                    _jipt.push(['project', '824429349547bc670e4302aaae3a0af9']); 
                    _jipt.push(['domain', 'consciousdigital']);
                  `}
              </Script>
              <Script 
                id="crowdin-inplace-translation" 
                type="text/javascript" 
                src="//cdn.crowdin.com/jipt/jipt.js"
              ></Script>
              <link rel="stylesheet" type="text/css" href="https://cdn.crowdin.com/jipt/jipt.css?v3" />
            </>
          )}
        </Head>
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
          onError={(err) => {
            if (err.code === "MISSING_TRANSLATION") {
              console.warn("Missing translation", err.message);
              return;
            }
            throw err;
          }}
        >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </IntlProvider>
    </AppCacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};