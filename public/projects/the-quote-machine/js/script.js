var colors = [
	'#00A0B0',
	'#6A4A3C',
	'#CC333F',
	'#EB6841',
	'#EDC951',
	'#3FB8AF',
	'#7FC7AF',
	'#FF9E9D',
	'#C6A49A',
	'#99B898',
	'#2A363B',
	'#F67280',
	'#C06C84',
	'#6C5B7B',
	'#355C7D',
	'#B3CC57',
	'#FFBE40',
	'#CC0C39',
	'#E6781E',
	'#02AAB0'
];

const apiUrl = 'https://api.quotable.io/random';

function getData() {
	fetch(apiUrl)
		.then(response => {
			if (!response.ok) throw new Error('was not a valid response')
			return response.json()
		})
		.then(data => {
			newQuote(data.author, data.content)
		})
		.catch(error => {
			console.error('Fetch error:', error);
		})
}

function newQuote(author, quote) {
	var randomNumber = Math.floor(Math.random() * (colors.length));
	var newColor = colors[randomNumber];

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
	window.open('https://twitter.com/intent/tweet?hashtags=thequotemachine&text=' + encodeURIComponent('"' + message + '" ' + author + " via"));
}

function truncateString(str, auth) {
	var shorterStr = [];
	var charCount = 0;
	strSplit = str.split(" ");

	if (str.length > (113 - auth.length)) {
		for (var i = 0; i < strSplit.length; i++) {
			if (charCount < (113 - auth.length)) {
				charCount += strSplit[i].length + 1;
				shorterStr.push(strSplit[i]);
			}
		}
		shorterStr.pop();
		return (shorterStr.join(" ") + "...");
	} else {
		return str;
	}
}

$('.tweet').click(function () {
	var currQuote = $('#quote').text();
	var currAuthor = $('#author').text();
	var truncatedString = truncateString(currQuote, currAuthor);
	tweet(truncatedString, currAuthor);
});
