// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  print("Hello world");
  angleMode(DEGREES);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//Exercise 3: Natalie Annabelle

//my concept is life and death represented in a flower
// we have the flower in full bloom and if you hover your mouse
//on the right side it turns into a wilted flower with rain.
//This works with if statements, so depending on where your mouse is
//on the canvas, it changes the drawing, followed by more if statements
//to show the proper drawing


// runs continuously - main render loop
function draw() {
  if (mouseX < width / 2) {
    
    background('cornflowerblue');
    drawFlower(true); 
  } 
  else  {
    
    background('dimgrey');
    drawFlower(false);
  } 
}

function drawRaindrop(x, speed) {
  
  Yposition = (frameCount*speed) % (height);
  fill('royalblue');
  ellipse(x, Yposition, 10, 15);
  
}

function drawStem(stemColour) {
  
  fill(stemColour);
  rect(width/2-10, height/2, 20, height/2);
  
}

function drawPollen(pollenColour) {
 
  fill(pollenColour);
  circle(width/2, height/2, 120);
}

function drawPetal(angle, petalColour = 'white') {
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);  
  fill(petalColour);
  ellipse(0, -130, 90, 200);
  pop();
  
}

function drawFlower(life=true) {
  noStroke();  

  if (life==true) {  
    drawStem('forestgreen');
    for (let angle = 0; angle < 360; angle += 45) {
      drawPetal(angle);
    }   
  
    drawPollen('yellow');
    
  }
  
  else {
    
    drawStem('darkolivegreen');
    drawPetal(225, color(141, 117, 91));
    drawPollen('olive');
    drawRaindrop(100, 8);
    drawRaindrop(150, 10);
    drawRaindrop(364, 9);
    drawRaindrop(575, 7);
    drawRaindrop(476, 8.5);
    
  }
} 