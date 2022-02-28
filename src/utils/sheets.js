import { DOMAIN } from "./domain";
import fetch from "isomorphic-fetch";
var data = null;

export default async function fetchData() {
  const url = process.env.VERCEL_URL ? `//${process.env.VERCEL_URL}/api/companies` : 'http://localhost:3000/api/companies';
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
