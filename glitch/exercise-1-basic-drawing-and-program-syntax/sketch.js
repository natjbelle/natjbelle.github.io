// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  print('Hello world');
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// Exercise 1: Natalie Annabelle
// I decided to make a full replica of Piet Mondrian painting with a difference in colour combinations. 
// I decided to do the whole painting because I want to use these exercises to its full potential to eventually display in my online portfolio.

// runs continuously - main render loop
function draw() {
  background(235, 235, 240);
  
  fill('lavender');
  rect(0, 0, 90, 30);
  strokeWeight(2);
  
  fill('blueviolet');
  rect(30, 30, 200, 200);
  strokeWeight(2);
  
  fill('azure');
  rect(90, 0, 140, 30);
  strokeWeight(2);
  
  fill('cornflowerblue');
  rect(0, 30, 30, 90);
  strokeWeight(2);
  
  fill('azure');
  rect(0, 120, 30, 155);
  strokeWeight(2);
  
  fill('violet');
  rect(0, 275, 30, 155);
  strokeWeight(2);
  
  fill('violet');
  rect(230, 0, 150, 30);
  strokeWeight(2);
  
  fill('lightgreen');
  rect(230, 30, 150, 100);
  strokeWeight(2);
  
  fill('azure');
  rect(230, 130, 75, 100);
  strokeWeight(2);
  
  fill('lightblue');
  rect(305, 130, 75, 100);
  strokeWeight(2);
  
  fill('lavender');
  rect(0, 430, 130, 30);
  strokeWeight(2);
  
  fill('pink');
  rect(30, 230, 100, 100);
  strokeWeight(2);
  
  fill('lightblue');
  rect(130, 230, 100, 50);
  strokeWeight(2);
  
  fill('lightblue');
  rect(130, 280, 100, 50);
  strokeWeight(2);
  
  fill('pink');
  rect(130, 330, 100, 50);
  strokeWeight(2);
  
  fill('azure');
  rect(30, 330, 100, 100);
  strokeWeight(2);
  
  fill('lightgreen');
  rect(130, 380, 50, 80);
  strokeWeight(2);
  
  fill('azure');
  rect(180, 380, 50, 80);
  strokeWeight(2);
  
  fill('azure');
  rect(230, 230, 150, 50);
  strokeWeight(2);
  
  fill('cornflowerblue');
  rect(230, 280, 150, 100);
  strokeWeight(2);
  
  fill('blueviolet');
  rect(230, 380, 150, 80);
  strokeWeight(2);
  
  fill('cornflowerblue');
  rect(380, 0, 150, 80);
  strokeWeight(2);
  
  fill('blueviolet');
  rect(380, 80, 150, 100);
  strokeWeight(2);
  
  fill('lavender');
  rect(380, 180, 150, 50);
  strokeWeight(2);
  
  fill('azure');
  rect(380, 230, 75, 100);
  strokeWeight(2);
  
  fill('azure');
  rect(455, 230, 75, 100);
  strokeWeight(2);
  
  fill('violet');
  rect(380, 330, 150, 100);
  strokeWeight(2);
  
  fill('azure');
  rect(380, 430, 75, 30);
  strokeWeight(2);
  
  fill('pink');
  rect(455, 430, 75, 30);
  strokeWeight(2);
  
  fill('lightgreen');
  rect(530, 0, 60, 60);
  strokeWeight(2);
  
  fill('pink');
  rect(580, 0, 50, 60);
  strokeWeight(2);
  
  fill('lightgreen');
  rect(530, 40, 100, 40);
  strokeWeight(2);
  
  fill('pink');
  rect(530, 80, 100, 50);
  strokeWeight(2);
  
  fill('azure');
  rect(530, 130, 100, 50);
  strokeWeight(2);
  
  fill('azure');
  rect(530, 180, 100, 50);
  strokeWeight(2);
  
  fill('cornflowerblue');
  rect(530, 230, 200, 200);
  strokeWeight(2);
  
  fill('azure');
  rect(530, 430, 180, 30);
  strokeWeight(2);
    
  fill('lightgreen');
  rect(700, 430, 30, 30);
  strokeWeight(2);
  
  fill('violet');
  rect(630, 0, 100, 40);
  strokeWeight(2);
  
  fill('lavender');
  rect(630, 40, 100, 90);
  strokeWeight(2);
  
  fill('pink');
  rect(630, 130, 100, 100);
  strokeWeight(2);
  
}