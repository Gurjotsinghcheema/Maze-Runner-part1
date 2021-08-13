var groundimg;
var wall;
var brickimg;  //the brick image
var player,playerimg; //player image
function preload(){
  groundimg=loadImage("groundimage.jpg");
  brickimg=loadImage("brickimg.png");
  playerimg=loadAnimation("jake1.png","jake2.png","jake3.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  playerimg.frameDelay=20
  player=createSprite(displayWidth-100,displayHeight-50,30,30);
  player.addAnimation("jake",playerimg);
  player.scale=0.5
 
//the lower boundary
 for ( var i=1 ; i<=displayWidth ; i+=50 ){
  wall=createSprite(i,displayHeight,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }

//the upper boundary
for ( var i=1 ; i<=displayWidth ; i+=50 ){ 
  wall=createSprite(i,displayHeight-750,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
//the left boundary
 for ( var i=1 ; i<=displayHeight ; i+=50 ){
  wall=createSprite(displayWidth/240,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
//the right boundry
 for ( var i=1 ; i<=displayHeight ; i+=50 ){
  wall=createSprite(displayWidth,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
//the left boundary of inner square
for ( var i=displayHeight/2+50 ; i<=displayHeight-160 ; i+=50 ){
  wall=createSprite(200,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
 //the right boundary of inner square
 for ( var i=displayHeight/2+2 ; i<=displayHeight-180 ; i+=50 ){
  wall=createSprite(450,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
//the upper boundary 0f inner square
for ( var i=displayWidth/2-500 ; i<=displayWidth-900 ; i+=50 ){ 
  wall=createSprite(i,340,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
 //the lower boundary 0f inner square
for ( var i=displayWidth/2-500 ; i<=displayWidth-900 ; i+=50 ){ 
  wall=createSprite(i,595,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
for ( var i=displayHeight/2+200 ; i<=displayHeight-33 ; i+=50 ){
  wall=createSprite(1200,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
 for ( var i=displayHeight/2+200 ; i<=displayHeight-33 ; i+=50 ){
  wall=createSprite(1050,i,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
 for ( var i=displayWidth-315 ; i<=displayWidth-250 ; i+=50 ){ 
  wall=createSprite(i,558,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }
 for ( var i=displayWidth-315 ; i<=displayWidth-40 ; i+=50 ){ 
  wall=createSprite(i,450,10,50);
  wall.addImage(brickimg);
  wall.scale=0.2
 }

}


function draw() {
  background(groundimg); 
  drawSprites();
}