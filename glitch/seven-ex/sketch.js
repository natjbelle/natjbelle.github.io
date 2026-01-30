// Exercise 7: Natalie Annabelle

// This interactive sketch lets the user create a dynamic starry sky with a moon that follows their mouse. 
// By moving the mouse, the user can adjust the maximum distance for star connections, creating unique constellations. 
// Clicking the canvas reconfigures the stars' positions for a fresh arrangement.


let stars = [];
let starImage, moonImage;
let currentMessage = "Move your mouse to draw constellations!";
let maxDistance = 100;

function preload() {
  starImage = loadImage('glitch-assets/star.png'); // Replace with a star image URL
  moonImage = loadImage('glitch-assets/moon.png'); // Replace with a moon image URL
}

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 50; i++) {
    stars.push(createStar(random(width), random(height)));
  }
}

function draw() {
  background(0);
  displayStars();
  displayMoon();
  displayText();
}

function createStar(x, y) {
  return { x: x, y: y, size: random(20, 40) };
}

function displayStars() {
  for (let i = 0; i < stars.length; i++) {
    imageMode(CENTER);
    image(starImage, stars[i].x, stars[i].y, stars[i].size, stars[i].size);

    for (let j = i + 1; j < stars.length; j++) {
      let distance = dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      if (distance < maxDistance) {
        stroke(255, 150);
        line(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      }
    }
  }
}

function displayMoon() {
  imageMode(CENTER);
  image(moonImage, mouseX, mouseY, 60, 60); // Moon follows the mouse
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
