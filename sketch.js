
var hr, mn, sc;
var scAngle, mnAngle, hrAngle;


function setup() {
  
}

function draw() {
  background(0);  
  //createCanvas(400,400);
  
  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES);
  
  translate(200,200);
  rotate(-90);
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  //seconds
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  //minutes
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();
  //hours
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();
  
  //point
  push();
  stroke("white");
  point(0,0);
  pop();

  //arc around minutes, seconds, and hours
  strokeWeight(7);
  noFill();
  push();
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  pop();
  push();
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  pop();
  push();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  pop();


  drawSprites();
}