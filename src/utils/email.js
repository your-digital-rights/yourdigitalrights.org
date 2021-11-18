export default function getInboundEmailAddress(uuid, action) {
  if (process.env.VERCEL_ENV === 'production') {
    return `${uuid}.${action}@inbound.yourdigitalrights.org`;
  } else {
    return `${uuid}.${action}@inbound-dev.yourdigitalrights.org`;
  }
};
