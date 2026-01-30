// Adam's version
// runs once at the beginning
function setup() {
  createCanvas(960, 960);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(960, 960);
}

// runs continuously - main render loop
function draw() {
  background(0);

  // small stars
  fill(255);
  noStroke();

  // stars in the upper area
  circle(100, 200, 3);
  circle(300, 400, 4);
  circle(500, 150, 2);
  circle(700, 250, 3);
  circle(900, 350, 4);

  // stars in the bottom area
  circle(100, 700, 3);
  circle(300, 800, 4);
  circle(500, 750, 2);
  circle(700, 850, 3);
  circle(900, 780, 4);

  //orbit rings
  stroke(255, 255, 255, 50);
  strokeWeight(1);
  noFill();

  circle(480, 480, 710); // green planet


  //sun
  fill(255, 252, 158);
  stroke("yellow");
  circle(480, 480, 110); //suns center

  // sun rays
  stroke(255, 252, 158);
  strokeWeight(5);
  

  // horizontal and vertical rays
  line(480, 410, 480, 360); // vertical above the sun
  line(480, 550, 480, 600); // vertical below the sun
  line(410, 480, 355, 480); // left horizontal
  line(550, 480, 610, 480); // right horizontal

  // diagonal rays
  line(430, 430, 390, 390); // top-left diagonal ray
  line(530, 430, 570, 390); // top-right diagonal ray
  line(430, 530, 390, 570); // bottom-left diagonal ray
  line(530, 530, 570, 570); // bottom-right diagonal ray

  //green planet
  push();
  theta = (frameCount * 0.01) % 360; // gets the remainder of the current frame count
  radius = 710/2;
  x = radius * cos(theta);
  y = radius * sin(theta);
  print(x);
  print(y);
  translate(x, y);

  fill(100, 223, 223);
  stroke("teal");
  circle(480, 480, 50);
  pop();
}