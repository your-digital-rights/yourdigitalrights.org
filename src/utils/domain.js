var os = require("os");

let domain;

if (os.hostname().includes("opt-out")) {
  domain = "opt-out.eu";
} else {
  domain = "yourdigitalrights.org";
}


export const DOMAIN = domain;
