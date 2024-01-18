const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api-proxy', async (req, res) => {
    try {
        // Replace 'YOUR_UNSPLASH_API_KEY' and 'https://api.unsplash.com/endpoint' with your actual API key and endpoint
        const apiKey = 'YOUR_UNSPLASH_API_KEY';
        const apiUrl = 'https://api.unsplash.com/endpoint';

        // Forward the request to the actual API
        const response = await axios.post(apiUrl, req.body, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        // Log the API response
        console.log('API Response:', response.data);

        res.json(response.data);
    } catch (error) {
        console.error('Error making API call:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Serverless function listening at http://localhost:${port}`);
});


/*

const api = process.env.API_KEY;
const url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api}`
const unsplashStats = document.getElementById('unsplash-stats')

async function getUnsplashData() {
    const response = await fetch(url);
    const profileStats = await response.json();

    const views = new Intl.NumberFormat().format(profileStats.views.total)
    const downloads = new Intl.NumberFormat().format(profileStats.downloads.total)

    unsplashStats.innerHTML = `
        <span id="photo-stat">${views}</span> views and <span id="photo-stat">${downloads}</span> downloads on <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉.`
}

getUnsplashData()
*/