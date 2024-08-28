import projList from './feProjectData.js'

let projListDisplay = document.getElementById('fe-project-list')

for (let i = 0; i < projList.length && i <= 10; i++) {
    const li = document.createElement('li')
    li.className = 'proj-li'
    li.id = `${projList[i].id}`
    li.innerHTML = `
        <span>${projList[i].title}</span>
        <a class="fe-link" href="${projList[i].gh}" target="_blank">GitHub <ion-icon name="open-outline"></ion-icon></a>
        <a class="fe-link" href="${projList[i].liveurl}" target="_blank">Live Link <ion-icon name="open-outline"></ion-icon></a>
    `
    projListDisplay.appendChild(li)
}

/*
function feDisplaySwitch() {
    //
}
*/