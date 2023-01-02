import { DOMAIN_URL } from "./domain";
import fetch from "isomorphic-fetch";
var data = null;

export default async function fetchData() {
  const url = `${DOMAIN_URL}/api/companies`;
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
      })
      .catch(console.error);
  }
  return data;
}
