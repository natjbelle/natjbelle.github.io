// Motion with a conditional and logical operator 2
// In this sketch, the ball bounces up and down

let y = 150;
let dirY = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255); // white
  strokeWeight(2);
}

function draw() {
  background(64); // dark gray
  ellipse(width/2, y, 100, 100);
  
  // move 
  y = y + dirY;
  
  // here the || means 'or', as in:
  // if (a OR b) then run the code inside the if block 
  if (y > height - 50 || y < 50) { // Why 50?
    dirY = dirY * -1;
  }    
}
