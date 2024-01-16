window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown", keyPush);
	setInterval(game,100/15);
}

xv=tv=0;
function game() {
}

function keyPush(evt) {
	switch(evt.keyCode) {
		
	}
}