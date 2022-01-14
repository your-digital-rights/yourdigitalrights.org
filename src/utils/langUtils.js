import {DOMAIN} from "./domain";

const ALT_LANGUAGES = ["de", "en", "es", "fr", "it", "pt"];

const TRANSLATION_PSEUDO_LOCAL = 'az';


function generateCanonical(base_url, locale) {
	return (locale === 'en') ? 'https://' + DOMAIN + base_url : 'https://' + DOMAIN + '/' + locale + base_url
}


function generateLangLinks(base_url) {
	return ALT_LANGUAGES.map(locale => (
		{'hrefLang': locale, 'href': generateCanonical(base_url, locale)})
	)
}


export {generateCanonical, generateLangLinks, ALT_LANGUAGES, TRANSLATION_PSEUDO_LOCAL};