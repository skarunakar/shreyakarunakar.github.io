var canvas = document.getElementById("game");

var ctx  = canvas.getContext('2d');


const 	GAME_WIDTH = 1000;
const   GAME_HEIGHT = 500;
const   SLIDER_START_POINT = 50;
const   SLIDER_END_POINT = 450;
var score = 0;
var life = 3;
var sliderPos = 400;



//  Classes
class Game {
	constructor(gamewidth,gameheight){
		this.gamewidth = gamewidth;
		this.gameheight = gameheight;
	}
	start(){
		this.stick =  new Stick(this);
		this.blackball = new Blackball(this);
		this.greenball = new Greenball(this);
		this.redball = new Redball(this);
		this.blueball = new Blueball(this)

		var blackballs = [];
	


		this.gameObject = [
			this.blackball ,
			this.greenball,
			this.redball,
			this.blueball,
			this.stick,
			
		];


		new InputHandler(this.stick);

	}
	draw(c){
	
		this.gameObject.forEach(object => object.draw(c));	
		

	}
	update(change){
	
		this.gameObject.forEach(object => object.update(change));	
	
	}
}


class Blackball{
	constructor(game){
	this.image = document.getElementById('blackball')
	 //add code here
	}

	draw(c){

	 //add code here
		
	}

	update(){
		// add code here
	}

}


// Greeen ball


class Greenball{
	constructor(game){
	  //add code here
	}

	draw(c){

	// add code here
		
	}

	update(){
		

       //add code here		

	}
}



class Redball{
	constructor(game){
	   //add code here
	}

	draw(c){

		//add code here
		
	}

	update(){
        //add code here		

	}
}
// blue ball

class Blueball{
	constructor(game){
	    //add code here 
	}

	draw(c){

		//add code here
		
	}

	update(){
		
	 //add code here

	}
}


class Stick{
    constructor(game){
    	ctx.moveTo(50,50);
		ctx.lineTo(50,450);
		ctx.stroke();
	 	ctx.beginPath();
		ctx.fillRect(30, sliderPos, 40, 10);
		ctx.stroke();
	}
	
	moveUp(){
		this.drawLine();
		ctx.beginPath();
		sliderPos = sliderPos === SLIDER_START_POINT ? sliderPos : sliderPos - 10;
		ctx.fillRect(30, sliderPos, 40, 10);
		ctx.stroke();

	}
	moveDown(){
		this.drawLine();
		ctx.beginPath();
		sliderPos = sliderPos === SLIDER_END_POINT ? sliderPos : sliderPos + 10;
		ctx.fillRect(30, sliderPos, 40, 10);
		ctx.stroke();
	}

    drawLine(){
    	ctx.clearRect(30,sliderPos,40,10);
		ctx.moveTo(50,50);
		ctx.lineTo(50,450);
		ctx.stroke();
	}
	update(change) {
		
      // add code here
	}
}

class InputHandler{
	constructor(stick){
	document.addEventListener('keyup', (event) =>{
	
		switch(event.keyCode){
			case 38:
				stick.moveUp();
				break;
			case 40:
				stick.moveDown();
				break;
		}
	});
	}
}

// Classes end

//  Raw code

var previous =0;

var game = new Game(GAME_WIDTH,GAME_HEIGHT);
game.start();

function gameLoop(position){
	var change = position - previous;
	previous = position;
	ctx.clearRect(0,0,innerWidth,innerHeight);
	
	game.draw(ctx);
	game.update(change);

	requestAnimationFrame(gameLoop);
}

//requestAnimationFrame(gameLoop);


