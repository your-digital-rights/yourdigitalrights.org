import { DOMAINS_API_URL } from "./domain";
import fetch from "isomorphic-fetch";

var allDomains = null;
var domainDetails = {};
var dd = null;
const headers = {'X-API-Key': process.env.NEXT_PUBLIC_DOMAIN_API_KEY};

function normalizeDomainInput(domain) {
  if (typeof domain !== "string") {
    return null;
  }

  const trimmedDomain = domain.trim().toLowerCase();
  if (!trimmedDomain) {
    return null;
  }

  let hostname = trimmedDomain;
  // Accept full URL values that may exist in older saved requests.
  if (trimmedDomain.startsWith("http://") || trimmedDomain.startsWith("https://")) {
    try {
      hostname = new URL(trimmedDomain).hostname;
    } catch (error) {
      return null;
    }
  } else {
    hostname = trimmedDomain.split("/")[0];
  }

  hostname = hostname.split("?")[0].split("#")[0].split(":")[0].replace(/\.$/, "");
  const labels = hostname.split(".");
  if (!labels.length) {
    return null;
  }

  const hasInvalidLabel = labels.some(
    label => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label)
  );
  if (hasInvalidLabel) {
    return null;
  }

  return hostname;
}

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
  const normalizedDomain = normalizeDomainInput(domain);
  if (!normalizedDomain) {
    return undefined;
  }

  if (!(normalizedDomain in domainDetails)) {
    const url = new URL(`/domains/${encodeURIComponent(normalizedDomain)}`, DOMAINS_API_URL).toString();
    domainDetails[normalizedDomain] = fetch(url, {headers: headers})
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
  return domainDetails[normalizedDomain];
}

export {fetchDomains, fetchDomainDetails}
