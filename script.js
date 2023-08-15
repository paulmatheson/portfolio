const projects = [
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

const hmProjList = document.getElementById('hm-project-cards');
const projectList = document.getElementById('project-list');

if (hmProjList !== null) {
    for (let i = 0; i < 3; i++) {
        let article = document.createElement('article')
        let project = projects[i]
        article.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Open Project</a>
        `
        hmProjList.appendChild(article)
    }
}

if (projectList !== null) {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('article');
        projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}">Open Project</a>
    `;
        projectList.appendChild(projectDiv);
    });
}
