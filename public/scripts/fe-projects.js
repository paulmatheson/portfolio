const projList = [
    {
        'id': 0,
        'title': 'FAQ Accordion Card',
        'description': '',
        'url': 'https://github.com/paulmatheson/frontend-mentor/tree/main/faq-accordion-card-main',
        'tech': 'HTML, CSS, ',
        'img': 'https://raw.githubusercontent.com/paulmatheson/frontend-mentor/main/faq-accordion-card-main/images/Screenshot.png'
    },
    {
        'id': 1,
        'title': 'Article Preview Component',
        'description': '',
        'url': '',
        'tech': 'HTML, CSS, ',
        'img': ''
    }
]

let projName = document.getElementById('fe-project-name')
let preview = document.getElementById('fe-preview')
let projListDisplay = document.getElementById('fe-project-list')

// assign area of work to a variable
// create buttons within this area related to the projList array
// populate each with the name.. ID should be the btn-${arr.id} or something
// add an event listener to each button with the below function

/* Populate area with these... 
<li><button id="fe-btn-0">Item</button></li>
*/

for (let i = 0; i < projList.length && i <= 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = `<a class="projBtn" id="${projList[i].id}">Item ${projList[i].title}</a>`
    projListDisplay.appendChild(li)
}

document.querySelectorAll('.projBtn').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target)
        displayContent(event.target)
    })
})

function displayContent(element) {

    let lastLetter = element.id.charAt(element.id.length - 1)

    console.log(projList[lastLetter])

    projName.textContent = projList[lastLetter].title
    preview.style.backgroundImage = projList.img

}