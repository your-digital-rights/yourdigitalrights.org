import {DOMAIN} from "./domain";


const ALT_LANGUAGES = ['en', 'es', 'it'];


function generateCanonical(base_url, local) {
	return (local === 'en') ? 'https://' + DOMAIN + base_url : 'https://' + local + "." + DOMAIN + base_url
}


function generateLangLinks(base_url) {
	return ALT_LANGUAGES.map(local => (
		{'hrefLang': local, 'href': generateCanonical(base_url, local)})
	)
}


export {generateCanonical, generateLangLinks };