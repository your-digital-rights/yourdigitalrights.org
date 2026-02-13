import path from 'node:path';
import {promises as fs} from 'node:fs';

const DEFAULT_LOCALE = 'en';
const messageCache = new Map();

function normalizeLocale(locale) {
  if (typeof locale !== 'string' || !locale.trim()) {
    return DEFAULT_LOCALE;
  }
  return locale.toLowerCase();
}

async function readMessagesFromDisk(locale) {
  const filePath = path.join(process.cwd(), 'compiled-lang', `${locale}.json`);
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export async function getLocaleMessages(locale) {
  const activeLocale = normalizeLocale(locale);

  if (activeLocale === DEFAULT_LOCALE) {
    return {};
  }

  if (messageCache.has(activeLocale)) {
    return messageCache.get(activeLocale);
  }

  try {
    const messages = await readMessagesFromDisk(activeLocale);
    messageCache.set(activeLocale, messages);
    return messages;
  } catch (error) {
    if (activeLocale !== DEFAULT_LOCALE) {
      return getLocaleMessages(DEFAULT_LOCALE);
    }
    console.error('Failed to load locale messages', error);
    return {};
  }
}
