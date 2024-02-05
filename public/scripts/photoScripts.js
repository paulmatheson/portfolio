import photos from './photoData.js'

async function updateUnsplashStats() {
    try {
        const response = await fetch('/.netlify/functions/getUnsplashData');
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

let grid = document.querySelector('.grid');

const htmlArray = [];

photos.forEach(image => {
    htmlArray.push(`
        <a class="grid-item" href="${image.url}">
            <img alt="img2" src="${image.url}" />
        </a>
    `);
});

grid.innerHTML += htmlArray.join('')

imagesLoaded(grid, function (instance) {
    var iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
            gutter: 10
        }
    });
})

let gallery = document.getElementById('lightgallery')
lightGallery(gallery, {
    controls: true,
    counter: false,
    download: false,
    thumbnail: true,
    plugins: [
        lgThumbnail
    ]
})

updateUnsplashStats();
