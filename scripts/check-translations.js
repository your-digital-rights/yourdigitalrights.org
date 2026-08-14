#!/usr/bin/env node
/**
 * Fails when a translation references a variable the English source does not
 * define.
 *
 * react-intl throws at render time in that case and falls back to the English
 * text, so a single mistranslated placeholder silently breaks a page in one
 * locale. It happened with org.titleExistingOrg, where three translations used
 * {domain} while the source and the page pass {org}: every /d/ page view in
 * those locales raised a FORMAT_ERROR.
 *
 * Crowdin does flag this, but the warning was dismissible, and the translations
 * still reached the repo. This is the backstop that does not depend on Crowdin
 * or on translators.
 *
 * The comparison is deliberately one-directional. A translation that *omits* a
 * placeholder is not an error -- the value simply does not appear -- and plenty
 * of locales legitimately do that. Only *extra* variables throw.
 */

const fs = require("fs");
const path = require("path");

let parse;
try {
  ({ parse } = require("@formatjs/icu-messageformat-parser"));
} catch (error) {
  console.error(
    "Cannot load @formatjs/icu-messageformat-parser, which normally comes in\n" +
    "with react-intl. Install it as a devDependency to run this check:\n" +
    "  npm install --save-dev @formatjs/icu-messageformat-parser\n"
  );
  process.exit(1);
}

const LANG_DIR = path.join(__dirname, "..", "lang");
const SOURCE_LOCALE = "en";

// ICU element type ids, from @formatjs/icu-messageformat-parser.
const TYPE = { argument: 1, number: 2, date: 3, time: 4, select: 5, plural: 6, tag: 8 };

function messageOf(entry) {
  return entry && typeof entry === "object" && "message" in entry ? entry.message : entry;
}

/** Every variable an ICU message actually reads, ignoring plural/select branch text. */
function variablesIn(message) {
  const found = new Set();

  (function walk(elements) {
    for (const element of elements) {
      switch (element.type) {
        case TYPE.argument:
        case TYPE.number:
        case TYPE.date:
        case TYPE.time:
          found.add(element.value);
          break;
        case TYPE.select:
        case TYPE.plural:
          found.add(element.value);
          for (const option of Object.values(element.options || {})) {
            walk(option.value);
          }
          break;
        case TYPE.tag:
          walk(element.children || []);
          break;
        default:
          break;
      }
    }
  })(parse(message));

  return found;
}

function readCatalogue(locale) {
  return JSON.parse(fs.readFileSync(path.join(LANG_DIR, `${locale}.json`), "utf8"));
}

const source = readCatalogue(SOURCE_LOCALE);
const sourceVariables = {};
for (const [id, entry] of Object.entries(source)) {
  try {
    sourceVariables[id] = variablesIn(messageOf(entry));
  } catch (error) {
    console.error(`${SOURCE_LOCALE}: ${id} is not parseable ICU -- ${error.message}`);
    process.exitCode = 1;
  }
}

const locales = fs
  .readdirSync(LANG_DIR)
  .filter(name => name.endsWith(".json"))
  .map(name => name.replace(/\.json$/, ""))
  .filter(locale => locale !== SOURCE_LOCALE);

const problems = [];

for (const locale of locales) {
  const catalogue = readCatalogue(locale);

  for (const [id, entry] of Object.entries(catalogue)) {
    if (!(id in sourceVariables)) continue;

    let used;
    try {
      used = variablesIn(messageOf(entry));
    } catch (error) {
      problems.push({ locale, id, detail: `not parseable ICU -- ${error.message}` });
      continue;
    }

    const undefinedVariables = [...used].filter(name => !sourceVariables[id].has(name));
    if (undefinedVariables.length) {
      problems.push({
        locale,
        id,
        detail:
          `uses {${undefinedVariables.join("}, {")}} which the source never provides ` +
          `(source provides ${[...sourceVariables[id]].map(v => `{${v}}`).join(", ") || "nothing"})`,
      });
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} translation(s) reference a variable that is never provided:\n`);
  for (const { locale, id, detail } of problems) {
    console.error(`  ${locale}  ${id}`);
    console.error(`      ${detail}`);
  }
  console.error(
    "\nreact-intl throws on these at render time and falls back to English.\n" +
    "Fix the placeholder in the translation, in Crowdin as well as in lang/.\n"
  );
  process.exit(1);
}

console.log(`Checked ${locales.length} locales against ${SOURCE_LOCALE}: no undefined variables.`);
