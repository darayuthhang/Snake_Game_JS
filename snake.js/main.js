
let canvas, ctx;

window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	//check for collision
	let snake = new Game(ctx);
	snake.start();

	document.addEventListener("keydown", keypress);

	function keypress(key) {
		switch (key.keyCode) {
			case 39:
				//RIGHT
				snake.Direction(1,0);
				break;
			case 37:
				//LEFT
				snake.Direction(-1,0);
				break;
			case 40:
				//BOTTOM
				snake.Direction(0,1);
				break;
			case 38:
				//TOP
				snake.Direction(0,-1);
				break;
		}
	}
	


}
