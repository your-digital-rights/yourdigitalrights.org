import fetch from "universal-fetch";
export default async function fetchData() {
  let data = await fetch(`https://opt-out-api.now.sh/companies`);
  data = await data.json();
  return data;
}
