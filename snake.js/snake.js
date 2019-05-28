
class Game{
	constructor(ctx){
		this.ctx = ctx;
		this.snakE = [{sx: 9, sy: 10}];
		this.scale = 32;
		this.init;
		this.foodX = Math.floor(Math.random() * 10);
		this.foodY = Math.floor(Math.random() * 10);
	}
	start(){
		let startGame = function(key){
			this.draw();
		}.bind(this);
		this.init =	 setInterval(startGame, 100);
	}
	draw(){
		//draw the canvas background with black color.
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, canvas.width, canvas.height);
		//draw the rectange this with red color.
		//loop through all the snake grid 
		//after the snake has eaten the food.
		for(let i = 0; i < this.snakE.length; i++){
			this.ctx.fillStyle = "red";
			this.ctx.fillRect(this.snakE[i].sx * this.scale, 
			this.snakE[i].sy * this.scale, 50, 50);
		}
		//call called function to draw the food
		this.drawFood();
		//check if the snake touch width and height of canvas
		// ßgame is over.
		this.constraint();
		
	}
	drawFood(){
		this.ctx.fillStyle = "violet";
		this.ctx.fillRect(this.foodX * this.scale, this.foodY * this.scale, 50, 50);
	}
	constraint() {
		if (this.snakE[0].sy == -1 || this.snakE[0].x == -1) {
			clearInterval(this.init);
		} else if (this.snakE[0].sy == 19 || this.snakE[0].sx == 21) {
			clearInterval(this.init);
		}
	}
	createNewFood(){
			this.foodX = Math.floor(Math.random() * 10);
			this.foodY = Math.floor(Math.random() * 10);
	}
	collision(newHead){
		for(let i = 1 ;i<this.snakE.length; i++){
			if(newHead.sx == this.snakE[i].sx && this.snakE[i].sy == newHead.sy ){
				clearInterval(this.init);
				return true;
			}
		}
		return false;
	}
	Direction(dirX, dirY){
		//control the direction of 
		//the key code.
		this.snakE[0].sx += dirX;
		this.snakE[0].sy += dirY;
		//store the old head value into X
		//and y 
		let x = this.snakE[0].sx;
		let y = this.snakE[0].sy;
		//create the newHead 
		let newHead = {
			sx: x,
			sy: y,
		}
		//check if the snake eat the food then create new foods.
		if (this.snakE[0].sx == this.foodX && this.snakE[0].sy == this.foodY) {
			this.createNewFood();
		}else{
			this.snakE.pop();
		}
		//call the called function collision to check
		//for colllison.
		this.collision(newHead);
		//add the food to the first array if 
		//the snake has eaten the food	
		this.snakE.unshift(newHead);
	}

	
}









