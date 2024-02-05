async function updateUnsplashStats() {
    try {
        const response = await fetch('/getUnsplashData');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Read the response body as JSON
        const responseData = await response.json();

        const views = responseData.views;
        const downloads = responseData.downloads;

        const unsplashStats = document.getElementById('unsplash-stats');
        unsplashStats.innerHTML = `
          <span id="photo-stat">${views.total.toLocaleString()}</span> views and <span id="photo-stat">${downloads.total.toLocaleString()}</span> downloads on <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉.`;
    } catch (error) {
        console.error('Error updating Unsplash stats:', error.message);
    }
}

updateUnsplashStats();
