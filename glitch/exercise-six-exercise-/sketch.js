// Exercise 6: Natalie Annabelle
// This code creates a dynamic star field where 5-point stars are 
// randomly positioned on a black background. The user can click anywhere 
// on the canvas to generate a new set of stars with random colors and locations, 
// offering an ever-changing visual experience.

let starColors = [];
let starPositions = [];
let starCount = 100; // Number of stars

function setup() {
  createCanvas(800, 800);
  noLoop();
  generateColorsAndPositions(); // Initial random colors and positions
}

function draw() {
  background(0); // Black background

  for (let i = 0; i < starCount; i++) {
    drawStarPattern(starPositions[i].x, starPositions[i].y, 40, 5, starColors[i]);
  }
}

function drawStarPattern(x, y, size, points, col) {
  push();
  translate(x, y);
  fill(col);
  stroke(255); // White stroke for visibility
  beginShape();
  for (let i = 0; i < points; i++) {
    let angle = map(i, 0, points, 0, TWO_PI);
    let xOuter = cos(angle) * size;
    let yOuter = sin(angle) * size;
    vertex(xOuter, yOuter);

    // Inner points for a star shape
    let halfAngle = angle + PI / points;
    let xInner = cos(halfAngle) * (size / 2);
    let yInner = sin(halfAngle) * (size / 2);
    vertex(xInner, yInner);
  }
  endShape(CLOSE);
  pop();
}

function mousePressed() {
  generateColorsAndPositions();
  redraw();
}

function generateColorsAndPositions() {
  starColors = [];
  starPositions = [];
  for (let i = 0; i < starCount; i++) {
    starColors.push(color(random(255), random(255), random(255))); // Random colors
    starPositions.push(createVector(random(width), random(height))); // Random positions
  }
}
