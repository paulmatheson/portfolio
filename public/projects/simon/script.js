//// BUGS ////

//// TO DO ////
// create a certain amount of time where the player must play or else the sequence replays
// increase speed as levels increase
// time limit on turns

var simonSeq = [];
var userSeq = [];
const AMT_TO_WIN = 20;
var buttonRef = ['green', 'red', 'blue', 'yellow'];
var id, color, level = 0;
var simonSequenceTime;
var onStatus = false;
var strictStatus = false;
var boardSound = [
	'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 
	'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 
	'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 
	'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
	'error-sound.wav',
];

// test // 
/* When implemented, this code will cause the turn to restart if the user doesn't press a button in a certain amt of time.

var turnInterval = setInterval(function() {
	
})
*/

$(document).ready(function() {
	$("#on-off").click(function() {
		if (onStatus == false) {
			onStatus = true;
			$('.count').css('opacity', "1");
			$('.start').removeClass("unclickable");
		} else {
			onStatus = false;
			resetGame();
		}
	})

	$('.strict').click(function() {
		if (onStatus == true && strictStatus == false) {
			strictStatus = true;
			$('.strict-light').css('background', '#df2033');
			console.log("Strict Mode: " + strictStatus)
		} else if (onStatus == true && strictStatus == true) {
			$('.strict-light').css('background', '#201314');
			strictStatus = false;
		}
	})
	
	$('.start').click(function() {
		if (onStatus == true && level == 0) {
			// flashes -- twice before game starts
			setTimeout(function() {
				$('.count').css('opacity', '0.2');
			}, 300);
			setTimeout(function() {
				$('.count').css('opacity', '1');
			}, 600);
			setTimeout(function() {
				$('.count').css('opacity', '0.2');
			}, 900);
			setTimeout(function() {
				$('.count').css('opacity', '1');
			}, 1200);
			level++;
			getRandomNum();
			setTimeout(function() {
				simonSequence();
			}, 800);
		}
	})	

	$('.game-btn').click(function() {
		if ($(this).hasClass("clickable")) {
			id = $(this).attr("id");
			color = buttonRef[id];
			userSeq.push(id);
			//console.log(id + " " + color);
			buttonFX(id, color);
			playSound(id);

			// checks if choice is correct
			// if not, display error (and redo)
			// if correct, push 'this' to userSeq
			if (!checkUserSequence()) {
				if (strictStatus == true) {
					console.log("Wrong and strict mode is on")
					displayError();
					removesClickable('.game-btn');
					userSeq = [];
					simonSeq = [];
					level = 1;
					getRandomNum();
					setTimeout(function() {
						simonSequence();
					}, 800)
				} else {
					displayError();
					removesClickable('.game-btn');
					userSeq = [];
					setTimeout(function() {
						simonSequence();
					}, 800)
				}
			} else {
				if (userSeq.length == AMT_TO_WIN) {
					gameWin();
				} else if (userSeq.length == simonSeq.length) {
					level++
					userSeq = [];
					removesClickable();
					getRandomNum();
					simonSequence();
				}			
			}
		}
	})
});

// resets the state of game
function resetGame() {
	removesClickable('.game-btn');
	simonSeq = [];
	userSeq = [];
	level = 0;
	strictStatus = false;
	$('.strict-light').css('background', '#201314');
	$('.count').text("--");
	$('.count').css('opacity', '0.1');
}

// adds the clickable class
function makesClickable(x) {
	$(x).removeClass('unclickable');
	$(x).addClass('clickable');
}

// removes the clickable class
function removesClickable(x) {
	$(x).removeClass('clickable');
	$(x).addClass('unclickable');
}

// Checks if current user move is the correct move
function checkUserSequence() {
	for (var i = 0; i < userSeq.length; i++) {
		if (userSeq[i] != simonSeq[i]) {
			return false;
		}
	}
	return true;
}

// pushes error to the display
// .count = the text span within the display
function displayError() {
	setTimeout(function() {
		playSound(4);
		$('.count').text("!!");
	}, 400)
	
	setTimeout(function() {
			$('.count').css('opacity', '0.2');
		}, 250);
		setTimeout(function() {
			$('.count').css('opacity', '1');
		}, 500);
		setTimeout(function() {
			$('.count').css('opacity', '0.2');
		}, 750);
		setTimeout(function() {
			$('.count').css('opacity', '1');
		}, 1000);
}

// generates the Simon sequence
function simonSequence() {
	removesClickable('.game-btn');
	simonSequenceTime = 1500 + (1000 * (simonSeq.length));
	
	setTimeout(function() {
		$(".count").text(level);
	}, 800)

	// waits to show sequence
	setTimeout(function() {
		var i = 0;
		// plays simonSeq one by one at 1000ms interval
		var myInterval = setInterval(function() {
			
			id = simonSeq[i];
			color = buttonRef[id];
			buttonFX(id, color);
			playSound(id);
			i++

			if (i == simonSeq.length) {
				i = 0;
				clearInterval(myInterval);
			}

		}, 1000);
	}, 1000)

	setTimeout(function() {
		makesClickable('.game-btn');
	}, simonSequenceTime)
}

// function to grab and push random number to Simonseq arr
function getRandomNum() {
	var random = Math.floor(Math.random()*4);
	simonSeq.push(random);
}

// function for if player wins
function gameWin() {
	removesClickable('.game-btn');
	simonSeq = [];
	userSeq = [];
	level = 0;
	var v = 1;
	var id = 0;
	var winSound = new Audio('win_sound.wav')
	var yaySound = new Audio('yay_win.wav')

	setTimeout(function() {

		$(".count").text("WIN");

		setTimeout(function() {
			winSound.play();
		}, 80)
		setTimeout(function() {
			yaySound.play();
		}, 1200);

		setTimeout(function() {
			setInterval(function() {
				$(".count").css('opacity', "1");
			}, 300)

			setInterval(function() {
				$(".count").css('opacity', "0.2");
			}, 600)
		}, 2000)

		var flashButtons = setInterval(function() {
			buttonFX(id, buttonRef[id]);
			id++;
			if (id > 3) {
				clearInterval(flashButtons);
				setTimeout(function() {
					for (var i = 0; i <= buttonRef.length; i++) {
						buttonFX(i, buttonRef[i]);
					}
					setTimeout(function() {
						for (var i = 0; i <= buttonRef.length; i++) {
							buttonFX(i, buttonRef[i]);
						}
					}, 400)
				}, 400)
			}
		}, 250);
	}, 1000)
	
}

function buttonFX(id, color) {
	$("#" + id).removeClass(color);
	$("#" + id).addClass(color + "-highlight");
	setTimeout(function() {
		$("#" + id).addClass(color);
		$("#" + id).removeClass(color + "-highlight");
	}, 250);
}

function playSound(id) {
	var sound = new Audio(boardSound[id]); 
	sound.play();
}