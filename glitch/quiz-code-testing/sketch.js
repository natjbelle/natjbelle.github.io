function setup() {
  createCanvas(300, 300);
}

function draw() {
  ellipse(0, 0, 15, 15); // Ellipse A
  translate(100, 100);
  rect(0, 0, 50, 100); // Rectangle A
  rotate(radians(45));
  ellipse(0, 0, 30, 30); // Ellipse B
  rect(50, 40, 120, 80); // Rectangle B
}