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

function canAnimate() {
    return window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function revealWhenVisible(elements, animationVars = {}) {
    if (!canAnimate()) return

    const items = gsap.utils.toArray(elements)
    if (!items.length) return

    const reveal = (target) => {
        gsap.from(target, {
            opacity: 0,
            y: 18,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
            ...animationVars,
        })
    }

    if (!('IntersectionObserver' in window)) {
        reveal(items)
        return
    }

    const observer = new IntersectionObserver((entries) => {
        const visibleItems = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => entry.target)

        if (!visibleItems.length) return

        reveal(visibleItems)
        visibleItems.forEach(item => {
            observer.unobserve(item)
        })
    }, { threshold: 0.18 })

    items.forEach(item => observer.observe(item))
}

function animateSharedIntro() {
    if (!canAnimate()) return

    gsap
        .timeline({ defaults: { ease: 'power2.out' } })
        .from('nav > a', { opacity: 0, y: -10, duration: 0.45 })
        .from('.header-nav li, .header-nav .theme-toggle-link, .menu-button', {
            opacity: 0,
            y: -8,
            duration: 0.35,
            stagger: 0.05,
        }, '-=0.25')
}

function animateHomePage() {
    if (!canAnimate() || !document.querySelector('.hero')) return

    gsap
        .timeline({ defaults: { ease: 'power2.out' } })
        .from('.hero img', { opacity: 0, scale: 0.96, duration: 0.65 })
        .from('.hero h1', { opacity: 0, y: 18, duration: 0.5 }, '-=0.35')
        .from('.hero p', { opacity: 0, y: 14, duration: 0.45 }, '-=0.25')
        .from('.hero .social-links li', {
            opacity: 0,
            y: 8,
            duration: 0.3,
            stagger: 0.04,
        }, '-=0.2')

    revealWhenVisible('.projects h2, #hm-project-cards article, .projects .btn-lg', {
        stagger: 0.06,
    })
}

function animateAboutPage() {
    if (!canAnimate() || !document.querySelector('.about-main')) return

    gsap
        .timeline({ defaults: { ease: 'power2.out' } })
        .from('.about-main h1', { opacity: 0, y: 16, duration: 0.45 })
        .from('.about-main > div:first-child p', {
            opacity: 0,
            y: 12,
            duration: 0.38,
            stagger: 0.06,
        }, '-=0.2')
        .from('.about-main img', { opacity: 0, scale: 0.98, duration: 0.55 }, '-=0.35')
        .from('.about-main blockquote', { opacity: 0, y: 14, duration: 0.45 }, '-=0.25')

    revealWhenVisible('.about-main h4, .about-main ul li, .interests h2, .interests p, .find-me-socials li', {
        stagger: 0.04,
    })
}

function animateProjectsPage() {
    if (!canAnimate() || !document.querySelector('.projects-main')) return

    gsap.from('.projects-main h1', {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: 'power2.out',
    })

    revealWhenVisible('#project-list article, main section:last-of-type h3, main section:last-of-type .social-links li', {
        stagger: 0.05,
    })
}

animateSharedIntro()
animateHomePage()
animateAboutPage()
animateProjectsPage()
