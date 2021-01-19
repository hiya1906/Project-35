//Create variables here
var dogImage1, dogImage2;
var dog, happyDog, database, foodS, foodStock;

function preload(){
  dogImage1 = loadImage("images/dogImg.png");
  dogImage2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800,800);
  dog = createSprite(400,400,50,50);
  //imageMode(CENTER);
  dog.addImage(dogImage1);

  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}

function draw() {  
  background(46,139,87);
  fill("black");
  stroke(50);
  text("Press the up arrow to feed the dog!",50,100);
  text("Food: "+foodS,50,120);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    foodS = foodS-1;
    dog.addImage(dogImage2);
  } if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImage1);
  }

  drawSprites();
  //add styles here

  //console.log(foodS);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


