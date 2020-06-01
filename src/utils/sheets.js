import fetch from "universal-fetch";
export default async function fetchData() {
  let data = await fetch(`https://api.yourdigitalrights.org/companies`);
  data = await data.json();
  return data;
}
