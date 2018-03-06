
function Circle(tempX,tempY,tempRadius) {  
    this.radius = tempRadius;    
    this.pos = createVector(tempX,tempY);
    this.angle = 0;
    this.increment = 0;
    this.constant = 15;

    this.drawC = function() {
        
        push();
        translate(this.pos.x,this.pos.y);       
        noFill();
        debug.log(this.pos);
        x = this.pos.x
        y = this.pos.y   
        ellipse(x,y,this.increment);
        this.rotateC();
        pop();
        

        
    }
    
    this.rotateC = function() {
  
        this.angle = 137.5 * this.increment;  
        this.increment ++;

        this.radius = this.constant * sqrt(this.increment);

        this.pos.x = this.radius * cos(this.angle);
        this.pos.y = this.radius * sin(this.angle);
      
    }
}