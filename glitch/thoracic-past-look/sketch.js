function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(240);
  
  // Draw houses near the top
  push();
  translate(0, 50);
  for (let i = 0; i < 8; i++) {
    house();
    translate(120, 0);
  }
  pop();
  
  // Draw cars below the houses
  push();
  translate(0, 200);
  for (let i = 0; i < 5; i++) {
    car();
    translate(150, 0);
  }
  pop();
  
  noLoop();
}

function house() {
  push();
  rectMode(CENTER);
  fill(150, 111, 51);
  rect(100, 100, 100, 100); // House body
  fill(100, 50, 20);
  triangle(50, 50, 100, 0, 150, 50); // Roof
  pop();
}

function car() {
  push();
  rectMode(CENTER);
  fill(255, 0, 100);
  rect(90, 50, 50, 20);
  rect(100, 70, 75, 20);
  fill(212, 242, 252);
  rect(105, 50, 15, 15);
  fill(0);
  ellipse(75, 80, 20, 20);
  ellipse(125, 80, 20, 20);
  pop();
}
