import { DOMAIN } from "./domain";

export default function getInboundEmailAddress(uuid, action) {
  const part = DOMAIN === window.location.hostname ? 'inbound' : 'inbound-dev';
  return `${uuid}.${action}@${part}.yourdigitalrights.org`;
};
