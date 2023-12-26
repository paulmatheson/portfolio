const api = `CX575TJrPQsXwNEifX5TqD6A-aLd8zU6Pcd4BaBGErk`
const url = `https://api.unsplash.com/users/paulmatheson/statistics/?client_id=${api}`
const unsplashStats = document.getElementById('unsplash-stats')

async function getUnsplashData() {
    const response = await fetch(url);
    const profileStats = await response.json();
    console.log(profileStats);

    const views = new Intl.NumberFormat().format(profileStats.views.total)
    const downloads = new Intl.NumberFormat().format(profileStats.downloads.total)

    unsplashStats.innerHTML = `
        <span id="photo-stat">${views}</span> views and <span id="photo-stat">${downloads}</span> downloads on <a href="https://unsplash.com/@paulmatheson" target="_blank">Unsplash ⧉.`
}

getUnsplashData()