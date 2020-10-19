
var choco,chocoimg;
 function preload() {
chocoimg=loadImage("Image/ChocolateCake.jpg");
 }
function setup() {
  createCanvas(400, 400);
 choco=createSprite(200,200,50,50);
 choco.addImage(chocoimg);
}
function draw() {
  background("white");  
 rectMode(CENTER);
  drawSprites();
 
}




