export function renderProjects(projectsArr, hmProjList, projectList) {
    // Loads cards to the home page
    if (hmProjList !== null) {
        for (let i = 0; i < 3; i++) {

            const projectType = renderProjType(projectsArr[i])

            let article = document.createElement('article')
            let project = projectsArr[i]

            let tags = []
            project.tags.forEach(tag => {
                tags.push(`<li>${tag}</li>`)
            })

            article.innerHTML = `
                <h5>${projectType}</h5>
                <h3>${project.title}</h3>
                
                <p>${project.description}</p>
                <img src="${project.img}" />
                <a class="btn" href="${project.link}" target="${project.target}">Open Project ⧉</a>
                <ul class="tag-list">${tags.join("")}</ul>
            `
            hmProjList.appendChild(article)
        }
    }

    // Loads cards to the project page
    if (projectList !== null) {

        const projectList = document.getElementById('project-list');

        projectsArr.forEach(project => {
            let tags = []

            const projectType = renderProjType(project)

            project.tags.forEach(tag => {
                tags.push(`<li>${tag}</li>`)
            })

            const projectDiv = document.createElement('article');
            projectDiv.innerHTML = `
            <h5>${projectType}</h5>
            <h3>${project.title}</h3>
            
            <p>${project.description}</p>
            <img src="${project.img}" />
            <a class="btn" href="${project.link}" target="_blank">Open Project ⧉</a>
            <ul class="tag-list">${tags.join("")}</ul>
        `;
            projectList.appendChild(projectDiv);
        });
    }
}

function renderProjType(currProj) {
    let projectType = ''

    switch (currProj.type) {
        case 'Collection':
            projectType = `<ion-icon name="library-outline"></ion-icon> Collection`
            break;
        case 'Web Application':
            projectType = `<ion-icon name="laptop-outline"></ion-icon> Web Application`
            break
        case 'Game':
            projectType = `<ion-icon name="game-controller-outline"></ion-icon> Game`
            break
    }

    return projectType
}