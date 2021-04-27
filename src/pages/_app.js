import Head from 'next/head'
import PropTypes from 'prop-types';
import { CookieBanner } from '@palmabit/react-cookie-law';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import * as locales from '../../lang';


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale, pathname } = router
  const messages = locales[locale]


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
  	<>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
          <div>
            <CookieBanner
              message="This website uses cookies for multilingual support and for analytics."
              policyLink="/privacy"
              privacyPolicyLinkText="Privacy Policy"
              showPreferencesOption={false}
              showMarketingOption={false}
              statisticsDefaultChecked={true}
              wholeDomain={true}
              onAcceptStatistics = {() => {_paq.push(['rememberCookieConsentGiven']);}}
              onDeclineStatistics = {() => {_paq.push(['forgetCookieConsentGiven']);}}
              styles={{
                dialog: {
                  fontFamily: 'Source Sans Pro',
                  background: 'rgba(52, 64, 81, 0.88) 20px 100% no-repeat',
                  backgroundSize: '30px 30px',
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 600,
                  position: 'fixed',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  zIndex: '100000',
                  padding: '10px',              
                },            
                message: {
                  fontColor: 'white',
                },
                policy: {
                  color: 'white', 
                },
                button: {
                  border: '1px solid white',
                  borderRadius: 4,
                  height: 32,
                  lineHeight: '32px',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 600,
                  opacity: 1,
                  right: 20,
                  marginTop: -18,
                  marginRight: "10px"
                }            
              }}
            />
          </div>
      </ThemeProvider>
    </IntlProvider>
	</>
  )
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};