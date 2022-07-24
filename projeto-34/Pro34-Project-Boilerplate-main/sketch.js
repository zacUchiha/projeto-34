
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

