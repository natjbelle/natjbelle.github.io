//Exercise 3: Sydney Nham
/* My project demonstrates the contrast between night and day in a mountain terrain. Using your 
mouse, drag your cursor along the Y-axis to set the sun and reveal the moon. In addition of the
Y-positioning of your mouse, the project will turn night and day! */

let tx = 250;
let ty = 250;
let cloudx = 100;
let cloudy = 50;
let y = 0;
let move = 0.5;
let starx = 0;
let stary = 0;
let star = 7;
let shine = 170;
let snow = 100;
let fade = 5;

//setup
function setup() {
  createCanvas(500, 500);
}

function draw() {
  let x1 = tx;
  let y1 = ty;
  let x2 = tx + 150;
  let y2 = ty + 250;
  let x3 = tx - 150;
  let y3 = ty + 250;
  let night = map(mouseY, 0, height, 0, 1);
  background(255 - night * 140, 220 - night * 122, 213 - night * 63);

  //moon
  noStroke();
  fill(227, 248, 255);
  circle(250, y - 400, 120);
  fill(255 - night * 140, 220 - night * 122, 213 - night * 63);
  circle(290, y - 400, 120);
  //sun&moon movement
  y = y + (mouseY - y) * 0.1;

  //stars
  push();
  noStroke();
  translate(50, 50);
  fill(255, 238, 213, shine);
  rotate(radians(45));
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(20, 5);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(100, 100);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(20, 150);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(80, 200);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(170, 160);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(150, 20);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(180, 80);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(300, 50);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(270, 110);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(350, 150);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(400, 20);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(480, 5);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(430, 90);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(390, 250);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  push();
  noStroke();
  translate(470, 200);
  rotate(radians(45));
  fill(255, 238, 213, shine);
  rect(starx, stary, star);
  pop();

  //sun
  noStroke();
  fill(255, 220, 133);
  circle(250, y, 120);

  //cloud
  noStroke();
  fill(255);
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx, cloudy + 20, 100, 50);
  ellipse(cloudx + 50, cloudy + 20, 80, 50);
  ellipse(cloudx - 50, cloudy + 20, 80, 50);

  push();
  translate(300, 70);
  scale(1.2);
  noStroke();
  fill(255);
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx, cloudy + 20, 100, 50);
  ellipse(cloudx + 45, cloudy + 25, 70, 50);
  ellipse(cloudx - 60, cloudy + 20, 80, 55);
  pop();

  push();
  translate(140, 200);
  scale(0.8);
  noStroke();
  fill(255);
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx, cloudy + 20, 100, 50);
  ellipse(cloudx + 45, cloudy + 25, 70, 50);
  ellipse(cloudx - 60, cloudy + 20, 80, 55);
  pop();

  push();
  translate(-200, 100);
  scale(1.2);
  noStroke();
  fill(255);
  ellipse(cloudx, cloudy, 100, 50);
  ellipse(cloudx, cloudy + 20, 100, 50);
  ellipse(cloudx + 45, cloudy + 25, 70, 50);
  ellipse(cloudx - 60, cloudy + 20, 80, 55);
  pop();

  //cloud movement
  cloudx = cloudx + move;
  if (cloudx >= width || cloudx <= 0) {
    move = -move;
  }

  //moutain right
  push();
  translate(150, 50);
  noStroke();
  fill(214, 202, 227, 220);
  triangle(x1, y1, x2 + 100, y2, x3, y3);

  fill(179, 168, 191, 240);
  triangle(x1, y1, x2 + 100, y2, x3 * 2, y3);
  pop();

  //mountain left
  push();
  translate(-150, 40);
  noStroke();
  fill(214, 202, 227, 220);
  triangle(x1, y1, x2 + 50, y2, x3 - 100, y3);

  fill(179, 168, 191, 200);
  triangle(x1, y1, x2 + 50, y2, x3 + 20, y3);
  pop();

  //moutain middle
  noStroke();
  fill(214, 202, 227, 250);
  triangle(x1 + 10, y1 - 40, x2, y2, x3, y3);

  fill(179, 168, 191, 200);
  triangle(x1 + 10, y1 - 40, x2, y2, x3 * 2, y3);

  //snow caps
  fill(255, 255, 255, snow);
  triangle(x1 + 10, y1 - 40, x2 - 105, y2 - 219, x3 + 120, y3 - 219);
  triangle(x1 + 150, y1 + 50, x2 + 61, y2 - 140, x3 + 263, y3 - 140);
  triangle(x1 - 150, y1 + 40, x2 - 250, y2 - 150, x3 - 62, y3 - 150);

  if (mouseY > 150) {
    snow = snow + fade;
  } else {
    snow = snow - fade;
  }

  if (snow > 200) {
    snow = 200;
  }
}
