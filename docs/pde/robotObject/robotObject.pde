// -- declare global variables:
float x, y;            // -- Position of the Robot
float wide, high;      // -- Width and height of Robot's head
float eyeD, eyeR;      // -- Eye characteristics - distance between eyes and eye radius
float mLong, mDown;    // -- Mouth characteristics - length and distance down from centre of head

// -- assign values to the globals once in setup() :

void setup () {

  // -- set the canvas size:
  size(800, 800);

  // -- Robot characteristics:
  x = width/2;
  y = height/2;
  wide = 140;
  high = 60;
  eyeD = 80;
  eyeR = 12;
  mLong = 100;
  mDown = 20;   // -- Pixels down from the centre of the head as implemented below with 'y+mouthDown'

  // -- Make sure that any rectangles are centred on the first two arguments we give to rect();
  rectMode(CENTER);
}
// -- drawRobot method:

void drawRobot (float x, float y, float headWide, float headHigh,
  float eyeDist, float eyeRad, float mouthLong, float mouthDown) {

  // -- draw the head with the rect() method:
  noStroke();
  fill(220);
  rect(x, y, headWide, headHigh);

  // -- draw the eyes with the circle() method:
  fill(32);
  circle(x-eyeDist/2, y, eyeRad);
  circle(x+eyeDist/2, y, eyeRad);

  // -- draw the mouth with the line() method():
  stroke(32);
  strokeWeight(3);
  line(x-mouthLong/2, y+mouthDown, x+mouthLong/2, y+mouthDown);
}

// -- Method approach to drawing:

void draw () {

  background(250);

  // -- Method approach to drawing:
  drawRobot(x, y, wide, high, eyeD, eyeR, mLong, mDown);
  drawRobot(x+150, y, wide, high, eyeD, eyeR, mLong, mDown);

  // -- Vary size and characteristics of two 1/4 sized robots:
  drawRobot(x, y+120, wide/2, high/2, eyeD/3, eyeR, mLong/2, mDown/1.5);
  drawRobot(x+150, y+120, wide/2, high/2, eyeD/2, eyeR/3, mLong/3, mDown/2.5);

  // -- Draw robots with parameters that vary in a loop:
  for (int i=100; i<width; i+=100) {
    drawRobot(i, y-120, wide/2, high/2, i/100*eyeD/10, 2+i/100, mLong/3-2*i/100, mDown/2.5);
  }
}
