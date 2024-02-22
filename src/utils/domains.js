import { DOMAINS_API_URL } from "./domain";
import fetch from "isomorphic-fetch";

var allDomains = null;
var domainDetails = {};
var dd = null;
var headers = {'X-API-Key': process.env.NEXT_PUBLIC_DOMAIN_API_KEY}

async function fetchDomains() {
  const url = `${DOMAINS_API_URL}/domains`;
  if (allDomains == null) {
    allDomains = fetch(url, {headers: headers})
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP error ${response.status} from ${url}`);
      })
      .then((json) => {
        return json;
      })
      .catch(console.error);
  }
  return allDomains;
}

async function fetchDomainDetails(domain) {
  const url = `${DOMAINS_API_URL}/domains/${domain}`;
  if (!(domain in domainDetails)) {
    domainDetails[domain] = fetch(url, {headers: headers})
      .then((response) => {
        if (response.status <= 400) {
          return response.json();
        }
        throw new Error(`HTTP error ${response.status} from '${url}'`);
      })
      .then((json) => {
        return json;
      })
      .catch(console.error);
  }
  return domainDetails[domain];
}

export {fetchDomains, fetchDomainDetails}