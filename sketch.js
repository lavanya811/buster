var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redB_Group,arrowGroup,blueB_Group,greenB_Group,pinkB_Group ;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage= loadImage("green_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png") ;
  pink_balloonImage=loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redB_Group = new Group();
  arrowGroup = new Group();
  blueB_Group = new Group();
  greenB_Group=new Group();
  pinkB_Group = new Group();
}

function draw() {
 background(0);
  
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  bow.y = World.mouseY
  
   
  if (keyDown("space")) {
    createArrow();
    
  }
  redBalloon();
  blueBalloon();
  greenBalloon();
  pinkBalloon();
  drawSprites();
  text("score:"+score,320,30);
  
  
     if(arrowGroup.isTouching(redB_Group)){ 
       redB_Group.destroyEach();
       arrowGroup.destroyEach();
       score=score+1;
     }
  
 if(arrowGroup.isTouching(blueB_Group)){ 
       blueB_Group.destroyEach();
       arrowGroup.destroyEach();
       score=score+2;
     } 
  
  if(arrowGroup.isTouching(greenB_Group)){ 
       greenB_Group.destroyEach();
       arrowGroup.destroyEach();
       score=score+2;
     } 
  
  if(arrowGroup.isTouching(pinkB_Group)){ 
       pinkB_Group.destroyEach();
       arrowGroup.destroyEach();
       score=score+2;
     } 
  
  
}



 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow); 
}


function redBalloon() {
  if (frameCount % 150 === 0) {
  var red = createSprite(0, (random(20,370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
    redB_Group.add(red);
    

}  

}

function blueBalloon() {
 if (frameCount % 200=== 0) {
  var blue = createSprite(0, (random(20,370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB_Group.add(blue);

}
}

function greenBalloon() {
   if (frameCount % 250=== 0) {
  var green = createSprite(0, (random(20,370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB_Group.add(green);
 
}
}

function pinkBalloon() {
   if (frameCount % 300=== 0) {
  var pink = createSprite(0, (random(20,370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3;
  pinkB_Group.add(pink);

}
}
