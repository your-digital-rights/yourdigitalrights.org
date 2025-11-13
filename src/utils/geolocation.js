import fetch from "isomorphic-fetch";

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
    
    const res = await fetch('/api/geolocation');
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    
    const data = await res.json();
    
    if (typeof window !== 'undefined' && data && typeof data === 'object') {
      sessionStorage.setItem('ydr_geo', JSON.stringify(data));
    }
    
    return data;
  } catch (error) {
    console.warn('Failed to get geolocation:', error);
    return { country: null, region: null, city: null, latitude: null, longitude: null, timezone: null };
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
