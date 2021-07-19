const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var world, engine
function setup (){
    createCanvas(1200, 600)
engine = Engine.create()
world = engine.world

ground = new Ground(300,500,1200, 20 )
block1 = new Box(600, 400,50,50)
block2 = new Box(600, 350,50,50)
block3 = new Box(600, 300,50,50)
block4 = new Box(600, 250,50,50)
block5 = new Box(700, 350,50,50)
block6 = new Box(700, 350,50,50)
block7 = new Box(700, 300,50,50)
ball = new Ball(200,50)

slingshot = new sling(ball.body, {x:400, y:100})

}

function draw (){
    background("gray")
    Engine.update(engine)

    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    ball.display();
    slingshot.display();
   
}