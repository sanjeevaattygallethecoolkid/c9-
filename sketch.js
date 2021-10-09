
function setup() {
  createCanvas(800,700);
  box=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyDown("left")){
    box.x=box.x-5 
  }

  if(keyDown("right")){
    box.x=box.x+5 
  }

  if(keyDown("up")){
    box.y=box.y-5 
  }

  if(keyDown("down")){
    box.y=box.y+5 
  }
drawSprites()
}




