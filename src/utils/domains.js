import { DOMAINS_API_URL } from "./domain";
import fetch from "isomorphic-fetch";

var allDomains = null;
var domainDetails = {};
var dd = null;
const headers = {'X-API-Key': process.env.NEXT_PUBLIC_DOMAIN_API_KEY};

// "We could not reach the domains API" is not the same answer as "this domain
// is not in the dataset". Transient failures are raised as this error so that
// callers never turn one into a 404 for a domain that probably does exist.
class DomainLookupError extends Error {
  constructor(message) {
    super(message);
    this.name = "DomainLookupError";
  }
}

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

  // The dataset is keyed on the bare hostname -- not one of its ~42k entries
  // carries a "www." prefix -- so drop it and a stored "www.example.com" still
  // matches. Only strip when a plausible domain is left behind, since "www.com"
  // is itself a domain and must survive intact.
  if (hostname.startsWith("www.") && hostname.split(".").length > 2) {
    hostname = hostname.slice("www.".length);
  }

  const labels = hostname.split(".");
  // A single label is never a public domain. This also stops junk entries such
  // as the literal string "null" from being looked up at all.
  if (labels.length < 2) {
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
    // Only a successful lookup gets memoised. Caching a rejection would pin the
    // failure to this process for as long as it stays warm.
    allDomains = fetch(url, {headers: headers})
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new DomainLookupError(`HTTP error ${response.status} from ${url}`);
      })
      .catch((error) => {
        allDomains = null;
        throw error;
      });
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
        // A 404 is a real answer -- the domain is absent from the dataset -- so
        // it is safe to remember. Any other non-ok status means we got no answer
        // at all and must not be cached as one.
        if (response.status === 404) {
          return undefined;
        }
        if (response.ok) {
          return response.json();
        }
        throw new DomainLookupError(`HTTP error ${response.status} from '${url}'`);
      })
      .catch((error) => {
        delete domainDetails[normalizedDomain];
        throw error;
      });
  }
  return domainDetails[normalizedDomain];
}

export {fetchDomains, fetchDomainDetails, normalizeDomainInput, DomainLookupError}
