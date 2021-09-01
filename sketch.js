const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundimg,snow1,snowmanimage,snowman
var snowparticle=[];

function preload(){
backgroundimg = loadImage("snow2.jpg")
snowmanimage=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
	world = engine.world;

 // createSprite(400, 200, 50, 50);
snowman = createSprite(260,300,10,10);
snowman.addImage(snowmanimage);
snowman.scale=0.2;

}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);
if (frameCount%20===0){
  snowparticle.push(new Snow(random(100,700),-50,10));
}
for(var j=0;j<snowparticle.length;j++){
  snowparticle[j].display();
}
  drawSprites();
}