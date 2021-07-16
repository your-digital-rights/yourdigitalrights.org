export default async (req, res) => {
    if (req.headers['x-vercel-ip-country'] === undefined) {
        res.status(400).json({err: "Geolocation unavaialble."});
    } else {
        res.status(200).json({ 
            country: req.headers['x-vercel-ip-country'],
            region: req.headers['x-vercel-ip-country-region'],
            city: req.headers['x-vercel-ip-city']
        });
    }
};
