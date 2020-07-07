var robot1,robot1Img;
var backgroundImg;
var robot2,robot2Img;
var ball,ballImg;
var ball2,ballImg2;
var ball3,ballImg3;
var ball4,ballImg4;
var ball5,ballImg5;
var ball6,ballImg6;
var pos1,pos2;
var power;
var gameState;
var ballGroup;

function preload(){
  robot1Img = loadImage("Robot.png");  
  backgroundImg = loadImage("background.png"); 
  robot2Img = loadImage("Robot2.png");
  ballImg = loadImage("Ball.png");
  ballImg2 = loadImage("Ball2.png");
  ballImg3 = loadImage("Ball.png");
  ballImg4 = loadImage("Ball2.png");
  ballImg5 = loadImage("Ball.png");
  ballImg6 = loadImage("Ball2.png");
  
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    robot1 = createSprite(80,height - 100,50,50)
    robot1.addImage("robot1",robot1Img);
    robot1.scale = 0.4;

    robot2 = createSprite(80,height - 550,50,50);
    robot2.addImage("robot2",robot2Img);
    robot2.scale = 0.4;

    ball = createSprite(250,height - 600,50,50);
    ball.addImage("ball",ballImg);
    ball.addImage("ball2",ballImg2)
    ball.scale = 0.4;

    ball3 = createSprite(550,600,50,50);
    ball3.addImage("ball3",ballImg3);
    ball3.addImage("ball4",ballImg4);
    ball3.scale = 0.4;

    ball5 = createSprite(850,height - 600,50,50);
    ball5.addImage("ball5",ballImg5);
    ball5.addImage("ball6",ballImg6);
    ball5.scale = 0.4;

    ball.velocityY = 3;
    ball3.velocityY = -2;
    ball5.velocityY = 3;

    pos1 = random(1100,width-50);
    pos2 = random(1100,width-50);

    power = 0;

    gameState = 0;

    ballGroup = new Group();
    ballGroup.add(ball);
    ballGroup.add(ball3);
    ballGroup.add(ball5);


  }
function draw(){
    background(backgroundImg);
  
    if(gameState === 0){
    if(frameCount % 3 === 0){
      ball.changeImage("ball",ballImg);
    }
    else if(frameCount % 3 !== 0){
      ball.changeImage("ball2",ballImg2);
    }

    if(frameCount % 3 === 0){
      ball3.changeImage("ball3",ballImg3);
    }
    else if(frameCount % 3 !== 0){
      ball3.changeImage("ball4",ballImg4);
    }

    if(frameCount % 3 === 0){
      ball5.changeImage("ball5",ballImg6);
    }
    else if(frameCount % 3 !== 0){
      ball5.changeImage("ball6",ballImg6);
    }
   
    noFill();
    strokeWeight(3);
    stroke("red");
    ellipse(pos1,600,120,80);

    noFill();
    
    stroke("blue");
    ellipse(pos2,200,120,80);

    
    if(ball.y >600){
      ball.velocityY = -3;
    }
    
    if(ball.y <100){
      ball.velocityY = 3;
    }
    
    if(ball3.y >600){
      ball3.velocityY = -3;
    }
    
    if(ball3.y <100){
      ball3.velocityY = 3;
    }

    if(ball5.y >600){
      ball5.velocityY = -3;
    }
    
    if(ball5.y <100){
      ball5.velocityY = 3;
    }
    if(ballGroup.isTouching(robot1)|| ballGroup.isTouching(robot2)) {
      gameState = 1;

    }
  }
  else if(gameState === 1){
    robot1.destroy();
    robot2.destroy();
    ball.destroy();
    ball3.destroy();
    ball5.destroy();

  
  }
  
    drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW && power === 0){
    robot1.x = robot1.x + 10;
    power = 1;
  }
  else if(keyCode === LEFT_ARROW && power === 0){
    robot1.x = robot1.x - 10;
    power = 1;
  }
  else if(keyCode === UP_ARROW && power === 0){
    robot1.y = robot1.y - 10;
    power = 1;
  }
  else if(keyCode === DOWN_ARROW && power === 0){
    robot1.y = robot1.y + 10;
    power = 1;
  }

  else if(keyCode === 87 && power === 1){
    robot2.y = robot2.y - 10;
    power = 0;
  }
  else if(keyCode === 83 && power === 1){
    robot2.y = robot2.y + 10;
    power = 0;
  }
  else if(keyCode === 65 && power === 1){
    robot2.x = robot2.x - 10;
    power = 0;
  }
  else if(keyCode === 68 && power === 1){
    robot2.x = robot2.x + 10;
    power = 0;
  }
}
