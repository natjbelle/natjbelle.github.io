let shapes = [];
let osc;
let currentMessage = "Move your mouse and click to interact!";
let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  osc = new p5.Oscillator('triangle');
  osc.start();
  osc.amp(0);
  generateShapes();
}

function draw() {
  background(20);
  displayShapes();
  displayText();
}

function generateShapes() {
  for (let i = 0; i < 10; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      angle: random(0, 360),
      color: random(colors),
    });
  }
}

function displayShapes() {
  for (let shape of shapes) {
    push();
    translate(shape.x, shape.y);
    rotate(shape.angle + frameCount / 2);
    fill(shape.color);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, shape.size, shape.size);
    pop();
  }
}

function displayText() {
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(currentMessage, width / 2, height - 30);
}

function mousePressed() {
  currentMessage = "You clicked! Shapes are changing.";
  osc.freq(random(200, 800));
  osc.amp(0.5, 0.1);

  for (let shape of shapes) {
    shape.color = random(colors);
    shape.size = random(30, 100);
  }
}

function mouseReleased() {
  osc.amp(0, 0.5);
  currentMessage = "Move your mouse and click to interact!";
}

function mouseMoved() {
  let freq = map(mouseX, 0, width, 100, 500);
  let amp = map(mouseY, 0, height, 0.1, 0.5);
  osc.freq(freq);
  osc.amp(amp, 0.05);
}
