require('dotenv').config();
const fetch = require('node-fetch');
const api_key = process.env.API_KEY;

exports.handler = async function (event, context) {
    const api_url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api_key}`;

    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(json),
    };
};
