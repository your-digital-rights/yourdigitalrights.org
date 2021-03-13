import fetch from "universal-fetch";
var data = null;

export default async function fetchData() {
  const url = `https://api.yourdigitalrights.org/companies`;

  if (data == null) {
    data = fetch(url).then(function (response) {
      if (response.status >= 400) {
        throw new Error(`Bad response from ${url}`);
      }

      return response.json();
    });
  }

  return data;
}
