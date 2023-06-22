export default async (req, res) => {
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=5184000');
    console.log('cf-ipcountry', req.headers['cf-ipcountry']);
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
