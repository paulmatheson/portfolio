import projList from './feProjectData.js'

const feProjectList = document.getElementById('fe-project-list')
const listIcon = document.getElementById('list-view')
const gridIcon = document.getElementById('grid-view')
const feHeader = document.getElementById('fe-header')

for (let i = 0; i < projList.length && i < 10; i++) {
    const li = document.createElement('li')
    li.className = 'proj-li'
    li.id = `${projList[i].id}`
    li.innerHTML = `
        <span>${projList[i].title}</span>
        <a class="fe-link" href="${projList[i].gh}" target="_blank">GitHub <ion-icon name="open-outline"></ion-icon></a>
        <a class="fe-link" href="${projList[i].liveurl}" target="_blank">Live Link <ion-icon name="open-outline"></ion-icon></a>
    `
    feProjectList.appendChild(li)
}

listIcon.addEventListener('click', () => {
    const allLi = feProjectList.querySelectorAll('li')
    allLi.forEach(li => li.classList.remove('proj-li-card'))
    feProjectList.classList.add('fe-project-list')
    feProjectList.classList.remove('project-cards')
    listIcon.classList.add('icon-selected')
    gridIcon.classList.remove('icon-selected')
    feHeader.style.display = 'grid'

})

gridIcon.addEventListener('click', () => {
    feProjectList.classList.remove('fe-project-list')
    feProjectList.classList.add('project-cards')
    gridIcon.classList.add('icon-selected')
    listIcon.classList.remove('icon-selected')
    feHeader.style.display = 'none'
    const allLi = feProjectList.querySelectorAll('li')
    allLi.forEach(li => li.classList.add('proj-li-card'))
})

/*
function feDisplaySwitch() {
    //
}
*/