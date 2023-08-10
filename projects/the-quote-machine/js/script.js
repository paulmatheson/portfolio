var quotes = [
	['The creation of a single world comes from a huge number of fragments and chaos.', '- Hayao Miyazaki'], 
	['In spite of everything, I still believe people are really good at heart.', '- Anne Frank'],
	['In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.”', '- Friedrich Nietzsche'],
	['If you love a flower, don’t pick it up. Because if you pick it up it dies and it ceases to be what you love. So if you love a flower, let it be. Love is not about possession. Love is about appreciation.', '- Osho'],
	['What is better? To be born good or to overcome your evil nature through great effort?', '- Paarthurnax'],
	['War is where the young and stupid are tricked by the old and bitter into killing eachother.', '- Niko Belic'],
	['If you\'re good at something, never do it for free.', '- Heath Ledger as the Joker in The Dark Knight'],
	['You can get help from teachers, but you are going to have to learn a lot by yourself, sitting alone in a room', '- Dr. Seuss'],
	['I saw the angel in the marble and carved until I set him free.', '- Michelangelo'],
	['One cannot be creative without learning what others know, but then one cannot be creative without becoming dissatisfied with that knowledge and rejecting it (or some of it) for a better way.', '- Mihaly Csikszentmihalyi'],
	['Nothing will work unless you do', '- Maya Angelou'],
	['Travel doesn\'t become adventure until you leave yourself behind', '- Marty Rubin'],
	['Laughter is the sun that drives winter from the human face.', '- Victor Hugo'],
	['Too many of us are not living our dreams because we are living our fears.', '- Les Brown'],
	['No one can make you feel inferior without your consent.', '- Eleanor Roosevelt'],
	['Sucess is not final, failure is not fatal: it is the courage to continue that counts.', '- Winston Churchill'],
	['There is only one thing that makes a dream impossible to achieve: the fear of failure.', '- Paulo Coelho'],
	['Life contains but two tragedies. One is not to get your heart’s desire; the other is to get it.', '― Socrates'],
	['The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. He to whom this emotion is a stranger, who can no longer pause wondering and stand rapt in awe is as good as dead. His eyes are closed.', '- Einstein'],
	['You must do the thing you think you cannot do.', '- Eleanor Roosevelt'],
	['We must accept finite disappointment, but never lose infinite hope.', '- Martin Luther King Jr.'],
	['I believe in a future where the point of education is not to prepare you for another useless job, but for a life well lived.', '– Rutger Bregman'],
	['One cannot think well, love well, sleep well, if one has not dined well.', '- Charles M. Shulz'],
	['Success is the sum of small efforts, repeated day-in and day-out.', '- Robert Collier'],
	['Courage is not the absence of fear, but rather the judgement that something else is more important than fear.', '— Ambrose Redmoon'],
	['Whenever you find yourself on the side of the majority, it is time to pause and reflect.', '- Mark Twain'],
	['Men willingly believe what they wish.', '- Julius Caesar'],
	['Always be yourself, express yourself, have faith in yourself. Do not go out and look for a successful personality and duplicate it.', '- Bruce Lee'],
	['Don\'t get so busy making a living that you forget to make a life.', '- Dolly Parton'],
	['If I had asked people what they wanted, they would have said faster horses.', '― Henry Ford'],
	['I\'d rather be hated for who I am, than be loved for who I am not.', '- Kurt Cobain'],
	['They tried to bury us. They didn’t know we were seeds.', '- Mexican Proverb'],
	['We awaken in others the same attitude of mind we hold toward them.', '- Elbert Hubbard'],
	['We live in a world where there is more and more information, and less and less meaning.', '- Jean Baudrillard'],
	['It is far better to be alone, than to be in bad company', '- George Washington'],
	['Do what you can, with what you have, where you are.', '- Theodore Roosevelt'],
	['It is no measure of health to be well adjusted to a profoundly sick society.', '- Jiddu Krishnamurti-'],
	['I tell you, we are here on Earth to fart around, and don\'t let anybody tell you different.', '- Kurt Vonnegut'],
	['I can\'t believe what you say, because I see what you do.', '— James Baldwin'],
	['Everyone is entitled to his own opinion, but not to his own facts.', '― Daniel Patrick Moynihan'],
	['Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.', '– Stephen King'],
	['The elevation of appearance over substance, of celebrity over character, of short term gains over lasting achievement displays a poverty of ambition. It distracts you from what\'s truly important.', '- Barack Obama'],
	['If you really want to do something, you do it. You don]\'t save it for a sound bite.', '- Liz Friedman'],
	['Attitude is a little thing that makes a big difference.', '- Winston Churchill'],
	['What a liberation to realize that the “voice in my head” is not who I am. Who am I then? The one who sees that.', '- Eckhart Tolle'],
	['I wasn’t insane until someone touched my heart.', '- Edgar Allan Poe'],
	['Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.', '- Rumi'],
	['Intelligence without ambition is a bird without wings.', '- Salvador Dali'],
	['If you don\'t know where you\'re going, any road will take you there.', '- Lewis Carroll'],
	['We must all make a choice between what is right, and what is easy', '- JK Rowling'],
	['Time you enjoy wasting is not wasted time.', '- John Lennon'],
	['Everything can be taken from a man but one thing: the last of the human freedoms—to choose one\’s attitude in any given set of circumstances, to choose one\’s own way.', '- Viktor Frankl'],
	['Forgive yourself for not knowing what you didn\’t know before you learned it.', '– Maya Angelou'],
	['Sometimes you won\'t ever know the value of a moment until it becomes a memory.', '- Dr. Seuss' ],
	['No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn\’t trying.', 'Tony Robbins']
];

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

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomNumber = Math.floor(Math.random() * (colors.length));
	var newColor = colors[randomNumber];

	document.body.style.backgroundColor = newColor;

	$('#quote').fadeOut(500,function(){
		$(this).css('color', newColor).fadeIn(500,function(){});
    	$(this).html(quotes[randomNumber][0]).fadeIn();  
    });
    $('#quote-xs').fadeOut(500,function(){
		$(this).css('color', newColor).fadeIn(500,function(){});
    	$(this).html(quotes[randomNumber][0]).fadeIn();  
    });
	$('#author').fadeOut(500,function(){
		$(this).css('color', newColor).fadeIn(500,function(){});
    	$(this).html(quotes[randomNumber][1]).fadeIn();  
    });
    $('#author-xs').fadeOut(500,function(){
		$(this).css('color', newColor).fadeIn(500,function(){});
    	$(this).html(quotes[randomNumber][1]).fadeIn();  
    });
    $('button').fadeOut(500,function(){
    	$(this).css('backgroundColor', newColor).fadeIn(500,function(){});
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

$('.tweet').click(function() {
  var currQuote = $('#quote').text();
  var currAuthor = $('#author').text();
  var truncatedString = truncateString(currQuote, currAuthor);
  tweet(truncatedString, currAuthor);
});
