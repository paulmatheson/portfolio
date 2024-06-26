const projList = [
    {
        'id': 0,
        'title': 'FAQ Accordion Card',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/faq-accordion-card-main',
        'liveurl': '',
        'tech': 'HTML, CSS',
        'img': 'https://raw.githubusercontent.com/paulmatheson/frontend-mentor/main/faq-accordion-card-main/images/Screenshot.png'
    },
    {
        'id': 1,
        'title': 'Article Preview Component',
        'gh': '',
        'liveurl': '',
        'tech': 'HTML, CSS',
        'img': ''
    }
]

let projListDisplay = document.getElementById('fe-project-list')

for (let i = 0; i < projList.length && i <= 10; i++) {
    const li = document.createElement('li')
    li.className = 'projBtn'
    li.id = `${projList[i].id}`
    li.innerHTML = `
        <span>${projList[i].title}</span>
        <span>${projList[i].tech}</span>
        <a href="${projList[i].gh}" target="_blank">GitHub</a>
        <a href="${projList[i].liveurl}" target="_blank">Live Link</a>
    `
    projListDisplay.appendChild(li)
}

