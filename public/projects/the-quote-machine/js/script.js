var colors = ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841', '#EDC951', '#3FB8AF', '#7FC7AF', '#FF9E9D', '#C6A49A', '#99B898', '#2A363B', '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#B3CC57', '#FFBE40', '#CC0C39', '#E6781E', '#02AAB0'];

const apiUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const charLimit = 280 - 25 // Accounting for added formatting characters and default hashtag from url

function getData() {
	fetch(apiUrl)
		.then(response => {
			if (!response.ok) throw new Error('was not a valid response')
			return response.json()
		})
		.then(data => {
			newQuote('Ron Swanson', data)
			truncateString(data.content, data.author)
		})
		.catch(error => {
			console.error('Fetch error:', error);
		})
}

function newQuote(author, quote) {
	let randomNumber = Math.floor(Math.random() * (colors.length));
	let newColor = colors[randomNumber];

	document.body.style.backgroundColor = newColor;
	quote = `"${quote}"`

	$('#quote').fadeOut(500, function () {
		$(this).css('color', newColor).fadeIn(500, function () { });
		$(this).html(quote).fadeIn();
	});
	$('#author').fadeOut(500, function () {
		$(this).css('color', newColor).fadeIn(500, function () { });
		$(this).html(author).fadeIn();
	});
	$('button').fadeOut(500, function () {
		$(this).css('backgroundColor', newColor).fadeIn(500, function () { });
	})
};

function tweet(message, author) {
	window.open('https://twitter.com/intent/tweet?hashtags=thequotemachine&text=' + encodeURIComponent(`"${message}" - ${author} via`));
}

function truncateString(quote, author) {
	// Check if quote length is longer than Twitter charLimit
	if (quote.length + author.length > charLimit) {
		return quote.substr(0, (charLimit - author.length))
	}
	return quote
}

$('.tweet').click(function () {
	let currQuote = $('#quote').text().substr(1, $('#quote').text().length - 2) // To remove quotes
	let currAuthor = $('#author').text();
	let truncatedString = truncateString(currQuote, currAuthor);
	tweet(truncatedString, currAuthor);
});
