var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="blue";
  movingrect=createSprite(200,300,50,80);
  movingrect.shapeColor="blue";

}

function draw() {
  background(0);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(isTouching(movingrect,fixedrect))
  {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="yellow";

  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";

  }
  drawSprites();
}
















