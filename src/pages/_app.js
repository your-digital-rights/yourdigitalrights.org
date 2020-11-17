import Head from 'next/head'
import CookieConsent from "react-cookie-consent";

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
		<CookieConsent
		  buttonText="Ok"
		  buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: "3px" }}
		>
		  This website uses cookies to enhance the user experience and for analytics, please see our <a style={{color: "#ffffff"}} href="/privacy">Privacy Policy</a> page for details.
		</CookieConsent>
	</>
  )
}