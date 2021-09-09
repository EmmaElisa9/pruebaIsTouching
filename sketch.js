var cuadrado1, cuadrado2;

function setup() {
  createCanvas(800,400);

  cuadrado1 = createSprite(300, 200, 50, 50);
  cuadrado1.shapeColor = "blue";
  cuadrado2 = createSprite(200, 200, 50, 50);
  cuadrado2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  cuadrado1.x = World.mouseX;
  cuadrado1.y = World.mouseY;

  if (cuadrado2.x - cuadrado1.x < cuadrado1.width/2 + cuadrado2.width/2 && cuadrado1.x - cuadrado2.x < cuadrado1.width/2 + cuadrado2.width/2 && cuadrado1.y - cuadrado2.y < cuadrado1.height/2 + cuadrado2.height/2 && cuadrado2.y - cuadrado1.y < cuadrado1.height/2 + cuadrado2.height/2){
    cuadrado1.shapeColor= "red";
    cuadrado2.shapeColor= "red";
  }
  else{
    cuadrado1.shapeColor = "blue";
    cuadrado2.shapeColor = "blue";
  }

  drawSprites();
}