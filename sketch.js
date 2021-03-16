
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,150,350,25);
	bob1=new Bob(280,550,60);
	bob2=new Bob(340,550,60);
	bob3=new Bob(400,550,60);
	bob4=new Bob(460,550,60);
	bob5=new Bob(520,550,60);
    chain1 = new Rope(bob1.body,roof.body,-120,0);
    chain2 = new Rope(bob2.body,roof.body,-60,0);
    chain3 = new Rope(bob3.body,roof.body,0,0);
    chain4 = new Rope(bob4.body,roof.body,60,0);
    chain5 = new Rope(bob5.body,roof.body,120,0);

}


function draw() {
  Engine.update(engine);
  background(200);
  rectMode(CENTER);
  roof.display(); 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:75});
	}
}


