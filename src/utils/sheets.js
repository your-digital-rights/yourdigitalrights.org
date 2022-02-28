import fetch from "universal-fetch";
var data = null;

export default async function fetchData() {
  if (data == null) {
    data = fetch('/api/companies')
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
