export default async (req, res) => {
    if (req.headers['X-Vercel-IP-Country'] === undefined) {
        res.status(400).json({err: "Geolocation unavaialble."});
    } else {
        res.status(200).json({ 
            country: req.headers('X-Vercel-IP-Country'),
            region: req.headers('X-Vercel-IP-Country-Region'),
            city: req.headers('X-Vercel-IP-City')
        });
    }
};
