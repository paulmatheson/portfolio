const db = [
    {
        title: "Weather app",
        description: "A fully functional weather application that interacts with Visual Crossing's Easy Global Weather API.",
        link: "http://weatherapp.paulmatheson.net/",
        tech: [],
        img: ""
    },
    {
        title: "Drum machine",
        description: "A full-fledged interactive drum machine.",
        link: "https://codepen.io/illpill/full/xxYwLwq",
        tech: [],
        img: ""
    },
    {
        title: "Markdown previewer",
        description: "A markdown compiler built as part of my coursework. React, HTML/CSS(grid) and Javascript.",
        link: "https://codepen.io/illpill/full/OJREKXM",
        tech: [],
        img: ""
    },
    {
        title: "Pomodoro Timer",
        description: "An easy to use and interactive Pomodoro Technique Timer.",
        link: "https://codepen.io/illpill/full/PQBbao/",
        tech: [],
        img: ""
    },
    {
        title: "Wikipedia Viewer",
        description: "An app built to search wikipedia. Built as part of my freeCodeCamp coursework.",
        link: "projects/wa/weather-app.html",
        tech: [],
        img: ""
    },
    {
        title: "Quote Machine",
        description: "A random quote generator.",
        link: "projects/the-quote-machine/quote-machine.html",
        tech: [],
        img: ""
    },
    {
        title: "Pong",
        description: "Play my version of one of the first video games ever created",
        link: "projects/pong/pong.html",
        tech: [],
        img: ""
    },
    {
        title: "Simon Says",
        description: "Play the classic Simon game. See if you can make it to 20!",
        link: "projects/simon/simon.html",
        tech: [],
        img: ""
    }
];

const hmProjList = document.getElementById('hm-project-cards')
const projectList = document.getElementById('project-list')
const brand = document.getElementById('brand')


if (hmProjList !== null) {
    for (let i = 0; i < 3; i++) {
        let article = document.createElement('article')
        let project = db[i]
        article.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="btn" href="${project.link}" target="_blank">Open Project ⧉</a>
        `
        hmProjList.appendChild(article)
    }
}

if (projectList !== null) {
    const projectList = document.getElementById('project-list');
    db.forEach(project => {
        const projectDiv = document.createElement('article');
        projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a class="btn" href="${project.link}" target="_blank">Open Project ⧉</a>
    `;
        projectList.appendChild(projectDiv);
    });
}

const toggleLinks = document.querySelectorAll('.theme-toggle-link')


const dayIcon = '<ion-icon name="sunny-outline" id="theme-toggle-icon"></ion-icon>'
const nightIcon = '<ion-icon name="moon-outline" id="theme-toggle-icon"></ion-icon>'

function switchTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    document.documentElement.setAttribute('data-theme', newTheme)

    if (newTheme === 'light') {
        toggleLink.innerHTML = dayIcon
    } else {
        toggleLink.innerHTML = nightIcon
    }

    localStorage.setItem('theme', newTheme)
}

toggleLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        switchTheme();
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
