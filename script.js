import projects from './projects.js';

const projectCards = document.querySelectorAll("article");

projectCards.forEach((project, index) => {
    project.innerHTML = `
        <h3>${projects[index].title}</h3>
        <p>${projects[index].description}</p>
        <a href="${projects[index].link}">View project</a>
        <!-- Additional HTML for other project fields -->
    `;
});
