var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  gameObject1=createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300, 100, 50, 50);
  gameObject3.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0);  
  console.log(fixedRect.width/2+movingRect.width/2, movingRect.x-fixedRect.x);

  // movingRect.x=World.mouseX

  // movingRect.y=World.mouseY
  // if(isTouching(gameObject1, movingRect)){
  //   gameObject1.shapeColor="red";
  //   movingRect.shapeColor="red";
  // }else{
  //   gameObject1.shapeColor="green";
  //   movingRect.shapeColor="green";
  // }
  // if(isTouching(gameObject3, movingRect)){
  //   gameObject3.shapeColor="red";
  //   movingRect.shapeColor="red";
  // }else{
  //   gameObject3.shapeColor="green";
  //   movingRect.shapeColor="green";
  // }
  
  //objects we pass while calling a function is called parametres
  //objects we pass while defining a function is called arguments
  bounceOff(movingRect, fixedRect);
  drawSprites();
}
