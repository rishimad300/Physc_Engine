var movingRect, fixedRect;
var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(600,700,50,80);
  fixedRect.shapeColor="red";
  fixedRect.velocityY=-5;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="red";
  

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor="red";

  rect2 = createSprite(200,100,50,50)
  rect2.shapeColor="red"

  rect3 = createSprite(600,100,50,50)
  rect3.shapeColor="red"
  rect3.velocityY=5;
  
  rect4 = createSprite(400,100,50,50)
  rect4.shapeColor="red"
}

function draw() {
  background(0,0,0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect, rect1)){
    movingRect.shapeColor="blue";
    rect1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="orange";
    rect1.shapeColor="orange";
  }
  bounceOff(fixedRect,rect3)
  drawSprites();
}

