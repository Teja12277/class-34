class Ball{
    constructor(x, y, r) {
        var options = {
          'restitution':0.8,
          'frictionAir':0.001,
          'density':10
        }
        this.r = 75
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red")
        ellipseMode(CENTER);
        ellipse(0,0,this.r, this.r);
        pop();
      }
}