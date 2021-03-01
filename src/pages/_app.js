import Head from 'next/head'
import CookieConsent from "react-cookie-consent";
import { CookieBanner } from '@palmabit/react-cookie-law';

// Overide custom app to place cookie consent on every page.

export default function App({ Component, pageProps }) {
  return (
  	<>
  	    <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
      	</Head>
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
            container: {
              fontFamily: 'Source Sans Pro',
              background: 'rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 100% no-repeat',
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
	</>
  )
}