import fetch from "universal-fetch";
var data = null;

export default async function fetchData() {
  if (data == null) {
  	data = await fetch(`https://api.yourdigitalrights.org/companies`);
  	data = await data.json();
  }
  return data;
}
