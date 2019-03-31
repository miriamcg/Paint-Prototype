var strokeColor = '#000000';
var fillColor = '#000000';
var thickness = 4;
var brush = ['line', 'dot', 'square', 'circle']; 
var drawStroke = true;
var	drawFill = true;

var gui;

function setup() {

	createCanvas(windowWidth, windowHeight);

	// Create the GUI
	sliderRange(0, 20, 1);
	gui = createGui('Panel');
	gui.addGlobals('brush', 'strokeColor', 'drawStroke',     'fillColor','drawFill', 'thickness');
  
	background(255);    
}

function draw() {
  
  if(drawFill) {
	fill(fillColor);
  } else {
	noFill();
  }
	
  if(drawStroke) {
	stroke(strokeColor);
	strokeWeight(thickness);
  } else {
	noStroke();
  }
  
  switch(brush) {
    case 'line':
      drawLine();
      break;
        
    case 'dot':
      drawDots();
      break;

    case 'square':
      drawRect();
	  break;

	 case 'circle':
      drawCircle();
	  break;
  }
}

function drawLine(){
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function drawDots(){
  if(mouseIsPressed){
    triangle(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
  }
}

function drawRect(){
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}

function drawCircle(){
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 40, 40);
  }
}