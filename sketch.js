var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rect1= createSprite(400,652,120,15)
    rect1.shapeColor="red"

	rect2=createSprite(348,620,15,90)
	rect2.shapeColor="red"

	rect3=createSprite(452,620,15,90)
	rect3.shapeColor="red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 rect1= Bodies.rectangle(400,652,120,15,{isStatic:true})
     World.add(world, rect1)

	rect2=Bodies.rectangle(348,620,15,90,{isStatic:true})
	World.add(world, rect2)

	rect3=Bodies.rectangle(452,620,15,90,{isStatic:true})
	World.add(world, rect3)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

    
  }
}



