import projectsArr from './projectData.js'
import { renderProjects } from './projectRenderer.js'
import { switchTheme } from './themeSwitch.js'
import { menuAnimation } from "./menuAnimation.js"

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

gsap.from('.fade-up', { opacity: 0, duration: 1, y: '80%', ease: 'power1' })
gsap.from('.fade-up-slow', { opacity: 0, duration: 1.15, y: '80%', ease: 'power1' }) 