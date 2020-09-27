const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bob1 = new Bob(200,600);
  bob2 = new Bob(250,600);
  bob3 = new Bob(300,600);
  bob4 = new Bob(350,600);
  bob5 = new Bob(400,600);

  roof = new Roof(350, 400, 200, 10);

  rope1 = new Rope(bob1.body,roof.body,-30 * 2, 0);
  rope2 = new Rope(bob2.body,roof.body,- 30 * 2, 0);
  rope3 = new Rope(bob3.body,roof.body,-30 * 2, 0);
  rope4 = new Rope(bob4.body,roof.body,- 30 * 2, 0);
  rope5 = new Rope(bob5.body,roof.body,- 30 * 2, 0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}