var player;
var edges=[];
var obstacle;
var food, foodImg1, foodImg2, foodImg3, foodImg4, foodImg5, foodImg6;
var foodGroup =  new Group();

function preload(){
	foodImg1 = loadImage("bread.png");
	foodImg2 = loadImage("cupcake.png");
	foodImg3 = loadImage("fruit.png");
	foodImg4 = loadImage("icecream.png");
	foodImg5 = loadImage("soda.png");
	foodImg6 = loadImage("juice.png");
	
}

function setup() {
	createCanvas(400,800);
   player = createSprite(200,800,50,50);

}


function draw() {
  background(0,0,0);
  if(keyIsDown(UP_ARROW)){
	  player.velocityY = -3;
	  player.velocityX = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
	  player.velocityY = 0;
	  player.velocityX = 3;
  }
  if(keyIsDown(LEFT_ARROW)){
	  player.velocityY = 0;
	  player.velocityX = -3;
  }
  
   edges = createEdgeSprites();
  player.collide(edges[1]);
  player.collide(edges[0]);
  player.collide(edges[3]);
  
  createObstacles();
  createFood();
  
  drawSprites();
 
}
function createObstacles(){
	if(frameCount%100===0){
		obstacle = createSprite(200,0,30,30);
	    obstacle.velocityX = 1;
		obstacle.velocityY = 2;
		
	}

}

function createFood(){
	if(frameCount%60===0){
	food = createSprite(250,0,20,20);
	
	food.scale = 0.1;
	food.velocityY=2.5;
	food.velocityX=-1;

	var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: food.addImage(foodImg1);
              break;
      case 2: food.addImage(foodImg2);
              break;
      case 3: food.addImage(foodImg3);
              break;
      case 4: food.addImage(foodImg4);
              break;
      case 5: food.addImage(foodImg5);
              break;
      case 6: food.addImage(foodImg6);
              break;
      default: break;
	}
	
	foodGroup.add(food);
	}
}



