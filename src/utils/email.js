export default function getInboundEmailAddress(uuid, action) {
  console.log("process.env", process.env);
  console.log("process.env.VERCEL_ENV", process.env.VERCEL_ENV);
  const part = process.env.VERCEL_ENV === 'production'? 'inbound' : 'inbound-dev';
  return `${uuid}.${action}@${part}.yourdigitalrights.org`;
};
