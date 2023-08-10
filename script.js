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
        description: "",
        link: "#",
        tech: [],
        img: ""
    },
    {
        title: "Quote Machine",
        description: "",
        link: "#",
        tech: [],
        img: ""
    },
    {
        title: "Pong",
        description: "",
        link: "#",
        tech: [],
        img: ""
    },
    {
        title: "Simon Says",
        description: "",
        link: "#",
        tech: [],
        img: ""
    },
    {
        title: "Markdown previewer",
        description: "",
        link: "#",
        tech: [],
        img: ""
    },
];

const hmProjList = document.getElementById('hm-project-cards');
const projectList = document.getElementById('project-list');

if (hmProjList !== null) {
    for (let i = 0; i < 3; i++) {
        let article = document.createElement('article')
        let project = projects[i]
        article.innerHTML = `
            <h2>${project.title}</h2>
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
