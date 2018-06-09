import fetch from "universal-fetch";
const SHEET_ID = "1tBtKWcOnLOs2cwqs_EX0ldTCaG3gh_7neQpaIYHBvJE";
export default async function fetchData() {
  let data = await fetch(
    `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/od6/public/values?alt=json`
  );
  data = await data.json();
  data = data.feed.entry.map(company => {
    return {
      name: company["gsx$companyname"]["$t"],
      email: company["gsx$email"]["$t"],
      url: company["gsx$companyurl"]["$t"]
    };
  });
  return data;
}
