let stars = [];
let currentMessage = "Move your mouse to draw constellations!";
let maxDistance = 100;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 50; i++) {
    stars.push(createStar(random(width), random(height)));
  }
}

function draw() {
  background(0);
  displayStars();
  displayText();
}

function createStar(x, y) {
  return { x: x, y: y, size: random(5, 10) };
}

function displayStars() {
  for (let i = 0; i < stars.length; i++) {
    fill(255);
    noStroke();
    ellipse(stars[i].x, stars[i].y, stars[i].size);

    for (let j = i + 1; j < stars.length; j++) {
      let distance = dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      if (distance < maxDistance) {
        stroke(255, 150);
        line(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      }
    }
  }
}

function displayText() {
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(currentMessage, width / 2, height - 30);
}

function mousePressed() {
  currentMessage = "You clicked! Stars are reconfiguring.";
  for (let star of stars) {
    star.x = random(width);
    star.y = random(height);
  }
}

function mouseReleased() {
  currentMessage = "Move your mouse to draw constellations!";
}

function mouseMoved() {
  maxDistance = map(mouseX, 0, width, 50, 200);
}
