export default function getInboundEmailAddress(uuid) {
  if (process.env.VERCEL_ENV === 'production') {
    return `${uuid}@inbound.yourdigitalrights.org`;
  } else {
    return `${uuid}@inbound-dev.yourdigitalrights.org`;
  }
};
