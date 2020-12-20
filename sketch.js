
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof= new Roof (380,300,220,20);
    bob1= new bob(300,500);
    bob2= new bob(340,500);
    bob3= new bob(380,500);
    bob4= new bob(420,500);
    bob5= new bob(460,500);

    rope1= new rope(bob1.body,roof.body,-bobDiameter*2,0)
    rope2= new rope(bob2.body,roof.body,-bobDiameter*1,0)
    rope3= new rope(bob3.body,roof.body,-bobDiameter*0,0)
    rope4= new rope(bob4.body,roof.body,bobDiameter*1,0)
    rope5= new rope(bob5.body,roof.body,bobDiameter*2,0)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  console.log(rope5)
  drawSprites();
  keyPressed();
  textSize(54);
  fill("black");
  text("NEWTON'S CRADLE",180,200);

  textSize(34);
  fill("black");
  text("Press UP arrow and then DOWN arrow to see ",100,600)


 
}
function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-50})
   }

}



