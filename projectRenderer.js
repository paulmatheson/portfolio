export function renderProjects(projects, hmProjList, projectList) {
    console.log("Test")
    if (hmProjList !== null) {
        for (let i = 0; i < 3; i++) {
            let article = document.createElement('article')
            let project = projects[i]
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
        projects.forEach(project => {
            const projectDiv = document.createElement('article');
            projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="btn" href="${project.link}" target="_blank">Open Project ⧉</a>
        `;
            projectList.appendChild(projectDiv);
        });
    }
}