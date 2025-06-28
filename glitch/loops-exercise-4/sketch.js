//Natalie Annabelle - Exercise 4

//This code creates a symmetrical composition of randomly colored and sized ellipses, 
//mirrored across the canvas. The user can click the mouse to generate a new set of 100 
//symmetrical elements, making each composition unique. The design incorporates randomness 
//in color, size, position and redraws only when the mouse is pressed for easy interactivity.

let numElements = 100; // Total number of elements
let elements = []; // Array to hold element properties

function setup() {
  createCanvas(600, 400);
  frameRate(10); // Slow down the sketch for better visualization
  generateElements(); // Generate elements on mouse press
}

function draw() {
  background(255); // Clear background
  drawSymmetricalComposition();
}

function mousePressed() {
  generateElements(); // Generate new elements on mouse press
}

function generateElements() {
  elements = []; // Reset elements array
  for (let i = 0; i < numElements; i++) {
    let x = random(width / 2); // Random x position for left side
    let y = random(height);
    let size = random(10, 30);
    let colorValue = color(random(255), random(255), random(255)); // Random color
    elements.push({ x: x, y: y, size: size, color: colorValue }); // Store properties
  }
}

function drawSymmetricalComposition() {
  // Draw left side elements
  for (let element of elements) {
    fill(element.color);
    ellipse(element.x, element.y, element.size);
  }
  
  // Draw mirrored right side elements
  for (let element of elements) {
    fill(element.color);
    ellipse(width - element.x, element.y, element.size);
  }
}