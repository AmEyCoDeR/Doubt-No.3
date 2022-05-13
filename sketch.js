var logo;
var start;
var gameState = "serve";
var cloudImg;
var cloudsGroup;
var noofclouds=0;
var x,y;
var answerinput;
var cloud;


function preload(){
logo = loadImage("Logo Transperant.png");
cloudImg = loadImage("cloud.png");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    start = createButton("Start");
    start.position(width/2 - 100,height/2 - 100);
    start.class("button");
    start.mouseClicked(singleplayeropen);

    cloudsGroup = new Group();
}

function draw() {
  console.log(gameState);
   if(gameState === "serve"){ 
    background("white");
    imageMode(CENTER);
  image(logo,width/2, 100,150,150);
   }

   if(gameState === "play"){
     background(135, 206, 235);
     start.hide();
     spawnClouds();
   }

 
    drawSprites();
   /* x = cloud.x;
    y = cloud.y;*/
    fill("black");
    textSize(30);
    textSize(55);
    

}

function singleplayeropen(){
gameState = "play";
}

function spawnClouds(){
  if(frameCount%80 === 0){
  cloud = createSprite(random(0,width -80),0,50,50);
  cloud.addImage("cloud",cloudImg);
  cloud.scale = 0.05;
  cloud.velocityY = 2;
  cloudsGroup.add(cloud);
  fill("black");
  textSize(30);
  text("+",cloud.x, cloud.y);
  if(cloud.position.y >= height + 60){
    cloud.remove();
  }
  }
console.log(noofclouds);


}

