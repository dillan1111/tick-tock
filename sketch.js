var hr = hour();
var mn = minute();
var sc = second();


function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  //seconds
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  translate(0,0);
  strokeWeight(7);
  line(400, 200, 400, 100);
  pop();
  //minutes
  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  translate(0,0);
  strokeWeight(7);
  line(400, 200, 400, 150);
  pop();
  //hours
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  translate(0,0);
  strokeWeight(7);
  line(400, 200, 400, 175);
  pop();
  drawSprites();
}