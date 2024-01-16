// unsplashStats.js
const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const api = process.env.API_KEY; // Set this environment variable in your deployment platform
    const url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api}`;

    try {
        const response = await fetch(url);
        const profileStats = await response.json();
        console.log("Unsplash API Response:", profileStats);

        const views = new Intl.NumberFormat().format(profileStats.views.total);
        const downloads = new Intl.NumberFormat().format(profileStats.downloads.total);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `I have ${views} views and ${downloads} downloads on Unsplash.`,
            }),
        };
    } catch (error) {
        console.error("Error fetching Unsplash data:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};





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