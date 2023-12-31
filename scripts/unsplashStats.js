const unsplashStats = document.getElementById('unsplash-stats')

async function getUnsplashData() {
    try {
        const response = await fetch('/.netlify/functions/unsplashStats');
        const profileStats = await response.json();
        console.log(response)

        const views = new Intl.NumberFormat().format(profileStats.views.total)
        const downloads = new Intl.NumberFormat().format(profileStats.downloads.total)

        unsplashStats.innerHTML = `<span id="photo-stat">${views}</span> views and <span id="photo-stat">${downloads}</span> downloads on <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉.`
    } catch (error) {
        console.error("Error fetching Unsplash data:", error);
        unsplashStats.innerHTML = "Error fetching Unsplash data";
    }
}

getUnsplashData()