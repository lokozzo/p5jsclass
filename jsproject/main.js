function setup() {
	createCanvas(width, height);
}
function draw(){
	background(r, g, b);
	fill(r, g, b);
	ellipse(x, y, width, height);
	rect(x, y, width, height);
	triangle(30, 30, 20, 40, 21);
}