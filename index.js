require('dotenv').config()
const fetch = require('node-fetch');
const api_key = process.env.API_KEY;

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.get('/getUnsplashData', async (request, response) => {

    const api_url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api_key}`

    const fetch_response = await fetch(api_url)
    const json = await fetch_response.json()
    response.json(json)
})