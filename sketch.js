var ball;
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,30,30);
ball.shapeColor="red";
ball.velocityX=2;
ball.velocityY=2;
}

function draw() 
{
  background("blue");
  createEdgeSprites();
  ball.bounceOff(edges);
drawSprites();
}




