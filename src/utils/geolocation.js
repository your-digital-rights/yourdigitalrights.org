import fetch from "isomorphic-fetch";
var regulation = null;

async function getRegulationbyGeolocation() {
  const url = `/api/geolocation`;

  if (regulation == null) {
    regulation = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP error ${response.status} from ${url}`);
      })
      .then((resultJson) => {
        if (resultJson['country'] === 'US') {
            if (resultJson['region'] === 'VA') {
              return 'VCDPA';
            } else {
              return 'CCPA';
            }
          } else if (resultJson['country'] === 'GB') {
            return 'GDPRUK';
          } else if (resultJson['country'] === 'BR') {
            return 'LGPD';     
          } else if (resultJson['country'] === 'CA') {
            return 'PIPEDA';                        
          } else {
            return 'GDPR';
          }
      }).catch(function(err){
        return "GDPR"
      });
  }

  return regulation;
};

var countryCode = null;

async function getCountryCode() {
  const url = `/api/geolocation`;

  if (countryCode == null) {
    countryCode = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP error ${response.status} from ${url}`);
      })
      .then((resultJson) => {
        return resultJson['country'];
      }).catch(function(err){
        return null;
      });
  }
  return countryCode;
};

export {getRegulationbyGeolocation, getCountryCode};
