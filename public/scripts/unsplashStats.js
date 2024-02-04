async function updateUnsplashStats() {
    try {
        const response = await fetch('/getUnsplashData');
        console.log('Response Data:', response);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const { views, downloads } = await response.json();

        const unsplashStats = document.getElementById('unsplash-stats');
        unsplashStats.innerHTML = `
          <span id="photo-stat">${views.total.toLocaleString()}</span> views and <span id="photo-stat">${downloads.total.toLocaleString()}</span> downloads on <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉.`;
    } catch (error) {
        console.error('Error updating Unsplash stats:', error.message);
    }
}

updateUnsplashStats();
