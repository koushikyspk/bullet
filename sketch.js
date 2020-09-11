var wall,thickness;
var bullet,speed,weight;
var v;
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(221,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,50)
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
 if(hascollided(bullet,wall)){
   v=(0.5*weight*speed*speed)/(thickness*thickness*thickness)

 if(v>=10){
   wall.shapeColor="red"
 }
 if(v<10){
   wall.shapeColor="green"
 }
}
  drawSprites();

}
function hascollided (Lbullet,Lwall){
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallleftEdge=Lwall.x;
  if (bulletRightEdge>=wallleftEdge){
    return true

  }
  return false;
}