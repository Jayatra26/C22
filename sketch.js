const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground;
var box;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
 //myWorld is myEngine's  world
 myWorld = myEngine.world;

 var ground_options={
   isStatic :true
 } 
 ground=Bodies.rectangle(200,380,400,10,ground_options);
 World.add(myWorld,ground);

 box=Bodies.rectangle(200,200,50,50);
 World.add(myWorld,box);

 var ball_Options= {
  restitution : 1.0
}

 ball=Bodies.circle(300,300,25,ball_Options);
 World.add(myWorld,ball);

 console.log(ground);
  
}

function draw() {
  background(0); 

  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10) ;
  rect(box.position.x,box.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  
 
}