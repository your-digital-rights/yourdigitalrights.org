import fetch from "universal-fetch";
var data = null;

export default async function getGeolocation() {
  const url = `/api/geolocation`;

  if (data == null) {
    data = fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`HTTP error ${response.status} from ${url}`);
      })
      .then((resultJson) => {
        if (resultJson['country'] === 'US') {
            return 'CCPA';
          } else if (resultJson['country'] === 'GB') {
            return 'GDPRUK';
          } else {
            return 'GDPR';
          }
      }).catch(function(err){
        return "GDPR"
      });
  }

  return data;
}
