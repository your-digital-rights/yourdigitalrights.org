import fetch from "isomorphic-fetch";
import url from 'url';

const SHEET_ID = "1tBtKWcOnLOs2cwqs_EX0ldTCaG3gh_7neQpaIYHBvJE";
const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

const DOMAIN = 0;
const DISPLAY_NAME = 1;
const SEARCH_TERMS = 2;
const EMAIL = 3;
const DATE_CREATED = 5;

let data = fetchCompanies();

function compare(a,b) {
  return b[DATE_CREATED] > a[DATE_CREATED];
}

async function fetchCompanies() {
  try {
    let orgs = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Domains!A2:F?key=${API_KEY}`
    );
    orgs = await orgs.json();
    orgs = orgs['values'].sort(compare).map(company => {
      let emailCount  = company[EMAILS_SENT] ? company[EMAILS_SENT].trim() : 0;
      return {
        name: company[DISPLAY_NAME].trim(),
        email: company[EMAIL].trim(),
        url: company[DOMAIN].trim(),
        searchTerms: company[SEARCH_TERMS].trim(),
      };
    });
    return {"License": "GNU General Public License v3.0", "Organizations": orgs.slice(0, 25000)};
  } 
  catch (e) {
    console.error(e);
  }
};

setInterval(() => {
  data = fetchCompanies();
}, 60 * 60 * 1000); 

export default async (req, res) => {
  const query = url.parse(req.url,true).query;
  
  if (query.flush == process.env.CACHE_INVALIDATION) {
    console.log("Flushing the cache.");
    data = fetchCompanies();
  }
  res.statusCode = 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'stale-while-revalidate=600, max-age=3600, s-maxage=3600');  
  let response = await data;
  res.json(response);
};