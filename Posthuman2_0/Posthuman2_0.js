let roboto;
let trainTrack1 = 0;
let trainTrack2 = -20;
let cable2;
let noise;

function preload() {
  cable2 = loadImage('data/CABLE2.png');
  noise = loadSound('data/TRAIN.mp3');
}

function setup() {
createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(0);
  stroke(255);
//noFill();

line(200,440,800,440);
line(200,400,800,400);

push();
strokeWeight(1);
  // Define vanishing point COPILOT STARTS
  let vanishingX = width/3;
  let vanishingY = height / 5;
   trainTrack1 += 5;
  if (trainTrack1 >= 140) {
    trainTrack1 = 0;
  }

  // Move the second set of lines to the right
  trainTrack2 += 5;
  if (trainTrack2 >= 140) {
    trainTrack2 = 0;
  }

  // Draw first set of perspective lines with offset1
  for (let i = -trainTrack1; i < width; i += 140) {
    line(i, height, vanishingX, vanishingY); // Lines from bottom
  }
  
  // Draw second set of perspective lines with offset2
  for (let i = -trainTrack2; i < width; i += 140) {
    line(i, height, vanishingX, vanishingY); // Lines from bottom
  }
  //COPILOT ENDS
  pop();
  

push();
noStroke();
rect(148,100,700,290);
rect(0,0,293,1000);
rect(683,0,800,1000);
rect(250,456,590,500);
triangle(683,439,668,456,683,458);
triangle(292,440,309,456,283,458);
pop();

//vertex(650,320);
//vertex(670,300);
//vertex(670,102);
//vertex(650,82)

image(cable2,0,0);

push();
translate(width*0.1,height/4);
textSize(130);
fill(255, 207, 102);


//push();
//fill(255, 229, 99);
//noStroke();
//drawingContext.shadowBlur=40;
//drawingContext.shadowColor=color(255, 229, 99);
//circle(340,130,50);
//pop();

//fill(111, 128, 189);
//rect(148,200,390,62);

noFill();
scale(0.85);
strokeWeight(1.2);
beginShape();
//top face
vertex(180,82);
vertex(210,62); //check
vertex(660,62);
vertex(630,82);
vertex(180,82);
//front face
vertex(160,102);
vertex(160,300);
vertex(180,320);
vertex(630,320);
vertex(650,300);
vertex(650,102);
vertex(630,82);
//right faces
vertex(650,102);
vertex(680,82);
vertex(660,62);
vertex(680,82);
vertex(680,270);
vertex(650,300);
endShape();
scale(0.9);
translate(34,22);
beginShape();
vertex(650,82);
vertex(180,82);
vertex(160,102);
vertex(160,300);
vertex(180,320);
vertex(650,320);
vertex(670,300);
vertex(670,102);
vertex(650,82);
endShape();
pop();


//translate(width*0.6,height*0.3);
translate(900,250);
beginShape();
vertex(0,0);
vertex(280,0);
vertex(280,180);
vertex(0,180);
vertex(0,0);
endShape();
circle(105,93,100);
fill(0);
circle(100,90,100);
scale(0.3);

}
