var xpos = 50;
var ypos = 50;
var diameter = 20;
var xspeed = 5;
var yspeed = 5;

function setup() {
	createCanvas(800, 650);

	// body...
}
function draw() {
	background(0);

	fill(random(255), random(255), random(255));
	ellipse(xpos, ypos, diameter, diameter);
	
	 // Moving the ball randomly
	 xpos += xspeed;

	 if(xpos >= width || xpos <= 0) {
	 	xspeed *= -1;
	 }	
	

	ypos += yspeed;
	if(ypos >= height || ypos <= 0){
		yspeed *= -1;
	}

	if (xpos > width || xpos <= 0) {
		background(random(255));
	}
	if (ypos > height || ypos <= 0) {
		background(random(255), random(255), random(255));
	}
	else {
		background(4, 140, 60);
	}
}