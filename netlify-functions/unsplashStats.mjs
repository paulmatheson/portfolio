const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const api = process.env.API_KEY;
    const url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api}`;

    try {
        const response = await fetch(url);
        const profileStats = await response.json();

        const views = new Intl.NumberFormat().format(profileStats.views.total);
        const downloads = new Intl.NumberFormat().format(profileStats.downloads.total);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Value of MY_IMPORTANT_VARIABLE is ${views} views and ${downloads} downloads on Unsplash.`,
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
