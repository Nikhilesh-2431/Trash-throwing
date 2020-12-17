
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var box1,box2,box3;

var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

    engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,200,20);
	box1 = new dustbin(600,300,200,20);
	box2 = new dustbin(650,300,20,100);
	box3 = new dustbin(700,300,20,100);

	ground1 = new ground(500,100,1000,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display()
  box2.display();
  box3.display()
  ground1.display()

  paper1.collide(ground1);
  box1.collide(ground1);
  box2.collide(ground1);
  box3.collide(ground1);
  
  drawSprites();
 
}



