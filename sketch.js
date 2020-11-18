var car1, car2, car3, wall1, wall2, wall3;
var weight;
var speed;

function setup() {
  createCanvas(800,400);
  car1=createSprite(100, height/2, 30, 30);
  wall1=createSprite(700, 200, 20, height/2);
  speed=Math.round(random(55, 90));
  weight=Math.round(random(400, 1500));
}

function draw() {
  background('black');
   
  car1.velocityX=speed;
  
  if(wall1.x-car1.x<=(wall1.width+car1.width)/2){
    car1.velocityX=0;
    var deformation=(0.5 * weight * speed * speed)/ 22509;
    if(deformation>180){
      car1.shapeColor=color(255, 0, 0);
    }
    if(deformation>80 && deformation<180){
      car1.shapeColor=color(230, 230, 0);
    }
    if(deformation<80){
      car1.shapeColor=color(0, 255, 0);
    }
  }

  drawSprites();
}