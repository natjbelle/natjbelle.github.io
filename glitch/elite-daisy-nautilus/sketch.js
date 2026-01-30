// Exercise 6: Sol Tu
// This composition displays a pattern of identical cats, which were made with two custom functions: tabby(), which creates the cats themselves; and grid(), which aligns the cats into rows and animates them. Using the grid parameters, the user can adjust the number of stripes the cat has (min. 0 & max. 4), the colour of its stripes, spots, and ears (ginger or gray), the colour of its eyes (black, green, blue, yellow), and the number of spots it has on its face (min. 0 & max. 3).

let timer = 100;
let eyeColours = ["#000000", "#209413", "#1eb1eb", "#fff200"];
let secondaryColours = ["#dba97d", "#bdb8b5"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#8ed7ed");
  grid(3, 0, 0, 1); // STRIPES (0-3), STRIPE COLOURS (i0-1), EYE COLOURS (i0-3), # OF SPOTS (0-3)
  
  if (millis()/100 > timer) {
    redraw();
    millis() == 0;
  }
}

function grid(gStr, gStrI, gEI, gSpo) {
  translate(-40, -25);
  
  push();
  translate((-2000 + millis()/100)%width, 0);
  for (let e = 0; e < 100; e ++){
    tabby(gStr, gStrI, gEI, gSpo);
    translate(100, 0);
  }
  pop();
  
  translate(0, 100);
  push();
  translate((0 - millis()/100)%width, 0);
  for (let e = 0; e < 100; e ++){
    tabby(gStr, gStrI, gEI, gSpo);
    translate(100, 0);
  }
  pop();
  
  translate(0, 100);
  push();
  translate((-2000 + millis()/100)%width, 0);
  for (let e = 0; e < 100; e ++){
    tabby(gStr, gStrI, gEI, gSpo);
    translate(100, 0);
  }
  pop();
  
  translate(0, 100);
  push();
  translate((0 - millis()/100)%width, 0);
  for (let e = 0; e < 100; e ++){
    tabby(gStr, gStrI, gEI, gSpo);
    translate(100, 0);
  }
  pop();
  
  translate(0, 100);
  push();
  translate((-2000 + millis()/100)%width, 0);
  for (let e = 0; e < 100; e ++){
    tabby(gStr, gStrI, gEI, gSpo);
    translate(100, 0);
  }
  pop();
  
}

function tabby(stripes, stripeIn, eyeIn, spots) {
  push();
  // BASE
  strokeWeight(0.01);
  fill(secondaryColours[stripeIn]);
  triangle(76, 92, 73, 70, 93, 76); // LEFT EAR
  triangle(107, 76, 127, 70, 124, 92); // RIGHT EAR
  fill("#ffffff");
  circle(100, 100, 50); // HEAD

  // STRIPES
  push();
  let x = 91;
  let spacing = 7;
  
  if (stripes == 1) {
    translate(6, 0);
  }
  if (stripes == 2) {
    translate(3, 0);
  }
  if (stripes == 4) {
    translate(-3, 0);
  }
  
  if (stripes > 4){
    stripes = 4;
    translate(-3, 0);
  }

  for (let i = 0; i < stripes; i++) {
    fill(secondaryColours[stripeIn]);
    rect(x, 74, 5, 11, 3);
    x += spacing;
    // rect(98, 74, 5, 9, 3);
    // rect(105, 74, 5, 11, 3);
  }
  pop();
  
  // FACIAL FEATURES
  fill(secondaryColours[stripeIn]);
  // SPOTS
  if (spots == 1){
    ellipse(100, 110, 35, 30);
  }
  
  if (spots == 2){
    ellipse(85, 98, 18, 15);
    ellipse(114, 111, 16, 13);
  }
  
  if (spots == 3){
    ellipse(87, 92, 10, 7);
    ellipse(114, 92, 10, 7);
    ellipse(100, 113, 30, 25);
  }
  
  if (spots > 3){
    spots = 3;
  }
  
  // EYES
  fill(eyeColours[eyeIn]);
  strokeWeight(0.35);
  circle(87, 100, 6.5); // LEFT
  circle(113, 100, 6.5); // RIGHT
  
  // NOSE
  fill(0);
  ellipse(100, 105, 7, 2);
  circle(100, 106, 3);

  // WHISKERS
  fill(0);
  strokeWeight(1);
  line(80, 103, 69, 100); // LEFT - top
  line(80, 107, 69, 107); // LEFT - middle
  line(80, 111, 70, 114); // LEFT - bottom
  line(119, 103, 130, 100); // RIGHT - top
  line(119, 107, 130, 107); // RIGHT - middle
  line(119, 111, 129, 114); // RIGHT - bottom
  pop();
}