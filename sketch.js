var dustbin1,dustbin2,dustbin3;
var paper;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=createSprite(200,700,100,10,{isStatic:true})
	dustbin2=createSprite(300,700,10,100,{isStatic:true})
	dustbin3=createSprite(100,700,10,100,{isStatic:true})
	paper=createSprite(300,400,10,10,{isStatic:false})
	ground=createSprite(200,700,800,20,{isStatic:true})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



