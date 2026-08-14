import fetch from "isomorphic-fetch";

const EMPTY_GEO = { country: null, region: null, city: null, latitude: null, longitude: null, timezone: null };

// Cloudflare answers /cdn-cgi/trace at the edge, so this never reaches our origin.
// It only exposes the country, which is all we need unless the visitor is in the
// US -- US regulations are state-level, so those still need the origin lookup.
async function getCountryFromEdge() {
  try {
    const res = await fetch('/cdn-cgi/trace');

    if (!res.ok) {
      return null;
    }

    const match = /^loc=([A-Z]{2})$/m.exec(await res.text());
    return match ? match[1] : null;
  } catch (error) {
    return null;
  }
}

async function getGeoFromOrigin() {
  const res = await fetch('/api/geolocation');

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

async function getGeo() {
  try {
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem('ydr_geo');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed === 'object') {
          return parsed;
        }
      }
    }

    const edgeCountry = typeof window !== 'undefined' ? await getCountryFromEdge() : null;

    // Anything outside the US is decided by country alone, so we can skip the origin.
    const data = edgeCountry && edgeCountry !== 'US'
      ? { ...EMPTY_GEO, country: edgeCountry }
      : await getGeoFromOrigin();

    if (typeof window !== 'undefined' && data && typeof data === 'object') {
      sessionStorage.setItem('ydr_geo', JSON.stringify(data));
    }

    return data;
  } catch (error) {
    console.warn('Failed to get geolocation:', error);
    return { ...EMPTY_GEO };
  }
}

async function getRegulationbyGeolocation() {
  try {
    const resultJson = await getGeo();
    
    if (!resultJson || !resultJson.country) {
      return 'GDPR';
    }
    
    if (resultJson.country === 'US') {
      const region = resultJson.region;
      switch (region) {
        case 'VA': return 'VCDPA';
        case 'CO': return 'CPA';
        case 'CT': return 'CTDPA';
        case 'UT': return 'UCPA';
        case 'TX': return 'TDPSA';
        case 'OR': return 'OPCA';
        case 'FL': return 'FDBR';
        case 'MT': return 'MTCDPA';
        case 'IA': return 'ICDPA';
        case 'DE': return 'DPDPA';
        case 'NH': return 'NHDPA';
        case 'NE': return 'NDPA';
        case 'NJ': return 'NJDPL';
        case 'TN': return 'TIPA';
        case 'MN': return 'MCDPA';
        case 'MD': return 'MODPA';
        case 'IN': return 'ICDP';
        case 'KY': return 'KCDPA';
        case 'RI': return 'RIDTPPA';
        default: return 'CCPA';
      }
    }
    
    switch (resultJson.country) {
      case 'GB': return 'GDPRUK';
      case 'BR': return 'LGPD';
      case 'CA': return 'PIPEDA';
      case 'JP': return 'APPI';
      case 'IN': return 'DPDPA';
      case 'CH': return 'FADP';
      case 'CN': return 'PIPL';
      case 'ZA': return 'POPIA';
      case 'JO': return 'PDPL';
      case 'TH': return 'PDPA';
      default: return 'GDPR';
    }
  } catch (error) {
    console.warn('Failed to get regulation by geolocation:', error);
    return 'GDPR';
  }
}

async function getCountryCode() {
  try {
    const resultJson = await getGeo();
    return resultJson?.country || null;
  } catch (error) {
    console.warn('Failed to get country code:', error);
    return null;
  }
}

export {getRegulationbyGeolocation, getCountryCode};
