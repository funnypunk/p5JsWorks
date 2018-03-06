



var circle,circle1;
var n,c;


function setup() {
  createCanvas(1800,1000);
  frameRate(30);
  angleMode(DEGREES);
  //circle = new Circle(width/4,height/2,2);
  circle = new Circle(width/2,height/2,2);
     
  
}

function draw() {
 
 // circle1.drawC();
  
  
  circle.drawC();
  console.log(circle.pos);
  //circle.rotateC(); 
  
}


