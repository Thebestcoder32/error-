var thickness,wall;
var bullet,speed,weight;
var lbullet;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22,83);
  
}




function draw() {
  background(255,255,255);
  bullet= createSprite(50,200,50,20);
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

function hasCollided(Lbullet,Lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true 
    }
     return false;
  }

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed/(thickness * thickness * thickness);

  if(damage>10){
    wall.shapeColor= color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  } 
}

  drawSprites();
}
