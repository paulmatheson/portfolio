import projects from './projectData.js'
import { renderProjects } from './projectRenderer.js'
import { switchTheme } from './themeSwitch.js'

const hmProjList = document.getElementById('hm-project-cards')
const projectList = document.getElementById('project-list')
const brand = document.getElementById('brand')

const toggleLinks = document.querySelectorAll('.theme-toggle-link')

const dayIcon = '<ion-icon name="sunny-outline" id="theme-toggle-icon"></ion-icon>'
const nightIcon = '<ion-icon name="moon-outline" id="theme-toggle-icon"></ion-icon>'

toggleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        switchTheme(link)
    })
})

// Set the initial theme based on local storage
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme)
}

function menuAnimation(toggle) {
    const slideNav = document.getElementById("slideNav")
    const sideBarLinks = document.getElementById("sidebar-links")
    const socialIcons = document.getElementById("socialIcons")

    toggle.classList.toggle("change");

    slideNav.classList.toggle("navSlide")
    slideNav.classList.toggle('bring-forward')
    slideNav.classList.toggle('bring-backward')

    sideBarLinks.classList.toggle("fade-in")
    socialIcons.classList.toggle("fade-in")

    document.body.classList.toggle('no-scroll')
    if (document.body.classList.contains('no-scroll')) {
        document.querySelector('main').style.opacity = 0;
    } else {
        document.querySelector('main').style.opacity = 100;
    }
}

renderProjects(projects, hmProjList, projectList)