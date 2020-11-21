var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,255)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
 if(wall.x-bullet.x<bullet.width/2+wall.width/2){
   bullet.veloctiyX=0;
   var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
  if (damage===12.43){
   wall.shapeColor=Color("red");
  }
  if(damage===3.68){
    wall.shapeColor=Color=("green")
  } 
  
 if(damage>10){
   Text("wall is not effective against the bullet")
 } 
}
  drawSprites();
}