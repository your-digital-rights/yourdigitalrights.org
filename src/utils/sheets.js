import { DOMAIN_URL } from "./domain";
import fetch from "isomorphic-fetch";
var data = null;

export default async function fetchData() {
  if (data == null) {
    data = fetch(`${DOMAIN_URL}/api/companies`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`HTTP error ${response.status} from '/api/companies'`);
      })
      .then((json) => {
        return json;
      });
  }

  return data;
}
