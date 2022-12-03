let ax = 0.0;
let vx = 0;
let x;
let ay = 0.0;
let vy = 0;
let y;
let w, h;
w = 400;
h = 400;
let d = 50;
let r = d / 2;

function setup() {
	createCanvas(w, h);
	background("#fff");

	x = random(r, w - r);
	y = random(r, h - r);
}

function draw() {
	background("black");
	fill("#fff");
	strokeWeight(3);
	circle(x, y, d);

	vx = vx + ax;
	x = x + vx;

	vy = vy + ay;
	y = y + ay;

	if (x >= w + r) {
		x = -r;
	} else if (x <= -r) {
		x = w + r;
	}

	if (y >= h + r) {
		y = -r;
	} else if (y <= -r) {
		y = h + r;
	}
}
