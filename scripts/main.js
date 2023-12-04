import projectsArr from './projectData.js'
import { renderProjects } from './projectRenderer.js'
import { switchTheme } from './themeSwitch.js'
import { menuAnimation } from "./menuAnimation.js"
import photos from './photoData.js'

const hmProjList = document.getElementById('hm-project-cards')
const projectList = document.getElementById('project-list')

const menuButton = document.getElementById('menu-button')
const toggleLinks = document.querySelectorAll('.theme-toggle-link')

const dayIcon = '<ion-icon name="sunny-outline" id="theme-toggle-icon"></ion-icon>'
const nightIcon = '<ion-icon name="moon-outline" id="theme-toggle-icon"></ion-icon>'

toggleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        switchTheme(link, dayIcon, nightIcon)
    })
})

menuButton.addEventListener('click', () => {
    menuAnimation(menuButton)
})

// Set the initial theme based on local storage
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
}

renderProjects(projectsArr, hmProjList, projectList)

let grid = document.querySelector('.grid');

const htmlArray = [];

photos.forEach(image => {
    htmlArray.push(`
        <a class="grid-item" href="${image.url}">
            <img alt="img2" src="${image.url}" />
        </a>
    `);
});

// Join the HTML strings and set the innerHTML
grid.innerHTML += htmlArray.join('');

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