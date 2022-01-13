export default function getInboundEmailAddress(uuid, action) {
  const part = process.env.VERCEL_ENV === 'production'? 'inbound' : 'inbound-dev';
  return `${uuid}.${action}@${part}.yourdigitalrights.org`;
};
