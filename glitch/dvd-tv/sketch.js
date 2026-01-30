// Exercise 5: Sandra Ingram
// This Sketch creates a dynamic display of the retro DVD logo moving around the canvas.
// The canvas looks like a retro TV model, with a knob to change the brightness of the TV screen.

let img = []; 
let names = [
  "glitch-assets/dvd-blue.png",
  "glitch-assets/dvd-green.png",
  "glitch-assets/dvd-red.png"
];

let x = 100; 
let y = 100;
let dx = 2; 
let dy = 2;
let w = 100; 
let h = 50;
let color;

let volume = 0;  // Volume level (range 0 to 255)
let knobX, knobY, knobRadius;

function preload(){
  for (let i = 0; i < names.length; i++) {
    img[i] = loadImage(names[i]); // Load the images for the DVD logo
  }
}

function setup() {
  createCanvas(600, 400); // Set canvas size
  color = floor(random(0, names.length)); // Start with a random color

  // Define the position and radius for the volume control knob
  knobX = width / 2;
  knobY = height - 50;
  knobRadius = 30;
}

function draw() {
  // Draw the brown background outside the TV screen
  background(100,149,237); // Brown color for the area outside the TV

  // Draw the retro TV screen with a frame
  drawRetroTVScreen();

  // Draw the animated DVD logo inside the TV screen
  image(img[color], x, y, w, h); 

  // Move the DVD logo
  x += dx;
  y += dy;

  // Handle edge collisions (bouncing off the screen)
  edgeHandling();

  // Draw the volume control knob
  drawVolumeKnob();

  // Simulate screen brightness based on volume
  fill(255, volume); // Adjust brightness based on volume
  rect(60, 60, width - 120, height - 120); // Simulated screen brightness effect
}

// Function to draw the retro TV screen (with frame)
function drawRetroTVScreen() {
  fill(105,105,105); // Light brown color for the frame (wooden TV look)
  stroke(105,105,105); // Darker brown border for the frame
  strokeWeight(5);
  rect(50, 50, width - 100, height - 100, 20); // Rounded corners for the TV frame

  // TV screen area (black rectangle representing the display)
  fill(0); // Black background inside the TV
  noStroke();
  rect(60, 60, width - 120, height - 120); // TV screen area (slightly inset)
}

// Function for handling the bouncing of the DVD logo
function edgeHandling() {
  // Check horizontal collision (left and right edges)
  if (x <= 60 || x + w >= width - 60) {
    dx = dx * -1; // Reverse direction
    color = floor(random(0, names.length)); // Change DVD logo color
  }

  // Check vertical collision (top and bottom edges)
  if (y <= 60 || y + h >= height - 60) {
    dy = dy * -1; // Reverse direction
    color = floor(random(0, names.length)); // Change DVD logo color
  }
}

// Function to draw the volume control knob
function drawVolumeKnob() {
  // Draw the knob's circular base
//fill(200, 150, 80); // Retro wood color for the knob
//noStroke();
//ellipse(knobX, knobY, knobRadius * 2, knobRadius * 2); // Draw the knob
  
  // Draw a smaller circle inside to simulate the button press
  // fill(100, 60, 30); // Darker brown for the inner circle
  // ellipse(knobX, knobY, knobRadius, knobRadius);
 
// Check if the mouse is pressed over the knob
// if (mouseIsPressed && dist(mouseX, mouseY, knobX, knobY) < knobRadius) {
// Change the volume based on vertical mouse position
// volume = constrain(map(mouseY, height - 100, height - 10, 0, 255), 0, 255);
//  }
}
