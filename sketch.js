var spaceship , coin , asteroid , gameOver , restart , sky ,spaceshipI , coinI , asteroidI , gameOverI , restartI , skyI 

var coinG , asteroidG

var score = 0
var speed = 2

var play = 1
var end = 0
var gamestate = play

//var astery =80
function preload(){
  
  skyI = loadImage("sky.jpg")
  spaceshipI = loadImage("spaceship.png")
  coinI = loadImage("coin.png");
  asteroidI = loadImage("asteroid.png");
  gameOverI = loadImage("Gameover.png");
  restartI = loadImage("restart.png");
}


function setup() {
  createCanvas(400, 400);
  
  sky = createSprite(200,200);
  sky.addImage("sky",skyI)
  sky.scale = 3
 
  spaceship = createSprite(200,300);
  spaceship.addImage("ss",spaceshipI)
  spaceship.scale = 0.1 


  
  
  
 
  gameOver = createSprite(200,200);
  gameOver.addImage("go",gameOverI)
  gameOver.visible =false
  restart = createSprite(200,250);
  restart.addImage("go",restartI)
  restart.visible =false
  restart.scale = 0.05
  
  coinG = new Group();
  asteroidG = new Group();
  
  
}

function draw() {
  background(220);
  
  if(gamestate === play){
     
    //sky.x=spaceship.x
    sky.y=spaceship.y
   gameOver.y = spaceship.y+100
   restart.y=spaceship.y+150
  
  if(keyDown("left") && spaceship.x>0){
     spaceship.x = spaceship.x - 10;
     }
  if(keyDown("right") &&spaceship.x<400){
     spaceship.x = spaceship.x + 10;
     }

     if(keyDown("up") &&spaceship.x<400){
      spaceship.y = spaceship.y - 10;
      if(frameCount%200){
         score = score + 10
        
         }
      }
  
  
  if(spaceship.isTouching(asteroidG)){
     gamestate = end
    asteroidG.destroyEach();
     }

    
    camera.position.y=spaceship.y
    //astery=astery-80;
    //coins()
  asteroids()
     
     }
  
  
  
  if(gamestate === end){
     
     gameOver.visible = true
     restart.visible = true
    sky.velocityY = 0
    coinG.destroyEach()
    asteroidG.destroyEach()
     
    if(mousePressedOver(restart) ){
       
       reset()
       speed = 2
       }
     }
  
  
  //score= frameCount/10
  
  
  drawSprites();
  fill("white")
  text("score "+score,spaceship.x,spaceship.y-100);
}

/*function coins(){
  if(frameCount%150 === 0){
     
     
     coin = createSprite(random(100,300),-70);
  coin.addImage("coin",coinI);
  coin.scale = 0.03
  coin.velocityY = speed
  coin.lifetime = 300
     
     coinG.add(coin)
     }
  
  
  
}*/


function asteroids(){
  if(frameCount%100 === 0 ){
     
     
     asteroid = createSprite(random(100,300),camera.position.y-200);
  asteroid.addImage("asteroid",asteroidI);
  asteroid.scale = 0.3
  
  
    
    asteroid.setCollider("circle",0,0,70)
     
     asteroidG.add(asteroid)
   //astery=astery-80
     }
  
  
  
}

function reset (){

gamestate = play
sky.velocityY = speed
  gameOver.visible = false
  restart.visible = false

}



