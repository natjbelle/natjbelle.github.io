// Exercise 5: Natalie Annabelle 

// This animated composition uses an array of shapes that move across the canvas, 
//changing color when they bounce off the edges. 

let shapes = []; // Array to store shape objects
let numShapes = 50; // Number of shapes

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numShapes; i++) {
    shapes.push(new Shape(random(width), random(height))); // Add shape objects to the array
  }
}

function draw() {
  background(255); // Clear the background with white
  for (let shape of shapes) {
    shape.update(); // Update each shape's position and color
    shape.display(); // Draw the shape
  }
}

// Shape class to define properties and methods for shapes
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
    this.color = color(random(255), random(255), random(255)); // Random initial color
    this.speed = createVector(random(-2, 2), random(-2, 2)); // Random speed
  }

  update() {
    this.x += this.speed.x; // Update position based on speed
    this.y += this.speed.y;

    // Bounce off edges of the canvas
    if (this.x < 0 || this.x > width) {
      this.speed.x *= -1; // Reverse direction
      this.color = color(random(255), random(255), random(255)); // Change color on bounce
    }
    if (this.y < 0 || this.y > height) {
      this.speed.y *= -1; // Reverse direction
      this.color = color(random(255), random(255), random(255)); // Change color on bounce
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size); // Draw the shape
  }
}
