import fetch from "universal-fetch";
var data = null;

export default async function fetchData() {
  const url = `https://api.yourdigitalrights.org/companies`;

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
      });
  }

  return data;
}
