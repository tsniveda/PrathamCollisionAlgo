var fixedRect, movingRect;

function setup() {   //only once
  createCanvas(1000, 700);

  fixedRect = createSprite(200, 200, 100, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(290, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {  //every frame 
  background(0);  

  movingRect.x = mouseX; 
  movingRect.y = mouseY;

  if( movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x  - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}