var xpos=50;
var ypos=50;
var xspeed=6
var yspeed=6


function setup() {
	createCanvas(700, 650);
	background(0);
	// body...
}

function draw() {
	fill(255)
	ellipse(xpos, ypos, 20, 20);
	xpos += xspeed;

	if (xpos >= width) {
		xspeed *= -1;
	}
	else if (xpos <= 0) {
		xspeed *= -1;
	}	
	ypos += yspeed;

	if(ypos >= height){
		yspeed *= -1; 
	}
	else if(ypos <=0){
		yspeed *= -1;
	}
}