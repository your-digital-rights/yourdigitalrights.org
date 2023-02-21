import { DOMAINS_API_URL } from "./domain";
import fetch from "isomorphic-fetch";
var data = null;

async function fetchDomains() {
  const url = `${DOMAINS_API_URL}/domains`;
  if (data == null) {
    data = fetch(url)
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
  return data;
}

async function fetchDomainDetails(domain) {
  const url = `${DOMAINS_API_URL}/domains/${domain}`;
  if (data == null) {
    data = fetch(url)
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
  return data;
}

export {fetchDomains, fetchDomainDetails}