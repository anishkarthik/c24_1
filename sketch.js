var downlineIMG,sidelineIMG;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	downlineIMG=loadImage("theline.png")
	sidelineIMG=loadImage("thesidewaysline.png")
    Matter.Body.circle(450,650,5, [0] [1])  
}
  
function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	downlineSprite=createSprite(width/2, 650,200,20);
	downlineSprite.addImage=(downlineIMG)
	downlineSprite.shapeColor=color(255,255,255)
	
	sidelineSprite1=createSprite(width/2, 550,20,100);
	sidelineSprite1.addImage=(downlineIMG)
	sidelineSprite1.shapeColor=color(255,255,255)
	
	sidelineSprite2=createSprite(width/2, 550,20,100);
	sidelineSprite2.addImage=(downlineIMG)
	sidelineSprite2.shapeColor=color(255,255,255)  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  downlineSprite.position.x=(x=1000)
  downlineSprite.position.y=(y=650)

  sidelineSprite1.position.x=(x=910)
  sidelineSprite1.position.y=(y=600)
  
  sidelineSprite2.position.x=(x=1090)
  sidelineSprite2.position.y=(y=600)

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   }
}

  drawSprites(); 
}



