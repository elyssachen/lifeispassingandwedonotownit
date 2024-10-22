let digi;
let minutes=99;
let seconds=99;
let countdown='99:99';
//let ticking;

function preload() {
  digi=loadFont('data/DS-DIGI.TTF');
  //ticking=loadSound('data/Ticking.mps');
}

function setup() {
createCanvas(windowWidth, windowHeight);
textFont(digi);
//ticking.play();

}

function draw() {
  background(255);
  
  if (frameCount%60==0){
  seconds--;
  if (seconds==-1){
    seconds=99;
    minutes--;
  }
  }
  let countseconds=nf(seconds,2);
  let countminutes=nf(minutes,2);
  countdown=countminutes+':'+countseconds;

//clock
strokeWeight(1);
push();
translate(width*0.1,height/4);
fill(255);
scale(0.85);
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

//COUNTDOWN
push();
scale(1.2);
fill(0);
textSize(140);
text(countdown,180,210);
pop();

scale(0.9);
translate(34,22);
noFill();
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

//red button
//push();
//noStroke();
//fill(255,0,0);
//ellipse(650,255,28,10);
//pop();


push();
noFill();
translate(900,250);
beginShape();
vertex(0,0);
vertex(280,0);
vertex(280,180);
vertex(0,180);
vertex(0,0);
endShape();
fill(255);
circle(105,93,100);
circle(100,90,100);
scale(0.3);
pop();
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
