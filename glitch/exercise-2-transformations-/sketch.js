// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


/// Exercise 2: Natalie Annabelle

// For the transformation exercise, I made a cat. 
// The origional cat is the grey one in the top left, 
// and the rest are the different translations in comparison. 
// I also experimented with adding text at the bottom.


// runs continuously - main render loop
function draw() {
  background(250, 245, 240);
  
  //Origional Object
  fill('lightgrey');
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  
  
  
  //translation rotation #0
  push();
  translate(-250,-250);
  rotate(frameCount*0.03);
  scale(5.5);
  fill('yellow');
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  //translation #1
  push();
  translate(100, 100);
  fill('aqua');
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  //translation #2
  push();
  translate(250, 100);
  fill('purple');
  scale(1.5);
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  //translation #3
  push();
  translate(200, 250);
  fill('palegreen');
  scale(2);
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  
  //translation #4
  push();
  translate(-350, 220);
  fill('magenta');
  scale(2);
  shearX(45);
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  //mouse transformation #5
  push();
  translate(mouseX, mouseY);
  fill('indigo');
  scale(2);
  triangle(85+30, 60, 80+30, 75, 90+32, 75); //right ear
  triangle(85, 60, 80, 75, 90, 70); //left ear
  ellipse(102, 102, 75, 65); //face
  circle(87, 95 , 13); //left eye
  circle(87+27, 95 , 13); // right eye
  triangle(100, 110, 100+5, 110-5, 100-5, 110-5);// nose
  line(95, 111, 105, 111);//mouth
  line(85, 111, 97, 108); //bottom left whisker
  line(85, 111-5, 97, 108); // top left whisker
  line(85+29, 111, 97+6, 108); //bottom right whisker
  line(85+29, 111-5, 97+6, 108);//top right whisker
  pop();
  
  //text
  push();
  stroke("peru");
  strokeWeight(10);
  textSize(75);
  textStyle(ITALIC);
  fill('orange');
  textFont('Comic Sans MS');
  text('Derp Cat', 30, 600 );
  pop();
  
   
  
}
