// Group 1: (Stefania, Vivian, Sam, Paige Fitzpatrick)

let markerWidth = 100;
let markerHeight = markerWidth / 20;

// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// runs continuously - main render loop
function draw() {
  background(0);

  //head - Paige
  circle(width/2, height/4, 100);
  push();
  fill("white");
  circle(width/2.05, height/4.5, 20);
  circle(width/1.95, height/4.5, 20);
  pop();

  //chest
  rect(width/2, height/2, 150, 170);
 
  
  //abdomen - Natalie
  push();
  fill('white');
  rect(230, 250, 30, 30, 4);
  rect(195, 250, 30, 30, 4);
  rect(195, 215, 30, 30, 4);
  rect(230, 215, 30, 30, 4);
  rect(230, 285, 30, 30, 4);
  rect(195, 285, 30, 30, 4);
  pop();
  
  //limbs
  //legs and feet - stefania
  rect(width/1.8, 430, 20, 100);
  rect(width/2.3, 430, 20, 100);
  ellipse(width/2.4, 480, 40, 20);
  ellipse(width/1.75, 480, 40, 20);
  
  //Arms - sam
  push();
  rotate(radians(45));
  ellipse(width/1.6, height/9, 150, 20);
  rotate(radians(-80));
  ellipse(width/4, 500, 150, 20);
  pop();
 
  //body markers
  noStroke();
  fill("gray");
  rectMode(CENTER);
  rect(width / 2, height / 4, markerWidth, markerHeight);
  rect(width / 2, height / 2, markerWidth * 2, markerHeight);
  rect(width / 2, (height * 3) / 4, markerWidth * 3, markerHeight);
}
