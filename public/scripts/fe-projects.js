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
        'title': 'Interactive Rating Component',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/interactive-rating-component-main',
        'liveurl': 'https://chimerical-squirrel-b4b80c.netlify.app/',
        'tech': 'HTML, CSS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/interactive-rating-component-main/images/screenshot.png'
    },
    {
        'id': 2,
        'title': 'Intro Component with Signup Form',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/intro-component-with-signup-form-master',
        'liveurl': 'https://symphonious-lokum-c3c12f.netlify.app/',
        'tech': 'HTML, CSS, JS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/intro-component-with-signup-form-master/images/screenshot.png'
    },
    {
        'id': 3,
        'title': 'Art Preview Card',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/nft-preview-card-component-main',
        'liveurl': 'https://lambent-souffle-b75842.netlify.app/',
        'tech': 'HTML, CSS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/nft-preview-card-component-main/images/screenshot.png'
    },
    {
        'id': 4,
        'title': 'Product Preview Card',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/product-preview-card-component-main',
        'liveurl': 'https://ubiquitous-boba-574667.netlify.app/',
        'tech': 'HTML, CSS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/product-preview-card-component-main/images/screenshot.png'
    },
    {
        'id': 5,
        'title': 'QR Component',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/qr-code-component-main',
        'liveurl': 'https://incandescent-dango-621f7d.netlify.app/',
        'tech': 'HTML, CSS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/qr-code-component-main/images/screenshot.png'
    },
    {
        'id': 6,
        'title': 'Results Summary Component',
        'gh': 'https://github.com/paulmatheson/frontend-mentor/tree/main/results-summary-component-main',
        'liveurl': 'https://sensational-selkie-35bd88.netlify.app/',
        'tech': 'HTML, CSS',
        'img': 'https://github.com/paulmatheson/frontend-mentor/raw/main/results-summary-component-main/assets/images/screenshot.png'
    }
]

let projListDisplay = document.getElementById('fe-project-list')

for (let i = 0; i < projList.length && i <= 10; i++) {
    const li = document.createElement('li')
    li.className = 'proj-li'
    li.id = `${projList[i].id}`
    li.innerHTML = `
        <span>${projList[i].title}</span>
        <a class="fe-link" href="${projList[i].gh}" target="_blank">GitHub</a>
        <a class="fe-link" href="${projList[i].liveurl}" target="_blank">Live Link</a>
    `
    projListDisplay.appendChild(li)
}

