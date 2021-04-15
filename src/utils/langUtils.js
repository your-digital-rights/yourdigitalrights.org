import { DOMAIN } from "./domain";

const ALT_LANGUAGES = ['es', 'it'];

export default function generateLangLinks(url) {
	return ALT_LANGUAGES.map(lang => (
		{'hrefLang': lang, 'href': url.replace("https://", "https://" + lang + ".")})
	)
}