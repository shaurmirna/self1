
var gameState =play;
var boy;
function preload(){
  playimage=loadImage("k.jpg");
boyimage=loadImage("stand.png")
}
  


function setup() {
  createCanvas(displayWidth,displayHeight);
 

 backgroundimg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
 backgroundimg.shapeColor="yellow"
 
  play=createSprite(displayWidth/2,displayHeight/2)
  play.addImage("play",playimage);
}

function draw() {
  background(255,255,255);  
  if(mousePressedOver(play)){
    play.visible=false;
    backgroundimg.visible=false;
    gameState =play;
  }

if(gameState===play){
boy = createSprite(displayWidth/2  +600,displayHeight/2  +200,);
boy.addImage("boy",boyimage);
boy.scale=0.4;
}




  drawSprites();
 

}