// pages/api/geo.js

function pickString(h) {
  return typeof h === 'string' && h.trim() ? h.trim() : null;
}
function pickNumber(h) {
  if (typeof h !== 'string') return null;
  const n = Number(h);
  return Number.isFinite(n) ? n : null;
}

export default function handler(req, res) {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.setHeader('Allow', 'GET, HEAD');
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    res.setHeader('Cache-Control', 'private, no-store');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    const country   = pickString(req.headers['x-vercel-ip-country']);
    const region    = pickString(req.headers['x-vercel-ip-country-region']);
    const city      = pickString(req.headers['x-vercel-ip-city']);
    const latitude  = pickNumber(req.headers['x-vercel-ip-latitude']);
    const longitude = pickNumber(req.headers['x-vercel-ip-longitude']);
    const timezone  = pickString(req.headers['x-vercel-ip-timezone']);

    if (req.method === 'HEAD') return res.status(204).end();

    return res.status(200).json({
      source: 'vercel',
      country, region, city, latitude, longitude, timezone,
    });
  } catch (_err) {
    res.setHeader('Cache-Control', 'private, no-store');
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
