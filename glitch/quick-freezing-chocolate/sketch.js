// MadLibs

// Adding new options and a fourth blank
let firstBlank = ["fantastic", "mysterious", "incredible", "peculiar"];
let secondBlank = ["enlightening", "confusing", "ridiculous", "amazing"];
let thirdBlank = ["definitely", "probably", "certainly", "doubtfully"];
let fourthBlank = ["exciting", "dull", "unexpected", "ordinary"];

function setup() {
  createCanvas(400, 400);
  background(200);
  textSize(12);
  text("Click and hold the 'generate' box below to create a new sentence with randomly selected words.", 20, 20, 370, 370);

  rect(140, 65, 100, 30);
  textSize(15);
  text("GENERATE", 150, 85);

  textSize(22);
  text("This is a _________ and ________ adventure that is ________ unlike anything ________ you've seen before!", 20, 120, 370, 370);
}

function draw() {
  // No continuous drawing needed
}

function mousePressed() {
  if (mouseX > 140 && mouseX < 240 && mouseY > 65 && mouseY < 95) {
    
    background(200);
    
    // Randomly select words from each array for the four blanks
    let i = int(random(4)); // First blank
    let j = int(random(4)); // Second blank
    let k = int(random(4)); // Third blank
    let l = int(random(4)); // Fourth blank
    
    textSize(15);
    text(firstBlank[i], 145, 135);
    text(secondBlank[j], 50, 165);
    text(thirdBlank[k], 90, 220);
    text(fourthBlank[l], 150, 250);

    textSize(12);
    text("Click and hold the 'generate' box below to create a new sentence with randomly selected words.", 20, 20, 370, 370);

    rect(140, 65, 100, 30);
    textSize(15);
    text("GENERATE", 150, 85);

    textSize(22);
    text("This is a _________ and ________ adventure that is ________ unlike anything ________ you've seen before!", 20, 120, 370, 370);
  }
}
