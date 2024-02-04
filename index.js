require('dotenv').config();
const fetch = require('node-fetch');
const api_key = process.env.API_KEY;

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/getUnsplashData', async (request, response) => {
    try {
        const api_url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api_key}`;

        console.log('Fetching data from Unsplash API:', api_url);

        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();

        console.log('Unsplash API Response:', json);

        response.json(json);
    } catch (error) {
        console.error('Error fetching Unsplash data:', error.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});
