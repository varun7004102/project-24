var ground;
var catcher1,catcher2,catcher3;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40)
	catcher1 = new Catcher(800,645,200,20)
	catcher2 = new Catcher(910,580,20,130)
	catcher3 = new Catcher(690,580,20,130)
	paper = new Paper(100,100,50,50)
	
}
function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 
  catcher1.display();
  catcher2.display();
  catcher3.display();
  paper.display();


}
function keyPressed(){
if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115})


}
}