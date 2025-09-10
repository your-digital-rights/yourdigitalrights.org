import fetch from "isomorphic-fetch";
var regulation = null;

async function getGeo() {
  const cached = sessionStorage.getItem('ydr_geo');
  if (cached) return JSON.parse(cached);
  const res = await fetch('/api/geolocation', { cache: 'no-store', credentials: 'omit' });
  const data = await res.json();
  sessionStorage.setItem('ydr_geo', JSON.stringify(data));
  return data;
}

async function getRegulationbyGeolocation() {
  if (regulation == null) {
    regulation = getGeo() 
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
            } else if (resultJson['region'] === 'CO') {
              return 'CPA';
            } else if (resultJson['region'] === 'CT') {
              return 'CTDPA';   
            } else if (resultJson['region'] === 'UT') {
              return 'UCPA';       
            } else if (resultJson['region'] === 'TX') {
              return 'TDPSA';      
            } else if (resultJson['region'] === 'OR') {
              return 'OPCA';      
            } else if (resultJson['region'] === 'FL') {
              return 'FDBR';                                                                              
            } else if (resultJson['region'] === 'MT') {
              return 'MTCDPA';                  
            } else if (resultJson['region'] === 'IA') {
              return 'ICDPA';    
            } else if (resultJson['region'] === 'DE') {
              return 'DPDPA';    
            } else if (resultJson['region'] === 'NH') {
              return 'NHDPA';    
            } else if (resultJson['region'] === 'NE') {
              return 'NDPA';            
            } else if (resultJson['region'] === 'NJ') {
              return 'NJDPL';                          
            } else if (resultJson['region'] === 'TN') {
              return 'TIPA';   
            } else if (resultJson['region'] === 'MN') {
              return 'MCDPA';                               
            } else {
              return 'CCPA';
            }
        } else if (resultJson['country'] === 'GB') {
          return 'GDPRUK';
        } else if (resultJson['country'] === 'BR') {
          return 'LGPD';     
        } else if (resultJson['country'] === 'CA') {
          return 'PIPEDA';                        
        } else if (resultJson['country'] === 'JP') {
          return 'APPI';       
        } else if (resultJson['country'] === 'IN') {
          return 'DPDPA';             
        } else if (resultJson['country'] === 'CH') {
          return 'FADP';   
        } else if (resultJson['country'] === 'CN') {
          return 'PIPL';                 
        } else if (resultJson['country'] === 'ZA') {
          return 'POPIA';                 
        } else if (resultJson['country'] === 'JO') {
          return 'PDPL';                 
        } else if (resultJson['country'] === 'TH') {
          return 'PDPA';                           
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
  if (countryCode == null) {
    regulation = getGeo() 
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
